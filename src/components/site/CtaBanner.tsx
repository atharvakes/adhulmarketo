import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

export function CtaBanner() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div
        className="relative py-20 lg:py-24"
        style={{
          background: "linear-gradient(90deg, var(--cobalt), var(--navy))",
        }}
      >
        <svg
          aria-hidden
          className="absolute inset-0 w-full h-full opacity-[0.06]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="diag" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="20" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diag)" />
        </svg>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center text-white"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold leading-tight">
            Have a Requirement or a Question?
          </h2>
          <p className="mt-4 text-white/85 max-w-2xl mx-auto">
            Our team of experts is ready to help you find the perfect gas safety
            solution for your needs.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919152191121"
              className="inline-flex items-center justify-center gap-2 bg-white text-navy font-semibold px-6 py-3.5 rounded-full hover:scale-[1.03] active:scale-[0.97] transition-transform shadow-lg"
            >
              <Phone className="size-4" />
              Call Us Now: +91 9152191121
            </a>
            <a
              href="mailto:info@adhulmarketo.com"
              className="inline-flex items-center justify-center gap-2 bg-orange text-white font-semibold px-6 py-3.5 rounded-full hover:scale-[1.03] active:scale-[0.97] transition-transform shadow-lg"
            >
              <Mail className="size-4" />
              Send an Enquiry
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
