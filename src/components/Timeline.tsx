"use client";
import { Award, Users, Terminal } from "lucide-react";

export default function Timeline() {
  const activities = [
    {
      title: "Hackathon Winner - 1st Position",
      org: "HackAttack / Campus Hackathons",
      date: "2024 - 2025",
      desc: "Secured 1st place among 100+ participants by developing a fully functional AI-driven platform.",
      icon: <Award className="text-yellow-400" />
    },
    {
      title: "Class Representative",
      org: "Anurag University",
      date: "2022 - Present",
      desc: "Primary liaison between students and faculty; organized technical workshops and guest lectures.",
      icon: <Users className="text-blue-400" />
    },
    {
      title: "Technical Team Lead",
      org: "Student Body",
      date: "2023 - 2025",
      desc: "Mentored junior developers on MERN Stack and Python debugging techniques.",
      icon: <Terminal className="text-emerald-400" />
    }
  ];

  return (
    <section className="w-full max-w-6xl px-6 py-20 bg-[#080808] rounded-3xl border border-slate-900">
      <h2 className="text-3xl font-bold mb-10 text-white font-mono flex items-center gap-4"><span className="text-emerald-500 text-xl">03.</span> Leadership & Wins</h2>
      <div className="space-y-8">
        {activities.map((act, i) => (
          <div key={i} className="flex gap-6 p-6 rounded-xl hover:bg-white/5 transition-colors group">
            <div className="mt-1">{act.icon}</div>
            <div>
              <span className="text-emerald-500 font-mono text-xs">{act.date}</span>
              <h3 className="text-xl font-bold text-white mt-1">{act.title}</h3>
              <p className="text-slate-400 text-sm mt-2">{act.desc}</p>
              <span className="text-slate-500 text-xs mt-2 block italic">{act.org}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}