export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#000000]">
      {/* Deep gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-black" />
      
      {/* Intense mesh gradient overlay */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.15) 0%, transparent 40%), radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.15) 0%, transparent 40%)',
        }}
      />

      {/* MEGA floating orbs - balanced visibility */}
      <div
        className="absolute w-[800px] h-[800px] bg-emerald-400/15 rounded-full blur-[120px]
        top-1/4 left-1/4"
        style={{
          animation: 'float 18s ease-in-out infinite, pulse 6s ease-in-out infinite',
        }}
      />

      <div
        className="absolute w-[700px] h-[700px] bg-cyan-400/18 rounded-full blur-[100px]
        bottom-1/4 right-1/4"
        style={{
          animation: 'float 20s ease-in-out infinite 4s, pulse 8s ease-in-out infinite 2s',
        }}
      />

      <div
        className="absolute w-[650px] h-[650px] bg-teal-400/15 rounded-full blur-[110px]
        top-1/2 right-1/3"
        style={{
          animation: 'float 22s ease-in-out infinite 8s',
        }}
      />

      {/* Purple accent orbs */}
      <div
        className="absolute w-[500px] h-[500px] bg-purple-500/12 rounded-full blur-[90px]
        bottom-1/3 left-1/3"
        style={{
          animation: 'float 19s ease-in-out infinite 6s, pulse 9s ease-in-out infinite 4s',
        }}
      />

      <div
        className="absolute w-[550px] h-[550px] bg-blue-400/15 rounded-full blur-[95px]
        top-1/3 left-1/2"
        style={{
          animation: 'float 21s ease-in-out infinite 10s',
        }}
      />

      {/* Medium vibrant orbs */}
      <div
        className="absolute w-[400px] h-[400px] bg-emerald-300/18 rounded-full blur-[80px]
        top-2/3 right-1/3"
        style={{
          animation: 'float 16s ease-in-out infinite 3s, pulse 7s ease-in-out infinite',
        }}
      />

      <div
        className="absolute w-[450px] h-[450px] bg-cyan-300/15 rounded-full blur-[85px]
        top-1/4 right-1/2"
        style={{
          animation: 'float 17s ease-in-out infinite 7s',
        }}
      />

      <div
        className="absolute w-[380px] h-[380px] bg-pink-400/12 rounded-full blur-[75px]
        bottom-1/2 left-1/4"
        style={{
          animation: 'float 15s ease-in-out infinite 5s, pulse 8s ease-in-out infinite 3s',
        }}
      />

      {/* Bright accent lights */}
      <div
        className="absolute w-[300px] h-[300px] bg-emerald-300/20 rounded-full blur-[60px]
        bottom-1/4 left-1/3"
        style={{
          animation: 'float 12s ease-in-out infinite 2s, pulse 5s ease-in-out infinite',
        }}
      />

      <div
        className="absolute w-[280px] h-[280px] bg-cyan-300/20 rounded-full blur-[55px]
        top-1/3 right-1/4"
        style={{
          animation: 'float 13s ease-in-out infinite 9s, pulse 6s ease-in-out infinite 2s',
        }}
      />

      <div
        className="absolute w-[320px] h-[320px] bg-teal-300/18 rounded-full blur-[65px]
        top-1/2 left-1/3"
        style={{
          animation: 'float 14s ease-in-out infinite 11s',
        }}
      />

      {/* Enhanced grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.8) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Multiple shine effects */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          background: 'linear-gradient(45deg, transparent 0%, rgba(16, 185, 129, 0.1) 50%, transparent 100%)',
          animation: 'shine 12s ease-in-out infinite',
        }}
      />

      <div
        className="absolute inset-0 opacity-12"
        style={{
          background: 'linear-gradient(-45deg, transparent 0%, rgba(6, 182, 212, 0.1) 50%, transparent 100%)',
          animation: 'shine 15s ease-in-out infinite 5s',
        }}
      />

      {/* Radial pulse overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.08) 0%, transparent 70%)',
          animation: 'pulse 10s ease-in-out infinite',
        }}
      />

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1) rotate(0deg);
          }
          25% {
            transform: translate(40px, -40px) scale(1.15) rotate(5deg);
          }
          50% {
            transform: translate(-30px, 30px) scale(0.95) rotate(-5deg);
          }
          75% {
            transform: translate(30px, 20px) scale(1.05) rotate(3deg);
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%) translateY(100%) rotate(45deg);
            opacity: 0;
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.35;
            transform: scale(1.05);
          }
        }
      `}} />
    </div>
  );
}