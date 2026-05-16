import { motion } from "framer-motion";
import { Wrench, ClipboardCheck, Target, Truck, type LucideIcon } from "lucide-react";

const services: { icon: LucideIcon; n: string; name: string; desc: string }[] = [
  {
    icon: Wrench,
    n: "S/01",
    name: "Gas Detector Repair",
    desc: "Component-level diagnostics, sensor replacement and calibration return for portable and fixed detectors.",
  },
  {
    icon: ClipboardCheck,
    n: "S/02",
    name: "Annual Maintenance Contracts",
    desc: "Scheduled preventive servicing, sensor lifecycle tracking and audit-ready compliance reports.",
  },
  {
    icon: Target,
    n: "S/03",
    name: "Calibration Services",
    desc: "On-site and bench calibration with certified gas mixtures and traceable documentation.",
  },
  {
    icon: Truck,
    n: "S/04",
    name: "Detector Rental",
    desc: "Short and long-term rental fleet for shutdowns, audits and project-specific monitoring needs.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-text-muted">
            (03) Services
          </span>
          <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl text-navy leading-[1]">
            Lifecycle support,
            <br />
            <em className="italic text-cobalt">engineered in.</em>
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-hairline border hairline rounded-md overflow-hidden">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-surface p-8 lg:p-10 hover:bg-white transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-text-muted">
                  {s.n}
                </span>
                <s.icon className="size-5 text-cobalt opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="mt-8 font-display text-2xl lg:text-3xl text-navy leading-tight">
                {s.name}
              </h3>
              <p className="mt-4 text-sm text-text-muted leading-relaxed max-w-md">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
