"use client";

import type { SharedResult } from "@/schema/generate";
import Link from "next/link";
import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import Header from "../../_components/Header/Header";
import ShareButtons from "../../_components/ShareButtons/ShareButtons";
import styles from "../page.module.scss";

const STYLE_LABELS: Record<SharedResult["style"], string> = {
  legend: "전설",
  "breaking-news": "별일 뉴스",
  sports: "스포츠 중계",
  achievement: "업적 달성",
};

const THEME_CLASSES: Partial<Record<SharedResult["style"], string>> = {
  legend: styles.legend,
  "breaking-news": styles.breakingNews,
  sports: styles.sports,
  achievement: styles.achievement,
};

const THEME_MARKS: Record<SharedResult["style"], string> = {
  legend: "♛",
  "breaking-news": "속보",
  sports: "LIVE",
  achievement: "★",
};

type ResultViewProps = {
  sharedResult: SharedResult;
};

export default function ResultView({ sharedResult }: ResultViewProps) {
  const resultCardRef = useRef<HTMLElement>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState("");

  const handleSaveImage = async () => {
    if (!resultCardRef.current) {
      return;
    }

    setIsSaving(true);
    setSaveError("");

    try {
      const dataUrl = await toPng(resultCardRef.current, {
        backgroundColor: "#ffffff",
        cacheBust: true,
        pixelRatio: 2,
      });
      const downloadLink = document.createElement("a");

      downloadLink.download = `${sharedResult.name}-별일있음.png`;
      downloadLink.href = dataUrl;
      downloadLink.click();
    } catch {
      setSaveError("이미지를 저장하지 못했어요. 다시 시도해 주세요.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className={styles.page}>
      <main
        className={`${styles.main} ${THEME_CLASSES[sharedResult.style] ?? ""}`}
      >
        <Header />

        <section className={styles.resultIntro}>
          <span className={styles.completeBadge}>과장 완료 ✦</span>
          <p>
            평범했던 {sharedResult.name}님의 하루가
            <br />
            제법 거창해졌어요.
          </p>
        </section>

        <article className={styles.resultCard} ref={resultCardRef}>
          <header className={styles.cardHeader}>
            <span className={styles.styleBadge}>
              {STYLE_LABELS[sharedResult.style]}
            </span>
            <span className={styles.owner}>{sharedResult.name}님의 하루</span>
          </header>

          <div className={styles.cardBody}>
            <span className={styles.decorativeMark} aria-hidden="true">
              {THEME_MARKS[sharedResult.style]}
            </span>
            <h1>{sharedResult.result.title}</h1>
            <p>{sharedResult.result.body}</p>
          </div>

          <dl className={styles.resultDetails}>
            <div>
              <dt>오늘의 칭호</dt>
              <dd>{sharedResult.result.todayTitle}</dd>
            </div>
            <div>
              <dt>한 줄 총평</dt>
              <dd>{sharedResult.result.oneLineReview}</dd>
            </div>
          </dl>
        </article>

        <button
          className={styles.saveButton}
          type="button"
          onClick={handleSaveImage}
          disabled={isSaving}
        >
          <span aria-hidden="true">↓</span>
          {isSaving ? "이미지 만드는 중..." : "이미지로 저장하기"}
        </button>
        {saveError && (
          <p className={styles.saveError} role="alert">
            {saveError}
          </p>
        )}

        <div className={styles.actions}>
          <Link className={styles.primaryButton} href="/create">
            새로운 하루 과장하기
            <span aria-hidden="true">→</span>
          </Link>
          <Link className={styles.homeLink} href="/">
            처음 화면으로
          </Link>
        </div>

        <section className={styles.share} aria-labelledby="result-share-title">
          <h2 id="result-share-title">공유하기</h2>
          <ShareButtons text="평범했던 내 하루가 제법 거창해졌어요 ✨" />
        </section>
      </main>
    </div>
  );
}
