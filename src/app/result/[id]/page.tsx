import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSharedResult } from "@/lib/sharedResults";
import ResultView from "../_components/ResultView";

type SharedResultPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({
  params,
}: SharedResultPageProps): Promise<Metadata> {
  const { id } = await params;
  const sharedResult = await getSharedResult(id);

  if (!sharedResult) {
    return {
      title: "결과를 찾을 수 없어요 | 별일있음",
    };
  }

  const title = `${sharedResult.result.title} | 별일있음`;
  const description = sharedResult.result.oneLineReview;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `/result/${id}`,
      images: ["/opengraph-image.png"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function SharedResultPage({
  params,
}: SharedResultPageProps) {
  const { id } = await params;
  const sharedResult = await getSharedResult(id);

  if (!sharedResult) {
    notFound();
  }

  return <ResultView sharedResult={sharedResult} />;
}
