import React from "react";
import { Mail, Phone, MapPin, Copy, Check, FileText, UserCheck, HelpCircle } from "lucide-react";
import { profileData } from "../data";

interface ProfileCardProps {
  lang: "ko" | "en";
}

export default function ProfileCard({ lang }: ProfileCardProps) {
  const [copiedText, setCopiedText] = React.useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const profileStats = [
    { labelKo: "학력", labelEn: "Education", valueKo: "건국대학교 의생명공학과 (3.74/4.5)", valueEn: "B.S. in Biomedical Engineering, Konkuk Univ." },
    { labelKo: "어학 역량", labelEn: "Languages", valueKo: "영어 최고 수준 (TOEIC 960점, OPIc IH)", valueEn: "Business English (TOEIC 960, OPIc IH)" },
    { labelKo: "희망 직무", labelEn: "Target Role", valueKo: "제약·바이오 사업개발 (BD)", valueEn: "Pharma/Biotech Business Development (BD)" },
    { labelKo: "전문 교육", labelEn: "Key Training", valueKo: "K-NIBRT 바이오의약품 일반 & 규제과학 수료", valueEn: "K-NIBRT Biologics & RA Certifications" }
  ];

  return (
    <section id="profile" className="py-20 bg-white relative">
      <div className="absolute top-0 right-[20%] w-72 h-72 rounded-full bg-indigo-50 opacity-50 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-12">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-indigo-600">
            01. Personal Profile
          </h2>
          <p className="font-sans text-3xl font-extrabold text-slate-900 mt-1 tracking-tight">
            {lang === "ko" ? "인적 사항 및 프로필" : "Who I Am"}
          </p>
          <div className="w-12 h-1 bg-indigo-600 mt-3 rounded-full" />
        </div>

        {/* Outer bento container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Block: Business Card design */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-3xl bg-linear-to-br from-slate-900 to-indigo-950 text-white shadow-xl relative overflow-hidden">
            {/* Glowing pattern overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.15),transparent_50%)]" />
            <div className="absolute inset-x-0 top-0 h-[1px] bg-white/15" />
            
            <div className="relative z-10 space-y-8">
              {/* Card Header */}
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-mono text-[9px] tracking-widest text-cyan-400 font-bold uppercase">
                    CANDIDATE DOSSIER
                  </span>
                  <h3 className="font-sans font-extrabold text-3xl tracking-tight mt-1">
                    {lang === "ko" ? profileData.nameKo : profileData.nameEn}
                  </h3>
                  <p className="font-sans text-xs text-slate-300 mt-1 font-medium">
                    {lang === "ko" ? "제약·바이오 사업개발 신입 지원자" : "Pharm/Biotech BD Applicant"}
                  </p>
                </div>
                
                <div className="w-14 h-14 rounded-xl overflow-hidden border border-white/10 shadow-lg flex-shrink-0 bg-slate-800">
                  <img
                    src="https://raw.githubusercontent.com/seohyun700/SeoHyun-Wang_portfolio/42b2b9eb4cb214a0048343a43555141f318eae66/%EC%99%95%EC%84%9C%ED%98%84%20%EC%A6%9D%EB%AA%85%EC%82%AC%EC%A7%84_23.12.20.jpg"
                    alt={lang === "ko" ? profileData.nameKo : profileData.nameEn}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Contact Lists */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                
                {/* Contact Number */}
                <div className="flex items-center justify-between group">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center text-slate-300 border border-white/5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-mono text-[9px] text-slate-400 leading-none">CONTACT</span>
                      <a href={`tel:${profileData.contact}`} className="font-sans text-xs font-semibold text-white mt-1 hover:text-cyan-400 transition-colors">
                        {profileData.contact}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(profileData.contact, "contact")}
                    id="btn-copy-contact"
                    className="p-1.5 text-slate-400 hover:text-white rounded-md hover:bg-white/5 transition-colors cursor-pointer"
                    title="Copy to clipboard"
                  >
                    {copiedText === "contact" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Email Address */}
                <div className="flex items-center justify-between group">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center text-slate-300 border border-white/5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-mono text-[9px] text-slate-400 leading-none">EMAIL</span>
                      <a href={`mailto:${profileData.email}`} className="font-sans text-xs font-semibold text-white mt-1 hover:text-cyan-400 transition-colors">
                        {profileData.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(profileData.email, "email")}
                    id="btn-copy-email"
                    className="p-1.5 text-slate-400 hover:text-white rounded-md hover:bg-white/5 transition-colors cursor-pointer"
                    title="Copy to clipboard"
                  >
                    {copiedText === "email" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Home Address */}
                <div className="flex items-start justify-between group">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center text-slate-300 border border-white/5 shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-mono text-[9px] text-slate-400 leading-none">ADDRESS</span>
                      <span className="font-sans text-xs font-semibold text-slate-150 mt-1 leading-normal">
                        {lang === "ko" ? profileData.address : "401, 1-7, 4.19-ro 2-gil, Gangbuk-gu, Seoul, 01011"}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Card Footer */}
            <div className="mt-12 pt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>SEO HYUN WANG PORTFOLIO</span>
              <span>EST. 2026</span>
            </div>

          </div>

          {/* Right Block: Core BD Value proposition table (Bento Grid) */}
          <div className="lg:col-span-7 flex flex-col justify-between p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-xs">
            
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-[10px] tracking-wider text-indigo-600 font-bold uppercase">
                  WHY SEOHYUN WANG?
                </span>
                <h4 className="font-sans font-bold text-xl text-slate-900">
                  {lang === "ko" 
                    ? "의생명과 비즈니스의 교차점에 위치한 핵심 인재" 
                    : "Intersecting Biomedicine & High-Value Dealmaking"}
                </h4>
                <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {lang === "ko" 
                    ? "학부연구 및 인턴 과정에서 단련된 의생명공학 학술 지식을 근간으로, K-NIBRT에서 인허가(RA) 규제 지식 및 CMC 지식을 수련했습니다. 지상파 다큐멘터리 제작 및 대외협상 경험을 통해 매력적인 피칭과 커뮤니케이션 능력을 발휘하며, AI 기술을 통해 업무 생산성을 고도화하는 스마트한 사업개발 인재입니다."
                    : "Armed with biomedical academic excellence and non-clinical laboratory acumen, I have completed intensive country-certified K-NIBRT training on regulatory science and CMC pipelines. My previous professional media career equips me with top-tier presentation skills to connect with global bio-pharma clients, backed by AI automation skills to execute fast research."}
                </p>
              </div>

              {/* Table of Quick Look info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {profileStats.map((stat, idx) => (
                  <div key={idx} id={`profile-stat-box-${idx}`} className="p-4 bg-white rounded-xl border border-slate-100/80 shadow-xs space-y-1.5">
                    <span className="font-mono text-[9px] font-extrabold text-indigo-600 uppercase block">
                      {lang === "ko" ? stat.labelKo : stat.labelEn}
                    </span>
                    <span className="font-sans text-xs font-bold text-slate-800 block leading-tight">
                      {lang === "ko" ? stat.valueKo : stat.valueEn}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Action message / Call to actions */}
            <div className="mt-8 pt-6 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-2.5">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
                <span className="font-sans text-xs text-slate-500 font-semibold">
                  {lang === "ko" ? "즉시 채용 및 인터뷰 가능" : "Open to job offers and interviews"}
                </span>
              </div>
              
              <div className="flex space-x-2 w-full sm:w-auto">
                <a
                  href={`mailto:${profileData.email}`}
                  id="profile-email-cta"
                  className="flex-1 sm:flex-initial flex items-center justify-center space-x-1.5 px-4.5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{lang === "ko" ? "이메일 보내기" : "Send Email"}</span>
                </a>
                <a
                  href={`tel:${profileData.contact}`}
                  id="profile-tel-cta"
                  className="flex-1 sm:flex-initial flex items-center justify-center space-x-1.5 px-4.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{lang === "ko" ? "전화 연결" : "Call Me"}</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
