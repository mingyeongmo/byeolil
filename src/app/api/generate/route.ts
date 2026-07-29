import { MOCK_RESULTS } from "@/mocks/generatedResults";
import { GenerateRequestSchema } from "@/schema/generate";

export async function POST(request: Request) {
  try {
    const data = await request.json();
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

    const result = MOCK_RESULTS[parsedData.data.style];

    return Response.json({
      success: true,
      result,
    });
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
}
