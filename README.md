# PETA Homepage

페타(PETA) 회사 홈페이지. 빌드 단계가 없는 정적 사이트이고, Cloudflare Pages로 `https://peta-ai.com/`과 `https://www.peta-ai.com/`에 배포한다.

## 구조

| 파일 | 역할 |
|---|---|
| `index.html` | 페이지 뼈대(현재: 2026-07-24 v3 "조용한 히어로") |
| `styles.css` | 기본 스타일 |
| `modern.css` → `v2.css` → `v3.css` | 위에 순서대로 얹는 스타일 층(평평한 스타일 → 구조 개편 → 히어로) |
| `siteContent.js` | 화면 문구 · 연락처 데이터 |
| `app.js` | 문구를 화면에 채우는 스크립트 |
| `assets/` | 로고 · 솔루션 이미지 |
| `robots.txt`, `sitemap.xml` | 검색 노출 |
| `DESIGN.md` | 디자인 원칙(색 · 글꼴 · 간격 · 지켜야 할 높이) |

CSS · JS를 고치면 `index.html`의 `?v=` 값을 함께 바꿔 캐시를 피한다.

## 로컬에서 보기

```bash
python3 -m http.server 8787 --bind 127.0.0.1
```

브라우저에서 `http://127.0.0.1:8787/`을 연다.

## 작업 · 배포 방식

1. `main`에서 작업 브랜치를 만든다(예: `feature/hero-proof`).
2. 브랜치를 GitHub에 올리면 Cloudflare Pages가 **미리보기 주소**(`https://<브랜치>.<프로젝트>.pages.dev`)를 자동으로 만든다. 그 주소로 확인한다.
3. Pull Request를 연다. 미리보기 주소와 바꾼 점을 적는다.
4. 저장소 관리자가 확인하고 `main`에 합치면 실제 사이트에 자동 배포된다.

`main`에 직접 올리지 않는다. `main`은 곧 실제 사이트다.

Cloudflare 설정(참고): 빌드 명령 없음, 출력 폴더 `/`, 실제 배포 브랜치 `main`.

## 지켜야 할 것

- 공개 문구에 지역 표현(`경상권`)을 쓰지 않는다.
- `2건`, `4-8주` 같은 숫자 배지 · 실적 과장을 넣지 않는다. 실제로 없는 고객사명 · 성과 · 숫자를 만들지 않는다.
- `Solutions`는 페타가 할 수 있는 일을 일반적으로 설명하고, 부품명 · 도구 · KPI 같은 구체 내용은 `Projects`에 둔다.
- 솔루션 카드 3장의 `적용 대상 / 기대 효과 / 구축 방식` 시작 높이를 맞춘다. `온프레미스 CAD 자동화` 제목은 한 줄로 유지한다(자세한 기준은 `DESIGN.md`).
- 연락처는 `contact@peta-ai.com`이다.
- 고객사 내부 자료 · 사진은 허락 없이 넣지 않는다.

## 열린 과제

- 첫 화면에 증거가 없다. 데모 패널이 두 번째 화면에 있어서, Pain Points를 줄여 패널을 첫 스크롤 안으로 올릴지 정해야 한다.
- `기술 기반` 소개 칸: 공개 문구와 국가 R&D 참여 목록을 확인한 뒤 넣는다.

주소가 바뀌면 `index.html`의 canonical · Open Graph 주소, `robots.txt`, `sitemap.xml`을 함께 고친다.
