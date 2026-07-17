import { Profile, EducationItem, ExperienceItem, ResearchItem, TrainingItem, CertificationItem, BDStrategyDeal } from "./types";

export const profileData: Profile = {
  nameKo: "왕서현",
  nameEn: "SeoHyun Wang",
  taglineKo: "의생명공학 학술적 깊이, 규제과학(RA) 이해도, 미디어·AI 활용 능력을 융합한 준비된 제약·바이오 사업개발(BD) 혁신 인재",
  taglineEn: "An innovative Pharma & Biotech Business Development (BD) professional fusing biomedical academic excellence, regulatory science (RA) acumen, digital media, and AI-driven automation.",
  contact: "010-6873-3336",
  email: "tjgus700@naver.com",
  address: "서울시 강북구 4.19로2길 1-7 401호 (01011)"
};

export const educationData: EducationItem[] = [
  {
    schoolKo: "건국대학교 (Konkuk University)",
    schoolEn: "Konkuk University",
    period: "2019.03 ~ 2026.08 (졸업예정)",
    majorKo: "의생명공학과 학사",
    majorEn: "B.S. in Biomedical Engineering",
    gpa: "3.74 / 4.5",
    location: "서울, 대한민국",
    details: [
      "생화학, 세포생물학, 분자생물학, 약리학 등 의생명 전공 심화 과목 이수",
      "학부연구생(신호전달실험실) 활동을 통한 분자생물학 실험 및 논문 분석 트레이닝",
      "의학 및 바이오 테크놀로지의 학문적 기초 확립"
    ]
  },
  {
    schoolKo: "정의여자고등학교",
    schoolEn: "Jeongui Girls' High School",
    period: "2015.03 ~ 2018.02 (졸업)",
    location: "서울, 대한민국"
  }
];

