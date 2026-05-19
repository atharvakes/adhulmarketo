import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Adhul's calibration gases arrive on schedule and on spec. Their certificates are accepted by every auditor we work with.",
    name: "Procurement Lead",
    role: "Refinery, West India",
  },
  {
    quote:
      "We standardised our gas regulators and manifolds on Adhul across three plants. Field issues have dropped to near zero.",
    name: "Maintenance Head",
    role: "Power Generation, Maharashtra",
  },
  {
    quote:
      "Responsive team, clean documentation, and equipment that simply works. They feel like an extension of our engineering team.",
    name: "Project Engineer",
    role: "EPC Contractor, Mumbai",
  },
  {
    quote:
      "Their ripening chambers transformed our handling cycle. Uniform results, lower wastage, straightforward service contracts.",
    name: "Operations Director",
    role: "Cold Chain Distributor, Pune",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-bone border-y hairline">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-text-muted">
            (08) Testimonials
          </span>
          <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl text-navy leading-[1]">
            What our
            <br />
            <em className="italic text-cobalt">clients say.</em>
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className="bg-white border hairline rounded-md p-8 lg:p-10 flex flex-col"
            >
              <Quote className="size-6 text-cobalt shrink-0" strokeWidth={1.5} />
              <blockquote className="mt-6 font-display text-xl lg:text-2xl text-navy leading-snug">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t hairline">
                <div className="text-sm font-medium text-navy">{t.name}</div>
                <div className="text-xs uppercase tracking-[0.18em] text-text-muted mt-1">
                  {t.role}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
