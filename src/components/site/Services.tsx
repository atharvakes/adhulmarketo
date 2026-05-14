import { motion } from "framer-motion";
import { Wrench, ClipboardCheck, Target, Truck, type LucideIcon } from "lucide-react";

const services: { icon: LucideIcon; name: string; desc: string }[] = [
  {
    icon: Wrench,
    name: "Gas Detector Repair",
    desc: "Expert repair services to keep your detection equipment operating at peak performance",
  },
  {
    icon: ClipboardCheck,
    name: "AMC — Annual Maintenance Contract",
    desc: "Comprehensive maintenance plans to ensure continuous safety compliance year-round",
  },
  {
    icon: Target,
    name: "Calibration Services",
    desc: "Certified calibration of gas detectors and sensors to industry standards",
  },
  {
    icon: Truck,
    name: "Gas Detector Rental",
    desc: "Flexible short and long-term rental options for portable gas detection equipment",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-orange text-xs font-bold uppercase tracking-[0.2em]">
            What We Offer
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[40px] font-semibold text-navy leading-tight">
            After-Sales & Support Services
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-border border-l-4 border-l-navy p-6 hover:shadow-md transition-shadow"
            >
              <s.icon className="size-8 text-cobalt" />
              <h3 className="mt-4 text-lg font-bold text-navy leading-snug">{s.name}</h3>
              <p className="mt-2 text-sm text-text-muted leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
