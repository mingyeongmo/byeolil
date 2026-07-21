import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>별일있음</h1>
        <p>별일 없던 오늘도, 쓸데 없이 거창하게.</p>
        <p>오늘 있었던 일을 들려주세요.</p>
      </main>
    </div>
  );
}
