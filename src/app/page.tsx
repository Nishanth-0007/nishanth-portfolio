import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import MinelyticsCard from "@/components/MinelyticsCard";
import CodeVerseCard from "@/components/CodeVerseCard";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import AIChatbot from "@/components/AIChatbot";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#050505] selection:bg-emerald-500/30">
      <Navbar />
      <Hero />
      <About />
      
      {/* Projects Section */}
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

      {/* Simple Footer */}
      <footer className="w-full py-10 border-t border-slate-900 text-center text-slate-500 font-mono text-xs">
        DESIGNED & BUILT BY CHIKKA NISHANTH // 2026
      </footer>
    </main>
  );
}