---
version: alpha
name: PETA Industrial AI
description: >-
  제조·플랜트 현장의 검사·설계·설비 병목을 줄이는 산업 AI 회사 페타의 웹 비주얼 아이덴티티.
  거의 무채색인 도면(blueprint) 팔레트 위에 어두운 대시보드 하나만 놓아 대비를 만드는,
  절제된 엔지니어링 톤.
colors:
  bg: "#f7f7f4"
  surface: "#ffffff"
  surface-soft: "#f1f2ef"
  navy: "#101112"
  navy-2: "#181b1f"
  ink: "#141516"
  muted: "#62676d"
  muted-2: "#9a9ea3"
  line: "rgba(20, 21, 22, 0.09)"
  line-strong: "rgba(20, 21, 22, 0.16)"
  accent-ink: "#111315"
  accent-ink-2: "#30343a"
  cyan: "#718aa0"
  green: "#2f7c63"
  amber: "#b8934f"
  subtitle-ink: "#3e5067"
  dark-surface: "#1a1d21"
  dark-surface-2: "#0f1012"
  dark-text: "#f5f6f4"
  dark-text-muted: "#c8d0d8"
  dark-label: "#9da8b2"
typography:
  display:
    fontFamily: Pretendard
    fontSize: clamp(44px, 4.1vw, 58px)
    fontWeight: 760
    lineHeight: 1.1
    letterSpacing: -0.022em
  heading-lg:
    fontFamily: Pretendard
    fontSize: 42px
    fontWeight: 720
    lineHeight: 1.22
    letterSpacing: -0.018em
  heading-md:
    fontFamily: Pretendard
    fontSize: 28px
    fontWeight: 720
    lineHeight: 1.22
  heading-sm:
    fontFamily: Pretendard
    fontSize: 21px
    fontWeight: 700
    lineHeight: 1.36
    letterSpacing: -0.011em
  subtitle:
    fontFamily: Pretendard
    fontSize: 21px
    fontWeight: 400
    lineHeight: 1.68
  body:
    fontFamily: Pretendard
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.68
  body-sm:
    fontFamily: Pretendard
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.55
  eyebrow:
    fontFamily: Pretendard
    fontSize: 13px
    fontWeight: 760
    lineHeight: 1.4
    letterSpacing: 0.04em
  mini-label:
    fontFamily: Pretendard
    fontSize: 12px
    fontWeight: 760
    lineHeight: 1.4
    letterSpacing: 0.04em
  button:
    fontFamily: Pretendard
    fontSize: 15px
    fontWeight: 720
    lineHeight: 1.2
  mono:
    fontFamily: SFMono-Regular, Consolas, monospace
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
rounded:
  action-sm: 12px
  action: 14px
  md: 16px
  lg: 22px
  xl: 24px
  2xl: 28px
  3xl: 32px
  full: 999px
spacing:
  1: 4px
  2: 8px
  3: 10px
  4: 12px
  5: 14px
  6: 18px
  7: 22px
  8: 26px
  9: 28px
  10: 34px
  11: 42px
  12: 48px
  13: 64px
  14: 112px
