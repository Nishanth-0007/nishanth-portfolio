"use client";
import { motion } from "framer-motion";
import { Code2, Lock, Cpu } from "lucide-react";

export default function CodeVerseCard() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-slate-900/50 border border-blue-500/20 p-8 rounded-3xl hover:border-blue-500/50 transition-all group"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 bg-blue-500/10 rounded-2xl">
          <Code2 className="text-blue-400" size={28} />
        </div>
        <div className="flex gap-2">
          <span className="text-[10px] font-mono border border-blue-500/30 px-2 py-1 rounded text-blue-300">MERN STACK</span>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-white mb-3">CodeVerse</h3>
      <p className="text-slate-400 text-sm mb-6 leading-relaxed">
        Interactive coding platform with real-time compilation and AI-driven doubt clarification.
      </p>

      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-black/40 p-3 rounded-xl border border-slate-800">
          <div className="flex items-center gap-2 text-blue-400 mb-1">
            <Lock size={14} />
            <span className="text-[10px] font-bold uppercase">Security</span>
          </div>
          <p className="text-xs text-slate-300">JWT & Session Auth [cite: 27]</p>
        </div>
        <div className="bg-black/40 p-3 rounded-xl border border-slate-800">
          <div className="flex items-center gap-2 text-purple-400 mb-1">
            <Cpu size={14} />
            <span className="text-[10px] font-bold uppercase">Backend</span>
          </div>
          <p className="text-xs text-slate-300">Modular Architecture [cite: 28]</p>
        </div>
      </div>

      <div className="flex gap-3">
        <span className="text-xs font-mono text-slate-500">#MongoDB</span>
        <span className="text-xs font-mono text-slate-500">#Express</span>
        <span className="text-xs font-mono text-slate-500">#React</span>
        <span className="text-xs font-mono text-slate-500">#Node</span>
      </div>
    </motion.div>
  );
}