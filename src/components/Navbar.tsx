import React from "react";
import { Globe, Mail, Menu, X, Award, Briefcase, GraduationCap, Compass, Phone } from "lucide-react";

interface NavbarProps {
  lang: "ko" | "en";
  setLang: (lang: "ko" | "en") => void;
  activeSection: string;
}

export default function Navbar({ lang, setLang, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuItems = [
    { id: "hero", labelKo: "홈", labelEn: "Home", icon: Compass },
    { id: "profile", labelKo: "프로필", labelEn: "Profile", icon: Phone },
    { id: "experience", labelKo: "경력사항", labelEn: "Experience", icon: Briefcase },
    { id: "training", labelKo: "직무교육", labelEn: "Training", icon: Award },
    { id: "research", labelKo: "연구·학술", labelEn: "Research", icon: GraduationCap },
    { id: "bd-strategy", labelKo: "Recruiter Q&A", labelEn: "Recruiter Q&A", icon: Globe },
  ];

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-slate-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Brand */}
          <div 
            className="flex items-center space-x-2 cursor-pointer" 
            onClick={() => scrollTo("hero")}
            id="nav-logo"
          >
            <div className="w-9 h-9 bg-linear-to-tr from-cyan-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold tracking-tight text-sm shadow-md shadow-indigo-100">
              SHW
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-slate-900 tracking-tight text-sm leading-tight">
                {lang === "ko" ? "왕서현" : "SeoHyun Wang"}
              </span>
              <span className="font-mono text-[10px] text-cyan-600 tracking-wider font-semibold">
                BIOTECH BD
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  id={`nav-btn-${item.id}`}
                  className={`flex items-center space-x-1 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-indigo-50/70 text-indigo-700 shadow-xs"
                      : "text-slate-600 hover:text-indigo-600 hover:bg-slate-50/50"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{lang === "ko" ? item.labelKo : item.labelEn}</span>
                </button>
              );
            })}
          </div>

          {/* Right Controls */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Language Toggle Toggle */}
            <div className="flex items-center bg-slate-100 p-0.5 rounded-lg">
              <button
                onClick={() => setLang("ko")}
                id="btn-lang-ko"
                className={`px-2.5 py-1 text-[10px] font-bold rounded-md transition-all cursor-pointer ${
                  lang === "ko"
                    ? "bg-white text-slate-900 shadow-xs"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                KO
              </button>
              <button
                onClick={() => setLang("en")}
                id="btn-lang-en"
                className={`px-2.5 py-1 text-[10px] font-bold rounded-md transition-all cursor-pointer ${
                  lang === "en"
                    ? "bg-white text-slate-900 shadow-xs"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                EN
              </button>
            </div>

            {/* Quick Contact CTA */}
            <button
              onClick={() => scrollTo("profile")}
              id="btn-nav-contact"
              className="flex items-center space-x-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold shadow-md shadow-slate-200 transition-all duration-200 cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{lang === "ko" ? "연락처 보기" : "Get in Touch"}</span>
            </button>
          </div>

          {/* Mobile Menu & Lang button */}
          <div className="flex items-center space-x-2 md:hidden">
            {/* Language Switch for Mobile */}
            <button
              onClick={() => setLang(lang === "ko" ? "en" : "ko")}
              id="btn-lang-toggle-mobile"
              className="flex items-center space-x-1 px-2.5 py-1.5 bg-slate-100 rounded-lg text-[10px] font-bold text-slate-700 cursor-pointer"
            >
              <Globe className="w-3 h-3" />
              <span>{lang === "ko" ? "EN" : "KO"}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              id="btn-mobile-menu"
              className="p-1.5 text-slate-600 hover:text-indigo-600 rounded-lg bg-slate-50 cursor-pointer"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden glass-panel border-t border-slate-100 px-4 pt-2 pb-4 space-y-1 shadow-lg transition-all duration-300">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                id={`nav-mobile-${item.id}`}
                className={`flex items-center space-x-2 w-full px-4 py-2.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-indigo-50 text-indigo-700"
                    : "text-slate-600 hover:bg-slate-50 hover:text-indigo-600"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{lang === "ko" ? item.labelKo : item.labelEn}</span>
              </button>
            );
          })}
          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => scrollTo("profile")}
              id="btn-mobile-contact"
              className="flex items-center justify-center space-x-2 w-full px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold shadow-md cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>{lang === "ko" ? "연락처 보기" : "Get in Touch"}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
