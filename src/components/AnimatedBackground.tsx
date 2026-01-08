export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-black" />

      {/* Soft mesh glow */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 25% 40%, rgba(16,185,129,0.12), transparent 45%), radial-gradient(circle at 75% 70%, rgba(6,182,212,0.12), transparent 45%)",
        }}
      />

      {/* PRIMARY FLOATING ORBS (SLOW + SMOOTH) */}
      <Orb
        className="w-[700px] h-[700px] bg-emerald-400/12 top-1/4 left-1/4"
        duration={28}
      />
      <Orb
        className="w-[600px] h-[600px] bg-cyan-400/12 bottom-1/4 right-1/4"
        duration={32}
        delay={6}
      />
      <Orb
        className="w-[500px] h-[500px] bg-teal-400/10 top-1/2 right-1/3"
        duration={36}
        delay={12}
      />

      {/* SUBTLE ACCENT ORBS */}
      <Orb
        className="w-[420px] h-[420px] bg-purple-500/8 bottom-1/3 left-1/3"
        duration={40}
        delay={10}
      />

      {/* Ultra-light grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(16,185,129,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.6) 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      />

      {/* Keyframes */}
      <style dangerouslySetInnerHTML={{ __html: css }} />
    </div>
  );
}

/* Orb Component */
function Orb({
  className,
  duration,
  delay = 0,
}: {
  className: string;
  duration: number;
  delay?: number;
}) {
  return (
    <div
      className={`absolute rounded-full blur-[120px] ${className}`}
      style={{
        animation: `floatY ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    />
  );
}

const css = `
@keyframes floatY {
  0%, 100% {
    transform: translateY(0px) scale(1);
    opacity: 0.8;
  }
  50% {
    transform: translateY(-60px) scale(1.03);
    opacity: 1;
  }
}
`;
