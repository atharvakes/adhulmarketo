import { motion } from "framer-motion";
import { ArrowRight, Award, MapPin, Wrench, FlaskConical } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-navy text-white pt-16"
    >
      {/* Animated grid */}
      <div
        aria-hidden
        className="absolute inset-0 grid-drift opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Cobalt orb */}
      <div
        aria-hidden
        className="absolute -bottom-40 -right-40 w-[36rem] h-[36rem] rounded-full blur-3xl opacity-20"
        style={{ background: "radial-gradient(circle, var(--cobalt), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium backdrop-blur-sm"
        >
          <span className="size-2 rounded-full bg-emerald-400 blink-dot" />
          Mumbai's #1 Gas Safety Specialists
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 font-bold tracking-tight text-5xl sm:text-6xl lg:text-[64px] leading-[1.05] max-w-4xl"
        >
          Precision Gas Solutions
          <br />
          For a <span className="text-gradient-brand">Safer India</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 max-w-2xl text-base sm:text-lg text-gray-300 leading-relaxed"
        >
          ISO certified manufacturer & supplier of gas detectors, calibration gases,
          pressure regulators and industrial safety systems. Serving home, commercial &
          industrial sectors across India.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <a
            href="#products"
            className="group inline-flex items-center gap-2 bg-orange text-white font-semibold px-6 py-3.5 rounded-full hover:shadow-lg hover:scale-[1.03] active:scale-[0.97] transition-all"
          >
            Explore Products
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-white/60 text-white font-semibold px-6 py-3.5 rounded-full hover:bg-white hover:text-navy transition-colors"
          >
            Contact Us
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-white/85"
        >
          {[
            { icon: Award, label: "ISO 9001:2015 Certified" },
            { icon: MapPin, label: "Based in Mumbai" },
            { icon: Wrench, label: "Repair · Rental · AMC" },
            { icon: FlaskConical, label: "Lab & Industrial Grade" },
          ].map((item, i, arr) => (
            <div key={item.label} className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <item.icon className="size-4 text-orange" />
                <span>{item.label}</span>
              </div>
              {i < arr.length - 1 && (
                <span className="hidden sm:inline-block h-4 w-px bg-white/20" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
