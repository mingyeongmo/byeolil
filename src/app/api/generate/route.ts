import OpenAI from "openai";
import { zodTextFormat } from "openai/helpers/zod";
import { createGenerationPrompt } from "@/lib/generatePrompt";
import { MOCK_RESULTS } from "@/mocks/generatedResults";
import {
  type GeneratedResult,
  GeneratedResultSchema,
  GenerateRequestSchema,
} from "@/schema/generate";

const ALLOWED_RESULT_CHARACTERS =
  /^[\p{Script=Hangul}\p{Script=Latin}\p{Number}\p{Punctuation}\p{Symbol}\p{Mark}\s\u200D]+$/u;

function containsOnlyAllowedCharacters(result: GeneratedResult) {
  return Object.values(result).every((value) =>
    ALLOWED_RESULT_CHARACTERS.test(value),
  );
}

export async function POST(request: Request) {
  let data: unknown;

  try {
    data = await request.json();
  } catch {
    return Response.json(
      {
        success: false,
        message: "요청 내용을 읽을 수 없습니다.",
      },
      {
        status: 400,
      },
    );
  }

  const parsedData = GenerateRequestSchema.safeParse(data);

  if (!parsedData.success) {
    return Response.json(
      {
        success: false,
        message: "입력값이 올바르지 않습니다.",
        errors: parsedData.error.issues,
      },
      {
        status: 400,
      },
    );
  }

  const useMockResults = process.env.USE_MOCK_RESULTS === "true";

  if (useMockResults) {
    return Response.json({
      success: true,
      result: MOCK_RESULTS[parsedData.data.style],
    });
  }

  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return Response.json(
      {
        success: false,
        message: "AI 서비스 설정이 필요합니다.",
      },
      {
        status: 503,
      },
    );
  }

  try {
    const openai = new OpenAI({ apiKey });
    const response = await openai.responses.parse({
      model: "gpt-5.6-terra",
      reasoning: {
        effort: "low",
      },
      input: [
        {
          role: "system",
          content:
            "당신은 평범한 하루를 과장되고 유쾌한 콘텐츠로 바꾸는 한국어 전문 작가입니다. 결과는 반드시 제공된 형식을 따르세요.",
        },
        {
          role: "user",
          content: createGenerationPrompt(parsedData.data),
        },
      ],
      text: {
        format: zodTextFormat(GeneratedResultSchema, "generated_result"),
      },
      store: false,
    });

    if (!response.output_parsed) {
      return Response.json(
        {
          success: false,
          message: "AI 결과를 완성하지 못했습니다. 다시 시도해 주세요.",
        },
        {
          status: 502,
        },
      );
    }

    if (!containsOnlyAllowedCharacters(response.output_parsed)) {
      console.warn("AI 결과에 허용되지 않은 문자가 포함되었습니다.");

      return Response.json(
        {
          success: false,
          message:
            "결과에 지원하지 않는 문자가 포함되었습니다. 다시 시도해 주세요.",
        },
        {
          status: 502,
        },
      );
    }

    return Response.json({
      success: true,
      result: response.output_parsed,
    });
  } catch (error) {
    console.error(
      "OpenAI generation failed:",
      error instanceof Error ? error.message : "Unknown error",
    );

    return Response.json(
      {
        success: false,
        message: "결과 생성에 실패했습니다. 잠시 후 다시 시도해 주세요.",
      },
      {
        status: 502,
      },
    );
  }
}
