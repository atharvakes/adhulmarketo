import { Phone, Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#products", label: "Products" },
  
  { href: "#about", label: "About" },
  { href: "#clients", label: "Clients" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled
          ? "bg-surface/85 backdrop-blur-md border-b hairline"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-baseline gap-2">
          <span className="font-display text-2xl text-navy leading-none">Adhul Marketo</span>
          <span className="hidden sm:inline text-[10px] font-medium uppercase tracking-[0.2em] text-text-muted">
            India
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-text-dark/80 hover:text-navy transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <a
            href="tel:+919152191121"
            className="flex items-center gap-2 text-sm font-medium text-text-muted hover:text-navy transition-colors"
          >
            <Phone className="size-3.5" />
            +91 91521 91121
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 bg-navy text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-cobalt transition-colors"
          >
            Request a quote
            <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
            className="lg:hidden overflow-hidden bg-surface border-t hairline"
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
                href="#contact"
                onClick={() => setOpen(false)}
                className="bg-navy text-white text-center font-medium px-5 py-3 rounded-full"
              >
                Request a quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
