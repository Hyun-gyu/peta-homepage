window.siteContent = {
  company: {
    nameKo: "페타",
    nameEn: "PETA",
    email: "contact@peta.ai",
    tagline: "Industrial AI Partner for Manufacturing & Plants",
    description:
      "페타는 제조·플랜트 현장의 검사, 설계, 설비 데이터를 AI로 연결해 운영 병목을 줄이는 산업 AI 파트너입니다.",
  },
  nav: [
    { label: "Solutions", href: "#solutions" },
    { label: "Projects", href: "#projects" },
    { label: "Industries", href: "#industries" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "Manufacturing AI Solutions",
    title: "검사·설계·설비 AI",
    subtitle:
      "페타는 AI 비전검사, CAD 설계 자동화, 설비 데이터 AI를 제조·플랜트 현장 업무 흐름에 맞춰 구축합니다.",
    primaryCta: "우리 공정 진단하기",
    secondaryCta: "솔루션 보기",
    badges: ["AI 비전검사", "CAD 설계 자동화", "설비 데이터 AI", "온프레미스 구축"],
  },
  trust: {
    headline: "이미 현장 기반 산업 AI 프로젝트를 수행 중입니다.",
    description: "수주 기반 산업 AI 프로젝트를 바탕으로 제조 비전검사, CAD+sLLM, 설비·공정 데이터 AI를 검증하고 있습니다.",
    stats: [
      { value: "2", label: "진행 중인 산업 AI 프로젝트" },
      { value: "4-8주", label: "PoC 설계 단위" },
      { value: "On-prem", label: "보안형 AI 적용" },
      { value: "경상권", label: "제조·플랜트 현장 중심" },
    ],
  },
  painPoints: [
    {
      title: "검사 병목",
      description: "룰 기반 검사와 육안 재검사가 반복되지만 판정 근거와 로그는 충분히 남지 않습니다.",
      items: ["룰 기반 비전검사의 한계", "육안 재검사 반복", "판정 근거와 로그 부족"],
    },
    {
      title: "설계 병목",
      description: "반복 파라미터 수정과 매크로 작성이 숙련 설계자에게 집중됩니다.",
      items: ["반복 파라미터 수정", "숙련 설계자 의존", "클라우드 LLM 보안 이슈"],
    },
    {
      title: "설비 병목",
      description: "센서, 알람, 정비 이력, SOP가 흩어져 있어 이상징후 판단과 원인 추적이 어렵습니다.",
      items: ["알람과 정비이력의 단절", "숙련자 경험 의존", "흩어진 SOP/점검문서"],
    },
  ],
  solutions: [
    {
      title: "AI 비전검사 / 비정형 불량 검출",
      eyebrow: "AI Vision Inspection",
      description:
        "룰 기반 비전검사로 잡기 어려운 미세 스크래치, 크랙, 이물, 조립 불량을 AI로 검출하고 Heatmap과 검사 로그로 판정 근거를 남깁니다.",
      targets: ["전장부품", "OP Panel", "IO Board", "Sheet", "커넥터류"],
      values: ["육안 재검사 부담 감소", "룰 기반 검사 한계 보완", "품질 감사 대응력 강화"],
      features: ["정상 이미지 기반 이상탐지", "Anomaly Score / Confidence Score", "MES/POP/PLC 연동 고려"],
    },
    {
      title: "온프레미스 sLLM 기반 설계 자동화",
      eyebrow: "CAD + On-premise sLLM",
      description:
        "제조 설계 현장의 반복 CAD 작업을 자연어 명령, 설계 파라미터 추출, CATIA API/VBA 연동으로 자동화합니다.",
      targets: ["CATIA", "CAD", "CAE", "기계 설계", "방산·항공 협력사"],
      values: ["반복 설계시간 단축", "숙련자 의존도 완화", "클라우드 반출 없이 AI 적용"],
      features: ["자연어 명령 -> 설계 파라미터 추출", "CATIA API / VBA 코드 생성", "Add-on 방식 적용"],
    },
    {
      title: "설비·공정 데이터 AI",
      eyebrow: "Plant / Process Data AI",
      description:
        "설비 센서, 알람 로그, 정비 이력, 점검 보고서, SOP 문서를 연결해 이상징후 탐지와 정비 의사결정을 보조합니다.",
      targets: ["석유화학", "플랜트", "설비보전", "정비팀", "DX팀"],
      values: ["숙련자 지식 의존 완화", "반복 점검/보고 업무 감소", "설비 이력 추적성 강화"],
      features: ["알람/정비이력 기반 원인 후보 추천", "점검 보고서 자동 요약", "SOP 기반 온프레미스 질의응답"],
    },
  ],
  projects: [
    {
      title: "경남 전장부품 제조사 AI 비전검사 프로젝트",
      status: "현장 실증 진행 중",
      description:
        "룰 기반 비전검사와 육안 재검사로 잡기 어려운 미세 스크래치·크랙·이물·조립 불량을 대상으로 AI 비전검사와 Heatmap 기반 판정 근거를 구축하는 프로젝트입니다.",
      tech: ["정상 이미지 기반 이상탐지", "12MP급 고해상도 비전 데이터", "Heatmap 기반 불량 위치 시각화", "MES/POP/PLC 연동 고려"],
      kpis: ["목표 검출률 95%", "데이터셋 구축 목표 35,000건", "검사시간 단축 목표 25-40%"],
    },
    {
      title: "제조 설계 자동화를 위한 온프레미스 sLLM 프로젝트",
      status: "유료 위탁개발 / R&D 진행 중",
      description:
        "자연어 명령을 설계 파라미터와 실행 가능한 CATIA API/VBA 스크립트로 변환하는 온프레미스 sLLM 기반 설계 자동화 프로젝트입니다. 페타는 대형언어모델 알고리즘 개발과 학습용 데이터 정제를 담당합니다.",
      tech: ["자연어 명령 -> 설계 파라미터 추출", "sLLM -> VB/CATIA API 실행 코드 변환", "기존 CAD 인프라 Add-on", "설계자 피드백 기반 모델 개선"],
      kpis: ["파라미터 추출 정확도 목표 95% 이상", "자동 생성 스크립트 실행 성공률 목표 90% 이상", "설계시간 단축 목표 50% 이상"],
    },
  ],
  industries: [
    {
      title: "제조 / 부품 / 전장",
      description: "다품종 소량 생산과 품질 감사 대응이 필요한 제조 라인에 AI 비전검사를 적용합니다.",
      items: ["AI 비전검사", "품질 데이터화", "MES/POP 연동"],
    },
    {
      title: "기계 / 방산 / 항공 설계",
      description: "반복 설계와 파라미터 수정이 많은 설계 조직에 보안형 sLLM 자동화를 적용합니다.",
      items: ["CAD 자동화", "온프레미스 sLLM", "설계 리드타임 단축"],
    },
    {
      title: "석유화학 / 플랜트",
      description: "설비 이상징후와 정비 의사결정을 보조하는 데이터 AI를 현장 보안 요구에 맞춰 설계합니다.",
      items: ["설비 이상징후 탐지", "정비이력 분석", "SOP/매뉴얼 기반 AI Assistant"],
    },
  ],
  process: [
    {
      title: "현장 진단",
      description: "공정, 설비, 데이터, 작업자 흐름을 확인하고 AI 적용 가능 지점을 찾습니다.",
    },
    {
      title: "PoC 설계",
      description: "4-8주 범위와 성공 기준을 정의하고 필요한 데이터와 검증 방법을 정리합니다.",
    },
    {
      title: "실증/구축",
      description: "기존 업무와 병행하며 AI 모델, 대시보드, 연동 구조를 단계적으로 검증합니다.",
    },
    {
      title: "운영/유지보수",
      description: "모델 개선, 데이터 큐레이션, 장애 대응, 운영 전환 계획까지 함께 고려합니다.",
    },
  ],
  why: [
    {
      title: "현장 중심",
      description: "데이터보다 먼저 공정과 작업 흐름을 봅니다.",
    },
    {
      title: "보안 중심",
      description: "온프레미스와 엣지 AI 구조를 우선 고려합니다.",
    },
    {
      title: "작게 시작",
      description: "검증 가능한 PoC 범위부터 설계합니다.",
    },
    {
      title: "설명 가능한 AI",
      description: "Heatmap, 로그, 리포트로 판정 근거를 남깁니다.",
    },
    {
      title: "운영까지 고려",
      description: "검사에서 품질 데이터, 공정 분석, 설비 AI로 확장합니다.",
    },
  ],
  contact: {
    title: "우리 공정에 AI가 가능한지 먼저 확인해보세요.",
    description:
      "제품 사진, 검사 방식, 설비 데이터, 반복 설계 업무 중 하나만 있어도 초기 진단 범위를 함께 정리할 수 있습니다.",
    fields: ["이름", "회사명", "직책/부서", "연락처/이메일"],
    interests: ["AI 비전검사", "CAD+sLLM", "설비·공정 데이터 AI", "기타"],
  },
};
