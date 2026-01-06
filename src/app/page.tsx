import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import MinelyticsCard from "@/components/MinelyticsCard";
import CodeVerseCard from "@/components/CodeVerseCard";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import AIChatbot from "@/components/AIChatbot";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#050505]">
      {/* 1. Navbar stays at the top */}
      <Navbar />

      {/* 2. Hero MUST come second to be the first thing seen under the Navbar */}
      <Hero />

      {/* 3. About Me comes after the Hero section */}
      <About /> 

      {/* 4. Projects Section */}
      <section id="projects" className="w-full max-w-6xl px-6 py-24">
        <h2 className="text-4xl font-bold mb-12 text-white font-mono flex items-center gap-4">
          <span className="text-emerald-500 text-xl">01.</span> Selected_Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <MinelyticsCard />
          <CodeVerseCard />
        </div>
      </section>

      <Skills />
      <Timeline />
      <AIChatbot />

      <footer className="w-full py-10 border-t border-slate-900 text-center text-slate-500 font-mono text-xs">
        DESIGNED & BUILT BY CHIKKA NISHANTH // 2026
      </footer>
    </main>
  );
}