components:
  button-primary:
    background: linear-gradient(135deg, {colors.navy}, #34383e)
    color: "#ffffff"
    minHeight: 52px
    paddingInline: "{spacing.7}"
    radius: "{rounded.action}"
    font: "{typography.button}"
    shadow: 0 16px 34px rgba(20, 21, 22, 0.22)
  button-secondary:
    background: rgba(255, 255, 255, 0.86)
    borderColor: "{colors.line-strong}"
    color: "{colors.ink}"
    minHeight: 52px
    radius: "{rounded.action}"
    font: "{typography.button}"
  header-cta:
    background: rgba(255, 255, 255, 0.82)
    borderColor: "{colors.line-strong}"
    minHeight: 40px
    radius: "{rounded.action-sm}"
  card:
    background: rgba(255, 255, 255, 0.86)
    borderColor: "{colors.line}"
    radius: "{rounded.xl}"
    padding: "{spacing.9}"
    shadow: 0 18px 48px rgba(15, 23, 42, 0.07)
    hoverTransform: translateY(-3px)
    hoverShadow: 0 24px 60px rgba(20, 21, 22, 0.1)
  tag:
    background: rgba(255, 255, 255, 0.8)
    borderColor: "{colors.line}"
    color: "#596068"
    minHeight: 34px
    radius: "{rounded.full}"
    fontSize: 13px
    fontWeight: 620
  badge-hero:
    background: rgba(255, 255, 255, 0.88)
    color: "{colors.navy}"
    minHeight: 42px
    radius: "{rounded.full}"
    fontSize: 15px
    fontWeight: 720
  badge-status:
    background: rgba(47, 124, 99, 0.1)
    color: "#276a55"
    minHeight: 34px
    radius: "{rounded.full}"
    fontSize: 13px
    fontWeight: 760
  icon-box:
    size: 48px
    radius: "{rounded.md}"
    background: linear-gradient(135deg, rgba(20, 21, 22, 0.06), rgba(113, 138, 160, 0.12))
    borderColor: rgba(20, 21, 22, 0.13)
    strokeWidth: 1.9
  dashboard-card:
    background: linear-gradient(180deg, {colors.dark-surface}, {colors.dark-surface-2})
    radius: "{rounded.2xl}"
    shadow: 0 32px 90px rgba(20, 21, 22, 0.28)
    gridOverlay: 28px
  input:
    background: "{colors.surface}"
    borderColor: "{colors.line-strong}"
    minHeight: 48px
    radius: "{rounded.md}"
---

# PETA Industrial AI — DESIGN.md

## Overview

페타는 제조·플랜트 현장의 검사·설계·설비 병목을 AI로 줄이는 산업 AI 구축 파트너다.
이 사이트는 제품 페이지가 아니라 **회사 역량 소개 페이지(capability page)** 다.
방문자는 품질팀·생산기술팀·DX팀 실무자이며, 이들이 "우리 현장에도 적용 가능한가"를
판단할 수 있게 하는 것이 유일한 목표다.

시각 언어의 핵심은 **절제**다. 산업 AI 회사가 흔히 쓰는 네온 블루, 회로 패턴,
과장된 통계 배지를 의도적으로 배제했다. 대신 도면과 계측 장비의 인상을 빌려온다.
따뜻한 오프화이트 종이 위에 옅은 격자선이 깔리고, 거의 검정에 가까운 잉크로
글자가 앉으며, 화면 전체에서 단 하나의 어두운 표면만 시선을 끈다.

작은 회사가 실제보다 커 보이려 애쓰는 인상을 만들지 않는다. 확정되지 않은 숫자를
내세우지 않고, 지금 검증 중이라는 사실을 조용히 말한다. 이 절제 자체가
"과장하지 않는 엔지니어링 회사"라는 포지셔닝을 만든다.

## Colors

팔레트는 거의 무채색이다. 채도가 있는 색은 두 개뿐이며, 둘 다 좁은 역할만 맡는다.

- `bg` `#f7f7f4` — 페이지 배경. 순백이 아닌 따뜻한 오프화이트다. 이 미세한 온기가
  전체 인상을 "차가운 테크"가 아닌 "종이 위 도면"으로 바꾼다. 흰색으로 바꾸지 말 것.
- `surface` `#ffffff` — 카드 표면의 기준값이지만 실제로는 `rgba(255,255,255,0.86)`로
  얹어 배경 격자가 카드 아래로 비쳐 보이게 한다.
- `navy` `#101112` / `ink` `#141516` — 제목과 본문. 이름은 navy지만 실질적으로 검정이다.
- `muted` `#62676d` / `muted-2` `#9a9ea3` — 보조 설명과 가장 약한 텍스트.
- `cyan` `#718aa0` — **유일한 컬러 액센트.** 불릿 점, 그라데이션 끝단, 대시보드 내부
  연결선에만 쓴다. 넓은 면적을 채우는 데 쓰지 않는다.
- `green` `#2f7c63` — 프로젝트 진행 상태 배지 전용.
- `amber` `#b8934f` — 예비 토큰. 현재 사용하지 않는다.

경계선은 색이 아니라 투명도로 만든다. `line`은 9%, `line-strong`은 16% 불투명도의
검정이며, 배경이 무엇이든 자연스럽게 얹힌다.

## Typography

서체는 `Pretendard` 하나다. 한글과 라틴 문자의 굵기가 균일해 국문 제목에 700 이상의
굵기를 써도 뭉치지 않는다.

굵기 스케일이 특이하다. 400(본문) → 620~650(태그·내비) → 700~720(소제목·버튼) →
760(대제목·라벨)로 올라가며, 일반적인 500/600/700 대신 **10 단위의 중간값**을 쓴다.
이 미세한 조정이 한글에서 굵기 대비를 더 정확하게 만든다.

영문 eyebrow와 한글 제목을 짝지어 쓰는 것이 이 사이트의 반복 패턴이다.
`Solutions` / `Field Projects / Proof` 같은 영문 소문자 라벨이 대문자 변환되어
위에 오고, 그 아래 국문 제목이 온다.

### 자간

큰 글자는 음수, 작은 대문자 라벨은 양수 자간을 쓴다. 제목은 글자가 클수록 자간이
넓어 보이므로 조여주고, 대문자 라벨은 반대로 벌려야 읽힌다.

| 토큰 | 값 | 적용 |
|---|---|---|
| `--track-display` | `-0.022em` | h1 |
| `--track-heading` | `-0.018em` | h2 |
| `--track-title` | `-0.011em` | h3 |
| `--track-label` | `0.04em` | eyebrow, mini-label |

**주의:** 자간을 바꾸면 `text-wrap: balance`의 줄바꿈 계산이 달라져 한글 복합어가
갈라질 수 있다. h1은 이 때문에 `titlePhrases`로 줄바꿈을 고정한다.

### 한글 조판 규칙 (필수)

```css
word-break: keep-all;
overflow-wrap: break-word;
text-wrap: balance;  /* 제목 */
text-wrap: pretty;   /* 본문 */
```

이 규칙이 빠지면 "검사·설계·설비 병목을" 같은 제목이 어절 중간에서 끊긴다.
새로 만드는 모든 컴포넌트에 반드시 상속시킨다. 특히 긴 제목은 `<span>`으로
어절을 감싸 줄바꿈 위치를 직접 지정한다.

## Layout

- 본문 최대 폭 `1180px`, 히어로만 `1340px`.
- 섹션 패딩 `112px 48px`. 섹션 헤딩과 콘텐츠 사이는 항상 `42px`.
- 카드 그리드 간격은 전부 `18px`.
- 열 수: 문제·솔루션·산업 3열, 프로젝트 2열, 강점 5열, 도입 단계 4열.
- 도입 단계만 간격 `0`으로 붙여 하나의 띠로 만든다.
- 섹션 배경은 기본색과 `section-bright`(흰색 62%)가 번갈아 나온다.

히어로는 `minmax(0, 0.76fr) minmax(600px, 1.08fr)` 비율에 `64px` 간격이다.
우측 대시보드가 `600px` 아래로 좁아지면 내부 3열 컨트롤이 무너지므로 이 최소값을 지킨다.

브레이크포인트는 `1120px`, `820px`, `520px` 세 곳이다.

### 배경 격자

페이지 배경에 `44px` 간격의 격자선이 `rgba(20,21,22,0.035)`로 깔린다.
어두운 대시보드 카드 내부에는 같은 격자가 `28px` 간격, 흰색 6%로 반복된다.
이 격자가 "도면" 인상을 만드는 핵심 장치다. 제거하면 평범한 SaaS 랜딩이 된다.

## Elevation & Depth

그림자는 세 단계뿐이며, 모두 넓고 옅게 퍼진다. 짧고 진한 그림자를 쓰지 않는다.

| 용도 | 값 |
|---|---|
| 카드 | `0 18px 48px rgba(15, 23, 42, 0.07)` |
| 카드 hover | `0 24px 60px rgba(20, 21, 22, 0.1)` |
| Primary 버튼 | `0 16px 34px rgba(20, 21, 22, 0.22)` |
| 대시보드 카드 | `0 32px 90px rgba(20, 21, 22, 0.28)` |

**어두운 표면은 히어로 대시보드 카드 하나뿐이다.** 밝은 페이지 위에 이것만
짙게 놓아 시선을 잡는 구조라, 다른 섹션에 어두운 블록을 추가하면 이 대비가 무너진다.

헤더는 `rgba(247,247,244,0.9)` 배경에 `backdrop-filter: blur(18px)`로 떠 있고,
최상단에는 `3px` 스크롤 진행 바가 `#111315 → #718aa0` 그라데이션으로 붙는다.

## Shapes

**동작(action)과 라벨(label)은 모서리로 구분한다.** 버튼처럼 누르는 것은 각진 라운드,
태그·배지처럼 읽는 것은 완전한 pill이다. 이 구분이 페이지를 소비자용이 아니라
엔지니어링 도구처럼 읽히게 만든다.

- `action` `14px` — Primary / Secondary 버튼.
- `action-sm` `12px` — 헤더 CTA, 체크박스 항목.
- `full` `999px` — 태그, 히어로 배지, 상태 pill. **라벨 전용이다.**
- `md` `16px` — 아이콘 박스, 입력 필드, 대시보드 내부 블록.
- `lg` `22px` — 대시보드 내부 모듈.
- `xl` `24px` — 카드 기본값.
- `2xl` `28px` — 히어로 대시보드 카드.
- `3xl` `32px` — 문의 섹션 컨테이너.

아이콘은 모두 `stroke` 방식이며 채우지 않는다. 두께는 아이콘 박스 안에서 `1.9`,
버튼 화살표에서 `2`이고 끝은 둥글게 처리한다.

## Components

### 솔루션 카드 (가장 제약이 강함)

세 카드의 `적용 대상 / 기대 효과 / 구축 방식` 라벨은 **반드시 같은 높이에서 시작해야
한다.** 내용 길이가 달라도 어긋나면 안 되므로 고정 행 높이로 강제한다.

```css
grid-template-rows: 72px 48px 126px 118px 132px 1fr;
```

검증값: 세 카드 모두 라벨 상단이 카드 기준 `275px / 393px / 525px`.
카드 내용을 바꾸면 이 값을 다시 확인한다.

두 번째 카드 제목은 `온프레미스 CAD 자동화` **한 줄**로 유지하고, `sLLM`은
eyebrow(`CAD + On-premise sLLM`)에 둔다.

### Proof 스트립

의도적으로 조용한 영역이다. 문장 하나와 링크 하나만 둔다.

> 현재 프로젝트를 통해 현장 적용성을 검증하고 있습니다. · [진행 프로젝트 보기]

### 프로젝트 카드

구체적인 수치가 들어가는 **유일한** 카드다. 부품명, KPI, 데이터 규모는 여기에만 쓴다.

### 도입 단계

4장을 간격 없이 붙여 한 덩어리로 만든다. 양 끝만 바깥 모서리가 둥글고
사이 테두리는 `border-left: 0`으로 지운다. 산출물 블록은 `margin-top: auto`로 바닥 정렬.

### 인터랙션

모든 hover는 **색이 아니라 움직임**으로 반응한다. 버튼과 링크는 `translateY(-2px)`,
카드는 `translateY(-3px)`에 그림자가 깊어진다. 전환은 `180ms ease`.
hover에서 배경색을 바꾸지 않는다.

## Do's and Don'ts

### Do

- 새 요소는 기존 토큰 안에서 조합한다.
- 회사 역량은 일반적으로 쓰고, 구체적 수치는 프로젝트 카드에만 넣는다.
- 영문 eyebrow + 국문 제목 쌍을 섹션 도입부에 반복한다.
- 강조가 필요하면 색이 아니라 굵기와 여백으로 만든다.
- 모든 새 텍스트 블록에 `word-break: keep-all`을 상속시킨다.

### Don't

- **`경상권` 등 지역 표현을 쓰지 않는다.** 회사 범위를 좁혀 보이게 한다.
- **Proof 영역에 `2건`, `4-8주`, `On-prem` 류의 숫자 배지를 다시 넣지 않는다.**
  과장된 인상 때문에 의도적으로 제거했다.
- **`기술 기반` 섹션(UNIST·고려대·국가 R&D 이력)을 추가하지 않는다.**
  공개 문구가 확정되지 않았고 승인 전이다.
- 팔레트 밖의 새 색, 특히 채도 높은 파랑이나 보라를 도입하지 않는다.
- 어두운 배경 블록을 대시보드 카드 외에 추가하지 않는다.
- 순백(`#ffffff`) 배경으로 바꾸지 않는다.
- 배경 격자를 제거하지 않는다.
- 솔루션 카드 세 장의 행 정렬을 깨뜨리지 않는다.

---

*출처: `styles.css`, `index.html`, `siteContent.js`의 현재 상태에서 추출.
형식은 [google-labs-code/design.md](https://github.com/google-labs-code/design.md) alpha 스펙을 따른다.*
