import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#home", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all border-b ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-border shadow-sm"
          : "bg-white border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="font-bold text-navy text-lg tracking-tight">Adhul Marketo</span>
          <span className="text-[10px] font-semibold uppercase tracking-wider bg-orange text-white px-2 py-0.5 rounded-full">
            ISO 9001:2015
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium text-text-dark hover:text-navy transition-colors group"
            >
              {l.label}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-orange transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+919152191121"
            className="flex items-center gap-2 text-sm font-medium text-text-dark hover:text-cobalt"
          >
            <Phone className="size-4 text-cobalt" />
            +91 9152191121
          </a>
          <a
            href="#contact"
            className="bg-orange text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:scale-[1.03] active:scale-[0.97] transition-transform shadow-sm hover:shadow-md"
          >
            Get a Quote
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 rounded-md text-navy"
          aria-label="Toggle menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-white border-t border-border"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-text-dark font-medium"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="tel:+919152191121"
                className="flex items-center gap-2 text-cobalt font-medium"
              >
                <Phone className="size-4" /> +91 9152191121
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="bg-orange text-white text-center font-semibold px-5 py-3 rounded-full"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
