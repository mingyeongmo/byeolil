import Link from "next/link";
import Header from "../_components/Header/Header";
import styles from "../legal.module.scss";

export default function TermsPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />

        <article className={styles.document}>
          <p className={styles.eyebrow}>SERVICE POLICY</p>
          <h1>이용약관</h1>
          <p className={styles.effectiveDate}>시행일: 2026년 7월 31일</p>

          <p className={styles.intro}>
            이 약관은 별일있음 서비스의 이용 조건과 사용자 및 운영자의
            기본적인 권리와 책임을 설명합니다.
          </p>

          <section className={styles.section}>
            <h2>1. 서비스 소개</h2>
            <p>
              별일있음은 사용자가 입력한 일상을 선택한 스타일에 맞춰
              과장된 콘텐츠로 변환하는 서비스입니다. 생성 결과는 재미와
              오락을 목적으로 제공됩니다.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. 서비스 이용</h2>
            <ul>
              <li>사용자는 타인의 권리를 침해하는 내용을 입력할 수 없습니다.</li>
              <li>불법적이거나 서비스 운영을 방해하는 이용은 제한될 수 있습니다.</li>
              <li>AI가 생성한 결과에는 부정확하거나 예상하지 못한 표현이 포함될 수 있습니다.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. 생성 결과의 이용</h2>
            <p>
              사용자는 생성 결과를 개인적인 기록과 공유 목적으로 이용할 수
              있습니다. 결과를 실제 뉴스, 공식 발표 또는 사실 확인 자료로
              사용해서는 안 됩니다.
            </p>
          </section>

          <section className={styles.section}>
            <h2>4. 서비스 변경 및 중단</h2>
            <p>
              개발 및 운영 상황에 따라 기능이 변경되거나 일시적으로 중단될
              수 있습니다. 중요한 변경이 있는 경우 서비스 화면을 통해
              안내합니다.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. 책임의 범위</h2>
            <p>
              사용자는 입력 내용과 생성 결과를 공유할 때 타인의 명예,
              개인정보 및 저작권을 침해하지 않도록 주의해야 합니다.
            </p>
          </section>

          <Link className={styles.backLink} href="/">
            ← 처음 화면으로 돌아가기
          </Link>
        </article>
      </main>
    </div>
  );
}
