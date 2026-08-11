import { notFound } from "next/navigation";
import { getSharedResult } from "@/lib/sharedResults";
import ResultView from "../_components/ResultView";

type SharedResultPageProps = {
  params: Promise<{
    id: string;
  }>;
};

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
