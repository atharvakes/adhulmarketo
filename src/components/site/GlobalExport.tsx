import { motion } from "framer-motion";

// Approximate lat/lng to SVG % positions (equirectangular projection on viewBox 1000x500)
// x = (lng + 180) / 360 * 1000, y = (90 - lat) / 180 * 500
const project = (lat: number, lng: number) => ({
  x: ((lng + 180) / 360) * 1000,
  y: ((90 - lat) / 180) * 500,
});

const origin = { name: "Mumbai, India", lat: 19.076, lng: 72.8777 };

const destinations = [
  { name: "Singapore", lat: 1.3521, lng: 103.8198 },
  { name: "South Africa", lat: -29.0, lng: 24.0 },
  { name: "Nigeria", lat: 9.082, lng: 8.6753 },
  { name: "China", lat: 35.8617, lng: 104.1954 },
  { name: "Bangladesh", lat: 23.685, lng: 90.3563 },
];

export function GlobalExport() {
  const o = project(origin.lat, origin.lng);

  return (
    <section id="global" className="py-24 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-text-muted">
              (08) Global Reach
            </span>
            <h2 className="mt-6 font-display text-4xl sm:text-5xl text-navy leading-[1.05]">
              Global Export
              <br />
              <em className="italic text-cobalt">Distribution.</em>
            </h2>
            <p className="mt-6 text-text-muted text-base lg:text-lg">
              Mumbai and beyond. Delivering engineered mixtures globally.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 lg:col-start-7 text-text-muted text-base lg:text-lg max-w-xl"
          >
            We manufacture and load high-purity cylinder mixtures and technical
            gas safety systems directly from our custom in-house facility in
            Mumbai, serving world-class installations across key hubs.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mt-16 relative rounded-3xl border hairline bg-surface overflow-hidden"
        >
          <svg
            viewBox="0 0 1000 500"
            className="w-full h-auto block"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="routeGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="hsl(var(--cobalt, 220 90% 45%))" stopOpacity="0.1" />
                <stop offset="100%" stopColor="hsl(var(--cobalt, 220 90% 45%))" stopOpacity="0.9" />
              </linearGradient>
              <radialGradient id="pulse" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#1746b8" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#1746b8" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Stylized world dot map background */}
            <rect width="1000" height="500" fill="#f5f6f8" />
            <g fill="#cdd3dc">
              {Array.from({ length: 60 }).map((_, row) =>
                Array.from({ length: 120 }).map((_, col) => {
                  const x = col * 8.3 + 4;
                  const y = row * 8.3 + 4;
                  // Rough landmass mask using sine-based pseudo continents
                  const inLand =
                    // Africa+Europe
                    (x > 470 && x < 600 && y > 120 && y < 380 && (x + y) % 17 < 12) ||
                    // Asia
                    (x > 600 && x < 820 && y > 100 && y < 320 && (x * y) % 19 < 14) ||
                    // India subcontinent
                    (x > 650 && x < 720 && y > 200 && y < 290) ||
                    // SE Asia
                    (x > 720 && x < 800 && y > 230 && y < 310 && (x + y) % 13 < 9) ||
                    // Australia
                    (x > 780 && x < 880 && y > 330 && y < 400) ||
                    // N America
                    (x > 130 && x < 320 && y > 100 && y < 280 && (x + y * 2) % 19 < 13) ||
                    // S America
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
                  stroke="url(#routeGrad)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, delay: 0.2 + i * 0.2, ease: "easeOut" }}
                />
              );
            })}

            {/* Destination markers */}
            {destinations.map((d, i) => {
              const p = project(d.lat, d.lng);
              return (
                <motion.g
                  key={d.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.2 }}
                >
                  <circle cx={p.x} cy={p.y} r="14" fill="url(#pulse)" />
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r="4.5"
                    fill="#1746b8"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                  />
                  <text
                    x={p.x + 9}
                    y={p.y - 8}
                    fontSize="11"
                    fontWeight="600"
                    fill="#0a1f44"
                  >
                    {d.name}
                  </text>
                </motion.g>
              );
            })}

            {/* Origin: Mumbai */}
            <g>
              <motion.circle
                cx={o.x}
                cy={o.y}
                r="20"
                fill="url(#pulse)"
                initial={{ scale: 0.6, opacity: 0.4 }}
                animate={{ scale: [0.6, 1.4, 0.6], opacity: [0.4, 0, 0.4] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformOrigin: `${o.x}px ${o.y}px` }}
              />
              <circle cx={o.x} cy={o.y} r="6" fill="#0a1f44" stroke="#ffffff" strokeWidth="2" />
              <text
                x={o.x + 10}
                y={o.y + 16}
                fontSize="12"
                fontWeight="700"
                fill="#0a1f44"
              >
                Mumbai · HQ
              </text>
            </g>
          </svg>

          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
            {destinations.map((d) => (
              <span
                key={d.name}
                className="text-[11px] font-medium uppercase tracking-[0.18em] px-3 py-1.5 rounded-full bg-white/80 backdrop-blur border hairline text-navy"
              >
                {d.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
