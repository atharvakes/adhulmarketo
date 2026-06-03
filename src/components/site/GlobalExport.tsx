import { motion } from "framer-motion";

// Equirectangular projection on viewBox 1000x500
const project = (lat: number, lng: number) => ({
  x: ((lng + 180) / 360) * 1000,
  y: ((90 - lat) / 180) * 500,
});

const origin = { code: "IN", name: "Mumbai Hub", lat: 19.076, lng: 72.8777 };

const destinations = [
  { code: "AE", name: "UAE", lat: 24.4667, lng: 54.3667 },
  { code: "SG", name: "Singapore", lat: 1.3521, lng: 103.8198 },
  { code: "ZA", name: "South Africa", lat: -29.0, lng: 24.0 },
  { code: "NG", name: "Nigeria", lat: 9.082, lng: 8.6753 },
  { code: "CN", name: "China", lat: 35.8617, lng: 104.1954 },
  { code: "BD", name: "Bangladesh", lat: 23.685, lng: 90.3563 },
];

export function GlobalExport() {
  const o = project(origin.lat, origin.lng);

  return (
    <section id="global" className="py-24 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-text-muted">
              (08) Global Network
            </span>
            <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl text-navy leading-[1.05]">
              Global Export
              <br />
              <em className="italic text-cobalt">Distribution.</em>
            </h2>
            <p className="mt-6 text-text-dark/80 text-base lg:text-lg font-medium">
              Mumbai and beyond. Delivering engineered mixtures globally.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <p className="text-text-muted text-base lg:text-base">
              We manufacture and load high-purity cylinder mixtures and technical
              gas safety systems directly from our custom in-house facility in
              Mumbai, serving world-class installations across key hubs.
            </p>
            <div className="mt-6">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-text-muted">
                Active corridors delivered
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {destinations.map((d) => (
                  <span
                    key={d.name}
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-surface border hairline text-navy"
                  >
                    <span className="text-[10px] font-mono text-text-muted">
                      {d.code}
                    </span>
                    {d.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="mt-12 relative rounded-2xl border border-white/5 bg-[#0a1024] overflow-hidden shadow-2xl"
        >
            {/* Top status bar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 text-[10px] font-mono uppercase tracking-[0.18em]">
              <div className="flex items-center gap-2 text-emerald-400">
                <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                Logistics line status: Active
              </div>
              <div className="text-white/50">Export Center: Mumbai, IN</div>
            </div>

            <svg
              viewBox="0 0 1000 500"
              className="w-full h-auto block"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="routeGradDark" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.95" />
                </linearGradient>
                <radialGradient id="pulseDark" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Dotted world map background */}
              <g fill="#1e2a4a">
                {Array.from({ length: 60 }).map((_, row) =>
                  Array.from({ length: 120 }).map((_, col) => {
                    const x = col * 8.3 + 4;
                    const y = row * 8.3 + 4;
                    const inLand =
                      (x > 470 && x < 600 && y > 120 && y < 380 && (x + y) % 17 < 12) ||
                      (x > 600 && x < 820 && y > 100 && y < 320 && (x * y) % 19 < 14) ||
                      (x > 650 && x < 720 && y > 200 && y < 290) ||
                      (x > 720 && x < 800 && y > 230 && y < 310 && (x + y) % 13 < 9) ||
                      (x > 780 && x < 880 && y > 330 && y < 400) ||
                      (x > 130 && x < 320 && y > 100 && y < 280 && (x + y * 2) % 19 < 13) ||
                      (x > 270 && x < 360 && y > 280 && y < 430 && (x + y) % 15 < 10);
                    return inLand ? (
                      <circle key={`${row}-${col}`} cx={x} cy={y} r="1.6" />
                    ) : null;
                  })
                )}
              </g>

              {/* Routes */}
              {destinations.map((d, i) => {
                const p = project(d.lat, d.lng);
                const mx = (o.x + p.x) / 2;
                const my = (o.y + p.y) / 2 - Math.abs(p.x - o.x) * 0.25;
                const path = `M ${o.x} ${o.y} Q ${mx} ${my} ${p.x} ${p.y}`;
                return (
                  <motion.path
                    key={d.name}
                    d={path}
                    fill="none"
                    stroke="url(#routeGradDark)"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: 0.2 + i * 0.18, ease: "easeOut" }}
                  />
                );
              })}

              {/* Destination markers */}
              {destinations.map((d, i) => {
                const p = project(d.lat, d.lng);
                const labelLeft = p.x > 850;
                return (
                  <motion.g
                    key={d.name}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.6 + i * 0.18 }}
                  >
                    <circle cx={p.x} cy={p.y} r="14" fill="url(#pulseDark)" />
                    <circle
                      cx={p.x}
                      cy={p.y}
                      r="3.2"
                      fill="#60a5fa"
                      stroke="#0a1024"
                      strokeWidth="1.2"
                    />
                    <g transform={`translate(${labelLeft ? p.x - 90 : p.x + 10}, ${p.y + 4})`}>
                      <rect
                        x="0"
                        y="-9"
                        rx="3"
                        ry="3"
                        width="80"
                        height="14"
                        fill="#111a36"
                        stroke="#2a3a66"
                        strokeWidth="0.5"
                      />
                      <text x="6" y="1" fontSize="7" fontFamily="monospace" fill="#7a8bbf">
                        {d.code}
                      </text>
                      <text x="20" y="1.5" fontSize="8.5" fontWeight="600" fill="#e6ecff">
                        {d.name}
                      </text>
                    </g>
                  </motion.g>
                );
              })}

              {/* Origin: Mumbai */}
              <g>
                <motion.circle
                  cx={o.x}
                  cy={o.y}
                  r="22"
                  fill="url(#pulseDark)"
                  initial={{ scale: 0.6, opacity: 0.4 }}
                  animate={{ scale: [0.6, 1.5, 0.6], opacity: [0.4, 0, 0.4] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                  style={{ transformOrigin: `${o.x}px ${o.y}px` }}
                />
                <circle cx={o.x} cy={o.y} r="5" fill="#ffffff" stroke="#60a5fa" strokeWidth="1.5" />
                <g transform={`translate(${o.x + 10}, ${o.y + 4})`}>
                  <rect
                    x="0"
                    y="-9"
                    rx="3"
                    ry="3"
                    width="92"
                    height="14"
                    fill="#1746b8"
                    stroke="#60a5fa"
                    strokeWidth="0.6"
                  />
                  <text x="6" y="1" fontSize="7" fontFamily="monospace" fill="#cfe0ff">
                    IN
                  </text>
                  <text x="20" y="1.5" fontSize="8.5" fontWeight="700" fill="#ffffff">
                    {origin.name}
                  </text>
                </g>
              </g>
            </svg>

            {/* Bottom status bar */}
            <div className="flex items-center justify-between px-5 py-3 border-t border-white/5 text-[10px] font-mono uppercase tracking-[0.18em]">
              <div className="text-white/60">
                Active export link in all {destinations.length} corridors
              </div>
              <div className="text-white/40">ISO 9001 / ISO 17025 Certified</div>
            </div>
          </motion.div>
      </div>
    </section>
  );
}