export const experienceData: ExperienceItem[] = [
  {
    companyKo: "유머스트알엔디 (UMUST R&D)",
    companyEn: "UMUST R&D",
    roleKo: "사업부 인턴",
    roleEn: "Business Department Intern",
    period: "2025.09 ~ 2025.12",
    techStack: ["In vitro Assay", "WST-8 Efficacy", "DPPH/TPC", "FACS / HPLC", "Wound Healing", "Video Production", "Marketing Design"],
    highlightsKo: [
      "천연물 기반 화장품 및 의약품 원료 기전 분석 및 안전성 데이터 확보",
      "비임상 CRO 프로세스 보조 및 분자생물학적 분석 장비 핸들링 역량 강화",
      "연구 성과의 상업적 가치 제고를 위한 사내 마케팅 및 디자인 프로젝트 총괄"
    ],
    highlightsEn: [
      "Analyzed biological mechanisms and secured safety data for natural cosmetics/pharma ingredients",
      "Assisted in non-clinical CRO workflows and operated key molecular biology/chemistry analytical instruments",
      "Directed corporate marketing videos and designed research posters to enhance commercial value"
    ],
    detailsKo: [
      {
        title: "코스메슈티컬 원료 개발 및 기전 분석",
        items: [
          "홍삼, 갈락토미세스, 티트리, 병풀 등 천연물 유래 유효 성분의 피부 장벽 개선 영향 관련 문헌 조사 및 학술적 검토 진행",
          "In vitro 상에서 WST-8 세포 독성 시험(Cytotoxicity Assay)을 수행하여 원료의 생체 안전성 데이터 검증",
          "항산화능 측정(DPPH, TPC) 및 Wound healing assay를 단독/공동 수행하여 세포 증식 및 이동(Migration) 유효성 데이터 도출"
        ]
      },
      {
        title: "위탁비임상시험 보조 및 기기 운용",
        items: [
          "FACS(유세포분석), ICC(면역세포화학), HPLC(고성능액체크로마토그래피) 등 고사양 분자생물학 및 분석 화학 장비 운용 실무 보조",
          "CRO 파트의 비임상 실험 프로세스를 실시간 밀착 보조하며 전반적인 신약개발 전단계(Discovery~Preclinical) 이해도 제고"
        ]
      },
      {
        title: "마케팅 및 사내 홍보 기획",
        items: [
          "연구 자료 및 천연물 기전을 알기 쉽게 가공한 홍보 포스터 디자인/제작 총괄",
          "기업 IR 및 서비스 브랜딩을 위한 사내 홍보 영상 기획, 구성, 촬영 및 편집 총괄"
        ]
      }
    ],
    detailsEn: [
      {
        title: "Cosmeceutical Ingredient Development & Mechanism Analysis",
        items: [
          "Conducted literature reviews and academic audits on natural active ingredients (Red Ginseng, Galactomyces, Tea Tree, Centella) for skin barrier repair.",
          "Verified biological safety profiles by performing in vitro WST-8 cytotoxicity assays.",
          "Measured antioxidant capacities (DPPH, TPC) and conducted wound healing assays to evaluate cell proliferation and migration kinetics."
        ]
      },
      {
        title: "Non-Clinical Trial (CRO) Assistance & Instrumentation",
        items: [
          "Assisted in operating high-end analytical chemistry and molecular biology platforms including FACS, ICC, and HPLC.",
          "Observed and assisted non-clinical validation pipelines, deepening functional understanding of the early drug development value chain."
        ]
      },
      {
        title: "Marketing & Corporate PR",
        items: [
          "Conceptualized and produced scientific marketing posters that translated complex molecular mechanisms into digestible business visuals.",
          "Directed, shot, and edited corporate promotional videos to enhance brand equity and IR messaging."
        ]
      }
    ]
  },
  {
    companyKo: "한국과학기술연구원 (KIST)",
    companyEn: "Korea Institute of Science and Technology (KIST)",
    roleKo: "생체분자인식연구센터 인턴",
    roleEn: "Biomolecular Recognition Research Center Intern",
    period: "2024.01 ~ 2024.02",
    techStack: ["Photothermal PCR", "Nanoparticles", "Reagent Preparation", "Data Analysis", "Academic Audit"],
    highlightsKo: [
      "광열(Photothermal) 반응 및 나노기술을 접목한 신속 분자 진단(PCR) 시스템 최적화 참여",
      "국가 연구기관 특유의 고도화된 연구 프로토콜 이수 및 데이터 관리 체계 습득",
      "학술 문헌 데이터베이스 마이닝을 통한 신규 연구 아이디어 기획 및 가치 타당성 검토"
    ],
    highlightsEn: [
      "Supported photothermal-based ultra-fast PCR and nanoparticle-driven amplification optimization",
      "Acquired advanced public research institute data management practices and experimental protocols",
      "Mined literature databases to assist in feasibility audits and strategic brainstorming for new molecular diagnostic routes"
    ],
    detailsKo: [
      {
        title: "차세대 분자 진단 기술 연구 보조",
        items: [
          "광열 반응(Photothermal) 기반 초고속 PCR 및 금/탄소 나노 파티클(Nanoparticles)을 활용한 PCR 증폭 효율 및 열전도율 최적화 공정 학습",
          "특정 파장의 레이저/빛이 열에너지로 즉각 전환되는 물리화학적 유전자 증폭 메커니즘을 분석하고, 시료 준비 및 반응 조건 설정 보조",
          "나노 파티클의 첨가 농도가 PCR의 특이도(Specificity)와 민감도(Sensitivity)에 미치는 영향 분석을 위한 정밀 시약 조제 및 기초 통계 데이터 정리",
          "글로벌 최신 분자 진단 연구 논문(Review & Research Paper) 학술 검토를 기반으로 한 신규 연구 파이프라인 기획 세션 참여"
        ]
      }
    ],
    detailsEn: [
      {
        title: "Next-Generation Molecular Diagnostics Research Support",
        items: [
          "Studied high-speed photothermal PCR and amplification optimization methods utilizing functional nanoparticles to improve thermal conductivity and specificity.",
          "Coordinated laser-to-heat physics-based amplification experiments, assisting in sample prep and parameter configuration.",
          "Formulated nano-reagents and cataloged statistical data assessing the impact of nanoparticle concentrations on PCR specificity and limit of detection (LoD).",
          "Reviewed state-of-the-art molecular diagnostic patents and academic reviews to support preliminary feasibility analysis for pipeline expansion."
        ]
      }
    ]
  },
  {
    companyKo: "투엘미디어 (2L Media)",
    companyEn: "2L Media",
    roleKo: "제작부 사원 (조연출)",
    roleEn: "Assistant Director, Production Department",
    period: "2020.11 ~ 2021.12",
    techStack: ["Video Editing", "Content Directing", "Scripting", "Scheduling & Logistics", "Broadcasting Operations"],
    highlightsKo: [
      "SBS 모닝와이드, SBS 스페셜 등 메이저 지상파 미디어 콘텐츠 제작 총괄 보조",
      "다양한 이해관계자가 얽힌 방송 현장에서의 스케줄 조율 및 커뮤니케이션 조율력 극대화",
      "기획 구성안 작성부터 촬영, 가편집, 종합 편집, 자막 구성 등 영상 제작 전공정 총괄 관리"
    ],
    highlightsEn: [
      "Assisted directing major terrestrial broadcast programs including SBS 'Morning Wide' and SBS Specials",
      "Maximized high-stakes communication and project management skills coordinating diverse media stakeholders",
      "Managed full lifecycle of video content: script drafting, casting, location scouting, rough editing, and post-production"
    ],
    detailsKo: [
      {
        title: "지상파 시사교양 및 다큐멘터리 제작",
        items: [
          "SBS '모닝와이드', SBS 스페셜 '육채전쟁', '어느 쌍둥이 자매의 기적' 등 전국 송출 대형 방송 프로그램 제작진 참여",
          "프로그램 주제 선정을 위한 리서치 및 구성안 기획, 제작 일정 조율 및 촬영 현장 안전/진행 관리 총괄",
          "영상 후반 작업(가편집, 예고편 편집, 자막 작성 및 이펙트 삽입)을 담당하며 대중적 메시지 가공 및 미디어 연출력 확보"
        ]
      }
    ],
    detailsEn: [
      {
        title: "Terrestrial TV Current Affairs & Documentary Production",
        items: [
          "Participated as an Assistant Director in nationwide SBS prime-time features and deep documentaries.",
          "Conducted intensive investigative research, drafted shoot structures, coordinated crew logistics, and managed field execution under strict deadlines.",
          "Executed advanced post-production routines (rough editing, teaser marketing cuts, captions, effects) to capture target audience engagement."
        ]
      }
    ]
  }
];

