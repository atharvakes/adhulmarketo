import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const aster = [
  { l: "A", w: "Admired" },
  { l: "S", w: "Successful" },
  { l: "T", w: "Transparent" },
  { l: "E", w: "Ethical" },
  { l: "R", w: "Robust" },
];

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-text-muted">
              (01) About
            </span>
            <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl text-navy leading-[1] ">
              Bridging suppliers
              <br />
              and operators with
              <br />
              <em className="italic text-cobalt">measurable trust.</em>
            </h2>
            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-2 text-navy font-medium border-b border-navy/30 pb-1 hover:border-cobalt hover:text-cobalt transition-colors"
            >
              Read our charter <ArrowUpRight className="size-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <p className="text-lg lg:text-xl text-text-dark leading-relaxed font-light">
              Adhul Marketo (India) Pvt. Ltd. is a young, ISO-certified B2B house
              specialising in industrial gas safety. We sit between manufacturers
              and end users , calibrating, supplying and servicing the equipment that
              keeps modern plants compliant.
            </p>
            <p className="mt-6 text-base text-text-muted leading-relaxed">
              Every relationship is governed by a single internal framework , ASTER ,
              that defines how we measure ourselves long before a customer does.
            </p>

            <div className="mt-12 grid grid-cols-5 gap-2 sm:gap-4 border-t hairline pt-10">
              {aster.map((a, i) => (
                <motion.div
                  key={a.l}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="text-center"
                >
                  <div className="font-display text-5xl sm:text-6xl text-navy">{a.l}</div>
                  <div className="mt-2 text-[10px] sm:text-xs uppercase tracking-[0.18em] text-text-muted">
                    {a.w}
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="mt-6 text-xs text-text-muted italic text-center">
              Building an ASTER organisation across the globe.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
