import type { GenerateRequest } from "@/schema/generate";

const STYLE_INSTRUCTIONS: Record<GenerateRequest["style"], string> = {
  legend:
    "고대부터 전해 내려오는 영웅담처럼 장엄하게 쓴다. 사용자를 위대한 인물처럼 묘사하되 어렵고 낡은 표현은 피한다.",
  "breaking-news":
    "방송 속보와 취재 기사처럼 긴박하게 쓴다. 사소한 일을 전국적인 사건처럼 보도하되 실제 뉴스로 오해할 표현은 피한다.",
  sports:
    "스포츠 생중계처럼 역동적으로 쓴다. 사용자의 행동을 경기 장면과 기록처럼 묘사한다.",
  achievement:
    "게임의 업적 달성 화면처럼 쓴다. 사용자의 행동을 퀘스트 완료와 경험치 획득처럼 묘사한다.",
};

export function createGenerationPrompt({
  name,
  activities,
  style,
}: GenerateRequest) {
  const activityList = activities
    .map((activity, index) => `${index + 1}. ${activity}`)
    .join("\n");

  return `
사용자 이름: ${name}

오늘 있었던 일:
${activityList}

스타일 지침:
${STYLE_INSTRUCTIONS[style]}

작성 규칙:
- 입력된 사실을 바탕으로 유쾌하게 과장한다.
- 사용자를 조롱하거나 모욕하지 않는다.
- 제목은 한 문장으로 짧고 인상적으로 작성한다.
- 본문은 2~4문장으로 작성한다.
- 오늘의 칭호는 짧은 명사구로 작성한다.
- 한 줄 총평은 재치 있는 한 문장으로 작성한다.
- 네 결과 필드는 서로 같은 표현을 반복하지 않는다.
- 모든 결과는 자연스러운 한국어 문장으로 작성한다.
- 영문은 고유명사나 MVP, SNS 같은 표현에만 사용할 수 있다.
- 한글, 영문, 숫자, 일반 문장부호와 이모지를 제외한 다른 문자는 사용하지 않는다.
- 아랍 문자, 키릴 문자, 한자, 일본어 문자를 사용하지 않는다.
`.trim();
}
