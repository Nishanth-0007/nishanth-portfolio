"use client";

import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex justify-center items-center px-4 bg-[#0a0a0a]">
      <div className="w-full max-w-4xl font-mono bg-black/50 border border-slate-800 rounded-lg p-6 shadow-2xl">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">

          {/* Terminal Dots */}
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>

          {/* Profile Image */}
          <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border border-emerald-500/40">
            <Image
              src="/profile.jpg"
              alt="Chikka Nishanth"
              fill
              className="object-cover object-[50%_20%]"
              priority
            />
          </div>
        </div>

        {/* Terminal Command */}
        <div className="text-emerald-500 mb-3">
          ➜ ~ chikka-nishanth --init
        </div>

        {/* Animated Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
          <TypeAnimation
            sequence={[
              "AI & Machine Learning Undergraduate",
              1200,
              "MERN Stack Developer",
              1200,
              "Hackathon Winner (1st Position)",
              1200,
            ]}
            repeat={Infinity}
          />
        </h1>

        {/* Description */}
        <p className="text-slate-400 text-lg leading-relaxed border-l-2 border-emerald-500 pl-4">
          Building scalable applications and deploying domain-specific AI solutions.
          Based in Hyderabad, Telangana.
        </p>
      </div>
    </section>
  );
}
