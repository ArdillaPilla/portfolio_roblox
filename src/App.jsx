import { motion } from 'framer-motion';
import { useRef } from "react";

export default function DeimosWhoPortfolio() {
  const skills = [
    'Luau',
    'Rojo',
    'Wally',
    'ProfileStore',
    'VS Code',
    'React',
    'Vide',
    'Fusion',
  ];

  const videos = [
  {
    title: 'Combat System',
    description: 'Advanced Roblox combat mechanics similar to League of Legends structure.',
    src: "public/videos/combat.mp4",
  },
  {
    title: 'Inventory UI',
    description: 'Modern animated inventory interface using Fusion.',
  },
  {
    title: 'ProfileStore Backend',
    description: 'Secure data saving architecture with ProfileStore.',
  },
  {
    title: 'Trading System',
    description: 'Real-time player trading and validation systems.',
  },
  {
    title: 'Lobby Interface',
    description: 'Clean multiplayer lobby and matchmaking UI.',
  },
  {
    title: 'Custom Framework',
    description: 'Scalable Roblox architecture with Rojo and Wally.',
  },
];

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-hidden selection:bg-purple-500/40">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-600/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/20 blur-[140px] rounded-full" />
      </div>

      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-white/10 bg-black/30">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <div className="text-2xl font-black tracking-tight">
            deimos_who
          </div>

          <nav className="hidden md:flex items-center gap-3 text-sm">
            {[
              ['Skills', '#skills'],
              ['Portfolio', '#portfolio'],
              ['Contact', '#contact'],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="
                  relative px-4 py-2 rounded-xl
                  text-white/70
                  transition-all duration-300
                  hover:text-white
                  hover:bg-white/10
                  hover:scale-105
                  active:scale-95
                  before:absolute
                  before:bottom-0
                  before:left-1/2
                  before:h-[2px]
                  before:w-0
                  before:bg-purple-400
                  before:transition-all
                  before:duration-300
                  hover:before:left-0
                  hover:before:w-full
                "
              >
                {label}
              </a>
            ))}
          </nav>

          <button className="px-5 py-2 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 transition-all text-sm">
            Discord
          </button>
        </div>
      </header>

      <main className="relative z-10">
        <section className="max-w-5xl mx-auto px-6 md:px-10 pt-28 pb-24 flex items-center justify-center text-center">
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-200 mb-7">
              Roblox Developer • UI • Systems
            </div>

            <h1 className="text-6xl md:text-8xl font-black tracking-[-0.05em] leading-none">
              DeimoS
            </h1>

            <p className="mt-8 text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed mx-auto">
              Advanced Roblox development focused on polished gameplay,
              scalable backend systems, clean UI architecture, and modern
              workflows.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <button className="px-7 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-[1.03] transition-transform shadow-2xl shadow-white/10">
                View Projects
              </button>

              <button className="px-7 py-4 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 transition-all">
                Contact Me
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-16 w-full max-w-3xl">
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
                <div className="text-3xl font-bold">8+</div>
                <div className="text-sm text-white/50 mt-1">Core Skills</div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm text-white/50 mt-1">Availability</div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="max-w-7xl mx-auto px-6 md:px-10 py-24"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <div className="text-sm uppercase tracking-[0.3em] text-purple-300/70 mb-4">
                Stack
              </div>

              <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                Skills & Tools
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div
                key={skill}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 hover:border-purple-400/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-purple-500/10 to-blue-500/10" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-xl mb-5">
                    ✦
                  </div>

                  <h3 className="text-xl font-semibold">{skill}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="portfolio"
          className="max-w-7xl mx-auto px-6 md:px-10 py-24"
        >
          <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="text-sm uppercase tracking-[0.3em] text-blue-300/70 mb-4">
                Portfolio
              </div>

              <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                Video Showcase
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {videos.map((video) => {
              const ref = useRef(null);

              return (
                <div
                  key={video.title}
                  className="group rounded-[32px] overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-xl hover:border-purple-400/40 transition-all duration-300"
                  onMouseEnter={() => ref.current?.play()}
                  onMouseLeave={() => ref.current?.pause()}
                >
                  <div className="aspect-video relative overflow-hidden bg-black">
                    <video
                      ref={ref}
                      className="absolute inset-0 w-full h-full object-cover"
                      src={video.src}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.25),transparent_50%)]" />
                  </div>

                  <div className="p-6 border-t border-white/10">
                    <div className="text-lg font-semibold">{video.title}</div>
                    <p className="mt-2 text-sm text-white/45 leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section
          id="contact"
          className="max-w-7xl mx-auto px-6 md:px-10 py-24"
        >
          <div className="rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-10 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_35%)]" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <div className="text-sm uppercase tracking-[0.3em] text-purple-300/70 mb-5">
                  Contact
                </div>

                <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                  Build Something Amazing.
                </h2>

                <p className="mt-6 text-white/55 text-lg leading-relaxed max-w-xl">
                  Open for Roblox projects, UI systems, backend architecture,
                  and custom gameplay experiences.
                </p>
              </div>

              <div className="grid gap-5">
                <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
                  <div className="text-sm text-white/40 mb-2">Discord</div>
                  <div className="text-xl font-semibold">
                    deimos_who
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
                  <div className="text-sm text-white/40 mb-2">Email</div>
                  <div className="text-xl font-semibold">
                    deimoswho@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-white/40 text-sm backdrop-blur-xl bg-black/20">
        © 2026 deimos_who. All rights reserved.
      </footer>
    </div>
  );
}