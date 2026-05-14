import { motion } from "framer-motion";
import {
  FlaskConical,
  Gauge,
  ShieldAlert,
  Filter,
  GitBranch,
  Pipette,
  TestTube2,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

type Product = {
  icon: LucideIcon;
  bg: string;
  fg: string;
  name: string;
  desc: string;
};

const products: Product[] = [
  {
    icon: FlaskConical,
    bg: "bg-orange/10",
    fg: "text-orange",
    name: "Calibration Gas Mixtures & Specialty Gases",
    desc: "Precision gas standards for accurate instrument calibration",
  },
  {
    icon: Gauge,
    bg: "bg-cobalt/10",
    fg: "text-cobalt",
    name: "Pressure Regulators",
    desc: "High-performance regulators for controlled gas delivery",
  },
  {
    icon: ShieldAlert,
    bg: "bg-red-100",
    fg: "text-red-600",
    name: "Gas Detectors",
    desc: "Portable & fixed detectors, sensors for leak detection and safety",
  },
  {
    icon: Filter,
    bg: "bg-purple-100",
    fg: "text-purple-600",
    name: "Gas Purification Systems",
    desc: "Remove impurities for ultra-high purity gas applications",
  },
  {
    icon: GitBranch,
    bg: "bg-emerald-100",
    fg: "text-emerald-600",
    name: "Gas Manifold Systems & Tapping Points",
    desc: "Efficient multi-cylinder gas distribution systems",
  },
  {
    icon: Pipette,
    bg: "bg-cyan-100",
    fg: "text-cyan-600",
    name: "Gas Line Setup",
    desc: "End-to-end pipeline installation and configuration services",
  },
  {
    icon: TestTube2,
    bg: "bg-amber-100",
    fg: "text-amber-600",
    name: "Laboratory Chemicals & Glassware",
    desc: "Premium chemicals and precision lab glassware for research",
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

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-white rounded-2xl p-6 border border-border transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="absolute inset-x-0 top-0 h-0.5 rounded-t-2xl bg-orange scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
              <div
                className={`flex items-center justify-center size-12 rounded-xl ${p.bg}`}
              >
                <p.icon className={`size-6 ${p.fg}`} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-navy leading-snug">
                {p.name}
              </h3>
              <p className="mt-2 text-sm text-text-muted leading-relaxed">{p.desc}</p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-1 text-cobalt font-semibold text-sm hover:underline"
              >
                View Details <ArrowRight className="size-4" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
