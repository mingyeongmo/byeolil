import { z } from "zod";

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
        .max(50, "오늘 있었던 일은 50자 이하여야 합니다."),
    )
    .min(3, "오늘 있었던 일을 3개 이상 입력해야 합니다."),

  style: z.enum(["legend", "breaking-news", "sports", "achievement"]),
});

export type GenerateRequest = z.infer<typeof GenerateRequestSchema>;

export const GeneratedResultSchema = z.object({
  title: z.string(),
  body: z.string(),
  todayTitle: z.string(),
  oneLineReview: z.string(),
});

export type GeneratedResult = z.infer<typeof GeneratedResultSchema>;

export const StoredResultSchema = GenerateRequestSchema.extend({
  result: GeneratedResultSchema,
});

export type StoredResult = z.infer<typeof StoredResultSchema>;
