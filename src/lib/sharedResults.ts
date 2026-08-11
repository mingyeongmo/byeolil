import "server-only";

import { z } from "zod";
import { SharedResultSchema, type SharedResult } from "@/schema/generate";
import { sql } from "@/lib/db";

const InsertedResultSchema = z.object({
  id: z.string().uuid(),
});

export async function saveSharedResult(
  sharedResult: SharedResult,
): Promise<string> {
  const validatedResult = SharedResultSchema.parse(sharedResult);

  const rows = await sql`
    insert into shared_results (
      name,
      style,
      title,
      body,
      today_title,
      one_line_review
    )
    values (
      ${validatedResult.name},
      ${validatedResult.style},
      ${validatedResult.result.title},
      ${validatedResult.result.body},
      ${validatedResult.result.todayTitle},
      ${validatedResult.result.oneLineReview}
    )
    returning id
  `;

  const insertedResult = InsertedResultSchema.parse(rows[0]);

  return insertedResult.id;
}
