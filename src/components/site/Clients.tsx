import { motion } from "framer-motion";

const clients = [
  { name: "Indian Oil", sub: "Corporation" },
  { name: "HPCL", sub: "Hindustan Petroleum" },
  { name: "BPCL", sub: "Bharat Petroleum" },
  { name: "Tata Power", sub: "Energy" },
  { name: "Reliance", sub: "Industries" },
  { name: "L&T", sub: "Larsen & Toubro" },
  { name: "ONGC", sub: "Oil & Natural Gas" },
  { name: "GAIL", sub: "India Limited" },
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
            and supply for refineries, power plants and EPC majors across India.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 border hairline rounded-md overflow-hidden bg-white">
          {clients.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              className="group relative aspect-[3/2] flex flex-col items-center justify-center text-center border-r border-b hairline last:border-r-0 [&:nth-child(4n)]:border-r-0 [&:nth-last-child(-n+4)]:border-b-0 px-4 hover:bg-bone transition-colors"
            >
              <span className="font-display text-2xl sm:text-3xl text-navy leading-none tracking-tight">
                {c.name}
              </span>
              <span className="mt-2 text-[10px] uppercase tracking-[0.22em] text-text-muted">
                {c.sub}
              </span>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-xs uppercase tracking-[0.22em] text-text-muted text-center">
          Among 200+ enterprise clients · Pan-India delivery
        </p>
      </div>
    </section>
  );
}
