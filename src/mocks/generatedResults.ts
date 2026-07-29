import type { GenerateRequest, GeneratedResult } from "@/schema/generate";

export const MOCK_RESULTS = {
  legend: {
    title: "늦잠에서 귀환한 자",
    body: "긴 잠의 봉인을 깨고 마침내 침대에서 일어난 위대한 영웅의 이야기가 시작됐다.",
    todayTitle: "기적의 귀환자",
    oneLineReview: "인류의 아침을 다시 열었다.",
  },

  "breaking-news": {
    title: "[속보] 오전 일정 전면 붕괴",
    body: "관계자에 따르면 오늘 오전 예정됐던 일정이 늦잠으로 인해 전면 중단됐다.",
    todayTitle: "일정 붕괴의 중심",
    oneLineReview: "피해는 있었지만 점심은 지켜냈다.",
  },

  sports: {
    title: "침대와의 연장전, 극적인 종료",
    body: "선수가 마침내 이불을 걷어내며 길었던 침대와의 승부를 끝냈다.",
    todayTitle: "불굴의 기상 선수",
    oneLineReview: "끝까지 포기하지 않은 경기였다.",
  },

  achievement: {
    title: "업적 달성: 점심 메뉴 선택",
    body: "수많은 선택지를 검토한 끝에 오늘의 점심 메뉴를 결정하는 데 성공했다.",
    todayTitle: "결정의 달인",
    oneLineReview: "오늘도 소중한 경험치를 획득했다.",
  },
} satisfies Record<GenerateRequest["style"], GeneratedResult>;
