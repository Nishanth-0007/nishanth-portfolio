"use client";
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 bg-[#0a0a0a]">
      <div className="w-full max-w-3xl font-mono bg-black/50 border border-slate-800 rounded-lg p-6 shadow-2xl">
        <div className="flex gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        
        <div className="text-emerald-500 mb-2">➜ ~ chikka-nishanth --init</div>
        
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          <TypeAnimation
            sequence={[
              'AI & Machine Learning Undergraduate',
              1000,
              'MERN Stack Developer',
              1000,
              'Hackathon Winner (1st Position)',
              1000,
            ]}
            repeat={Infinity}
          />
        </h1>

        <p className="text-slate-400 text-lg leading-relaxed border-l-2 border-emerald-500 pl-4 mb-6">
          Building scalable applications and deploying domain-specific AI solutions. 
          Based in Hyderabad, Telangana.
        </p>
      </div>
    </section>
  );
}