import { motion } from "framer-motion";
import reliance from "@/assets/clients/reliance.png";
import gail from "@/assets/clients/gail.png";
import ioc from "@/assets/clients/ioc.png";
import hpcl from "@/assets/clients/hpcl.png";
import bpcl from "@/assets/clients/bpcl.png";
import lt from "@/assets/clients/lt.png";
import ntpc from "@/assets/clients/ntpc.png";

const clients = [
  { name: "Indian Oil", src: ioc },
  { name: "HPCL", src: hpcl },
  { name: "BPCL", src: bpcl },
  { name: "Reliance Industries", src: reliance },
  { name: "Larsen & Toubro", src: lt },
  { name: "NTPC", src: ntpc },
  { name: "GAIL", src: gail },
];

export function Clients() {
  return (
    <section id="clients" className="py-24 lg:py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-text-muted">
              (07) Partners
            </span>
            <h2 className="mt-6 font-display text-4xl sm:text-5xl text-navy leading-[1.05]">
              Trusted by India's
              <br />
              <em className="italic text-cobalt">core industries.</em>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 lg:col-start-7 text-text-muted text-base lg:text-lg max-w-xl"
          >
            For more than two decades, our equipment has supported safety
            and supply at refineries, power plants, research labs and EPC majors
            across India.
          </motion.p>
        </div>
      </div>

      <div className="mt-16 relative overflow-hidden cursor-grab active:cursor-grabbing">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-surface to-transparent z-10" />

        <motion.div
          drag="x"
          dragConstraints={{ left: -1200, right: 0 }}
          dragElastic={0.15}
          whileTap={{ cursor: "grabbing" }}
          className="flex marquee gap-16 sm:gap-24 whitespace-nowrap items-center select-none"
        >
          {[...clients, ...clients].map((c, i) => (
            <div
              key={c.name + i}
              className="shrink-0 flex items-center justify-center h-20 sm:h-24 pointer-events-none"
            >
              <img
                src={c.src}
                alt={`${c.name} logo`}
                loading="lazy"
                draggable={false}
                className="h-full w-auto max-w-[180px] object-contain opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-500"
              />
            </div>
          ))}
        </motion.div>
      </div>

      <p className="mt-12 text-xs uppercase tracking-[0.22em] text-text-muted text-center">
        Among 200+ enterprise clients · Pan-India delivery
      </p>
    </section>
  );
}
