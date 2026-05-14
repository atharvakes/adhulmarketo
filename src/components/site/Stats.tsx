import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "7+", label: "Product Categories" },
  { value: "ISO", label: "9001:2015 Certified" },
  { value: "B2B", label: "Specialists" },
  { value: "3+", label: "Service Offerings" },
];

function Counter({ target }: { target: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [val, setVal] = useState<string>(target);

  useEffect(() => {
    const num = parseInt(target);
    if (!inView || isNaN(num)) {
      setVal(target);
      return;
    }
    const suffix = target.replace(/[0-9]/g, "");
    let start = 0;
    const dur = 1200;
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      const v = Math.round(start + (num - start) * eased);
      setVal(v + suffix);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);

  return <span ref={ref}>{val}</span>;
}

export function Stats() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-border">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center px-4"
            >
              <div className="text-4xl lg:text-5xl font-bold text-cobalt">
                <Counter target={s.value} />
              </div>
              <div className="mt-2 text-sm text-text-muted font-medium">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
