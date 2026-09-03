import { useEffect, useRef, useState } from "react";

const DISCORD = 'deimos_who';
const EMAIL = 'deimoswho@gmail.com';

// Everything in public/ is served under the deploy base path.
const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

const NAV = [
  ['Skills', '#skills'],
  ['Portfolio', '#portfolio'],
  ['Pricing', '#pricing'],
  ['Contact', '#contact'],
];

// `level` is optional — add one to any skill you want to call out.
const SKILLS = [
  { name: 'Luau' },
  { name: 'Rojo' },
  { name: 'Wally' },
  { name: 'ProfileStore' },
  { name: 'VS Code' },
  { name: 'React' },
  { name: 'Vide' },
  { name: 'Fusion' },
  { name: 'Blender', level: 'Proficient' },
  { name: '3D Modelling' },
];

// The star of the showcase.
// NOTE: ufo.mp4 is ~26 MB, so it is deliberately `preload="none"` behind a
// poster frame — nothing downloads until the visitor presses play. Re-encode it
// smaller (see README) if you ever want it to autoplay on load instead.
const FEATURED = {
  title: 'UFO Flight & Planet Exploration',
  description:
    'A full space-flight loop built in Roblox: piloting a UFO between low-poly planets, warping to a targeted world, landing, and running a hold-to-extract resource mechanic — with a custom compass, fuel gauge and flight-control HUD driving it all.',
  src: asset('videos/ufo.mp4'),
  poster: asset('images/ufo-poster.jpg'),
  tags: ['Flight system', 'Warp & landing', 'Resource extraction', 'Custom HUD'],
};

const MODELS = [
  {
    title: 'Boutique Mannequin',
    description: 'Dress form modelled to match a concept reference, shown beside the source art.',
    src: asset('images/low-poly-mannequin.png'),
    // Wide reference-vs-model capture, so it gets a double-width slot.
    wide: true,
  },
  {
    title: 'Cartoon Gemstone',
    description: 'Faceted gem with a translucent shader and clean, readable topology.',
    src: asset('images/low-poly-gemstone.png'),
  },
  {
    title: 'Crossbow',
    description: 'Stylised crossbow with a chunky silhouette that stays legible at gameplay distance.',
    src: asset('images/low-poly-crossbow.png'),
  },
  {
    title: 'Jack-o’-Lantern',
    description: 'Carved pumpkin with a soft, rounded low-poly body for seasonal events.',
    src: asset('images/low-poly-pumpkin.png'),
  },
  {
    title: 'Cartoon Bomb',
    description: 'Classic round bomb with a twisted rope fuse modelled along a curve.',
    src: asset('images/low-poly-bomb.png'),
  },
  {
    title: 'Retro TV',
    description: 'Old CRT set with rabbit-ear antenna and a subtly curved screen.',
    src: asset('images/low-poly-old-tv.png'),
  },
  {
    title: 'Shuriken',
    description: 'Three-bladed throwing star with twisted blades and a bold accent ring.',
    src: asset('images/low-poly-shuriken.png'),
  },
  {
    title: 'Flower Set',
    description: 'Assorted stylised flowers — daisies, lilies, a calla and a dandelion — modelled as a reusable set-dressing kit.',
    src: asset('images/low-poly-flowers.png'),
  },
];

