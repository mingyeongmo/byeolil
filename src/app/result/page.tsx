"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { StoredResultSchema, type StoredResult } from "@/schema/generate";
import Header from "../_components/Header/Header";
import ResultView from "./_components/ResultView";
import styles from "./page.module.scss";

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
    return (
      <div className={styles.page}>
        <main className={styles.main}>
          <Header />
          <section className={styles.stateMessage}>
            <span className={styles.stateIcon} aria-hidden="true">
              ✦
            </span>
            <p>결과를 불러오는 중...</p>
          </section>
        </main>
      </div>
    );
  }

  const rawResult = sessionStorage.getItem("byeolil-result");
  const storedResult = parseStoredResult(rawResult);

  if (!storedResult) {
    return (
      <div className={styles.page}>
        <main className={styles.main}>
          <Header />
          <section className={styles.stateMessage}>
            <span className={styles.stateIcon} aria-hidden="true">
              !
            </span>
            <h1>저장된 결과가 없어요</h1>
            <p>오늘 있었던 일을 먼저 들려주세요.</p>
            <Link className={styles.primaryButton} href="/create">
              내 하루 과장하러 가기
            </Link>
          </section>
        </main>
      </div>
    );
  }

  return <ResultView sharedResult={storedResult} />;
}
