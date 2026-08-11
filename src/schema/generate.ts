import { z } from "zod";
import { isMeaningfulActivity } from "@/lib/activityValidation";

export const GenerateRequestSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "이름이 필요합니다.")
    .max(20, "이름은 20자 이하여야 합니다."),

  activities: z
    .array(
      z
        .string()
        .trim()
        .min(1, "오늘 있었던 일을 입력해야 합니다.")
        .max(50, "오늘 있었던 일은 50자 이하여야 합니다.")
        .refine(
          isMeaningfulActivity,
          "오늘 한 일을 조금 더 구체적으로 입력해 주세요.",
        ),
    )
    .min(3, "오늘 있었던 일을 3개 이상 입력해야 합니다."),

  style: z.enum(["legend", "breaking-news", "sports", "achievement"]),
});

export type GenerateRequest = z.infer<typeof GenerateRequestSchema>;

export const GeneratedResultSchema = z.object({
  title: z.string().trim().min(1).max(80),
  body: z.string().trim().min(1).max(500),
  todayTitle: z.string().trim().min(1).max(40),
  oneLineReview: z.string().trim().min(1).max(120),
});

export type GeneratedResult = z.infer<typeof GeneratedResultSchema>;

export const StoredResultSchema = GenerateRequestSchema.extend({
  result: GeneratedResultSchema,
});

export type StoredResult = z.infer<typeof StoredResultSchema>;

export const SharedResultSchema = StoredResultSchema.pick({
  name: true,
  style: true,
  result: true,
});

export type SharedResult = z.infer<typeof SharedResultSchema>;
