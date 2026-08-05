const HAS_MEANINGFUL_TEXT = /[가-힣]|[A-Za-z]{2,}/;
const SAME_CHARACTER_REPEATED = /^(.)\1{2,}$/u;

export function isMeaningfulActivity(value: string) {
  const compactValue = value.trim().replace(/\s/g, "");

  if (!HAS_MEANINGFUL_TEXT.test(compactValue)) {
    return false;
  }

  if (SAME_CHARACTER_REPEATED.test(compactValue)) {
    return false;
  }

  return true;
}
