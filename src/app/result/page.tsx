"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { StoredResultSchema, type StoredResult } from "@/schema/generate";
import Header from "../_components/Header/Header";
import styles from "./page.module.scss";

const STYLE_LABELS: Record<StoredResult["style"], string> = {
  legend: "전설",
  "breaking-news": "긴급 뉴스",
  sports: "스포츠 중계",
  achievement: "업적 달성",
};

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

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />

        <section className={styles.resultIntro}>
          <span className={styles.completeBadge}>과장 완료 ✦</span>
          <p>
            평범했던 {storedResult.name}님의 하루가
            <br />
            제법 거창해졌어요.
          </p>
        </section>

        <article className={styles.resultCard}>
          <header className={styles.cardHeader}>
            <span className={styles.styleBadge}>
              {STYLE_LABELS[storedResult.style]}
            </span>
            <span className={styles.owner}>{storedResult.name}님의 하루</span>
          </header>

          <div className={styles.cardBody}>
            <span className={styles.decorativeMark} aria-hidden="true">
              ✦
            </span>
            <h1>{storedResult.result.title}</h1>
            <p>{storedResult.result.body}</p>
          </div>

          <dl className={styles.resultDetails}>
            <div>
              <dt>오늘의 칭호</dt>
              <dd>{storedResult.result.todayTitle}</dd>
            </div>
            <div>
              <dt>한 줄 총평</dt>
              <dd>{storedResult.result.oneLineReview}</dd>
            </div>
          </dl>
        </article>

        <div className={styles.actions}>
          <Link className={styles.primaryButton} href="/create">
            새로운 하루 과장하기
            <span aria-hidden="true">→</span>
          </Link>
          <Link className={styles.homeLink} href="/">
            처음 화면으로
          </Link>
        </div>
      </main>
    </div>
  );
}
