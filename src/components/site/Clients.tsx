import { motion } from "framer-motion";

const clients = [
  { name: "Indian Oil", domain: "iocl.com" },
  { name: "HPCL", domain: "hindustanpetroleum.com" },
  { name: "BPCL", domain: "bharatpetroleum.in" },
  { name: "Tata Power", domain: "tatapower.com" },
  { name: "Reliance", domain: "ril.com" },
  { name: "L&T", domain: "larsentoubro.com" },
  { name: "ONGC", domain: "ongcindia.com" },
  { name: "GAIL", domain: "gailonline.com" },
  { name: "NTPC", domain: "ntpc.co.in" },
  { name: "BARC", domain: "barc.gov.in" },
  { name: "IOC R&D", domain: "iocl.com" },
  { name: "Thermax", domain: "thermaxglobal.com" },
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

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 border hairline rounded-md overflow-hidden bg-white">
          {clients.map((c, i) => (
            <motion.div
              key={c.name + i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
              className="group relative aspect-[3/2] flex items-center justify-center border-r border-b hairline px-6 hover:bg-bone transition-colors"
            >
              <img
                src={`https://logo.clearbit.com/${c.domain}?size=200`}
                alt={`${c.name} logo`}
                loading="lazy"
                width={200}
                height={80}
                className="max-h-12 max-w-[70%] object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                onError={(e) => {
                  const img = e.currentTarget;
                  img.style.display = "none";
                  const fallback = img.nextElementSibling as HTMLElement | null;
                  if (fallback) fallback.style.display = "block";
                }}
              />
              <span
                style={{ display: "none" }}
                className="font-display text-2xl text-navy"
              >
                {c.name}
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