export const researchData: ResearchItem[] = [
  {
    titleKo: "건국대학교 신호전달실험실 학부연구생",
    titleEn: "Konkuk University Signal Transduction Lab Researcher",
    roleKo: "학부연구생",
    roleEn: "Undergraduate Researcher",
    period: "2024.03 ~ 2024.07",
    summaryKo: "PRMT6(Protein Arginine Methyltransferase 6) 유전자가 식물의 가뭄, 고염분 등 환경 스트레스 저항 반응에 미치는 생화학적 기전을 연구하였습니다.",
    summaryEn: "Investigated the biochemical mechanisms of PRMT6 (Protein Arginine Methyltransferase 6) in plant response and tolerance to abiotic environmental stresses (drought, high salinity).",
    achievementsKo: [
      "형질전환(Transgenic) 종자 파종 및 발아 제어, 식물체 육성 및 개체별 스트레스 조건 실험 진행",
      "잎 조직에서 Genomic DNA를 분리하여 PCR 및 전기영동(Gel Electrophoresis)을 통해 유전자 삽입 여부 검증",
      "연구 전반의 논리적 고리를 엮어 서론-재료및방법-결과-고찰 구조의 논문 형식 학술 보고서 단독 완성"
    ],
    achievementsEn: [
      "Cultivated transgenic plant seeds, controlled germination kinetics, and administered customized abiotic stress profiles.",
      "Extracted Genomic DNA from leaf tissues and verified transgenic insertion and transcription profiles via PCR and Gel Electrophoresis.",
      "Authored a comprehensive, paper-format scientific report detailing the introduction, materials/methods, results, and discussion of PRMT6 pathways."
    ],
    category: "research",
    tags: ["Plant Genetics", "Genomic DNA", "PCR/Electrophoresis", "Academic Writing"]
  },
  {
    titleKo: "바이오 학술 동아리 'PRIMER'",
    titleEn: "Bio-Academic Alliance 'PRIMER'",
    roleKo: "학술 부원",
    roleEn: "Academic Board Member",
    period: "2022.09 ~ 2024.06",
    summaryKo: "최신 분자의학 및 바이오의약품 트렌드를 추적하고 논문 심층 분석과 학술 발표를 통해 바이오 산업 지식을 심화하였습니다.",
    summaryEn: "Tracked cutting-edge molecular medicine and biopharmaceutical pipelines; refined scientific communication via paper auditing and poster presentations.",
    achievementsKo: [
      "알츠하이머 발병 원인 물질인 '타우 단백질(Tau protein)' 표적 치료 메커니즘 분석 및 세미나 발표",
      "항체-약물 접합체(ADC), 이중항체 등 차세대 바이오의약품의 최신 논문 데이터(Figure) 정밀 교차 검증 및 학술 포스터 제작",
      "동아리 정기 학술제에서 바이오의약품 분석 자료의 대표 연사로 선정되어 우수 발표 수행"
    ],
    achievementsEn: [
      "Audited therapeutic strategies targeting 'Tau protein' aggregates in Alzheimer's Disease and presented clinical mechanisms in open seminars.",
      "Cross-analyzed scientific figures and clinical data from top journals on Antibody-Drug Conjugates (ADCs) and bispecific antibodies to design scientific infographics.",
      "Selected as the keynote presenter at the annual Bio-symposium, winning praise for clear visual delivery of clinical data."
    ],
    category: "club",
    tags: ["Biologics Research", "Tau Protein", "ADC & Bispecifics", "Scientific Presenter"]
  },
  {
    titleKo: "건국대학교 락밴드 동아리 'AQUI'",
    titleEn: "Rock Band Coalition 'AQUI'",
    roleKo: "홍보부장 및 보컬",
    roleEn: "PR Director & Vocalist",
    period: "2022.03 ~ 2025.01",
    summaryKo: "동아리의 공식 아이덴티티 수립과 대외 홍보 캠페인을 기획·주도하며 팀워크와 리더십을 발휘하였습니다.",
    summaryEn: "Headed brand marketing and digital PR strategies for major university showcase gigs, cultivating strong team synergy and operational leadership.",
    achievementsKo: [
      "홍보부장으로서 연간 정기 공연 대외 홍보 전략 수립 및 인스타그램 공식 채널 운영 (도달률 150% 성장 견인)",
      "공연 컨셉 포스터 기획/디자인 및 서울 주요 대학가 오프라인 배포 총괄",
      "타 대학 및 동아리 협업 콘서트 기획, 공연장 무대 기자재 공유/렌탈 예산 조율 및 계약 실무 협상 주도"
    ],
    achievementsEn: [
      "Formulated promotional roadmaps for major concerts and curated official Instagram content, boosting engagement metric by 150%.",
      "Designed, printed, and oversaw offline distribution of all promotional posters across major Seoul university hubs.",
      "Co-produced joint inter-collegiate rock festivals and negotiated logistics, equipment leasing, and budget allocation contracts."
    ],
    category: "leadership",
    tags: ["Brand Marketing", "SNS Operations", "Logistics & Budgeting", "Interpersonal Negotiation"]
  }
];

