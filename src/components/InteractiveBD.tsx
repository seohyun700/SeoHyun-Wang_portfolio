import React from "react";
import { Sparkles, Send, BrainCircuit, Globe2, HelpCircle, CheckCircle, BarChart3, ChevronRight, Play } from "lucide-react";
import { bdStrategies } from "../data";

interface InteractiveBDProps {
  lang: "ko" | "en";
}

interface ChatMessage {
  sender: "user" | "seo";
  textKo: string;
  textEn: string;
}

export default function InteractiveBD({ lang }: InteractiveBDProps) {
  const [selectedDealId, setSelectedDealId] = React.useState<string>("adc-out-licensing");
  const [chatHistory, setChatHistory] = React.useState<ChatMessage[]>([
    {
      sender: "seo",
      textKo: "안녕하세요! 제약·바이오 사업개발(BD) 지원자 왕서현입니다. 저의 직무 매칭도와 역량에 대해 무엇이든 클릭해 물어보세요!",
      textEn: "Hello! I am SeoHyun Wang, a passionate applicant for Pharma & Biotech Business Development. Click any question below to ask me about my alignment and skills!"
    }
  ]);
  const [isTyping, setIsTyping] = React.useState<boolean>(false);

  const selectedDeal = bdStrategies.find((d) => d.id === selectedDealId) || bdStrategies[0];

  const recruiterFaqs = [
    {
      qKo: "왜 제약·바이오 사업개발(BD) 직무를 희망하시나요?",
      qEn: "Why are you targetting Pharma & Biotech Business Development (BD)?",
      aKo: "제약바이오 BD는 혁신적인 의생명 연구 결과물이 시장에 진입해 실제 환자의 생명을 구하는 가치 사슬의 최핵심이라 확신합니다. 건국대 의생명공학과에서 축적한 학술 지식을 도구 삼아, 상대 기업의 파이프라인 가치를 날카롭게 평가하고, 어학 및 미디어 역량으로 매력적인 비즈니스 딜을 매끄럽게 구성하여 글로벌 파트너쉽을 주도하는 정예 요원이 되고자 지원하게 되었습니다.",
      aEn: "I believe Biopharma BD is the core bridge that translates complex laboratory discoveries into commercial realities that save patients' lives. Leveraging my biomedical background from Konkuk Univ, I aim to critically audit drug candidates, design strategic licensing models, and utilize my bilingual negotiation and media pitching skills to orchestrate cross-border biopharma alliances."
    },
    {
      qKo: "K-NIBRT 교육 경험이 BD 직무에 구체적으로 어떤 도움이 되나요?",
      qEn: "How does your intensive K-NIBRT training help in a BD position?",
      aKo: "K-NIBRT에서 습득한 '의약품 규제와 안전관리' 및 'CMC 전략'은 라이센싱 딜 체결 시 실사(Due Diligence)의 강력한 무기가 됩니다. IND 및 BLA 서류 구비 요건과 약법 기반 가이드라인을 꿰뚫고 있기에, 들여오거나 수출할 후보 물질의 CMC 품질 무결성과 임상 규제 리스크를 실시간으로 스크리닝할 수 있어 회사의 막대한 규제적 매몰 비용을 선제 방지할 수 있습니다.",
      aEn: "The K-NIBRT certification in drug regulation, clinical guidelines, and CMC compliance is a massive asset for scientific due diligence. Understanding the regulatory checklist for IND/BLA filings under local and global (FDA/EMA) guidelines allows me to filter pipeline candidates, detect compliance vulnerabilities early, and protect our firm from high-risk licensing expenditures."
    },
    {
      qKo: "지상파 다큐 조연출 경험이 BD 업무에 있어 어떤 차별화된 강점인가요?",
      qEn: "Is your past media (Assistant Director) background beneficial to BD?",
      aKo: "BD는 단순 계약서 검토를 넘어 파트너사에게 우리 자산의 가치를 가장 매력적으로 파는 '종합 피칭 예술'입니다. SBS 스페셜 등 다큐멘터리 제작부 조연출로 근무하며 극도로 한계가 명확한 제작 기한 내에 복잡한 구성안 기획, 스태프 협상, 최종 가공을 책임졌습니다. 이러한 기획 조율 역량은 해외 빅파마를 설득할 압도적인 기업 IR 자료 패키징 및 고밀도 글로벌 화상 미팅 조율에 그대로 적용되어 계약 체결율을 드라마틱하게 높일 것입니다.",
      aEn: "BD is not just reviewing legal clauses; it is a high-level art of persuasion and storytelling. Having served as an Assistant Director for national SBS documentaries, I managed intense scheduling under pressure, coordinated multidisciplinary crews, and edited dense storylines. These exact visual-storytelling and stakeholder-negotiation talents allow me to design highly magnetic IR pitches and command cross-border business meetings."
    },
    {
      qKo: "AI 역량이 제약바이오 BD의 생산성을 어떻게 극대화할 수 있나요?",
      qEn: "How does your AI agility boost the productivity of a bio-firm's BD team?",
      aKo: "전통적인 수동 시장 조사를 80% 이상 혁신할 수 있습니다. 서울청년센터 강북의 AI 훈련을 통해 대량의 최신 FDA/EMA 규제 가이드라인과 글로벌 파이프라인 데이터를 자동 크롤링하고 핵심 JSON 형태로 요약/파싱하는 보고서 스크립트를 수립하는 능력을 기를 수 있었습니다. 최신 AI 에이전트 툴을 실무에 배치하여, 전세계의 경쟁 파이프라인 현황과 딜 트렌드를 초고속으로 수집 및 마이닝하여 타사 대비 최소 2배 빠른 '글로벌 라이센싱 소싱 맵'을 회사에 제안할 수 있습니다.",
      aEn: "I can supercharge market research times by 80%. Through AI-specialist training, I learned to write automated scripts to scrap, parse, and synthesize dense FDA/EMA clinical guidelines. By deploying advanced AI workflows, I can track and catalog competitive global pipeline candidates and industry deal trends in real-time, providing our senior leadership with highly-structured, data-backed out-licensing targets twice as fast."
    }
  ];

  const handleAskFaq = (faq: typeof recruiterFaqs[0]) => {
    if (isTyping) return;
    
    // Add user question
    const userMsg: ChatMessage = {
      sender: "user",
      textKo: faq.qKo,
      textEn: faq.qEn
    };
    
    setChatHistory((prev) => [...prev, userMsg]);
    setIsTyping(true);

    // Simulated responsive response
    setTimeout(() => {
      const seoMsg: ChatMessage = {
        sender: "seo",
        textKo: faq.aKo,
        textEn: faq.aEn
      };
      setChatHistory((prev) => [...prev, seoMsg]);
      setIsTyping(false);
      
      // Scroll chat window
      setTimeout(() => {
        const chatWin = document.getElementById("chat-scroll-container");
        if (chatWin) {
          chatWin.scrollTop = chatWin.scrollHeight;
        }
      }, 100);
    }, 800);
  };

  const imageSrc = "/src/assets/images/biotech_dealmaking_1784271887495.jpg";

  return (
    <section id="bd-strategy" className="py-20 bg-white relative">
      <div className="absolute bottom-[-10%] right-[-5%] w-[45%] h-[45%] rounded-full bg-cyan-150/20 glow-glow" />
      <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-indigo-100/20 glow-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-indigo-600">
            05. Recruiter Q&A
          </h2>
          <p className="font-sans text-3xl font-extrabold text-slate-900 mt-1 tracking-tight">
            {lang === "ko" ? "Recruiter Q&A" : "Recruiter Q&A"}
          </p>
          <div className="w-12 h-1 bg-indigo-600 mt-3 mx-auto rounded-full" />
        </div>

        {/* Recruiter Q&A Centered Layout */}
        <div className="max-w-2xl mx-auto">
          
          {/* Recruiter AI Chatbot Terminal (Aximo glow feel) */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl border border-slate-800 relative overflow-hidden min-h-[500px]">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-cyan-500/10 blur-xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-indigo-500/10 blur-xl" />

            <div className="space-y-6 relative z-10 flex flex-col h-full justify-between">
              
              {/* Terminal Header */}
              <div className="space-y-1.5 border-b border-slate-800 pb-4">
                <div className="flex items-center space-x-2 text-cyan-400">
                  <BrainCircuit className="w-5 h-5 animate-pulse-slow" />
                  <span className="font-mono text-xs tracking-widest font-extrabold uppercase">
                    INTERACTIVE RECRUITER Q&A
                  </span>
                </div>
                <h3 className="font-sans text-xl font-bold text-white">
                  {lang === "ko" ? "왕서현 매칭 인터뷰" : "Wang's Candidate Interview"}
                </h3>
                <p className="font-sans text-sm text-slate-400 leading-normal">
                  {lang === "ko" 
                    ? "인사담당자가 자주 묻는 면접 질문을 클릭해 왕서현 지원자의 입체적이고 설득력 있는 실제 답변을 확인해 보세요."
                    : "Click any standard screening question below to fetch my direct, executive-ready answers."}
                </p>
              </div>

              {/* Chat Scrolling Window */}
              <div 
                id="chat-scroll-container"
                className="flex-1 min-h-[220px] max-h-[300px] overflow-y-auto space-y-4 py-4 pr-1 scroll-smooth"
              >
                {chatHistory.map((msg, mIdx) => {
                  const isSeo = msg.sender === "seo";
                  return (
                    <div
                      key={mIdx}
                      className={`flex ${isSeo ? "justify-start" : "justify-end"}`}
                    >
                      <div className={`max-w-[85%] rounded-2xl p-3.5 text-base leading-relaxed ${
                        isSeo 
                           ? "bg-slate-800 text-slate-100 border border-slate-700/60 rounded-tl-none" 
                           : "bg-indigo-600 text-white rounded-tr-none"
                      }`}>
                        {/* Speaker tag */}
                        <span className="font-mono text-xs font-extrabold block text-slate-400 mb-1 uppercase tracking-wider">
                          {isSeo ? (lang === "ko" ? "지원자 왕서현" : "WANG SEOHYUN") : (lang === "ko" ? "인사담당자" : "RECRUITER")}
                        </span>
                        <span>
                          {lang === "ko" ? msg.textKo : msg.textEn}
                        </span>
                      </div>
                    </div>
                  );
                })}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-slate-800 rounded-2xl rounded-tl-none p-3 border border-slate-700/60 flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                )}
              </div>

              {/* FAQS clickable buttons list */}
              <div className="pt-4 border-t border-slate-800 space-y-2">
                <span className="font-mono text-xs text-slate-400 font-extrabold uppercase tracking-widest block mb-1">
                  CHOOSE QUESTION:
                </span>
                <div className="flex flex-col gap-2 max-h-[160px] overflow-y-auto">
                  {recruiterFaqs.map((faq, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAskFaq(faq)}
                      id={`faq-btn-${idx}`}
                      disabled={isTyping}
                      className="text-left px-4 py-3 bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-white rounded-xl text-base font-semibold transition-colors duration-150 border border-slate-800/80 hover:border-slate-700 flex items-center justify-between disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                    >
                      <span className="truncate pr-2">
                        {lang === "ko" ? faq.qKo : faq.qEn}
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-500 shrink-0" />
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
