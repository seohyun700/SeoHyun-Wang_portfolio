import React from "react";
import { GraduationCap, Award, Compass, Sparkles, BookOpen, Music, Microscope } from "lucide-react";
import { researchData } from "../data";

interface ResearchProps {
  lang: "ko" | "en";
}

export default function Research({ lang }: ResearchProps) {
  
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "research":
        return <Microscope className="w-5 h-5 text-cyan-600" />;
      case "club":
        return <BookOpen className="w-5 h-5 text-indigo-600" />;
      default:
        return <Music className="w-5 h-5 text-violet-600" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "research":
        return "bg-cyan-50 border-cyan-100 text-cyan-700";
      case "club":
        return "bg-indigo-50 border-indigo-100 text-indigo-700";
      default:
        return "bg-violet-50 border-violet-100 text-violet-700";
    }
  };

  return (
    <section id="research" className="py-20 bg-slate-50 relative">
      <div className="absolute top-[10%] left-[15%] w-72 h-72 rounded-full bg-violet-50 opacity-50 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-12">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-violet-600">
            04. Research & Extra-Curriculars
          </h2>
          <p className="font-sans text-3xl font-extrabold text-slate-900 mt-1 tracking-tight">
            {lang === "ko" ? "학술 연구 및 대표 활동" : "Research & Activities"}
          </p>
          <div className="w-12 h-1 bg-violet-500 mt-3 rounded-full" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {researchData.map((res, idx) => {
            const title = lang === "ko" ? res.titleKo : res.titleEn;
            const role = lang === "ko" ? res.roleKo : res.roleEn;
            const summary = lang === "ko" ? res.summaryKo : res.summaryEn;
            const achievements = lang === "ko" ? res.achievementsKo : res.achievementsEn;
            const icon = getCategoryIcon(res.category);
            const colorClass = getCategoryColor(res.category);

            return (
              <div
                key={idx}
                id={`research-card-${idx}`}
                className="bg-white rounded-3xl border border-slate-100 shadow-md shadow-slate-100/30 overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-slate-200/50 transition-all duration-300"
              >
                <div className="p-6 sm:p-8 space-y-6">
                  
                  {/* Category Pill and Period */}
                  <div className="flex justify-between items-center">
                    <span className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[10px] font-bold border ${colorClass}`}>
                      {icon}
                      <span>
                        {res.category === "research" ? (lang === "ko" ? "실험실 연구" : "Lab Research") : 
                         res.category === "club" ? (lang === "ko" ? "학술 동아리" : "Academic Club") : 
                         (lang === "ko" ? "동아리 리더십" : "Club Leadership")}
                      </span>
                    </span>
                    
                    <span className="font-mono text-[9px] text-slate-400 font-bold">
                      {res.period}
                    </span>
                  </div>

                  {/* Title & Role */}
                  <div className="space-y-1">
                    <h3 className="font-sans font-extrabold text-lg text-slate-900 leading-snug">
                      {title}
                    </h3>
                    <p className="font-sans text-xs text-indigo-600 font-semibold">
                      {role}
                    </p>
                  </div>

                  {/* Core Summary Paragraph */}
                  <p className="font-sans text-xs text-slate-500 leading-relaxed">
                    {summary}
                  </p>

                  {/* Actionable points */}
                  <div className="space-y-3 pt-4 border-t border-slate-100">
                    <h4 className="font-sans text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      {lang === "ko" ? "핵심 공헌 및 결과" : "Key Contribution & Results"}
                    </h4>
                    
                    <ul className="space-y-2">
                      {achievements.map((ach, achIdx) => (
                        <li key={achIdx} className="font-sans text-[11px] text-slate-600 leading-normal pl-3 relative">
                          <span className="absolute left-0 top-1.5 w-1 h-1 rounded-full bg-slate-400" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Tags Footer */}
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex flex-wrap gap-1">
                  {res.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 bg-white border border-slate-150 rounded text-[9px] font-mono text-slate-500"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
