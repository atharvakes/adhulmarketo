import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const aster = [
  { l: "A", w: "Admired" },
  { l: "S", w: "Successful" },
  { l: "T", w: "Transparent" },
  { l: "E", w: "Ethical" },
  { l: "R", w: "Robust" },
];

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-orange text-xs font-bold uppercase tracking-[0.2em]">
              Who We Are
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[40px] font-semibold text-navy leading-tight">
              Bridging the Gap Between Customers & Suppliers
            </h2>
            <p className="mt-6 text-text-muted leading-relaxed">
              Adhul Marketo (India) Pvt. Ltd. is a startup by young minds performing B2B
              sales and marketing activities. We understand market dynamics and guarantee
              quality products at desired commercials. We reduce the gap between
              customers and suppliers — and we match better.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Customer Satisfaction Is Our Endeavor",
                "Healthy Relationships With Suppliers",
                "Significant Revenue Generation",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-cobalt mt-0.5 shrink-0" />
                  <span className="text-text-dark font-medium">{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-cobalt font-semibold group"
            >
              Learn More About Us
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative bg-navy rounded-3xl p-8 lg:p-10 text-white overflow-hidden"
          >
            <div
              aria-hidden
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-30"
              style={{ background: "radial-gradient(circle, var(--cobalt), transparent 70%)" }}
            />
            <span className="relative text-orange text-xs font-bold uppercase tracking-[0.2em]">
              Our Vision
            </span>
            <div className="relative mt-6 grid grid-cols-5 gap-3 lg:gap-4">
              {aster.map((a) => (
                <div key={a.l} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-gradient-brand">
                    {a.l}
                  </div>
                  <div className="mt-2 text-[11px] lg:text-xs text-white/80 font-medium">
                    {a.w}
                  </div>
                </div>
              ))}
            </div>
            <p className="relative mt-8 text-sm lg:text-base text-white/85 italic border-t border-white/10 pt-6">
              Building an ASTER Organization Across the Globe
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
