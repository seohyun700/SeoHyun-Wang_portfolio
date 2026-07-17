import React from "react";
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, Star, Video, Pipette, Zap } from "lucide-react";
import { experienceData } from "../data";

interface ExperienceProps {
  lang: "ko" | "en";
}

export default function Experience({ lang }: ExperienceProps) {
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(0); // Default open first

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  // Helper icons to represent different fields
  const getCompanyIcon = (companyEn: string) => {
    if (companyEn.includes("UMUST")) {
      return <Pipette className="w-5 h-5 text-indigo-600" />;
    } else if (companyEn.includes("KIST")) {
      return <Zap className="w-5 h-5 text-cyan-500" />;
    } else {
      return <Video className="w-5 h-5 text-violet-500" />;
    }
  };

  return (
    <section id="experience" className="py-20 bg-slate-50 relative">
      <div className="absolute bottom-0 left-[10%] w-80 h-80 rounded-full bg-cyan-50/50 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-12">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-600">
            02. Professional Experience
          </h2>
          <p className="font-sans text-3xl font-extrabold text-slate-900 mt-1 tracking-tight">
            {lang === "ko" ? "실무 경력 및 인턴십" : "Work History & Internships"}
          </p>
          <div className="w-12 h-1 bg-cyan-500 mt-3 rounded-full" />
        </div>

        {/* Timeline Grid */}
        <div className="space-y-6">
          {experienceData.map((exp, idx) => {
            const isExpanded = expandedIndex === idx;
            const companyName = lang === "ko" ? exp.companyKo : exp.companyEn;
            const roleName = lang === "ko" ? exp.roleKo : exp.roleEn;
            const highlights = lang === "ko" ? exp.highlightsKo : exp.highlightsEn;
            const details = lang === "ko" ? exp.detailsKo : exp.detailsEn;

            return (
              <div
                key={idx}
                id={`exp-card-${idx}`}
                className="bg-white rounded-3xl border border-slate-100 shadow-md shadow-slate-100/50 overflow-hidden hover:shadow-xl hover:border-slate-200/50 transition-all duration-300"
              >
                {/* Header Row */}
                <div 
                  onClick={() => toggleExpand(idx)}
                  className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer select-none group"
                >
                  <div className="flex items-start space-x-4">
                    {/* Icon bubble */}
                    <div className="w-12 h-12 bg-slate-50 group-hover:bg-indigo-50/50 rounded-2xl flex items-center justify-center border border-slate-100/80 shrink-0 transition-colors">
                      {getCompanyIcon(exp.companyEn)}
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                        <h3 className="font-sans font-extrabold text-lg sm:text-xl text-slate-900 leading-tight">
                          {companyName}
                        </h3>
                        {idx === 0 && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
                            {lang === "ko" ? "최신" : "Latest"}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 font-medium">
                        <span className="text-slate-800 font-bold">{roleName}</span>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          <span>{lang === "ko" ? "서울" : "Seoul, KR"}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right side: Expand Button / Highlight pills */}
                  <div className="flex items-center justify-between md:justify-end gap-3 pt-3 md:pt-0 border-t border-slate-100 md:border-none">
                    <div className="hidden sm:flex flex-wrap gap-1 max-w-[280px] md:max-w-[400px]">
                      {exp.techStack.slice(0, 3).map((tech, tIdx) => (
                        <span key={tIdx} className="px-2.5 py-1 bg-slate-50 border border-slate-100 rounded-lg text-[9px] font-mono text-slate-600">
                          {tech}
                        </span>
                      ))}
                      {exp.techStack.length > 3 && (
                        <span className="px-1.5 py-1 bg-slate-50 rounded-lg text-[9px] font-mono text-slate-400">
                          +{exp.techStack.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 group-hover:text-indigo-600 group-hover:bg-indigo-50/50 transition-all">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </div>

                {/* Expanded Content Box */}
                {isExpanded && (
                  <div className="px-6 pb-8 sm:px-8 border-t border-slate-100/80 bg-slate-50/30">
                    
                    {/* Brief Highlights Summary */}
                    <div className="py-5 space-y-2">
                      <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-1.5">
                        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                        <span>{lang === "ko" ? "주요 성과 요약" : "Key Strengths & Deliverables"}</span>
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {highlights.map((hl, hlIdx) => (
                          <li key={hlIdx} className="p-4 bg-white rounded-xl border border-slate-100 shadow-xs flex items-start space-x-2.5">
                            <span className="w-5 h-5 bg-indigo-50/80 text-indigo-600 font-mono text-xs font-bold rounded-lg flex items-center justify-center shrink-0">
                              {hlIdx + 1}
                            </span>
                            <span className="font-sans text-[11px] font-semibold text-slate-700 leading-normal">
                              {hl}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Detailed Duties Breakdown */}
                    <div className="pt-4 border-t border-slate-100 space-y-6">
                      <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-slate-400">
                        {lang === "ko" ? "상세 업무 내역" : "Detailed Functional Breakdown"}
                      </h4>

                      <div className="space-y-6">
                        {details.map((detail, dIdx) => (
                          <div key={dIdx} className="space-y-2.5">
                            <h5 className="font-sans text-xs font-bold text-slate-900 flex items-center space-x-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                              <span>{detail.title}</span>
                            </h5>
                            
                            <ul className="space-y-2 pl-4 border-l border-slate-200">
                              {detail.items.map((item, itemIdx) => (
                                <li key={itemIdx} className="font-sans text-xs text-slate-600 leading-relaxed">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Full Tech / Skill list for this company */}
                    <div className="mt-8 pt-5 border-t border-slate-100">
                      <h4 className="font-sans text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2.5">
                        {lang === "ko" ? "적용 역량 및 키워드" : "Demonstrated Capabilities"}
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.techStack.map((tech, tIdx) => (
                          <span key={tIdx} className="px-3 py-1 bg-white border border-slate-100 text-slate-700 text-[10px] font-mono font-medium rounded-full shadow-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
