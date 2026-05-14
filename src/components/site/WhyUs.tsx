import { motion } from "framer-motion";
import { ShieldCheck, Zap, Handshake, Building2, type LucideIcon } from "lucide-react";

const items: { icon: LucideIcon; n: string; title: string; desc: string }[] = [
  {
    icon: ShieldCheck,
    n: "01",
    title: "ISO Certified Quality",
    desc: "ISO 9001:2015 certified processes ensuring consistent product and service excellence",
  },
  {
    icon: Zap,
    n: "02",
    title: "Fast Pan-India Delivery",
    desc: "Reliable and prompt delivery of products across Mumbai and all of India",
  },
  {
    icon: Handshake,
    n: "03",
    title: "B2B Relationship Experts",
    desc: "We specialize in building lasting B2B partnerships that drive mutual growth",
  },
  {
    icon: Building2,
    n: "04",
    title: "All Sector Solutions",
    desc: "Products suited for home, commercial, and heavy industrial applications",
  },
];

export function WhyUs() {
  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-navy leading-tight">
            Why Companies Trust Adhul Marketo
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative overflow-hidden bg-white rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow"
            >
              <span className="pointer-events-none absolute -top-4 -right-2 text-7xl font-bold text-cobalt opacity-15 select-none">
                {it.n}
              </span>
              <it.icon className="size-8 text-cobalt" />
              <h3 className="mt-4 text-lg font-bold text-navy">{it.title}</h3>
              <p className="mt-2 text-sm text-text-muted leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
