import { motion } from "framer-motion";

const gases = [
  "Sulphur Hexafluoride (SF6)",
  "Helium",
  "Specialty Gas Mixtures",
  "High Purity Gases",
  "Standard Reference Gases",
];

export function IndustrialGases() {
  return (
    <section className="bg-navy py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-white text-xl sm:text-2xl font-semibold"
        >
          We Also Supply Industrial Gases
        </motion.h3>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {gases.map((g, i) => (
            <motion.span
              key={g}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-full border border-white/30 text-white text-sm px-4 py-2 hover:bg-white/10 transition-colors cursor-default"
            >
              {g}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
