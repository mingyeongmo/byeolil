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
          <p className={styles.effectiveDate}>시행일: 2026년 8월 14일</p>

          <p className={styles.intro}>
            이 약관은 별일있음(이하 &quot;서비스&quot;)의 이용 조건과 사용자 및
            운영자의 권리와 책임을 설명합니다. 서비스는 사용자가 입력한 일상을
            재미있는 과장 콘텐츠로 만들어 주는 무료·비회원 서비스입니다.
          </p>

          <section className={styles.section}>
            <h2>1. 약관의 목적과 적용</h2>
            <p>
              이 약관은 서비스 이용과 관련하여 사용자와 운영자 사이에 적용됩니다.
              사용자가 서비스의 결과 생성 기능을 이용하면 이 약관에 동의한 것으로
              봅니다.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. 약관의 게시와 변경</h2>
            <p>
              운영자는 사용자가 약관을 쉽게 확인할 수 있도록 서비스 화면에
              게시합니다. 관계 법령을 위반하지 않는 범위에서 약관을 변경할 수
              있으며, 변경 내용과 시행일을 서비스 화면을 통해 미리 안내합니다.
              사용자에게 불리한 중요한 변경은 시행일 30일 전부터 안내합니다.
            </p>
          </section>

          <section className={styles.section}>
            <h2>3. 제공하는 서비스</h2>
            <p>
              서비스는 사용자가 입력한 이름 또는 별명과 오늘 있었던 일을 선택한
              과장 스타일에 맞춰 콘텐츠로 생성하고, 결과를 저장하거나 링크로
              공유할 수 있는 기능을 제공합니다. 생성 결과는 재미와 오락을 위한
              것으로 실제 뉴스, 공식 발표 또는 사실 확인 자료가 아닙니다.
            </p>
          </section>

          <section className={styles.section}>
            <h2>4. 사용자의 입력 내용</h2>
            <p>
              사용자가 직접 작성한 입력 내용에 관한 권리는 사용자에게 유지됩니다.
              사용자는 운영자가 결과 생성, 저장, 표시 및 공유 기능을 제공하는 데
              필요한 범위에서 해당 내용을 처리하도록 허용합니다.
            </p>
            <p>
              사용자는 입력 내용에 필요한 권리를 보유해야 하며, 타인의 개인정보,
              명예, 초상, 저작권 및 그 밖의 권리를 침해하지 않아야 합니다.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. 생성 결과의 이용 범위</h2>
            <p>
              사용자는 관계 법령과 타인의 권리를 침해하지 않는 범위에서 생성
              결과를 개인적·비상업적·상업적 목적으로 저장, 복제, 수정, 게시,
              배포 및 공유할 수 있습니다.
            </p>
            <p>
              AI의 특성상 다른 사용자에게 유사하거나 같은 결과가 제공될 수 있으며,
              운영자는 생성 결과의 독점성이나 저작권 성립을 보장하지 않습니다.
              사용자는 결과를 실제 사실이나 공식 정보인 것처럼 사용해서는 안
              됩니다.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. 서비스 자산의 권리</h2>
            <p>
              서비스의 이름, 로고, 별일이 캐릭터, 화면 디자인, 아이콘, 이미지,
              소프트웨어 및 그 밖의 서비스 자산에 관한 권리는 운영자 또는 정당한
              권리자에게 있습니다.
            </p>
            <p>
              사용자는 서비스가 제공하는 저장 및 공유 기능을 이용해 결과 카드
              전체를 공유할 수 있습니다. 다만 운영자의 사전 허락 없이 서비스
              자산만을 분리하여 복제, 수정, 판매하거나 별도의 상품·서비스에
              이용할 수 없습니다.
            </p>
          </section>

          <section className={styles.section}>
            <h2>7. 금지되는 이용</h2>
            <p>사용자는 다음 행위를 해서는 안 됩니다.</p>
            <ul>
              <li>법령을 위반하거나 범죄에 이용하는 행위</li>
              <li>타인의 명예, 개인정보, 저작권 또는 그 밖의 권리를 침해하는 행위</li>
              <li>결과를 실제 뉴스나 공신력 있는 정보로 오인하게 만드는 행위</li>
              <li>서비스의 보안이나 정상적인 운영을 방해하는 행위</li>
              <li>자동화된 수단으로 서비스를 대량 이용하거나 결과를 재판매하는 행위</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>8. 결과 링크와 삭제 요청</h2>
            <p>
              생성 결과에는 고유한 주소가 부여됩니다. 결과 페이지는 비밀번호로
              보호되는 비공개 페이지가 아니므로 주소를 아는 사람은 결과를 볼 수
              있습니다. 사용자는 결과 주소를 공유할 때 주의해야 합니다.
            </p>
            <p>
              결과 삭제를 원하는 사용자는 결과 주소와 함께{" "}
              <a href="mailto:byeolil.contact@gmail.com">
                byeolil.contact@gmail.com
              </a>
              으로 요청할 수 있습니다. 개인정보 처리에 관한 자세한 내용은{" "}
              <Link href="/privacy">개인정보처리방침</Link>에서 확인할 수 있습니다.
            </p>
          </section>

          <section className={styles.section}>
            <h2>9. 이용 제한과 결과 삭제</h2>
            <p>
              운영자는 사용자가 이 약관이나 관계 법령을 위반하거나 서비스의
              안전과 정상적인 운영을 해치는 경우 결과 생성을 제한하거나 관련
              결과를 삭제할 수 있습니다. 긴급한 조치가 필요한 경우를 제외하고,
              가능한 범위에서 조치 이유를 안내합니다.
            </p>
          </section>

          <section className={styles.section}>
            <h2>10. 서비스의 변경과 중단</h2>
            <p>
              운영자는 점검, 장애, 외부 서비스의 변경 또는 운영상 필요한 사유로
              서비스의 전부 또는 일부를 변경하거나 일시적으로 중단할 수 있습니다.
              예측할 수 있는 중요한 변경이나 중단은 서비스 화면을 통해 미리
              안내합니다.
            </p>
          </section>

          <section className={styles.section}>
            <h2>11. 책임의 범위</h2>
            <p>
              AI가 생성한 결과에는 부정확하거나 부적절하거나 예상하지 못한 표현이
              포함될 수 있습니다. 사용자는 결과를 게시하거나 상업적으로 이용하기
              전에 그 내용과 타인의 권리 침해 여부를 직접 확인해야 합니다.
            </p>
            <p>
              운영자는 천재지변, 사용자의 귀책사유, 외부 서비스의 장애 등 운영자가
              합리적으로 통제하기 어려운 사유로 발생한 손해에 대해 책임을 지지
              않습니다. 다만 운영자의 고의 또는 중대한 과실로 발생한 손해에 대한
              책임까지 배제하지 않으며, 책임의 범위는 관계 법령에 따릅니다.
            </p>
          </section>

          <section className={styles.section}>
            <h2>12. 문의와 분쟁 해결</h2>
            <p>
              서비스 이용과 관련한 문의는{" "}
              <a href="mailto:byeolil.contact@gmail.com">
                byeolil.contact@gmail.com
              </a>
              으로 보낼 수 있습니다. 이 약관은 대한민국 법률에 따라 해석되며,
              분쟁이 발생하면 당사자 간 협의를 우선하고 해결되지 않을 경우 관계
              법령이 정한 법원에서 해결합니다.
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
