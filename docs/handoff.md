# 별일있음 개발 인수인계

## 프로젝트 목표

사용자가 이름과 오늘 있었던 일을 입력하면 선택한 스타일에 맞춰
평범한 하루를 과장된 콘텐츠로 만들어주는 모바일 중심 서비스.

기술 스택:

- Next.js App Router
- TypeScript
- SCSS Modules
- Zod
- OpenAI Responses API 예정

## 현재 구현된 기능

- 랜딩 페이지
- 공통 Header 컴포넌트
- 이름과 오늘 한 일 입력
- 입력 항목 추가 및 삭제
- 입력값 검증
- 과장 스타일 선택
- 스타일 종류:
  - legend
  - breaking-news
  - sports
  - achievement
- `POST /api/generate` Route
- Zod를 이용한 요청값 검증
- 스타일별 Mock 결과 반환
- 결과를 sessionStorage에 저장
- `/result` 페이지 이동
- `/result`에서 저장된 Mock 결과 표시

## 현재 데이터 흐름

1. `ActivityForm`에서 이름과 오늘 한 일을 입력한다.
2. `CreatePage`가 입력값을 상태로 관리한다.
3. `StyleSelector`에서 과장 스타일을 선택한다.
4. `내 하루 과장하기` 버튼이 `onComplete`를 호출한다.
5. `CreatePage.handleGenerate`가 `/api/generate`로 POST 요청한다.
6. API Route가 Zod로 요청값을 검사한다.
7. 스타일에 맞는 Mock 결과를 반환한다.
8. 브라우저가 결과를 `byeolil-result`라는 이름으로 sessionStorage에 저장한다.
9. `/result`로 이동한다.
10. 결과 페이지가 sessionStorage를 읽어 표시한다.

## 주요 파일

- `src/app/create/page.tsx`
- `src/app/result/page.tsx`
- `src/app/api/generate/route.ts`
- `src/schema/generate.ts`
- `src/mocks/generatedResults.ts`
- `src/app/_components/ActivityForm`
- `src/app/_components/StyleSelector`
- `src/app/_components/Header`

## 중요한 결정

- 디자인은 아직 최종본이 아닌 임시 디자인이다.
- 프론트엔드 Mock 흐름을 먼저 완성한 다음 OpenAI API를 연결한다.
- OpenAI API는 브라우저에서 직접 호출하지 않고 API Route에서 호출한다.
- 데이터베이스는 아직 사용하지 않는다.
- 결과는 임시로 sessionStorage에 저장한다.
- 활동 항목 개수에는 최대 제한이 없다.
- 활동은 최소 3개가 필요하다.
- 현재 결과 공유 기능은 구현하지 않는다.
- `/favicon.ico` 404는 파비콘이 없어서 발생하며 기능에 영향이 없다.

## 현재 다음 작업

스타일별 결과 페이지 디자인.

공통 구조는 유지하되 스타일에 따라 화면 분위기를 다르게 만든다.

- 전설: 아이보리와 골드
- 긴급 뉴스: 레드와 네이비
- 스포츠 중계: 네이비와 그린
- 업적 달성: 퍼플

위 디자인 스타일은 임시일뿐이다.

아직 OpenAI API는 연결하지 않는다.

## 검사 명령어

```bash
npm run lint
npx tsc --noEmit
npm run build
```
