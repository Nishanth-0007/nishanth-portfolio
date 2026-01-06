"use client";
import { useState } from "react";
import { MessageSquare, X, Send, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hi! I am Nishanth\'s AI assistant. Ask me about his projects like Minelytics or his skills!' }
  ]);
  const [input, setInput] = useState("");

  // This "Brain" is based directly on your resume data
  const resumeContext = {
    projects: "Minelytics (Carbon tracking, 95.19% accuracy), CodeVerse (MERN coding platform), Learnpro (Gamified Flask app).",
    skills: "Python, Java, C, SQL, MERN Stack, TensorFlow, Prompt Engineering.",
    education: "B.Tech in AI & ML at Anurag University (2022-2026)."
  };

  const handleSend = () => {
    if (!input) return;
    const userMsg = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    
    // Simple logic to simulate AI response using your resume facts
    setTimeout(() => {
      let response = "I'm not sure about that, but Nishanth is an expert in AI/ML and MERN development!";
      if (input.toLowerCase().includes("minelytics")) response = "Minelytics uses LSTM for CO2 forecasting with a 6.89% MAPE.";
      if (input.toLowerCase().includes("codeverse")) response = "CodeVerse is a MERN platform with JWT auth and AI doubt clarification.";
      if (input.toLowerCase().includes("skill")) response = `He is proficient in ${resumeContext.skills}`;
      
      setMessages(prev => [...prev, { role: 'bot', text: response }]);
    }, 600);
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-[#0f172a] border border-slate-800 w-80 h-96 rounded-2xl shadow-2xl flex flex-col mb-4 overflow-hidden"
          >
            <div className="bg-emerald-500 p-4 flex justify-between items-center text-black font-bold">
              <div className="flex items-center gap-2"><Bot size={20}/> Nishanth AI</div>
              <button onClick={() => setIsOpen(false)}><X size={20}/></button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm">
              {messages.map((m, i) => (
                <div key={i} className={`${m.role === 'user' ? 'text-right' : 'text-left'}`}>
                  <span className={`inline-block p-2 rounded-lg ${m.role === 'user' ? 'bg-emerald-500 text-black' : 'bg-slate-800 text-slate-200'}`}>
                    {m.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-slate-800 flex gap-2">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
                className="flex-1 bg-slate-900 border border-slate-700 rounded-md px-3 py-1 text-xs focus:outline-none focus:border-emerald-500"
              />
              <button onClick={handleSend} className="bg-emerald-500 p-2 rounded-md text-black"><Send size={14}/></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-emerald-500 p-4 rounded-full shadow-lg hover:scale-110 transition-transform text-black"
      >
        <MessageSquare />
      </button>
    </div>
  );
}