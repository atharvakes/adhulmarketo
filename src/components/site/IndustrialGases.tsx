import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappEnquiryUrl } from "@/lib/whatsapp";

const gases = [
  "Sulphur Hexafluoride (SF₆)",
  "Helium",
  "Specialty Gas Mixtures",
  "High-Purity Gases",
  "Standard Reference Gases",
  "Argon",
  "Nitrogen",
  "Hydrogen",
];

export function IndustrialGases() {
  return (
    <section className="bg-navy text-white py-20 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/60">
              (04) Industrial Gases
            </span>
            <h3 className="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl leading-[1]">
              And of course,
              <br />
              <em className="italic text-cobalt">the gases themselves.</em>
            </h3>
            <p className="mt-5 text-white/70 text-sm max-w-md leading-relaxed">
              Cylinder and bulk supply across India , sourced through audited partners
              and delivered with full traceability.
            </p>
          </motion.div>

          <div className="lg:col-span-7 flex flex-wrap gap-3">
            {gases.map((g, i) => (
              <motion.a
                key={g}
                href={whatsappEnquiryUrl(g)}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.03] text-white/90 text-sm px-5 py-2.5 hover:bg-emerald-500 hover:border-emerald-400 hover:text-white transition-colors"
                aria-label={`Enquire about ${g} on WhatsApp`}
              >
                {g}
                <MessageCircle className="size-3.5 opacity-60 group-hover:opacity-100" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
