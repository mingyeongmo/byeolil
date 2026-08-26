"use client";

import Link from "next/link";
import { useEffect } from "react";
import Header from "./_components/Header/Header";
import styles from "./error.module.scss";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error("Unexpected application error:", error);
  }, [error]);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />

        <section
          className={styles.errorMessage}
          aria-labelledby="error-title"
          role="alert"
        >
          <span className={styles.errorIcon} aria-hidden="true">
            !
          </span>
          <h1 id="error-title">잠시 문제가 생겼어요</h1>
          <p>
            일시적인 오류일 수 있어요.
            <br />
            다시 시도하거나 처음 화면으로 돌아가 주세요.
          </p>

          <div className={styles.actions}>
            <button type="button" onClick={reset}>
              다시 시도하기
            </button>
            <Link href="/">처음 화면으로</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