export const trainingData: TrainingItem[] = [
  {
    titleKo: "바이오의약품 일반",
    titleEn: "Introduction to Biopharmaceuticals",
    institutionKo: "연세대학교 K-NIBRT 교육센터 (국가공인 교육기관)",
    institutionEn: "Yonsei University K-NIBRT Education Center",
    period: "2026.01 ~ 2026.02",
    curriculumKo: [
      "제약바이오 산업 트렌드 및 약사법 기반 규제 가이드라인 완벽 이수",
      "GMP(의약품 제조 및 품질관리기준) 기반 QA(품질보증) 및 QC(품질관리) 시스템의 프로세스 이해",
      "원핵세포(E.coli) 및 진핵세포(CHO) 기반 재조합 단백질 발현 메커니즘, Upstream(배양) 및 Downstream(정제) 공정 분석 및 데이터 정량화",
      "세포·유전자 치료제(CGT), mRNA, ADC(항체-약물 접합체), 이중항체 등 차세대 모달리티 품질분석법 습득",
      "무균 공정(Aseptic processing), 오염제거 및 살균 기술, 바이오클린룸(Grade A-D) 및 HVAC 시스템 설계 실무 지식"
    ],
    curriculumEn: [
      "Acquired comprehensive knowledge on pharma industry trends and Pharmaceutical Affairs Act regulatory pathways.",
      "Deciphered GMP-compliant Quality Assurance (QA) & Quality Control (QC) operational loops.",
      "Analyzed recombinant protein expression in prokaryotic (E. coli) and eukaryotic (CHO) platforms, covering upstream culture and downstream purification kinetics.",
      "Studied advanced analytical techniques for next-gen modalities including Cell & Gene Therapies (CGT), mRNA, ADCs, and bispecific antibodies.",
      "Gained critical operational knowledge on aseptic processing, decontamination/sterilization, cleanrooms (Grade A-D), and HVAC mechanics."
    ]
  },
  {
    titleKo: "의약품의 규제와 안전관리",
    titleEn: "Pharmaceutical Regulation & Safety Management",
    institutionKo: "연세대학교 K-NIBRT 교육센터 (국가공인 교육기관)",
    institutionEn: "Yonsei University K-NIBRT Education Center",
    period: "2026.01 ~ 2026.02",
    curriculumKo: [
      "국내외 백신 연구개발 동향, 백신의 안전성/유효성/품질 가이드라인 및 KP/USP/EP/JP 약전 개요 활용 기술 이수",
      "임상시험승인(IND) 및 품목허가승인(BLA/NDA)을 위한 CMC(화학, 제조, 품질관리) 인허가 전략 수립 및 제출 문서 작성 분석",
      "비임상 약리학·독성학(GLP) 연구 설계, 글로벌 임상시험 동향 및 ICH GCP(E6)·국내 임상 규제 가이드라인 실무 파악",
      "식약처 허가 심사 프로세스(안전성·유효성·임상·GMP), 신속심사제도, 국가출하승인제도 및 의약품 허가-특허 연계제도 학습",
      "국민건강보험제도(NHIS) 기반 의약품 보험급여 등재, 건강기술평가(HTA) 및 시판 후 약물감시(PV) 부작용 대응 체계 분석"
    ],
    curriculumEn: [
      "Mastered global vaccine R&D, safety/efficacy metrics, and the practical application of international pharmacopoeias (KP, USP, EP, JP).",
      "Deconstructed regulatory dossiers for IND and BLA/NDA applications, focusing on strategic CMC (Chemistry, Manufacturing, and Controls) architecture.",
      "Evaluated non-clinical toxicology (GLP) models, clinical development phases, and compliance requirements under ICH GCP (E6) and MFDS guidelines.",
      "Studied regulatory review pipelines, Fast-Track tracks, National Lot Release systems, and Patent Linkage systems.",
      "Analyzed NHIS drug listing processes, Health Technology Assessments (HTA), and post-marketing surveillance (Pharmacovigilance, PV) systems."
    ]
  },
  {
    titleKo: "AI 특화 직무교육 (MVP 웹서비스 프로토타입 개발)",
    titleEn: "AI-Specialized Job Training (MVP Web Service Prototype Development)",
    institutionKo: "서울청년센터 강북",
    institutionEn: "Seoul Youth Center Gangbuk",
    period: "2026.01 ~ 2026.02",
    curriculumKo: [
      "전통적 폭포수(Waterfall) 개발 체계와 최신 AI 기반 초고속 애자일(Agile) MVP 개발 트렌드 학습",
      "Google AI Studio 및 Cursor editor를 활용하여 자연어 기반의 기획안을 작동하는 실제 웹서비스 MVP 코드로 구현하는 실무 훈련",
      "공공데이터 API 호출 및 JSON 파싱, 이메일/보고서 및 업무용 PPT 슬라이드 자동 생성 자동화 파이프라인 구축",
      "Git & GitHub 기반 형상 관리 및 Vercel/Cloud 배포 실습 수행"
    ],
    curriculumEn: [
      "Compared traditional waterfall engineering frameworks with modern AI-assisted rapid Agile MVP development cycles.",
      "Developed fully operational web prototypes from natural-language specs using Google AI Studio and Cursor.",
      "Integrated public web APIs, parsed JSON streams, and built automated workflows generating business reports/PPT slides.",
      "Performed source version control via Git & GitHub and completed live web deployment workflows using Vercel."
    ]
  }
];

