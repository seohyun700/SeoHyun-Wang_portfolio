import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProfileCard from "./components/ProfileCard";
import Experience from "./components/Experience";
import TrainingAndSkills from "./components/TrainingAndSkills";
import Research from "./components/Research";
import InteractiveBD from "./components/InteractiveBD";
import { ChevronUp, Globe, Mail, Phone, ExternalLink, Sparkles } from "lucide-react";
import { profileData } from "./data";

export default function App() {
  const [lang, setLang] = useState<"ko" | "en">("ko");
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Monitor scrolling to highlight navbar items and show floating scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      // 1. Show scroll top button
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // 2. Simple active section calculations
      const sections = ["hero", "profile", "experience", "training", "research", "bd-strategy"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-indigo-500 selection:text-white">
      {/* Floating Header */}
      <Navbar lang={lang} setLang={setLang} activeSection={activeSection} />

      {/* Main Content Modules */}
      <main>
        {/* Hero Section */}
        <Hero lang={lang} />

        {/* Profile Details Block */}
        <ProfileCard lang={lang} />

        {/* Work experience history */}
        <Experience lang={lang} />

        {/* Training Programs & Skills details */}
        <TrainingAndSkills lang={lang} />

        {/* Academic Labs & Activities */}
        <Research lang={lang} />

        {/* BD Dealmaker & Interview Terminal */}
        <InteractiveBD lang={lang} />

        {/* Dynamic synergy connector quote card */}
        <section className="pb-24 pt-4 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-linear-to-r from-indigo-900 to-slate-950 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-indigo-500/10 blur-xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-violet-500/10 blur-xl" />
              
              <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
                <Sparkles className="w-8 h-8 text-cyan-400 mx-auto animate-float" />
                <p className="font-serif text-base sm:text-lg italic leading-relaxed text-slate-200">
                  {lang === "ko" 
                    ? `"단순히 연구실에 갇혀있는 인재가 아닙니다. 의생명 지식을 통해 해외 신약의 작용 기전(MoA)을 파악하고, K-NIBRT 교육을 통해 규제(RA) 위험도를 선제 평가하며, 미디어 제작 능력으로 라이센싱 티저 자료를 감각적으로 패키징해 해외 파트너사를 직접 설득할 수 있는 차세대 사업개발 전문가입니다."`
                    : `"Not just a scientist confined to the laboratory. I am a forward-looking business developer who deciphers the molecular MoA of foreign pipelines, audits regulatory (RA) risk profiles using K-NIBRT insights, and produces premium media teasers to negotiate directly with global pharmaceutical leaders."`}
                </p>
                <div className="w-12 h-0.5 bg-cyan-400 mx-auto rounded-full" />
                <span className="font-sans text-[10px] tracking-widest text-cyan-400 font-extrabold uppercase block">
                  SEO HYUN WANG | PHARMA & BIOTECH BD INNOVATION
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Corporate Modern Footer */}
      <footer className="bg-slate-950 text-white border-t border-slate-900 py-16 relative overflow-hidden">
        {/* Glow backdrop inside footer */}
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-indigo-500/5 glow-glow" />
        <div className="absolute top-0 left-[10%] w-60 h-60 rounded-full bg-cyan-500/5 glow-glow" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-12 border-b border-slate-900">
            
            {/* Branding Column */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-linear-to-tr from-cyan-500 to-indigo-600 rounded-lg flex items-center justify-center font-bold tracking-tight text-white text-xs">
                  SHW
                </div>
                <span className="font-sans font-bold text-lg tracking-tight">
                  {lang === "ko" ? "왕서현 | Portfolio" : "SeoHyun Wang | Portfolio"}
                </span>
              </div>
              
              <p className="font-sans text-xs text-slate-400 max-w-sm leading-relaxed">
                {lang === "ko"
                  ? "의생명공학 학술 역량과 K-NIBRT의 규제과학 전문 지식, 미디어 제작 감각을 융합해 실무 지향적 기여를 이끌어낼 준비된 신입 사업개발 인재입니다."
                  : "An innovative, industry-ready candidate for Pharmaceutical & Biotech Business Development. Combining biomedical science, regulatory standards (CMC/GMP), and high-level client pitching."}
              </p>
            </div>

            {/* Quick Navigation column */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="font-mono text-[10px] tracking-widest font-extrabold text-slate-400 uppercase">
                {lang === "ko" ? "바로가기" : "QUICK LINKS"}
              </h4>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-slate-400">
                <li>
                  <button onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-cyan-400 transition-colors text-left cursor-pointer">
                    {lang === "ko" ? "홈" : "Home"}
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById("profile")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-cyan-400 transition-colors text-left cursor-pointer">
                    {lang === "ko" ? "프로필" : "Profile"}
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-cyan-400 transition-colors text-left cursor-pointer">
                    {lang === "ko" ? "경력사항" : "Experience"}
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById("training")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-cyan-400 transition-colors text-left cursor-pointer">
                    {lang === "ko" ? "직무교육" : "Training"}
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById("research")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-cyan-400 transition-colors text-left cursor-pointer">
                    {lang === "ko" ? "학술·활동" : "Research"}
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById("bd-strategy")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-cyan-400 transition-colors text-left cursor-pointer">
                    {lang === "ko" ? "가치제안" : "BD Strategy"}
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact details list */}
            <div className="md:col-span-4 space-y-3.5">
              <h4 className="font-mono text-[10px] tracking-widest font-extrabold text-slate-400 uppercase">
                {lang === "ko" ? "연락처 정보" : "CONTACT DIRECT"}
              </h4>
              <div className="space-y-2 text-xs text-slate-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 text-cyan-500" />
                  <a href={`tel:${profileData.contact}`} className="hover:text-white transition-colors">{profileData.contact}</a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-3.5 h-3.5 text-indigo-500" />
                  <a href={`mailto:${profileData.email}`} className="hover:text-white transition-colors">{profileData.email}</a>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Copyright line & badges */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-slate-500">
            <span>© 2026 SEOHYUN WANG. ALL RIGHTS RESERVED.</span>
            <div className="flex items-center space-x-4">
              <span>DESIGNED FOR PHARMA BD SUCCESS</span>
              <span className="text-slate-700">|</span>
              <span className="flex items-center space-x-1 hover:text-white cursor-pointer" onClick={() => window.open("https://github.com")}>
                <span>GITHUB REPO</span>
                <ExternalLink className="w-3 h-3" />
              </span>
            </div>
          </div>

        </div>
      </footer>

      {/* Floating Scroll to Top trigger */}
      {showScrollTop && (
        <button
          onClick={handleScrollToTop}
          id="btn-scroll-top"
          className="fixed bottom-6 right-6 z-50 w-10 h-10 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all cursor-pointer scale-100 hover:scale-105 active:scale-95"
          title="Scroll to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
