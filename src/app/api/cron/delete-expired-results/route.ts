import { deleteExpiredSharedResults } from "@/lib/sharedResults";

export async function GET(request: Request) {
  const cronSecret = process.env.CRON_SECRET;
  const authorization = request.headers.get("authorization");

  if (!cronSecret || authorization !== `Bearer ${cronSecret}`) {
    return Response.json(
      {
        success: false,
        message: "인증되지 않은 요청입니다.",
      },
      {
        status: 401,
      },
    );
  }

  try {
    const deletedCount = await deleteExpiredSharedResults();

    return Response.json({
      success: true,
      deletedCount,
    });
  } catch (error) {
    console.error(
      "Expired result cleanup failed:",
      error instanceof Error ? error.message : "Unknown error",
    );

    return Response.json(
      {
        success: false,
        message: "오래된 결과를 삭제하지 못했습니다.",
      },
      {
        status: 500,
      },
    );
  }
}
