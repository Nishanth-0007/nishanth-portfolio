export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center backdrop-blur-sm">
      <div className="text-emerald-500 font-mono font-bold">NISHANTH_LOG v1.0</div>
      <div className="flex gap-6 text-sm font-mono text-slate-400">
        <a href="#projects" className="hover:text-white transition">PROJECTS</a>
        <a href="#about" className="hover:text-white transition">ABOUT ME</a>
      </div>
    </nav>
  );
}