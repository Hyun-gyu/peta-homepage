window.siteContent = {
  company: {
    nameKo: "페타",
    nameEn: "PETA",
    email: "contact@peta-ai.com",
    tagline: "Manufacturing AI Partner",
    description:
      "페타는 제조·플랜트 현장의 검사·설계·설비 병목을 AI로 줄이는 산업 AI 구축 파트너입니다.",
  },
  nav: [
    { label: "솔루션", href: "#solutions" },
    { label: "진행 프로젝트", href: "#projects" },
    { label: "도입 방식", href: "#process" },
    { label: "문의하기", href: "#contact" },
  ],
  hero: {
    eyebrow: "Manufacturing AI Solutions",
    title: "검사·설계·설비 병목을 줄이는 제조 AI",
    titlePhrases: ["검사·설계·설비 병목을", "줄이는 제조 AI"],
    subtitle:
      "페타는 AI 비전검사, CAD 설계 자동화, 설비·공정 데이터 AI를 제조·플랜트 현장 업무 흐름에 맞춰 구축합니다.",
    subtitlePhrases: [
      "페타는 AI 비전검사,",
      "CAD 설계 자동화,",
      "설비·공정 데이터 AI를",
      "제조·플랜트 현장 업무 흐름에",
      "맞춰 구축합니다.",
    ],
    primaryCta: "우리 공정 진단하기",
    primaryHref: "#contact",
    secondaryCta: "진행 프로젝트 보기",
    secondaryHref: "#projects",
    badges: ["AI 비전검사", "CAD 설계 자동화", "설비·공정 데이터 AI", "온프레미스·엣지"],
  },
  trust: {
    headline: "현재 프로젝트를 통해 현장 적용성을 검증하고 있습니다.",
    headlinePhrases: ["현재 프로젝트를 통해", "현장 적용성을 검증하고 있습니다."],
    description: "검사, 설계 자동화, 보안형 AI 적용 가능성을 실제 업무 흐름 안에서 작게 확인하고 확장합니다.",
    descriptionPhrases: ["검사, 설계 자동화,", "보안형 AI 적용 가능성을", "실제 업무 흐름 안에서", "작게 확인하고 확장합니다."],
    cta: "진행 프로젝트 보기",
    href: "#projects",
  },
  painPoints: [
    {
      title: "검사 병목",
      description: "룰 튜닝으로도 잡히지 않는 미세 불량, 반복되는 육안 재검사, 부족한 판정 근거가 품질 리스크로 남습니다.",
      items: ["미세 불량 검출 한계", "육안 재검사 반복", "판정 근거 부족"],
    },
    {
      title: "설계 병목",
      description: "반복 파라미터 수정과 매크로 작성이 숙련 설계자에게 집중되어 설계 리드타임과 휴먼 에러가 늘어납니다.",
      items: ["반복 CAD 수정", "숙련자 의존", "보안형 AI 필요"],
    },
    {
      title: "설비 병목",
      description: "센서, 알람, 정비 이력, SOP가 흩어져 이상징후 판단과 원인 추적이 숙련자 경험에 의존합니다.",
      items: ["분산된 설비 데이터", "원인 추적 지연", "점검 우선순위 판단 어려움"],
    },
  ],
  solutions: [
    {
      title: "AI 비전검사 / 비정형 불량 검출",
      eyebrow: "AI Vision Inspection",
      summary: "외관 검사, 조립 상태, 표면 결함처럼 기준이 복잡한 품질 판단을 이미지 기반 AI로 보조하고 판정 근거를 남깁니다.",
      target: ["제조 라인", "부품·소재", "외관 검사", "조립 검사", "검사 로그"],
      value: ["반복 검사 부담 감소", "미세 불량 탐지 보완", "판정 근거와 추적성 강화"],
      implementation: ["이미지 데이터 진단", "불량 유형·판정 기준 정의", "AI 모델/스코어 설계", "검사 화면·리포트 구성"],
    },
    {
      title: "온프레미스 CAD 자동화",
      eyebrow: "CAD + On-premise sLLM",
      summary: "반복 설계 수정, 파라미터 입력, 도면·모델 변경 업무를 사내 보안 환경 안에서 AI 보조 자동화로 전환합니다.",
      target: ["반복 CAD 작업", "파라미터 설계", "도면·모델 수정", "사내 설계 표준", "보안형 환경"],
      value: ["반복 설계시간 단축", "숙련자 의존도 완화", "설계 표준과 변경 이력 관리"],
      implementation: ["업무 절차 분석", "명령·파라미터 체계화", "CAD API·매크로 연동", "온프레미스 적용 검토"],
    },
    {
      title: "설비·공정 데이터 AI",
      eyebrow: "Plant / Process Data AI",
      summary: "센서, 알람, 정비 이력, 점검 보고서, SOP를 연결해 현장 판단과 보고·정비 업무를 보조합니다.",
      target: ["설비 알람", "정비 이력", "점검 보고서", "SOP·매뉴얼", "공정 데이터"],
      value: ["이상징후 판단 보조", "반복 점검·보고 업무 감소", "현장 지식과 이력 활용 강화"],
      implementation: ["데이터 구조 진단", "이상징후·원인 후보 추천", "보고서 요약", "내부 지식 질의응답"],
    },
  ],
  projects: [
    {
      category: "AI 비전검사",
      title: "경남 전장부품 제조사 AI 비전검사 프로젝트",
      status: "현장 실증 진행 중",
      problem: "전장부품, OP Panel, IO Board, Sheet, 커넥터류 등에서 룰 기반 검사와 육안 재검사로 잡기 어려운 미세 스크래치, 크랙, 이물, 조립 불량을 대상으로 합니다.",
      role: "AI 비전검사 모델과 Anomaly/Confidence Score, Heatmap 기반 판정 근거를 구축합니다.",
      technologies: ["정상 이미지 기반 이상탐지", "12MP급 고해상도 비전 데이터", "Anomaly Score / Confidence Score", "Heatmap 기반 불량 위치 시각화", "MES/POP/PLC 연동 검토"],
      kpiLabel: "목표 KPI",
      kpis: ["검출률 95% 목표", "데이터셋 35,000건 구축 목표", "검사시간 25-40% 단축 목표"],
    },
    {
      category: "CAD 설계 자동화 / 온프레미스 sLLM",
      title: "제조 설계 자동화를 위한 온프레미스 sLLM 프로젝트",
      status: "유료 위탁개발 / R&D 진행 중",
      problem: "CATIA, CAD, CAE 기반 기계 설계 환경에서 반복 CAD 수정, 설계 파라미터 입력, API/VBA 스크립트 작성 부담을 줄이는 프로젝트입니다.",
      role: "PETA는 보안형 설계 환경을 전제로 대형언어모델 알고리즘 개발과 학습용 데이터 정제를 담당합니다.",
      technologies: ["자연어 명령에서 설계 파라미터 추출", "sLLM 기반 VB/CATIA API 실행 코드 변환", "기존 CAD 인프라 Add-on 방식", "방산·항공 협력사형 보안 조건 검토", "설계자 피드백 기반 모델 개선"],
      kpiLabel: "목표 KPI",
      kpis: ["파라미터 추출 정확도 95% 이상 목표", "자동 생성 스크립트 실행 성공률 90% 이상 목표", "설계시간 50% 이상 단축 목표"],
    },
  ],
  industries: [
    {
      title: "제조 / 부품 / 전장",
      description: "비전검사, 품질 판정, 검사 로그, 공정 데이터 연결이 필요한 제조 라인에 적용합니다.",
      items: ["비전검사", "품질 판정", "검사 로그"],
    },
    {
      title: "기계 / 방산 / 항공 설계",
      description: "반복 CAD 수정, 파라미터 자동화, 온프레미스 설계 AI가 필요한 조직에 적용합니다.",
      items: ["CAD 자동화", "온프레미스 sLLM", "파라미터 자동화"],
    },
    {
      title: "석유화학 / 플랜트",
      description: "설비 알람, 정비 이력, SOP, 점검 보고서 기반 AI가 필요한 현장에 적용합니다.",
      items: ["설비 알람", "정비 이력", "SOP 기반 AI"],
    },
  ],
  process: [
    {
      title: "현장 진단",
      description: "제품 사진, 검사 방식, 설비 로그, 반복 설계 업무를 바탕으로 AI 적용 가능성과 데이터 준비도를 확인합니다.",
      output: "적용 가능성, 데이터 준비도, PoC 후보 범위",
    },
    {
      title: "PoC 설계",
      description: "검증할 문제, 사용할 데이터, 목표 KPI, 일정, 보안 조건을 함께 정리합니다.",
      output: "PoC 범위, 목표 KPI, 일정, 필요 연동 범위",
    },
    {
      title: "실증/구축",
      description: "실제 데이터와 현장 피드백을 반영해 모델과 운영 화면, 판정 로그, 연동 구조를 구축합니다.",
      output: "모델/시스템, 판정 근거, 대시보드, 연동 결과",
    },
    {
      title: "운영/유지보수",
      description: "운영 중 데이터를 바탕으로 재학습, 점검 기준, 운영 매뉴얼, 유지보수 방식을 정리합니다.",
      output: "운영 매뉴얼, 재학습 기준, 유지보수 계획",
    },
  ],
  why: [
    {
      title: "현장 데이터에서 시작",
      description: "제품 사진, 검사 기준, 설비 로그, 작업 동선을 먼저 확인합니다.",
    },
    {
      title: "보안 환경 우선",
      description: "클라우드 반출이 어려운 현장은 온프레미스, 엣지, 내부망 구조를 우선 검토합니다.",
    },
    {
      title: "기존 시스템 연동 고려",
      description: "MES, POP, PLC, CATIA, SOP 등 기존 업무 시스템과의 연결 가능성을 함께 봅니다.",
    },
    {
      title: "설명 가능한 결과",
      description: "Heatmap, Confidence Score, 판정 로그처럼 현장 작업자가 확인할 수 있는 근거를 남깁니다.",
    },
    {
      title: "운영까지 고려",
      description: "모델 개발에서 끝내지 않고 데이터 큐레이션, 재학습, 운영 매뉴얼, 유지보수 기준까지 설계합니다.",
    },
  ],
  contact: {
    title: "우리 현장에도 AI가 가능한지 먼저 확인해보세요.",
    description:
      "제품 사진, 불량 샘플, 검사 방식, 설비 로그, 반복 설계 업무 중 하나만 있어도 초기 진단 범위를 함께 정리할 수 있습니다.",
    microcopy: "자료가 완벽하지 않아도 괜찮습니다. 현재 반복되는 문제만 적어주셔도 검토를 시작할 수 있습니다.",
    privacy: "폼 제출 시 이메일 작성 창이 열립니다. 고객명과 상세 데이터는 공개하지 않으며, 보안이 필요한 경우 내부망/온프레미스 적용 가능성을 함께 검토합니다.",
    diagnostics: ["AI로 줄일 수 있는 문제인지", "필요한 데이터가 이미 있는지", "PoC로 검증할 최소 범위", "온프레미스/엣지 적용 필요성"],
    materials: ["제품/불량 이미지", "검사 기준서", "설비 로그/알람 이력", "CAD 반복 작업 예시", "기타"],
    interests: ["AI 비전검사", "CAD 설계 자동화", "설비·공정 데이터 AI", "아직 모르겠음"],
  },
};
