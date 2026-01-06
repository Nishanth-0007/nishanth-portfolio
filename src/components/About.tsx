"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="w-full max-w-6xl px-6 py-20 border-t border-slate-900">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-white font-mono">
            <span className="text-emerald-500 text-xl">04.</span> About_Me
          </h2>
          <p className="text-slate-400 leading-relaxed">
            I am a final-year Artificial Intelligence and Machine Learning student  with a passion for 
            building scalable applications and AI-driven solutions[cite: 7]. As a **Class Representative**[cite: 44], 
            I bridge the gap between students and faculty[cite: 46].
          </p>
          <p className="text-slate-400 leading-relaxed">
            My experience as a **Hackathon Team Lead**  has taught me how to manage cross-functional 
            teams under high-pressure, 24-hour deadlines[cite: 38]. I enjoy mentoring junior developers [cite: 43] 
            and orchestrating code reviews to ensure seamless collaboration[cite: 40].
          </p>
        </motion.div>

        <div className="bg-emerald-500/5 border border-emerald-500/20 p-8 rounded-3xl">
          <h3 className="text-emerald-400 font-mono mb-4 text-sm uppercase tracking-widest">Education Hub</h3>
          <div className="space-y-4">
            <div>
              <p className="text-white font-bold">Anurag University</p>
              <p className="text-xs text-slate-500">B.Tech in AI & ML (2022-2026) [cite: 9]</p>
            </div>
            <div>
              <p className="text-white font-bold">Sri Chaitanya Junior Kala Shala</p>
              <p className="text-xs text-slate-500">Intermediate (MPC) - 2022 [cite: 9]</p>
            </div>
            <div>
              <p className="text-white font-bold">Atomic Energy Central School-2</p>
              <p className="text-xs text-slate-500">Secondary School Certificate (CBSE) - 2020 [cite: 9]</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}