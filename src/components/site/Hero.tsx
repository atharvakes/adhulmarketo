import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

/**
 * Animated abstract gas-molecule / sensor visual.
 * Pure SVG — no images, no dependencies, GPU-friendly.
 */
function MoleculeVisual() {
  return (
    <div className="relative aspect-square w-full max-w-[560px] mx-auto">
      {/* concentric pulse rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="absolute rounded-full border border-navy/15 ring-pulse"
            style={{
              width: 220,
              height: 220,
              animationDelay: `${i * 1.3}s`,
            }}
          />
        ))}
      </div>

      <svg
        viewBox="0 0 600 600"
        className="relative w-full h-full"
        aria-hidden
      >
        <defs>
          <radialGradient id="core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2A4FD8" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#0E1E3F" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#0E1E3F" stopOpacity="1" />
          </radialGradient>
          <linearGradient id="bond" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#2A4FD8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0E1E3F" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* hairline guide circles */}
        <circle cx="300" cy="300" r="240" fill="none" stroke="#0E1E3F" strokeOpacity="0.08" />
        <circle cx="300" cy="300" r="170" fill="none" stroke="#0E1E3F" strokeOpacity="0.08" />
        <circle cx="300" cy="300" r="100" fill="none" stroke="#0E1E3F" strokeOpacity="0.08" />

        {/* orbiting outer atoms */}
        <g className="orbit" style={{ transformOrigin: "300px 300px" }}>
          <line x1="300" y1="300" x2="540" y2="300" stroke="url(#bond)" strokeWidth="1" />
          <circle cx="540" cy="300" r="9" fill="#2A4FD8" />
          <circle cx="540" cy="300" r="22" fill="#2A4FD8" fillOpacity="0.08" />

          <line x1="300" y1="300" x2="120" y2="180" stroke="url(#bond)" strokeWidth="1" />
          <circle cx="120" cy="180" r="6" fill="#0E1E3F" />

          <line x1="300" y1="300" x2="180" y2="490" stroke="url(#bond)" strokeWidth="1" />
          <circle cx="180" cy="490" r="7" fill="#0E1E3F" />
        </g>

        {/* counter orbit */}
        <g className="orbit-rev" style={{ transformOrigin: "300px 300px" }}>
          <line x1="300" y1="300" x2="470" y2="470" stroke="url(#bond)" strokeWidth="1" />
          <circle cx="470" cy="470" r="5" fill="#2A4FD8" />
          <line x1="300" y1="300" x2="470" y2="130" stroke="url(#bond)" strokeWidth="1" />
          <circle cx="470" cy="130" r="4" fill="#0E1E3F" />
        </g>

        {/* core sphere */}
        <circle cx="300" cy="300" r="56" fill="url(#core)" />
        <circle cx="284" cy="284" r="14" fill="white" fillOpacity="0.25" />

        {/* readout ticks (sensor dial vibe) */}
        {Array.from({ length: 60 }).map((_, i) => {
          const angle = (i / 60) * Math.PI * 2;
          const r1 = 268;
          const r2 = i % 5 === 0 ? 252 : 260;
          const x1 = 300 + Math.cos(angle) * r1;
          const y1 = 300 + Math.sin(angle) * r1;
          const x2 = 300 + Math.cos(angle) * r2;
          const y2 = 300 + Math.sin(angle) * r2;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#0E1E3F"
              strokeOpacity={i % 5 === 0 ? 0.3 : 0.12}
              strokeWidth="1"
            />
          );
        })}
      </svg>

      {/* floating data chip */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="absolute top-[12%] right-[2%] bg-white/90 backdrop-blur border hairline rounded-md px-3 py-2 shadow-sm float-slow"
      >
        <div className="text-[10px] uppercase tracking-widest text-text-muted">Purity</div>
        <div className="text-sm font-semibold text-navy tabular-nums">99.9995%</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-[10%] left-[2%] bg-white/90 backdrop-blur border hairline rounded-md px-3 py-2 shadow-sm float-slow"
        style={{ animationDelay: "1.5s" }}
      >
        <div className="text-[10px] uppercase tracking-widest text-text-muted">ISO</div>
        <div className="text-sm font-semibold text-navy">9001:2015</div>
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative pt-28 lg:pt-32 pb-16 lg:pb-24 bg-surface overflow-hidden"
    >
      {/* faint editorial grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0E1E3F 1px, transparent 1px), linear-gradient(to bottom, #0E1E3F 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Copy */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-xs font-medium text-text-muted uppercase tracking-[0.18em]"
            >
              <span className="size-1.5 rounded-full bg-cobalt blink-dot" />
              Mumbai · Est. B2B Specialists
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 font-display text-[44px] sm:text-6xl lg:text-[88px] leading-[0.95] text-navy"
            >
              Adhul Marketo
              <br />
              <em className="italic text-cobalt">Pvt Ltd.</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-7 max-w-xl text-base lg:text-lg text-text-muted leading-relaxed"
            >
              Adhul Marketo manufactures, supplies and services certified gas safety
              equipment, calibration mixtures and specialty gases for India's most
              demanding laboratories, plants and field operations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#products"
                className="group inline-flex items-center gap-2 bg-navy text-white text-sm font-medium px-6 py-3.5 rounded-full hover:bg-cobalt transition-colors"
              >
                Explore the catalogue
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-navy text-sm font-medium px-2 py-3.5 hover:text-cobalt transition-colors"
              >
                Speak to an engineer →
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 flex items-center gap-4 text-xs text-text-muted"
            >
              <ShieldCheck className="size-4 text-navy" />
              <span className="uppercase tracking-[0.18em]">
                ISO 9001:2015 · MSME Registered · Pan-India Logistics
              </span>
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <MoleculeVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