export const certificationData: CertificationItem[] = [
  {
    nameKo: "TOEIC",
    nameEn: "TOEIC (Test of English for International Communication)",
    scoreOrDetail: "960점 (최상위 비즈니스 영어 역량)",
    date: "2026.06.28",
    category: "Language"
  },
  {
    nameKo: "OPIc",
    nameEn: "OPIc (Oral Proficiency Interview by Computer)",
    scoreOrDetail: "Intermediate High (IH) (자유로운 영어 회화 및 피칭 가능)",
    date: "2026.03.13",
    category: "Language"
  },
  {
    nameKo: "컴퓨터활용능력 2급",
    nameEn: "Computer Literacy (Grade 2)",
    scoreOrDetail: "대한상공회의소 (데이터 관리 및 엑셀 사무 능력 검증)",
    date: "2026.07.07",
    category: "IT"
  },
  {
    nameKo: "Google Analytics Certification",
    nameEn: "Google Analytics Certification",
    scoreOrDetail: "구글 공인 데이터 분석 및 웹로그 트래픽 트래킹 기술 이수",
    date: "2026.05.06",
    category: "Marketing"
  }
];

export const bdStrategies: BDStrategyDeal[] = [
  {
    id: "adc-out-licensing",
    titleKo: "차세대 ADC 후보물질 글로벌 기술 수출 (Out-Licensing)",
    titleEn: "Global Out-Licensing of a Next-Gen ADC Oncology Candidate",
    descriptionKo: "항체-약물 접합체(ADC) 후보물질의 비임상 데이터를 패키징하여 글로벌 빅파마에 기술 수출을 타겟팅하는 가상의 사업개발 딜입니다.",
    descriptionEn: "Packaging preclinical candidate efficacy datasets of an Antibody-Drug Conjugate (ADC) to target multi-million dollar global big pharma out-licensing deals.",
    strategyKo: [
      "과학적 깊이: PRIMER 동아리에서 다진 ADC 링커-페이로드 결합 기전 분석 역량을 기반으로, 타사 대비 우월한 링커 안전성 Figure 데이터 부각",
      "규제과학(RA) 융합: K-NIBRT에서 이수한 CMC 문서 필수 구비 항목을 선제 검토하여 IND 허가 가능성이 매우 높은 클린 패키지로 자산화",
      "글로벌 비즈니스: TOEIC 960/OPIc IH 영어 피칭 능력을 활용하여 글로벌 타겟 빅파마 리스트를 분류하고 영문 티저(Teaser Deck) 직접 작성 및 화상 미팅 조율",
      "미디어 시각화: 2L Media 조연출 경험을 살려, 물질의 종양 살상 작용 기전(MoA)을 고품질 3D 모션 그래픽/영상 티저로 제작해 해외 파트너사의 이목을 사로잡음"
    ],
    strategyEn: [
      "Scientific Depth: Emphasize linker stability metrics based on in-depth ADC linker-payload mechanisms studied during PRIMER alliance.",
      "Regulatory Alignment: Pre-audit critical CMC dossier checkpoints acquired via K-NIBRT to present a highly-translatable asset with clear IND pathways.",
      "Global Outreach: Apply 960 TOEIC / IH OPIc pitching skills to filter prospective big pharma buyers, drafting technical teasers and presenting in English.",
      "Media Visualization: Leverage 2L Media directing skills to craft a highly compelling 3D mechanism-of-action (MoA) video teaser to command attention."
    ],
    matchingCompetenciesKo: ["의생명공학 학술 지식", "K-NIBRT 규제 지식 (CMC)", "글로벌 비즈니스 영어 피칭", "스토리텔링 기반 시각화 자료 기획"],
    matchingCompetenciesEn: ["Biomedical Tech Audit", "K-NIBRT CMC Acumen", "Business English Pitching", "Story-driven Visual Packaging"]
  },
  {
    id: "cosmeceutical-licensing",
    titleKo: "천연물 유래 고기능성 코스메슈티컬 원료 독점 도입 (In-Licensing)",
    titleEn: "Exclusive In-Licensing of High-Efficacy Bio-Cosmeceutical Active Ingredients",
    descriptionKo: "해외 우수 천연물 원료의 피부 침투 및 항산화 효능 데이터를 정밀 검증하여 국내 독점 유통 및 공동 제품화를 추진하는 가상의 딜입니다.",
    descriptionEn: "In-licensing high-potency raw extracts from international research partners by scientifically validating efficacy datasets for domestic co-branding.",
    strategyKo: [
      "원료 신뢰성 검증: 유머스트알엔디 인턴 중 단독/공동 수행한 WST-8 세포독성 시험, DPPH 항산화능 정량 평가 프로토콜을 그대로 대입하여 상대방 원료의 학술 데이터 실사(Due Diligence) 수행",
      "계약 조건 협상: AQUI 동아리에서 타 대학 연합 축제를 조율하며 다진 조율력으로 미팅을 부드럽게 이끌고, 상호 윈-윈할 수 있는 계약 조항(로열티 및 선급금 비율) 마일스톤 조율 보조",
      "데이터 분석 및 마케팅: 구글 애널리틱스(GA) 데이터 역량을 기반으로 고기능성 스킨케어 타겟 고객층의 온라인 유입 키워드 트렌드를 분석하여 인라이센싱 원료의 시장 흥행성 수치화"
    ],
    strategyEn: [
      "Scientific Due Diligence: Apply in vitro cytotoxicity (WST-8) and antioxidant (DPPH/TPC) assays practiced at UMUST R&D to thoroughly verify the licensor's raw data.",
      "Deal Co-ordination: Deploy negotiation and budget coordination tactics learned while co-producing joint AQUI university music festivals to mediate milestone negotiations.",
      "Data-Driven Marketing: Utilize Google Analytics (GA) skills to forecast online keyword traffic for functional skincare, proving market demand prior to finalize import."
    ],
    matchingCompetenciesKo: ["In vitro 실험 실사 역량", "협상 및 계약 조율 능력", "구글 애널리틱스 트렌드 분석"],
    matchingCompetenciesEn: ["In vitro Due Diligence", "Logistics & Deal Co-ordination", "Google Analytics Market Tracking"]
  },
  {
    id: "vaccine-ind-strategy",
    titleKo: "mRNA 백신 신속 인허가 (IND) 및 국가 규제 전략 수립",
    titleEn: "mRNA Vaccine Regulatory Submission (IND) & Licensing Defense Strategy",
    descriptionKo: "신규 발병 감염병 mRNA 백신 파이프라인의 식약처 신속심사 신청 및 보건복지부 특허-허가 연계, 보험 급여 등재를 조기에 확보하는 인허가 융합형 BD 프로젝트입니다.",
    descriptionEn: "Formulating regulatory pathways for novel mRNA vaccine INDs using fast-track options, patent-linkage checks, and early insurance listing projections.",
    strategyKo: [
      "규제과학 기반 기획: K-NIBRT '의약품의 규제와 안전관리' 교육에서 완벽히 수득한 식약처 신속심사 가이드라인 및 국가출하승인제도를 기획안 전면에 반영",
      "특허-허가 대응: 제약사의 최대 리스크인 특허 침해 방지를 위해 국내외 의약품 허가-특허 연계 시스템을 선제 분석하여 특허 소송 방지 조건 설계 보조",
      "경제성 입증: 국민건강보험제도(NHIS) 및 건강기술평가(HTA) 프로세스 이해를 바탕으로 백신의 경제성 평가 및 시판 후 부작용 관리(PV) 프레임워크를 선제 제안하여 최종 라이센싱 매력도 극대화",
      "AI 생산성 극대화: 서울청년센터 강북에서 이수한 AI 자동화 기술로 규제 관련 최신 FDA/EMA 가이드라인 100여 개를 신속하게 스크랩·JSON 요약하여 규제 테이블 구축 시간 80% 단축"
    ],
    strategyEn: [
      "Regulatory Fast-Tracking: Leverage K-NIBRT regulatory coursework to map pathways under the Korean MFDS fast-track and National Lot Release frameworks.",
      "Patent-Linkage Management: Safeguard assets against intellectual property disputes by analyzing patent-linkage databases early in the candidate vetting phase.",
      "Economic Viability: Structure pharmacovigilance (PV) and Health Technology Assessment (HTA) risk-benefit frameworks to optimize national insurance pricing.",
      "AI Acceleration: Employ custom script automation from AI training to auto-parse, translate, and synthesize 100+ FDA/EMA guidelines, cutting research times by 80%."
    ],
    matchingCompetenciesKo: ["K-NIBRT 규제지식 (약사법)", "임상 규제 가이드라인 분석력", "보험 급여 & PV 프로세스 설계", "AI 활용 다량 규제 데이터 자동 크롤링"],
    matchingCompetenciesEn: ["Regulatory Science (Pharma Act)", "Clinical Compliance (GCP)", "HTA & Pharmacovigilance Design", "AI-driven Guideline Synthesis"]
  }
];
