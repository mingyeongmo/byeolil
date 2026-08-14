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
          <p className={styles.effectiveDate}>시행일: 2026년 8월 14일</p>

          <p className={styles.intro}>
            별일있음(이하 &quot;서비스&quot;)은 사용자의 개인정보를 중요하게
            생각하며, 서비스 제공에 필요한 최소한의 정보만 처리합니다. 이
            방침은 서비스가 어떤 정보를 어떤 목적으로 처리하고 보호하는지
            안내합니다.
          </p>

          <section className={styles.section}>
            <h2>1. 처리 목적과 개인정보 항목</h2>
            <p>
              서비스는 이용 요청에 따른 과장 콘텐츠 생성과 결과 링크 제공을
              위해 다음 정보를 처리합니다.
            </p>
            <ul>
              <li>
                <strong>결과 생성:</strong> 이름 또는 별명, 오늘 있었던 일,
                선택한 과장 스타일
              </li>
              <li>
                <strong>결과 링크 제공:</strong> 이름 또는 별명, 선택한 과장
                스타일, 생성된 제목·본문·오늘의 칭호·한 줄 총평, 결과 식별자
              </li>
              <li>
                <strong>서비스 운영 및 보안:</strong> IP 주소, 접속 시각,
                브라우저 및 기기 정보 등의 접속 정보가 호스팅 과정에서 자동으로
                처리될 수 있습니다.
              </li>
            </ul>
            <p>
              위 정보는 「개인정보 보호법」 제15조제1항제4호에 따른 서비스
              제공을 위해 처리합니다. 입력 내용에는 본인이나 다른 사람의
              주민등록번호, 연락처, 건강정보 등 민감하거나 불필요한 개인정보를
              포함하지 마세요.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. 저장하는 정보와 보유 기간</h2>
            <ul>
              <li>
                사용자가 입력한 오늘 있었던 일은 과장 결과 생성에 이용되지만,
                서비스의 Neon 데이터베이스에는 저장하지 않습니다.
              </li>
              <li>
                이름 또는 별명, 선택한 스타일, 생성된 결과와 결과 식별자는 결과
                링크를 제공하기 위해 Neon 데이터베이스에 저장합니다.
              </li>
              <li>
                데이터베이스에 저장된 결과는 사용자의 삭제 요청이 확인되거나
                서비스 운영이 종료될 때까지 보관합니다.
              </li>
              <li>
                OpenAI API에 전달된 입력과 생성 결과는 OpenAI의 악용 방지
                목적으로 최대 30일 동안 보관될 수 있습니다. 서비스 운영자는
                해당 정보를 OpenAI 모델 학습에 사용하도록 별도로 제공하지
                않습니다.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. 결과 링크의 공개 범위</h2>
            <p>
              생성된 결과에는 고유한 주소가 부여됩니다. 검색하기 어려운 주소를
              사용하지만 비밀번호로 보호되는 비공개 페이지는 아니므로, 주소를
              아는 사람은 결과를 볼 수 있습니다. 카카오톡, X 또는 링크 복사로
              결과를 공유하면 공유받은 사람도 이름 또는 별명과 생성 결과를 볼
              수 있습니다.
            </p>
          </section>

          <section className={styles.section}>
            <h2>4. 개인정보의 제3자 제공</h2>
            <p>
              서비스는 개인정보를 판매하거나 제3자의 독립적인 이용 목적으로
              제공하지 않습니다. 다만 사용자가 카카오톡 또는 X 공유 버튼을
              직접 누르면 공유 문구와 현재 페이지 주소가 해당 서비스로 전달될
              수 있으며, 이후 처리는 각 서비스의 정책을 따릅니다.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. 개인정보 처리업무의 위탁</h2>
            <p>서비스 제공을 위해 다음 업체의 서비스를 이용합니다.</p>
            <ul>
              <li>
                <strong>Vercel Inc.:</strong> 웹서비스 호스팅과 요청 처리
              </li>
              <li>
                <strong>OpenAI OpCo, LLC:</strong> 입력 내용을 바탕으로 한
                과장 결과 생성
              </li>
              <li>
                <strong>Neon, LLC:</strong> 생성 결과 데이터베이스 저장
              </li>
            </ul>
            <p>
              위탁업무 또는 수탁자가 변경되면 이 개인정보처리방침을 통해
              안내합니다.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. 개인정보의 국외 이전</h2>
            <p>
              서비스 제공을 위해 「개인정보 보호법」 제28조의8제1항제3호에
              따라 다음과 같이 개인정보를 국외로 이전하여 처리·보관합니다.
            </p>
            <ul>
              <li>
                <strong>Vercel Inc. (미국, privacy@vercel.com):</strong> 서비스
                접속 및 요청 시 이름 또는 별명, 오늘 있었던 일, 선택한 스타일,
                생성 결과, 결과 주소와 접속 정보가 암호화된 통신망을 통해
                이전됩니다. 웹서비스 호스팅과 요청 처리를 위해 서비스 제공 기간
                동안 처리하며, 콘텐츠 전송 과정에서 글로벌 네트워크를 경유할 수
                있습니다.
              </li>
              <li>
                <strong>OpenAI OpCo, LLC (미국, privacy@openai.com):</strong>
                결과 생성 요청 시 이름 또는 별명, 오늘 있었던 일과 선택한
                스타일이 암호화된 통신망을 통해 이전됩니다. 과장 결과 생성에
                사용되며, 악용 방지 로그에 최대 30일 동안 보관될 수 있습니다.
              </li>
              <li>
                <strong>Neon, LLC (미국, privacy@neon.tech):</strong> 결과 생성
                직후 이름 또는 별명, 선택한 스타일, 생성 결과와 결과 식별자가
                암호화된 통신망을 통해 이전됩니다. 결과 링크 제공을 위해 삭제
                요청이 확인되거나 서비스 운영이 종료될 때까지 보관됩니다.
              </li>
            </ul>
            <p>
              국외 이전을 원하지 않는 경우 서비스 이용을 중단할 수 있습니다.
              다만 위 서비스는 결과 생성과 저장에 필수이므로 국외 이전을
              거부하면 과장 결과를 생성하거나 결과 링크를 제공받을 수 없습니다.
            </p>
          </section>

          <section className={styles.section}>
            <h2>7. 개인정보의 파기 절차 및 방법</h2>
            <p>
              보유 기간이 끝나거나 처리 목적이 달성되면 해당 정보를 지체 없이
              파기합니다. 데이터베이스에 저장된 전자적 정보는 복구하기 어려운
              방식으로 삭제하며, 서비스 제공업체의 백업에 남은 정보는 해당
              업체의 삭제 절차와 주기에 따라 파기됩니다.
            </p>
          </section>

          <section className={styles.section}>
            <h2>8. 정보주체의 권리와 행사 방법</h2>
            <p>
              사용자는 개인정보의 열람, 정정, 삭제 또는 처리정지를 요청할 수
              있습니다. 결과 삭제를 요청할 때는 확인이 필요한 결과 주소를 아래
              이메일로 보내주세요. 다른 사람의 권리를 침해하지 않도록 필요한
              범위에서 본인 여부나 요청 대상의 확인을 요청할 수 있습니다.
            </p>
            <p>
              문의 이메일:{" "}
              <a href="mailto:byeolil.contact@gmail.com">
                byeolil.contact@gmail.com
              </a>
            </p>
          </section>

          <section className={styles.section}>
            <h2>9. 개인정보의 안전성 확보조치</h2>
            <p>서비스는 개인정보 보호를 위해 다음 조치를 적용합니다.</p>
            <ul>
              <li>API 키와 데이터베이스 접속 정보를 서버 환경변수로 관리</li>
              <li>OpenAI API와 데이터베이스를 서버에서만 호출</li>
              <li>HTTPS를 통한 전송 구간 암호화</li>
              <li>입력값과 생성 결과의 형식 및 길이 검증</li>
              <li>데이터베이스 접근 권한 제한</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>10. 쿠키와 행태정보</h2>
            <p>
              서비스는 맞춤형 광고나 이용자 행태 분석을 목적으로 쿠키 또는
              광고식별자를 직접 사용하지 않습니다. 다만 호스팅 업체가 서비스
              보안과 안정적인 운영을 위해 접속 정보를 처리할 수 있습니다.
            </p>
          </section>

          <section className={styles.section}>
            <h2>11. 14세 미만 아동의 개인정보</h2>
            <p>
              서비스는 14세 미만 아동을 주된 이용 대상으로 하지 않습니다. 14세
              미만 아동은 법정대리인의 안내 없이 개인정보를 입력하지 마세요.
            </p>
          </section>

          <section className={styles.section}>
            <h2>12. 개인정보 보호 담당자</h2>
            <ul>
              <li>담당자: 별일있음 운영자</li>
              <li>
                이메일:{" "}
                <a href="mailto:byeolil.contact@gmail.com">
                  byeolil.contact@gmail.com
                </a>
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>13. 권익침해 구제방법</h2>
            <p>
              개인정보 침해에 대한 상담이나 피해 구제가 필요한 경우 아래
              기관에 문의할 수 있습니다.
            </p>
            <ul>
              <li>개인정보 분쟁조정위원회: 국번 없이 1833-6972</li>
              <li>개인정보침해 신고센터: 국번 없이 118</li>
              <li>경찰청: 국번 없이 182</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>14. 개인정보처리방침의 변경</h2>
            <p>
              이 개인정보처리방침은 2026년 8월 14일부터 적용됩니다. 내용이
              변경되면 서비스 화면을 통해 안내하며, 이전 방침은 개인정보 보호
              담당자에게 요청하여 확인할 수 있습니다.
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
