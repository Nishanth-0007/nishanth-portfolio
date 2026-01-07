"use client";
import { motion } from "framer-motion";

const skills = [
  { category: "Programming", items: ["Python", "Java", "C", "SQL"] },
  { category: "Web Dev", items: ["MERN Stack", "Flask", "Tailwind CSS", "HTML/CSS"] },
  { category: "AI/Data Science", items: ["TensorFlow", "Pandas", "NumPy", "Streamlit"] },
  { category: "Tools", items: ["Git", "GitHub", "VS Code", "Jupyter"] }
];

export default function Skills() {
  return (
    <section id="skills" className="w-full max-w-6xl px-6 py-20">
      <h2 className="text-3xl font-bold mb-10 text-white font-mono flex items-center gap-4">
        <span className="text-emerald-500 text-xl">02.</span> Technical Stack
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div 
            key={index}
            whileHover={{ y: -5 }}
            className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-emerald-500/50 transition-colors"
          >
            <h3 className="text-emerald-400 font-mono text-xs uppercase tracking-widest mb-4">{skill.category}</h3>
            <ul className="space-y-2">
              {skill.items.map((item, i) => (
                <li key={i} className="text-slate-300 text-sm font-medium">{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}