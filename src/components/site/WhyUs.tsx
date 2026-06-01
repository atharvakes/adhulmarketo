import { motion } from "framer-motion";

const items = [
  {
    n: "01",
    title: "ISO-certified processes",
    desc: "Operating under an ISO 9001:2015 quality management system audited annually.",
  },
  {
    n: "02",
    title: "Traceable calibration",
    desc: "Every reference gas ships with a certificate traceable to national standards.",
  },
  {
    n: "03",
    title: "Engineer-led service",
    desc: "Field engineers handle installation, commissioning and AMC , never resellers.",
  },
  {
    n: "04",
    title: "Pan-India logistics",
    desc: "Cylinder and instrument logistics across all major industrial corridors.",
  },
];

export function WhyUs() {
  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-text-muted">
            (05) Why Adhul
          </span>
          <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl text-navy leading-[1]">
            A standard of work
            <br />
            <em className="italic text-cobalt">our customers can audit.</em>
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12 border-t hairline pt-12">
          {items.map((it, i) => (
            <motion.div
              key={it.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="font-display text-5xl text-cobalt">{it.n}</div>
              <h3 className="mt-5 font-display text-xl text-navy leading-tight">
                {it.title}
              </h3>
              <p className="mt-3 text-sm text-text-muted leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
