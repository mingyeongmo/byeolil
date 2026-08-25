import "server-only";

import { z } from "zod";
import { SharedResultSchema, type SharedResult } from "@/schema/generate";
import { sql } from "@/lib/db";

const InsertedResultSchema = z.object({
  id: z.string().uuid(),
});

const ResultIdSchema = z.string().uuid();

const SharedResultRowSchema = z.object({
  name: SharedResultSchema.shape.name,
  style: SharedResultSchema.shape.style,
  title: SharedResultSchema.shape.result.shape.title,
  body: SharedResultSchema.shape.result.shape.body,
  today_title: SharedResultSchema.shape.result.shape.todayTitle,
  one_line_review: SharedResultSchema.shape.result.shape.oneLineReview,
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

export async function getSharedResult(
  id: string,
): Promise<SharedResult | null> {
  const parsedId = ResultIdSchema.safeParse(id);

  if (!parsedId.success) {
    return null;
  }

  const rows = await sql`
    select
      name,
      style,
      title,
      body,
      today_title,
      one_line_review
    from shared_results
    where id = ${parsedId.data}
    limit 1
  `;

  if (!rows[0]) {
    return null;
  }

  const parsedRow = SharedResultRowSchema.parse(rows[0]);

  return {
    name: parsedRow.name,
    style: parsedRow.style,
    result: {
      title: parsedRow.title,
      body: parsedRow.body,
      todayTitle: parsedRow.today_title,
      oneLineReview: parsedRow.one_line_review,
    },
  };
}

export async function deleteExpiredSharedResults(): Promise<number> {
  const deletedRows = await sql`
    delete from public.shared_results
    where created_at < now() - interval '7 days'
    returning id
  `;

  return deletedRows.length;
}
