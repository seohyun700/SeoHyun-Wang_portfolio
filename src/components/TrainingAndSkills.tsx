import React from "react";
import { Award, CheckCircle2, ChevronRight, BookOpen, ShieldCheck, Languages, BrainCircuit } from "lucide-react";
import { trainingData, certificationData } from "../data";

interface TrainingAndSkillsProps {
  lang: "ko" | "en";
}

export default function TrainingAndSkills({ lang }: TrainingAndSkillsProps) {
  const [activeCourse, setActiveCourse] = React.useState<number>(0);

  return (
    <section id="training" className="py-20 bg-white relative">
      <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] rounded-full bg-indigo-50 opacity-60 glow-glow" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-12">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-indigo-600">
            03. Certifications & Training
          </h2>
          <p className="font-sans text-3xl font-extrabold text-slate-900 mt-1 tracking-tight">
            {lang === "ko" ? "직무 교육 및 어학·자격증" : "Professional Training & Credentials"}
          </p>
          <div className="w-12 h-1 bg-indigo-600 mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Professional Training Curriculum (K-NIBRT & AI) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-8">
              <span className="font-mono text-[9px] tracking-widest text-indigo-600 font-extrabold uppercase block mb-3">
                GOVERNMENT-ACCREDITED CURRICULUMS
              </span>
              <h3 className="font-sans text-xl font-bold text-slate-900 mb-6">
                {lang === "ko" ? "바이오의약품 전문 트레이닝 이력" : "Advanced Biopharma & AI Trajectories"}
              </h3>

              {/* Course Tabs (Aximo styled horizontal menu) */}
              <div className="flex flex-wrap gap-2 mb-6">
                {trainingData.map((train, idx) => {
                  const isActive = activeCourse === idx;
                  const title = lang === "ko" ? train.titleKo : train.titleEn;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveCourse(idx)}
                      id={`training-tab-${idx}`}
                      className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-indigo-600 text-white shadow-md shadow-indigo-100"
                          : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      {idx === 0 && "🔬 "}
                      {idx === 1 && "⚖️ "}
                      {idx === 2 && "🤖 "}
                      {title.length > 20 ? title.substring(0, 18) + "..." : title}
                    </button>
                  );
                })}
              </div>

              {/* Active Tab Details */}
              <div className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h4 className="font-sans font-extrabold text-base text-slate-900">
                      {lang === "ko" ? trainingData[activeCourse].titleKo : trainingData[activeCourse].titleEn}
                    </h4>
                    <span className="inline-flex items-center px-2.5 py-1 bg-slate-50 border border-slate-100 rounded-lg font-mono text-[10px] text-slate-500 font-bold shrink-0 self-start sm:self-center">
                      {trainingData[activeCourse].period}
                    </span>
                  </div>
                  
                  <p className="font-sans text-xs font-bold text-indigo-600 mt-1">
                    {lang === "ko" ? trainingData[activeCourse].institutionKo : trainingData[activeCourse].institutionEn}
                  </p>
                </div>

                <div className="space-y-3.5 border-t border-slate-100 pt-5">
                  <h5 className="font-sans text-xs font-bold uppercase tracking-wider text-slate-400">
                    {lang === "ko" ? "세부 교육 내용 및 획득 역량" : "Acquired Skills & Syllabus"}
                  </h5>
                  
                  <div className="space-y-3">
                    {(lang === "ko" ? trainingData[activeCourse].curriculumKo : trainingData[activeCourse].curriculumEn).map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start space-x-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="font-sans text-xs text-slate-600 leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Languages, IT & Marketing Credentials */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Language Box (Prestige presentation) */}
            <div className="bg-linear-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-6 shadow-lg border border-slate-800 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-cyan-500/10 blur-xl" />
              
              <div className="relative z-10 space-y-4">
                <div className="flex items-center space-x-2 text-cyan-400">
                  <Languages className="w-5 h-5" />
                  <span className="font-mono text-[9px] tracking-widest font-extrabold uppercase">
                    GLOBAL COMMUNICATION
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="font-sans text-lg font-bold">
                    {lang === "ko" ? "글로벌 비즈니스 언어 능력" : "Global Business English"}
                  </h3>
                  <p className="font-sans text-xs text-slate-300 leading-relaxed">
                    {lang === "ko" 
                      ? "최상위 영어 성적을 기반으로 실무 인라이센싱/아웃라이센싱 계약 검토 및 해외 파트너사 메일 피칭이 완벽히 가능합니다."
                      : "With near-perfect English test scores, I am fully equipped to handle global licensing emails, pipeline pitches, and clinical summaries."}
                  </p>
                </div>

                <div className="pt-2 space-y-3">
                  {/* TOEIC */}
                  <div className="space-y-1">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-sans font-bold text-slate-200">TOEIC</span>
                      <span className="font-mono font-bold text-cyan-400">960 / 990</span>
                    </div>
                    <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-cyan-400 h-full w-[97%]" />
                    </div>
                  </div>

                  {/* OPIc */}
                  <div className="space-y-1">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-sans font-bold text-slate-200">OPIc Oral Speaking</span>
                      <span className="font-mono font-bold text-indigo-400">Intermediate High (IH)</span>
                    </div>
                    <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-indigo-400 h-full w-[85%]" />
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* IT & Marketing Certifications list */}
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6">
              <span className="font-mono text-[9px] tracking-widest text-indigo-600 font-extrabold uppercase block mb-3">
                IT & DATA MARKETING
              </span>
              <h3 className="font-sans text-base font-bold text-slate-900 mb-4">
                {lang === "ko" ? "기타 전문 자격증" : "Additional Credentials"}
              </h3>

              <div className="space-y-3">
                {certificationData.filter(c => c.category !== "Language").map((cert, cIdx) => (
                  <div key={cIdx} id={`cert-item-${cIdx}`} className="p-3 bg-white border border-slate-150/40 rounded-xl shadow-xs flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    
                    <div className="space-y-0.5">
                      <h4 className="font-sans text-xs font-bold text-slate-800 leading-tight">
                        {lang === "ko" ? cert.nameKo : cert.nameEn}
                      </h4>
                      <span className="font-mono text-[9px] text-slate-400 block pt-0.5">
                        {cert.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
