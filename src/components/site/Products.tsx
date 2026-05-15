import { motion } from "framer-motion";
import { ArrowUpRight, type LucideIcon, FlaskConical, Gauge, GitBranch, Pipette } from "lucide-react";
import calibrationGas from "@/assets/products/calibration-gas.jpg";
import pressureRegulators from "@/assets/products/pressure-regulators.jpg";
import gasManifold from "@/assets/products/gas-manifold.jpg";
import gasLineSetup from "@/assets/products/gas-line-setup.jpg";

type Product = {
  icon: LucideIcon;
  index: string;
  name: string;
  desc: string;
  spec: string;
  image: string;
  alt: string;
};

const products: Product[] = [
  {
    icon: FlaskConical,
    index: "01",
    name: "Calibration Gas Mixtures & Specialty Gases",
    desc: "Precision gas standards traceable to NIST/NPL for accurate instrument calibration across industrial and laboratory environments.",
    spec: "Up to 99.9995% purity",
    image: calibrationGas,
    alt: "Calibration gas cylinders and specialty gas mixtures",
  },
  {
    icon: Gauge,
    index: "02",
    name: "Pressure Regulators",
    desc: "Single and dual-stage regulators engineered for stable, contamination-free gas delivery across pressure ranges.",
    spec: "Single & dual-stage",
    image: pressureRegulators,
    alt: "Industrial brass gas pressure regulator with gauges",
  },
  {
    icon: GitBranch,
    index: "03",
    name: "Gas Manifold Systems & Tapping Points",
    desc: "Multi-cylinder manifold systems with auto-changeover for uninterrupted distribution to laboratories, hospitals and plants.",
    spec: "Auto-changeover",
    image: gasManifold,
    alt: "Industrial gas manifold system with tapping points",
  },
  {
    icon: Pipette,
    index: "04",
    name: "Gas Line Setup",
    desc: "End-to-end stainless steel pipeline design, installation, leak-testing and commissioning to project specification.",
    spec: "Turnkey installation",
    image: gasLineSetup,
    alt: "Stainless steel industrial gas pipeline installation",
  },
];

export function Products() {
  return (
    <section id="products" className="py-24 lg:py-32 bg-bone border-y hairline">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-8 flex-wrap">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-text-muted">
              (02) — Catalogue
            </span>
            <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl text-navy leading-[1]">
              Engineered for the
              <br />
              <em className="italic text-cobalt">work that matters.</em>
            </h2>
          </motion.div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-cobalt transition-colors"
          >
            Request full datasheet <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
          {products.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-white border hairline">
                <img
                  src={p.image}
                  alt={p.alt}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="bg-white/90 backdrop-blur text-navy text-[10px] font-medium tracking-[0.18em] uppercase px-2.5 py-1 rounded-sm">
                    {p.index} / {String(products.length).padStart(2, "0")}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-navy text-white text-[11px] font-medium px-3 py-1.5 rounded-full">
                    {p.spec}
                  </span>
                </div>
              </div>

              <div className="mt-6 flex items-start gap-4">
                <p.icon className="size-5 text-cobalt mt-1 shrink-0" />
                <div className="flex-1">
                  <h3 className="font-display text-2xl lg:text-[28px] text-navy leading-tight">
                    {p.name}
                  </h3>
                  <p className="mt-3 text-sm text-text-muted leading-relaxed max-w-md">
                    {p.desc}
                  </p>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-1.5 text-navy text-sm font-medium border-b border-navy/30 pb-0.5 hover:border-cobalt hover:text-cobalt transition-colors"
                  >
                    Enquire about this product
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
