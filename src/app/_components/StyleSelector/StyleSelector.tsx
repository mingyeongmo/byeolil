"use client";

import styles from "./StyleSelector.module.scss";

const EXAGGERATION_STYLES = [
  {
    id: "legend",
    title: "전설",
    description: "평범한 하루를 오래도록 전해질 영웅담으로 만들어요.",
    example: "늦잠에서 귀환한 자",
  },
  {
    id: "breaking-news",
    title: "긴급 뉴스",
    description: "오늘의 사소한 사건을 전 국민이 주목할 속보로 전해요.",
    example: "오전 일정 전면 붕괴",
  },
  {
    id: "sports",
    title: "스포츠 중계",
    description: "하루의 모든 순간을 숨 막히는 경기처럼 중계해요.",
    example: "침대와의 연장전 돌입",
  },
  {
    id: "achievement",
    title: "업적 달성",
    description: "오늘 한 일을 게임 속 특별한 업적으로 기록해요.",
    example: "점심 메뉴 선택 완료",
  },
] as const;

export type ExaggerationStyle = (typeof EXAGGERATION_STYLES)[number]["id"];

type StyleSelectorProps = {
  name: string;
  selectedStyle: ExaggerationStyle | null;
  onSelect: (style: ExaggerationStyle) => void;
  onBack: () => void;
};

export default function StyleSelector({
  name,
  selectedStyle,
  onSelect,
  onBack,
}: StyleSelectorProps) {
  return (
    <section className={styles.styleStep}>
      <button className={styles.backButton} type="button" onClick={onBack}>
        ← 오늘 한 일 수정하기
      </button>

      <div className={styles.styleIntro}>
        <p className={styles.eyebrow}>{name}님의 하루</p>
        <h2>어떻게 과장해 볼까요?</h2>
        <p>마음에 드는 스타일 하나를 선택해 주세요.</p>
      </div>

      <div className={styles.styleOptions}>
        {EXAGGERATION_STYLES.map((style) => {
          const isSelected = selectedStyle === style.id;

          return (
            <button
              className={`${styles.styleCard} ${
                isSelected ? styles.selectedStyle : ""
              }`}
              type="button"
              key={style.id}
              aria-pressed={isSelected}
              onClick={() => onSelect(style.id)}
            >
              <span className={styles.styleCardHeader}>
                <strong>{style.title}</strong>
                <span aria-hidden="true">{isSelected ? "✓" : "○"}</span>
              </span>
              <span>{style.description}</span>
              <small>예: {style.example}</small>
            </button>
          );
        })}
      </div>

      {selectedStyle && (
        <p className={styles.selectionMessage} role="status">
          스타일을 선택했어요. 다음 단계에서 결과 화면을 연결할 수 있어요.
        </p>
      )}

      <button>결과 확인하러 가기</button>
    </section>
  );
}