export default function DeimosWhoPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu once the viewport is wide enough to show the full nav.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const onChange = (e) => e.matches && setMenuOpen(false);

    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-hidden selection:bg-purple-500/40">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-600/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/20 blur-[140px] rounded-full" />
      </div>

      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-white/10 bg-black/30">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <a href="#top" className="text-2xl font-black tracking-tight rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400">
            deimos_who
          </a>

          <nav className="hidden md:flex items-center gap-3 text-sm">
            {NAV.map(([label, href]) => (
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
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-purple-400
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

          <div className="flex items-center gap-3">
            <CopyButton
              value={DISCORD}
              label="Discord"
              className="px-5 py-2 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 transition-all text-sm"
            />

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="md:hidden w-10 h-10 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 transition-all flex flex-col items-center justify-center gap-[5px] focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
            >
              <span className={`block h-[2px] w-5 bg-white transition-transform duration-300 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
              <span className={`block h-[2px] w-5 bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-[2px] w-5 bg-white transition-transform duration-300 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
            </button>
          </div>
        </div>

        <nav
          id="mobile-nav"
          hidden={!menuOpen}
          className="md:hidden border-t border-white/10 bg-black/60 backdrop-blur-xl px-6 py-4 flex flex-col gap-1"
        >
          {NAV.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
            >
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top" className="relative z-10">
        <section className="max-w-5xl mx-auto px-6 md:px-10 pt-28 pb-24 flex items-center justify-center text-center">
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-200 mb-7">
              Roblox Developer • 3D Modeller • UI • Systems
            </div>

            <h1 className="text-6xl md:text-8xl font-black tracking-[-0.05em] leading-none">
              DeimoS
            </h1>

            <p className="mt-8 text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed mx-auto">
              Advanced Roblox development focused on polished gameplay,
              scalable backend systems, clean UI architecture, and custom
              3D assets modelled in Blender.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <a
                href="#portfolio"
                className="px-7 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-[1.03] transition-transform shadow-2xl shadow-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-7 py-4 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
              >
                Contact Me
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-16 w-full max-w-3xl">
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
                <div className="text-3xl font-bold">{SKILLS.length}+</div>
                <div className="text-sm text-white/50 mt-1">Core Skills</div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
                <div className="text-3xl font-bold">100+</div>
                <div className="text-sm text-white/50 mt-1">3D Models</div>
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
          className="max-w-7xl mx-auto px-6 md:px-10 py-24 scroll-mt-24"
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
            {SKILLS.map((skill) => (
              <div
                key={skill.name}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 hover:border-purple-400/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-purple-500/10 to-blue-500/10" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-xl mb-5">
                    ✦
                  </div>

                  <h3 className="text-xl font-semibold">{skill.name}</h3>

                  {skill.level && (
                    <div className="mt-3 inline-flex rounded-full border border-purple-400/25 bg-purple-500/10 px-3 py-1 text-xs text-purple-200">
                      {skill.level}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="portfolio"
          className="max-w-7xl mx-auto px-6 md:px-10 py-24 scroll-mt-24"
        >
          <div className="mb-14">
            <div className="text-sm uppercase tracking-[0.3em] text-blue-300/70 mb-4">
              Portfolio
            </div>

            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Work Showcase
            </h2>
          </div>

          <FeaturedVideo item={FEATURED} />

          <div className="mt-28">
            <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <div className="text-sm uppercase tracking-[0.3em] text-purple-300/70 mb-4">
                  Blender
                </div>

                <h3 className="text-3xl md:text-4xl font-black tracking-tight">
                  Hundreds of high quality models made.
                </h3>
              </div>

              <p className="text-white/45 text-sm max-w-sm leading-relaxed">
                Low-poly game-ready assets modelled in Blender, built for clean
                silhouettes and cheap in-engine rendering. A few examples:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {MODELS.map((model) => (
                <ModelCard key={model.title} model={model} />
              ))}
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="max-w-7xl mx-auto px-6 md:px-10 py-24 scroll-mt-24"
        >
          <div className="text-sm uppercase tracking-[0.3em] text-purple-300/70 mb-4">
            Pricing
          </div>

          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            Fair pricing, no guesswork.
          </h2>

          <p className="mt-6 text-white/55 text-lg leading-relaxed max-w-2xl">
            The gallery shows what I have made, not the limit of what I can make. If
            you can describe it or show me a reference, I can model it — the picker
            below is here so you get a number before you ever message me.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-14">
            <div className="rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-7">
              <div className="text-lg font-semibold">Every commission includes</div>
              <ul className="mt-4 space-y-2.5 text-sm text-white/50 leading-relaxed">
                <li>Game-ready mesh, exported as .fbx or .obj</li>
                <li>Sensible part and triangle counts for Roblox</li>
                <li>Proportions matched to your references</li>
                <li>Two rounds of revisions, included</li>
                <li>Progress screenshots as the model comes together</li>
              </ul>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-7">
              <div className="text-lg font-semibold">How I quote</div>
              <ul className="mt-4 space-y-2.5 text-sm text-white/50 leading-relaxed">
                <li>Send references, detail level and your deadline</li>
                <li>You get one fixed price before any work begins</li>
                <li>Per task, never per hour — no meter running</li>
                <li>The price does not move once agreed</li>
                <li>Scope changes are quoted separately, up front</li>
              </ul>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-7">
              <div className="text-lg font-semibold">Payment</div>
              <ul className="mt-4 space-y-2.5 text-sm text-white/50 leading-relaxed">
                <li>USD or Robux, whichever suits you</li>
                <li>Half up front on anything over $60</li>
                <li>Balance on delivery of the final files</li>
                <li>Robux quoted at R$1 ≈ $0.0038, grossed up for the 30% cut</li>
                <li>Group payouts available for bigger jobs</li>
              </ul>
            </div>
          </div>

          <PricingEstimator />
        </section>

        <section
          id="contact"
          className="max-w-7xl mx-auto px-6 md:px-10 py-24 scroll-mt-24"
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
                  Blender modelling, and custom gameplay experiences.
                </p>
              </div>

              <div className="grid gap-5">
                <div className="rounded-3xl border border-white/10 bg-black/30 p-6 flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <div className="text-sm text-white/40 mb-2">Discord</div>
                    <div className="text-xl font-semibold truncate">{DISCORD}</div>
                  </div>

                  <CopyButton
                    value={DISCORD}
                    label="Copy"
                    className="shrink-0 px-4 py-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition-all text-sm"
                  />
                </div>

                <div className="rounded-3xl border border-white/10 bg-black/30 p-6 flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <div className="text-sm text-white/40 mb-2">Email</div>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="text-xl font-semibold truncate block hover:text-purple-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded"
                    >
                      {EMAIL}
                    </a>
                  </div>

                  <CopyButton
                    value={EMAIL}
                    label="Copy"
                    className="shrink-0 px-4 py-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition-all text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-white/40 text-sm backdrop-blur-xl bg-black/20">
        © {new Date().getFullYear()} deimos_who. All rights reserved.
        <VisitCounter />
      </footer>
    </div>
  );
}

/**
 * The headline piece: a large poster-backed video that only downloads once the
 * visitor presses play, then hands over to native controls.
 */
function FeaturedVideo({ item }) {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  const play = () => {
    setStarted(true);
    // The <video> needs `preload` lifted before it will fetch anything.
    const el = ref.current;
    if (!el) return;
    el.preload = 'auto';
    el.play().catch(() => {
      // Autoplay refused — controls are visible, so the visitor can start it.
    });
  };

  return (
    <div className="relative rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-xl overflow-hidden">
      <div className="absolute -inset-px rounded-[40px] bg-gradient-to-br from-purple-500/25 via-transparent to-blue-500/25 pointer-events-none" />

      <div className="relative">
        <div className="aspect-video relative bg-black">
          <video
            ref={ref}
            className="absolute inset-0 w-full h-full object-cover"
            src={item.src}
            poster={item.poster}
            preload="none"
            controls={started}
            playsInline
            loop
            muted
          />

          {!started && (
            <button
              type="button"
              onClick={play}
              aria-label={`Play ${item.title}`}
              className="group absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/70 via-black/10 to-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-purple-400"
            >
              <span className="flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 border border-white/25 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
                <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-9 md:h-9 translate-x-[2px] fill-white" aria-hidden="true">
                  <path d="M8 5.14v13.72a1 1 0 0 0 1.54.84l10.3-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14Z" />
                </svg>
              </span>
            </button>
          )}

          <div className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-black/50 backdrop-blur-md px-4 py-2 text-xs uppercase tracking-[0.2em] text-purple-200 pointer-events-none">
            Featured
          </div>
        </div>

        <div className="p-8 md:p-12 border-t border-white/10">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-14 items-start">
            <div>
              <h3 className="text-2xl md:text-4xl font-black tracking-tight">
                {item.title}
              </h3>

              <p className="mt-5 text-white/55 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Renders sit on a tile matching the Blender viewport grey they were captured
 * on, and are contained rather than cropped so nothing gets cut off.
 */
function ModelCard({ model }) {
  return (
    <div className={`group rounded-[32px] overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-xl hover:border-purple-400/40 transition-all duration-300 hover:-translate-y-1 ${model.wide ? 'sm:col-span-2' : ''}`}>
      <div className={`${model.wide ? 'aspect-[16/7] sm:aspect-[21/9]' : 'aspect-[4/3]'} relative overflow-hidden bg-[#3b3b3b]`}>
        <img
          className="absolute inset-0 w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          src={model.src}
          alt={`${model.title} — low-poly 3D model in Blender`}
          loading="lazy"
        />

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.25),transparent_55%)]" />
      </div>

      <div className="p-6 border-t border-white/10">
        <div className="text-lg font-semibold">{model.title}</div>
        <p className="mt-2 text-sm text-white/45 leading-relaxed">
          {model.description}
        </p>
      </div>
    </div>
  );
}

/**
 * Quote estimator inputs. Every rate lives in this block so prices can be
 * retuned without touching any markup: `base` values are starting prices in
 * USD, `mult` values scale them, and extras are flat per-model add-ons.
 *
 * Robux figures are shown alongside USD at the rate the Roblox talent boards
 * conventionally quote — R$1 ≈ $0.0038 — then grossed up for the 30% Roblox
 * takes out of a gamepass or marketplace sale. Being paid R$10,000 only puts
 * R$7,000 in my pocket, so quoting the raw conversion would quietly cut every
 * Robux job by a third.
 */
const USD_PER_ROBUX = 0.0038;
const ROBLOX_CUT = 0.3;

// `base: null` means "no list price" — the estimate turns into a conversation
// instead of a number, which is the honest answer for work I have not scoped.
const ASSET_TYPES = [
  { id: 'prop', label: 'Prop / set dressing', base: 20, note: 'Furniture, plants, clutter' },
  { id: 'weapon', label: 'Weapon or gear', base: 25, note: 'Swords, guns, bows, tools' },
  { id: 'accessory', label: 'Character accessory', base: 25, note: 'Hats, backpacks, wings' },
  { id: 'clothing-r6', label: 'R6 clothing', base: 35, note: 'Rigid or layered, fitted to R6' },
  { id: 'clothing-r15', label: 'R15 clothing', base: 45, note: 'Layered, fitted to R15' },
  { id: 'building', label: 'Building / environment', base: 45, note: 'Structures, terrain pieces' },
  { id: 'vehicle', label: 'Vehicle', base: 55, note: 'Cars, ships, aircraft' },
  { id: 'character', label: 'Character or creature', base: 65, note: 'NPCs, monsters, mounts' },
  { id: 'custom', label: 'Something else', base: null, note: 'Not listed? I model it anyway' },
];

const COMPLEXITY = [
  { id: 'simple', label: 'Simple', mult: 1, note: 'Clean shapes, low part count' },
  { id: 'standard', label: 'Standard', mult: 1.5, note: 'Moderate detail, some sub-parts' },
  { id: 'detailed', label: 'Detailed', mult: 2.25, note: 'Heavy detail, many components' },
];

const TEXTURING = [
  { id: 'flat', label: 'Flat colours', mult: 1, note: 'Solid palette, no maps' },
  { id: 'basic', label: 'Basic materials', mult: 1.3, note: 'Simple shaders and roughness' },
  { id: 'full', label: 'Full texture pass', mult: 1.6, note: 'UV unwrapped, baked maps' },
];

const DEADLINES = [
  { id: 'standard', label: 'Standard', mult: 1, note: '1–2 weeks' },
  { id: 'priority', label: 'Priority', mult: 1.25, note: '4–6 days' },
  { id: 'rush', label: 'Rush', mult: 1.6, note: '48 hours' },
];

const EXTRAS = [
  { id: 'rig', label: 'Rigging', price: 20, note: 'Armature and weight painting' },
  { id: 'anim', label: 'Animation', price: 35, note: 'Idle and use cycles' },
  { id: 'script', label: 'In-game scripting', price: 40, note: 'Wired up in Luau and working' },
  { id: 'optimise', label: 'Optimisation pass', price: 15, note: 'LODs, part-count reduction' },
  { id: 'source', label: 'Source .blend file', price: 10, note: 'Fully editable project' },
];

// Bulk work costs less per model because the setup is paid for once.
const QUANTITY_TIERS = [
  { min: 10, mult: 0.75, label: '10+ models — 25% off each' },
  { min: 5, mult: 0.85, label: '5–9 models — 15% off each' },
  { min: 2, mult: 0.95, label: '2–4 models — 5% off each' },
  { min: 1, mult: 1, label: null },
];

const byId = (list, id) => list.find((item) => item.id === id) ?? list[0];
const tierFor = (qty) => QUANTITY_TIERS.find((tier) => qty >= tier.min) ?? QUANTITY_TIERS.at(-1);

/**
 * Turns the picker state into a price. Extras are charged per model, then the
 * bulk discount applies, then the deadline multiplier scales the whole order —
 * a rush job costs more because the entire batch has to be squeezed in, not
 * just one piece of it.
 */
function estimate({ typeId, complexityId, textureId, deadlineId, extraIds, qty }) {
  const type = byId(ASSET_TYPES, typeId);
  if (type.base === null) return null;

  const perModel =
    type.base * byId(COMPLEXITY, complexityId).mult * byId(TEXTURING, textureId).mult +
    EXTRAS.filter((extra) => extraIds.includes(extra.id)).reduce((sum, e) => sum + e.price, 0);

  const tier = tierFor(qty);
  const total = perModel * qty * tier.mult * byId(DEADLINES, deadlineId).mult;

  return {
    total: Math.round(total),
    perModel: Math.round(perModel * tier.mult * byId(DEADLINES, deadlineId).mult),
    tier,
    // Scope shifts once the real reference images land, so a single figure
    // would be a promise I cannot keep. The band is the honest version.
    low: Math.round((total * 0.85) / 5) * 5,
    high: Math.round((total * 1.15) / 5) * 5,
  };
}

const toRobux = (usd) =>
  Math.ceil(usd / USD_PER_ROBUX / (1 - ROBLOX_CUT) / 50) * 50;
const money = (n) => n.toLocaleString('en-US');

/**
 * One row of mutually exclusive choices rendered as pressable cards.
 */
function OptionGroup({ label, hint, options, value, onChange, columns }) {
  return (
    <fieldset className="m-0 p-0 border-0">
      <legend className="text-sm font-semibold text-white/85">{label}</legend>
      {hint ? <p className="mt-1 text-xs text-white/40 leading-relaxed">{hint}</p> : null}

      <div className={`mt-4 grid gap-3 ${columns}`}>
        {options.map((option) => {
          const active = option.id === value;

          return (
            <button
              key={option.id}
              type="button"
              aria-pressed={active}
              onClick={() => onChange(option.id)}
              className={`text-left rounded-2xl border p-4 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                active
                  ? 'border-purple-400/60 bg-purple-500/10'
                  : 'border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.06]'
              }`}
            >
              <div className="text-sm font-semibold">{option.label}</div>
              <div className="mt-1 text-xs text-white/40 leading-relaxed">{option.note}</div>

              {typeof option.base === 'number' ? (
                <div className="mt-2 text-xs text-purple-200/70 tabular-nums">from ${option.base}</div>
              ) : null}
              {typeof option.mult === 'number' && option.mult !== 1 ? (
                <div className="mt-2 text-xs text-purple-200/70 tabular-nums">×{option.mult}</div>
              ) : null}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

/**
 * Interactive quote builder. It is deliberately an estimate rather than a
 * binding number: the picker cannot see reference images, so it gives a band
 * and hands off to a real conversation.
 */
function PricingEstimator() {
  const [typeId, setTypeId] = useState('weapon');
  const [complexityId, setComplexityId] = useState('standard');
  const [textureId, setTextureId] = useState('basic');
  const [deadlineId, setDeadlineId] = useState('standard');
  const [extraIds, setExtraIds] = useState([]);
  const [qty, setQty] = useState(1);

  const toggleExtra = (id) =>
    setExtraIds((current) =>
      current.includes(id) ? current.filter((x) => x !== id) : [...current, id],
    );

  const quote = estimate({ typeId, complexityId, textureId, deadlineId, extraIds, qty });
  const isCustom = quote === null;

  return (
    <div className="mt-14 grid lg:grid-cols-[1fr_360px] gap-8 items-start">
      <div className="rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-7 md:p-9 space-y-9">
        <OptionGroup
          label="What do you need?"
          hint="Anything not on this list still gets modelled — pick “Something else” and tell me what it is."
          options={ASSET_TYPES}
          value={typeId}
          onChange={setTypeId}
          columns="grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
        />

        <OptionGroup
          label="How detailed?"
          hint="Detail drives the price more than size does — a small, intricate model costs more than a large simple one."
          options={COMPLEXITY}
          value={complexityId}
          onChange={setComplexityId}
          columns="grid-cols-1 sm:grid-cols-3"
        />

        <OptionGroup
          label="Texturing"
          options={TEXTURING}
          value={textureId}
          onChange={setTextureId}
          columns="grid-cols-1 sm:grid-cols-3"
        />

        <OptionGroup
          label="Deadline"
          hint="Rush work reprices the whole order, not just one model — it displaces everything else in the queue."
          options={DEADLINES}
          value={deadlineId}
          onChange={setDeadlineId}
          columns="grid-cols-1 sm:grid-cols-3"
        />

        <fieldset className="m-0 p-0 border-0">
          <legend className="text-sm font-semibold text-white/85">Add-ons</legend>
          <p className="mt-1 text-xs text-white/40 leading-relaxed">
            Charged per model. Scripting is the one most people skip and then need — I
            build in Roblox as well as Blender, so I can hand back something that works
            in-game rather than a mesh you still have to wire up.
          </p>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
            {EXTRAS.map((extra) => {
              const active = extraIds.includes(extra.id);

              return (
                <button
                  key={extra.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => toggleExtra(extra.id)}
                  className={`text-left rounded-2xl border p-4 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                    active
                      ? 'border-purple-400/60 bg-purple-500/10'
                      : 'border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.06]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-sm font-semibold">{extra.label}</div>
                    <div className="text-xs text-purple-200/70 tabular-nums">+${extra.price}</div>
                  </div>
                  <div className="mt-1 text-xs text-white/40 leading-relaxed">{extra.note}</div>
                </button>
              );
            })}
          </div>
        </fieldset>

        <fieldset className="m-0 p-0 border-0">
          <legend className="text-sm font-semibold text-white/85">How many models?</legend>

          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-2">
              <button
                type="button"
                onClick={() => setQty((n) => Math.max(1, n - 1))}
                aria-label="One fewer model"
                className="w-10 h-10 rounded-xl border border-white/10 hover:bg-white/10 text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
              >
                −
              </button>

              <span className="w-14 text-center text-lg font-bold tabular-nums" aria-live="polite">
                {qty}
              </span>

              <button
                type="button"
                onClick={() => setQty((n) => Math.min(50, n + 1))}
                aria-label="One more model"
                className="w-10 h-10 rounded-xl border border-white/10 hover:bg-white/10 text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
              >
                +
              </button>
            </div>

            {quote?.tier.label ? (
              <div className="text-xs text-purple-200/80">{quote.tier.label}</div>
            ) : (
              <div className="text-xs text-white/40">Ordering more than one? The rate drops.</div>
            )}
          </div>
        </fieldset>
      </div>

      <aside className="lg:sticky lg:top-28 rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.18),transparent_60%)] pointer-events-none" />

        <div className="relative z-10">
          <div className="text-sm uppercase tracking-[0.3em] text-purple-300/70">Estimate</div>

          {isCustom ? (
            <>
              <div className="mt-5 text-3xl font-black tracking-tight leading-tight">
                Let’s talk it through.
              </div>
              <p className="mt-4 text-sm text-white/50 leading-relaxed">
                I model well beyond the list — if you can describe it or show me a
                reference, I can quote it. Send the idea over and you’ll get a fixed
                price before any work starts.
              </p>
            </>
          ) : (
            <>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="text-5xl font-black tracking-tight tabular-nums">
                  ${money(quote.total)}
                </span>
                <span className="text-sm text-white/40">USD</span>
              </div>

              <div className="mt-2 text-sm text-white/50 tabular-nums">
                or R${money(toRobux(quote.total))} in Robux
              </div>

              <div className="mt-1.5 text-xs text-white/35 leading-relaxed">
                Larger because Roblox keeps 30% of the sale — this is what nets the
                same as ${money(quote.total)}.
              </div>

              <dl className="mt-6 space-y-2 text-sm border-t border-white/10 pt-5">
                <div className="flex justify-between gap-4">
                  <dt className="text-white/45">Typical range</dt>
                  <dd className="tabular-nums">
                    ${money(quote.low)} – ${money(quote.high)}
                  </dd>
                </div>

                {qty > 1 ? (
                  <div className="flex justify-between gap-4">
                    <dt className="text-white/45">Per model</dt>
                    <dd className="tabular-nums">${money(quote.perModel)}</dd>
                  </div>
                ) : null}

                <div className="flex justify-between gap-4">
                  <dt className="text-white/45">Models</dt>
                  <dd className="tabular-nums">{qty}</dd>
                </div>
              </dl>
            </>
          )}

          <a
            href="#contact"
            className="mt-7 block text-center px-6 py-4 rounded-2xl bg-white text-black font-semibold hover:bg-white/90 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
          >
            Get a fixed quote
          </a>

          <p className="mt-5 text-xs text-white/35 leading-relaxed">
            An estimate, not an invoice. Send reference images and I’ll confirm a fixed
            price before starting — it never goes up mid-job.
          </p>
        </div>
      </aside>
    </div>
  );
}

/**
 * Copies `value` to the clipboard and flashes a confirmation. If the clipboard
 * API is unavailable the label just stays put rather than lying about having
 * copied.
 */
function CopyButton({ value, label, className }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard blocked (insecure context or denied permission) — leave the
      // label alone so the value stays visible for manual copying.
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      title={`Copy ${value}`}
      aria-label={`Copy ${value} to clipboard`}
      className={`${className} focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400`}
    >
      {copied ? 'Copied!' : label}
    </button>
  );
}

/**
 * Running visit tally, read from GoatCounter's public counter endpoint.
 *
 * Counting itself is done by the gc.zgo.at snippet in index.html, which also
 * feeds the private dashboard; it declines to count on localhost and file://
 * URLs on its own, so dev traffic stays out of the numbers. This component only
 * reads the published total.
 *
 * The site code lives in exactly one place — the script tag's data attribute —
 * and the JSON URL is derived from it, so there is nothing to keep in sync.
 */
function goatCounterTotalUrl() {
  const el = document.querySelector('[data-goatcounter]');
  const endpoint = el && el.dataset.goatcounter;

  // Endpoint looks like https://<code>.goatcounter.com/count
  const suffix = '/count';
  if (!endpoint || !endpoint.endsWith(suffix)) return null;

  return endpoint.slice(0, -suffix.length) + '/counter/TOTAL.json';
}

function VisitCounter() {
  const [visits, setVisits] = useState(null);

  useEffect(() => {
    const url = goatCounterTotalUrl();
    if (!url) return;

    const controller = new AbortController();

    fetch(url, { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(res.status))))
      .then((data) => {
        // `count` arrives pre-formatted with thousands separators, so it is
        // rendered as-is rather than parsed back into a number.
        if (typeof data.count === 'string') setVisits(data.count);
      })
      .catch(() => {
        // Offline, public counts switched off, or blocked by a tracker
        // blocker — render nothing rather than a broken placeholder.
      });

    return () => controller.abort();
  }, []);

  if (visits === null) return null;

  return (
    <div className="mt-2 text-xs text-white/30 tabular-nums">
      {visits} {visits === '1' ? 'visit' : 'visits'}
    </div>
  );
}
