import Image from "next/image";
import Link from "next/link";
import Header from "./_components/Header/Header";
import ShareButtons from "./_components/ShareButtons/ShareButtons";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <section className={styles.hero}>
          <h1>
            별일 없던 하루도
            <br />
            <strong>주인공</strong>이 될 수 있으니까
          </h1>

          <Image
            className={styles.heroImage}
            src="/landing-megaphone.png"
            alt="작은 메모가 메가폰을 지나 큰 뉴스 카드로 바뀌는 모습"
            width={1256}
            height={1256}
            priority
          />

          <p className={styles.description}>
            오늘 있었던 평범한 일을 적어보세요.
            <br />
            별일 없던 하루를 뉴스나 전설처럼
            <br />
            쓸데없이 거창하고 웃기게 만들어드려요.
          </p>

          <div className={styles.meta} aria-label="서비스 이용 정보">
            <span>◷ 약 1분</span>
          </div>
        </section>

        {/* 시작버튼 */}
        <Link className={styles.startButton} href="/create">
          내 하루 과장하러 가기 <span aria-hidden="true">✦</span>
        </Link>
        <p className={styles.reassurance}>로그인 없이 바로 시작해요</p>

        {/* 공유하기 */}
        <section className={styles.share} aria-labelledby="share-title">
          <h2 id="share-title">공유하기</h2>

          <ShareButtons text="평범한 하루를 거창하게 만들어보세요 ✨ #별일있음" />
        </section>
      </main>
    </div>
  );
}
