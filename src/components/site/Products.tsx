import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import calibrationGas from "@/assets/products/calibration-gas.jpg";
import pressureRegulators from "@/assets/products/pressure-regulators.jpg";
import gasManifold from "@/assets/products/gas-manifold.jpg";
import highPurity from "@/assets/products/high-purity-gases.jpg";
import ripening from "@/assets/products/ripening-chamber.jpg";
import monel from "@/assets/products/monel-regulator.jpg";
import sampling from "@/assets/products/gas-sampling-bomb.jpg";
import controlPanel from "@/assets/products/control-panel.jpg";

type Product = {
  index: string;
  name: string;
  desc: string;
  items: string[];
  image: string;
  alt: string;
};

const products: Product[] = [
  {
    index: "01",
    name: "Gas Regulators",
    desc: "Precision regulators for calibration gases, portable testing and field calibration of detection equipment.",
    items: ["Calibration Gas Regulator C-10", "Phosphine Calibration Mixtures", "Portable Calibration Mixtures"],
    image: pressureRegulators,
    alt: "Calibration gas regulator with pressure gauges",
  },
  {
    index: "02",
    name: "Industrial Gases",
    desc: "High purity gases and custom liquid mixtures supplied in cylinders, ready for laboratory and plant use.",
    items: ["High Purity Gases", "Gas & Liquid Mixtures", "Hydrogen Chloride (HCL)"],
    image: highPurity,
    alt: "High purity industrial gas cylinders",
  },
  {
    index: "03",
    name: "Gas Mixtures",
    desc: "Certified calibration gas mixtures and analyser standards prepared to your specification with full traceability.",
    items: ["Calibration Gas Mixtures", "Portable Hydrogen Purity Analyzer", "Custom Multi-component Blends"],
    image: calibrationGas,
    alt: "Specialty calibration gas mixtures",
  },
  {
    index: "04",
    name: "Ripening Chambers",
    desc: "Ethylene-based ripening chambers engineered for uniform colour and shelf life across mango and banana cargo.",
    items: ["Ethylene Ripening Chamber", "Mango Ripening Chamber", "Banana Ripening Chamber"],
    image: ripening,
    alt: "Industrial fruit ripening chamber interior",
  },
  {
    index: "05",
    name: "Industrial Regulators",
    desc: "Heavy-duty Monel and high-pressure regulators built for corrosive service and demanding industrial duty cycles.",
    items: ["Single Stage Monel for HCL / CL", "High Pressure Piston Regulator", "Corrosive Service Regulators"],
    image: monel,
    alt: "Monel industrial gas regulator",
  },
  {
    index: "06",
    name: "Gas Sampling Systems",
    desc: "Stainless steel sample bombs and liquefied gas sampling systems for accurate, contamination-free sampling.",
    items: ["Gas Sampling System", "Gas Sample Bombs", "Liquefied Gas Sampling"],
    image: sampling,
    alt: "Stainless steel gas sampling bomb",
  },
  {
    index: "07",
    name: "Gas Manifolds",
    desc: "Two-cylinder and high-pressure manifold systems delivering continuous, regulated gas supply across the plant.",
    items: ["Two Cylinder Gas Manifolds", "High Pressure Manifold Systems", "Tapping Point Assemblies"],
    image: gasManifold,
    alt: "Industrial gas manifold system",
  },
  {
    index: "08",
    name: "Control Panels",
    desc: "Auto changeover gas panels that switch banks seamlessly so critical processes never lose supply.",
    items: ["Auto Changeover Panels", "Wall-mount Control Panels", "Custom Engineered Panels"],
    image: controlPanel,
    alt: "Auto changeover gas control panel",
  },
];

export function Products() {
  return (
    <section id="products" className="py-24 lg:py-32 bg-bone border-y hairline">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-8 flex-wrap">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-text-muted">
              (02) Catalogue
            </span>
            <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl text-navy leading-[1]">
              Built for the
              <br />
              <em className="italic text-cobalt">work that matters.</em>
            </h2>
            <p className="mt-6 text-text-muted max-w-lg">
              A complete range of gas safety and supply equipment, manufactured and serviced in-house.
            </p>
          </motion.div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-cobalt transition-colors"
          >
            Request full catalogue <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {products.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-white border hairline">
                <img
                  src={p.image}
                  alt={p.alt}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 backdrop-blur text-navy text-[10px] font-medium tracking-[0.18em] uppercase px-2.5 py-1 rounded-sm">
                    {p.index} / {String(products.length).padStart(2, "0")}
                  </span>
                </div>
              </div>

              <div className="mt-5">
                <h3 className="font-display text-2xl text-navy leading-tight">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm text-text-muted leading-relaxed">
                  {p.desc}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {p.items.map((it) => (
                    <li key={it} className="text-[13px] text-text-dark/80 flex items-start gap-2">
                      <span className="text-cobalt mt-1.5 size-1 rounded-full bg-cobalt shrink-0" />
                      {it}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-navy text-sm font-medium border-b border-navy/30 pb-0.5 hover:border-cobalt hover:text-cobalt transition-colors"
                >
                  Enquire
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
