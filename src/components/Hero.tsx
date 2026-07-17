import React from "react";
import { ArrowDown, Award, Globe2, BookOpen, Database, Play } from "lucide-react";
import { profileData } from "../data";

interface HeroProps {
  lang: "ko" | "en";
}

export default function Hero({ lang }: HeroProps) {
  const imageSrc = "/src/assets/images/biotech_hero_banner_1784271871588.jpg";

  const handleScrollToNext = () => {
    const nextSec = document.getElementById("profile");
    if (nextSec) {
      nextSec.scrollIntoView({ behavior: "smooth" });
    }
  };

  const statBadges = [
    {
      valueKo: "960 / IH",
      valueEn: "960 / IH",
      labelKo: "글로벌 비즈니스 어학",
      labelEn: "Global Business English",
      descKo: "TOEIC 960점 & OPIc IH 보유",
      descEn: "TOEIC 960 & OPIc IH",
      icon: Globe2,
      color: "from-cyan-500 to-blue-500",
      bgLight: "bg-cyan-50/50"
    },
    {
      valueKo: "K-NIBRT",
      valueEn: "K-NIBRT",
      labelKo: "규제과학 & CMC 이수",
      labelEn: "Regulatory & CMC",
      descKo: "연세대 바이오의약품 전문 과정",
      descEn: "Advanced Quality & IND Training",
      icon: Award,
      color: "from-indigo-500 to-violet-500",
      bgLight: "bg-indigo-50/50"
    },
    {
      valueKo: "사업 개발 및 데이터 분석 경험",
      valueEn: "BD & Data Analysis Experience",
      labelKo: "실무 경험 보유",
      labelEn: "Proven Practical Experience",
      descKo: "UMUST R&D 및 KIST 인턴십",
      descEn: "UMUST R&D and KIST Internships",
      icon: Database,
      color: "from-teal-500 to-emerald-500",
      bgLight: "bg-teal-50/50"
    }
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-slate-50/50">
      {/* Glow Mesh Background */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-200/30 glow-glow"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-200/20 glow-glow"></div>
      <div className="absolute top-[30%] right-[10%] w-[35%] h-[35%] rounded-full bg-violet-200/20 glow-glow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Two-Column Grid: Left (Typography), Right (Visual Showcase) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading, Subtitle, CTAs */}
          <div className="lg:col-span-7 space-y-8 text-center md:text-left">
            <div className="space-y-4">
              <h1 className="font-sans font-extrabold tracking-tight text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-[1.1] md:leading-[1.1]">
                {lang === "ko" ? (
                  <>
                    의생명공학 지식 역량과 <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 via-indigo-600 to-violet-600">
                      비즈니스 역량을 융합한
                    </span> <br />
                    제약 바이오 BD인재
                  </>
                ) : (
                  <>
                    Fusing Science & <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 via-indigo-600 to-violet-600">
                      Strategic Acumen
                    </span> <br />
                    for Biotech Growth
                  </>
                )}
              </h1>
              
              <p className="font-sans text-slate-600 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-2xl">
                {lang === "ko" ? profileData.taglineKo : profileData.taglineEn}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-3">
              <button
                onClick={handleScrollToNext}
                id="hero-cta-profile"
                className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold shadow-lg shadow-slate-300 hover:shadow-xl transition-all duration-200 cursor-pointer"
              >
                <span>{lang === "ko" ? "프로필 보기" : "View Profile"}</span>
                <ArrowDown className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => {
                  const bdSec = document.getElementById("bd-strategy");
                  if (bdSec) bdSec.scrollIntoView({ behavior: "smooth" });
                }}
                id="hero-cta-bd"
                className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 rounded-xl text-xs font-bold shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-indigo-500" />
                <span>{lang === "ko" ? "BD 가치 분석" : "BD Competency Audit"}</span>
              </button>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-4 border-t border-slate-100/80 flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-3">
              <div className="flex items-center space-x-2">
                <span className="font-mono text-xs font-extrabold text-indigo-600">GPA</span>
                <span className="font-sans text-xs font-bold text-slate-600">3.74 / 4.5</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-mono text-xs font-extrabold text-cyan-600">English</span>
                <span className="font-sans text-xs font-bold text-slate-600">TOEIC 960 | OPIc IH</span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Framed generated Image + overlay elements */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Background gradient glow behind card */}
              <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-cyan-500 to-indigo-600 opacity-20 blur-xl animate-pulse-slow"></div>
              
              {/* Main Visual Box */}
              <div className="relative glass-panel rounded-2xl p-3 shadow-2xl border border-white/50 overflow-hidden group">
                <div className="relative aspect-16/10 rounded-xl overflow-hidden bg-slate-900 shadow-inner">
                  <img
                    src={imageSrc}
                    alt="Biomedical Informatics and Digital Pipeline"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Glassmorphic Overlay Bar */}
                  <div className="absolute bottom-3 left-3 right-3 glass-panel-dark px-4 py-2.5 rounded-lg flex items-center justify-between text-white border border-white/10 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
                      <span className="font-mono text-[10px] tracking-widest text-emerald-400 uppercase font-bold">
                        ACTIVE PIPELINE
                      </span>
                    </div>
                    <span className="font-mono text-[9px] text-slate-300">
                      SYS: CONKUK-BIOMED_BD
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Decorative Stats Badge (Aximo style) */}
              <div className="absolute top-[-20px] right-[-15px] hidden sm:flex glass-panel rounded-xl p-3 shadow-lg border border-slate-100 max-w-[180px] animate-float">
                <div className="flex items-start space-x-2.5">
                  <div className="w-7 h-7 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 shadow-xs">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-mono text-[11px] font-extrabold text-slate-800 leading-none">K-NIBRT</h4>
                    <p className="font-sans text-[9px] text-slate-500 mt-0.5 leading-tight">
                      {lang === "ko" ? "국가공인 GMP·RA 이수" : "Gov-Accredited GMP & RA Certified"}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bento Grid: Core Strength Badges (Aximo Style) */}
        <div className="mt-20">
          <div className="text-center md:text-left mb-8">
            <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-slate-400">
              {lang === "ko" ? "핵심 강물 융합점" : "Core Competency Pillars"}
            </h3>
            <p className="font-serif text-xl sm:text-2xl text-slate-900 italic mt-1">
              {lang === "ko" 
                ? "제약·바이오 사업개발 실무에 즉시 대입 가능한 3대 핵심 기둥"
                : "The three Pillars optimized for Pharm/Biotech Business Development"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {statBadges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div
                  key={idx}
                  id={`hero-pillar-${idx}`}
                  className={`rounded-2xl p-6 bg-white border border-slate-100 shadow-md shadow-slate-100/50 hover:shadow-xl hover:border-slate-200/80 transition-all duration-300 relative overflow-hidden group`}
                >
                  {/* Subtle color spot in background */}
                  <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-5 group-hover:opacity-10 transition-opacity bg-linear-to-tr ${badge.color}`} />
                  
                  <div className="space-y-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white bg-linear-to-tr ${badge.color} shadow-md`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    
                    <div>
                      <span className="font-sans text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight block">
                        {lang === "ko" ? badge.valueKo : badge.valueEn}
                      </span>
                      <span className="font-sans text-xs font-bold text-slate-700 block mt-1">
                        {lang === "ko" ? badge.labelKo : badge.labelEn}
                      </span>
                      <span className="font-sans text-xs text-slate-500 block mt-1 leading-normal">
                        {lang === "ko" ? badge.descKo : badge.descEn}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
