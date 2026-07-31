"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { StoredResultSchema, type StoredResult } from "@/schema/generate";

function subscribe() {
  return () => {};
}

function getClientSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

function parseStoredResult(rawResult: string | null): StoredResult | null {
  if (!rawResult) {
    return null;
  }

  try {
    const parsedResult = StoredResultSchema.safeParse(JSON.parse(rawResult));

    return parsedResult.success ? parsedResult.data : null;
  } catch {
    return null;
  }
}

export default function ResultPage() {
  const isClient = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  if (!isClient) {
    return <main>결과를 불러오는 중...</main>;
  }

  const rawResult = sessionStorage.getItem("byeolil-result");
  const storedResult = parseStoredResult(rawResult);

  if (!storedResult) {
    return (
      <main>
        <p>저장된 결과가 없어요.</p>
        <Link href="/create">다시 만들러 가기</Link>
      </main>
    );
  }

  return (
    <main>
      <p>{storedResult.name}님의 결과</p>
      <p>선택한 스타일: {storedResult.style}</p>

      <h1>{storedResult.result.title}</h1>
      <p>{storedResult.result.body}</p>

      <h2>{storedResult.result.todayTitle}</h2>
      <p>{storedResult.result.oneLineReview}</p>
    </main>
  );
}
