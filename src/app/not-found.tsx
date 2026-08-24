import Link from "next/link";
import Header from "./_components/Header/Header";
import styles from "./legal.module.scss";

export default function NotFound() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />

        <article className={styles.document}>
          <p className={styles.eyebrow}>404 ERROR</p>
          <h1>페이지를 찾을 수 없어요</h1>

          <p className={styles.intro}>
            주소가 잘못되었거나 삭제된 결과예요.
            <br />
            새로운 하루를 다시 과장해 보세요.
          </p>

          <Link className={styles.backLink} href="/">
            ← 처음 화면으로 돌아가기
          </Link>
        </article>
      </main>
    </div>
  );
}
