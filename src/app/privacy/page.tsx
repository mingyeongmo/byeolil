import Link from "next/link";
import Header from "../_components/Header/Header";
import styles from "../legal.module.scss";

export default function PrivacyPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />

        <article className={styles.document}>
          <p className={styles.eyebrow}>PRIVACY POLICY</p>
          <h1>개인정보처리방침</h1>
          <p className={styles.effectiveDate}>시행일: 2026년 7월 31일</p>

          <p className={styles.intro}>
            별일있음은 서비스 제공에 필요한 범위에서만 사용자 입력을
            처리하며, 현재 회원가입이나 데이터베이스를 운영하지 않습니다.
          </p>

          <section className={styles.section}>
            <h2>1. 처리하는 정보</h2>
            <ul>
              <li>사용자가 입력한 이름 또는 별명</li>
              <li>사용자가 입력한 오늘 있었던 일</li>
              <li>선택한 과장 스타일과 생성된 결과</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>2. 이용 목적</h2>
            <p>
              입력된 정보는 사용자가 선택한 스타일의 과장 콘텐츠를 생성하고
              결과 화면을 제공하기 위해 사용합니다.
            </p>
          </section>

          <section className={styles.section}>
            <h2>3. 저장 방식과 기간</h2>
            <p>
              생성 결과는 현재 사용자의 브라우저 sessionStorage에 임시
              저장됩니다. 브라우저 탭을 닫으면 일반적으로 삭제되며, 별도의
              데이터베이스에는 저장하지 않습니다.
            </p>
          </section>

          <section className={styles.section}>
            <h2>4. 외부 AI 서비스 이용</h2>
            <p>
              실제 AI 생성 기능을 사용하는 경우 입력 내용은 결과 생성을 위해
              OpenAI API로 전달될 수 있습니다. 외부 서비스에서의 데이터
              처리는 해당 제공자의 정책과 설정을 따릅니다.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. 사용자의 선택</h2>
            <p>
              개인정보나 민감한 정보는 입력하지 않는 것을 권장합니다.
              사용자는 브라우저 탭을 닫거나 sessionStorage를 삭제하여 임시
              저장된 결과를 제거할 수 있습니다.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. 방침의 변경</h2>
            <p>
              서비스 기능이나 정보 처리 방식이 변경되면 이 방침도 수정될 수
              있으며, 변경 사항은 서비스 화면을 통해 안내합니다.
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
