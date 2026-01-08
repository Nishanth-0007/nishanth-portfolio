import Hero from "@/components/Hero";
import About from "@/components/About";
import MinelyticsCard from "@/components/MinelyticsCard";
import CodeVerseCard from "@/components/CodeVerseCard";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import AIChatbot from "@/components/AIChatbot";
import ContactClient from "@/components/ContactClient";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      {/* SECTION 1: HERO */}
      <Hero />

      {/* SECTION 2: PROJECTS */}
      <section
        id="projects"
        className="w-full max-w-6xl mx-auto px-6 py-24"
      >
        <h2 className="text-4xl font-bold mb-12 text-white font-mono flex items-center gap-4">
          <span className="text-emerald-500 text-xl">01.</span> Top Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <MinelyticsCard />
          <CodeVerseCard />
        </div>
      </section>

      {/* SECTION 3: SKILLS & TIMELINE */}
      <div className="w-full max-w-6xl mx-auto">
        <Skills />
        <Timeline />
      </div>

      {/* SECTION 4: ABOUT */}
      <About />
      <ContactClient />


      <AIChatbot />

      <footer className="w-full py-10 border-t border-slate-900 text-center text-slate-500 font-mono text-xs">
        DESIGNED & BUILT BY CHIKKA NISHANTH // 2026
      </footer>
    </main>
  );
}
