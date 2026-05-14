import { motion } from "framer-motion";
import { FlaskConical, Gauge, GitBranch, Pipette, ArrowRight, type LucideIcon } from "lucide-react";
import calibrationGas from "@/assets/products/calibration-gas.jpg";
import pressureRegulators from "@/assets/products/pressure-regulators.jpg";
import gasManifold from "@/assets/products/gas-manifold.jpg";
import gasLineSetup from "@/assets/products/gas-line-setup.jpg";

type Product = {
  icon: LucideIcon;
  bg: string;
  fg: string;
  name: string;
  desc: string;
  image: string;
  alt: string;
};

const products: Product[] = [
  {
    icon: FlaskConical,
    bg: "bg-orange/10",
    fg: "text-orange",
    name: "Calibration Gas Mixtures & Specialty Gases",
    desc: "Precision gas standards for accurate instrument calibration",
    image: calibrationGas,
    alt: "Calibration gas cylinders and specialty gas mixtures",
  },
  {
    icon: Gauge,
    bg: "bg-cobalt/10",
    fg: "text-cobalt",
    name: "Pressure Regulators",
    desc: "High-performance regulators for controlled gas delivery",
    image: pressureRegulators,
    alt: "Industrial brass gas pressure regulator with gauges",
  },
  {
    icon: GitBranch,
    bg: "bg-emerald-100",
    fg: "text-emerald-600",
    name: "Gas Manifold Systems & Tapping Points",
    desc: "Efficient multi-cylinder gas distribution systems",
    image: gasManifold,
    alt: "Industrial gas manifold system with tapping points",
  },
  {
    icon: Pipette,
    bg: "bg-cyan-100",
    fg: "text-cyan-600",
    name: "Gas Line Setup",
    desc: "End-to-end pipeline installation and configuration services",
    image: gasLineSetup,
    alt: "Stainless steel industrial gas pipeline installation",
  },
];

export function Products() {
  return (
    <section id="products" className="py-20 lg:py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-orange text-xs font-bold uppercase tracking-[0.2em]">
            What We Supply
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[40px] font-semibold text-navy leading-tight">
            Our Complete Product Range
          </h2>
          <p className="mt-4 text-text-muted">
            High-quality industrial and laboratory grade solutions for every need
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {products.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-white rounded-2xl overflow-hidden border border-border transition-all hover:-translate-y-1 hover:shadow-xl flex flex-col"
            >
              <span className="absolute inset-x-0 top-0 h-0.5 bg-orange scale-x-0 group-hover:scale-x-100 origin-left transition-transform z-10" />

              <div className="relative aspect-[16/10] overflow-hidden bg-navy/5">
                <img
                  src={p.image}
                  alt={p.alt}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div
                  className={`absolute top-4 left-4 flex items-center justify-center size-12 rounded-xl ${p.bg} backdrop-blur-sm ring-1 ring-white/40`}
                >
                  <p.icon className={`size-6 ${p.fg}`} />
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-navy leading-snug">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm text-text-muted leading-relaxed">
                  {p.desc}
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1 text-cobalt font-semibold text-sm hover:underline self-start"
                >
                  View Details <ArrowRight className="size-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
