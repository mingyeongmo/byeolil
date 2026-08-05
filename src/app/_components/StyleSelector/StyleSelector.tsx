"use client";

import styles from "./StyleSelector.module.scss";

const EXAGGERATION_STYLES = [
  {
    id: "legend",
    icon: "♛",
    title: "전설",
    description: "평범한 하루를 오래도록 전해질 영웅담으로 만들어요.",
    example: "늦잠에서 귀환한 자",
  },
  {
    id: "breaking-news",
    icon: "!",
    title: "긴급 뉴스",
    description: "오늘의 사소한 사건을 전 국민이 주목할 속보로 전해요.",
    example: "오전 일정 전면 붕괴",
  },
  {
    id: "sports",
    icon: "●",
    title: "스포츠 중계",
    description: "하루의 모든 순간을 숨 막히는 경기처럼 중계해요.",
    example: "침대와의 연장전 돌입",
  },
  {
    id: "achievement",
    icon: "★",
    title: "업적 달성",
    description: "오늘 한 일을 게임 속 특별한 업적으로 기록해요.",
    example: "점심 메뉴 선택 완료",
  },
] as const;

export type ExaggerationStyle = (typeof EXAGGERATION_STYLES)[number]["id"];

type StyleSelectorProps = {
  selectedStyle: ExaggerationStyle | null;
  onSelect: (style: ExaggerationStyle) => void;
  onBack: () => void;
  onComplete: () => void;
  isGenerating: boolean;
};

export default function StyleSelector({
  selectedStyle,
  onSelect,
  onBack,
  onComplete,
  isGenerating,
}: StyleSelectorProps) {
  return (
    <section className={styles.styleStep}>
      <button className={styles.backButton} type="button" onClick={onBack}>
        ← 오늘 한 일 수정하기
      </button>

      <div className={styles.styleIntro}>
        <span className={styles.eyebrow}>STEP 2 · 과장 방식</span>
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
              data-style={style.id}
              aria-pressed={isSelected}
              onClick={() => onSelect(style.id)}
            >
              <span className={styles.styleIcon} aria-hidden="true">
                {style.icon}
              </span>

              <span className={styles.styleContent}>
                <strong>{style.title}</strong>
                <span>{style.description}</span>
                <small>“{style.example}”</small>
              </span>

              <span className={styles.checkMark} aria-hidden="true">
                {isSelected ? "✓" : ""}
              </span>
            </button>
          );
        })}
      </div>

      {selectedStyle && (
        <p className={styles.selectionMessage} role="status">
          선택 완료! 이 분위기로 하루를 과장할게요.
        </p>
      )}

      <button
        className={styles.submitButton}
        type="button"
        disabled={!selectedStyle || isGenerating}
        onClick={onComplete}
      >
        {isGenerating ? "거창하게 만드는 중..." : "내 하루 과장하기"}
        {!isGenerating && <span aria-hidden="true">→</span>}
      </button>
    </section>
  );
}
