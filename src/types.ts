export interface Profile {
  nameKo: string;
  nameEn: string;
  taglineKo: string;
  taglineEn: string;
  contact: string;
  email: string;
  address: string;
}

export interface EducationItem {
  schoolKo: string;
  schoolEn: string;
  period: string;
  majorKo?: string;
  majorEn?: string;
  gpa?: string;
  location: string;
  details?: string[];
}

export interface ExperienceItem {
  companyKo: string;
  companyEn: string;
  roleKo: string;
  roleEn: string;
  period: string;
  highlightsKo: string[];
  highlightsEn: string[];
  techStack: string[];
  detailsKo: {
    title: string;
    items: string[];
  }[];
  detailsEn: {
    title: string;
    items: string[];
  }[];
}

export interface ResearchItem {
  titleKo: string;
  titleEn: string;
  roleKo: string;
  roleEn: string;
  period: string;
  summaryKo: string;
  summaryEn: string;
  achievementsKo: string[];
  achievementsEn: string[];
  category: "research" | "club" | "leadership";
  tags: string[];
}

export interface TrainingItem {
  titleKo: string;
  titleEn: string;
  institutionKo: string;
  institutionEn: string;
  period: string;
  curriculumKo: string[];
  curriculumEn: string[];
}

export interface CertificationItem {
  nameKo: string;
  nameEn: string;
  scoreOrDetail: string;
  date: string;
  category: "Language" | "IT" | "Marketing";
}

export interface BDStrategyDeal {
  id: string;
  titleKo: string;
  titleEn: string;
  descriptionKo: string;
  descriptionEn: string;
  strategyKo: string[];
  strategyEn: string[];
  matchingCompetenciesKo: string[];
  matchingCompetenciesEn: string[];
}
