import { motion } from "framer-motion";
import { ArrowUpRight, Phone, Mail } from "lucide-react";

export function CtaBanner() {
  return (
    <section id="contact" className="relative bg-surface py-24 lg:py-32 overflow-hidden">
      {/* hairline grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0E1E3F 1px, transparent 1px), linear-gradient(to bottom, #0E1E3F 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-5xl px-4 sm:px-6 text-center"
      >
        <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-text-muted">
          (06) Get in touch
        </span>
        <h2 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl text-navy leading-[0.95]">
          Tell us what you
          <br />
          need to <em className="italic text-cobalt">measure, supply or service.</em>
        </h2>
        <p className="mt-8 text-text-muted max-w-xl mx-auto">
          Our team responds to every enquiry within one business day —
          with a real engineer, not a form letter.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="tel:+919152191121"
            className="group inline-flex items-center justify-center gap-2 bg-navy text-white font-medium px-7 py-4 rounded-full hover:bg-cobalt transition-colors"
          >
            <Phone className="size-4" />
            +91 91521 91121
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="mailto:info@adhulmarketo.com"
            className="inline-flex items-center justify-center gap-2 border border-navy/20 text-navy font-medium px-7 py-4 rounded-full hover:bg-navy hover:text-white transition-colors"
          >
            <Mail className="size-4" />
            info@adhulmarketo.com
          </a>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs uppercase tracking-[0.2em] text-text-muted">
          <span>Mumbai, India</span>
          <span className="size-1 rounded-full bg-text-muted/40" />
          <span>Mon–Sat · 09:00–19:00</span>
          <span className="size-1 rounded-full bg-text-muted/40" />
          <span>ISO 9001:2015</span>
        </div>
      </motion.div>
    </section>
  );
}
