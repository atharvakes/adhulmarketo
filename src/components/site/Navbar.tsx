import { MessageCircle, Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useRouter } from "@tanstack/react-router";
import logoAsset from "@/assets/adhul-logo.png.asset.json";

type NavLink = { label: string } & ({ hash: string } | { to: string });

const links: NavLink[] = [
  { hash: "products", label: "Products" },
  { to: "/about", label: "About" },
  { hash: "clients", label: "Clients" },
  { hash: "contact", label: "Contact" },
];

const WHATSAPP_URL =
  "https://wa.me/919152191121?text=Hi%20Adhul%20Marketo%2C%20I%27d%20like%20to%20request%20a%20quote.";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const isHome = router.state.location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const renderLink = (l: NavLink, onClick?: () => void) => {
    if ("to" in l) {
      return (
        <Link
          key={l.label}
          to={l.to}
          onClick={onClick}
          className="text-sm font-medium text-text-dark/80 hover:text-navy transition-colors"
        >
          {l.label}
        </Link>
      );
    }
    const href = isHome ? `#${l.hash}` : `/#${l.hash}`;
    return (
      <a
        key={l.label}
        href={href}
        onClick={onClick}
        className="text-sm font-medium text-text-dark/80 hover:text-navy transition-colors"
      >
        {l.label}
      </a>
    );
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "bg-surface/85 backdrop-blur-md border-b hairline" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <img
            src={logoAsset.url}
            alt="Adhul Marketo"
            className="h-9 w-auto object-contain"
          />
          <span className="font-display text-lg sm:text-xl text-navy leading-none">
            Adhul Marketo
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => renderLink(l))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-text-muted hover:text-navy transition-colors"
          >
            <MessageCircle className="size-3.5" />
            +91 91521 91121
          </a>
          <a
            href={isHome ? "#contact" : "/#contact"}
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
                <div key={l.label} className="py-1">
                  {renderLink(l, () => setOpen(false))}
                </div>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 text-text-dark font-medium py-2"
              >
                <MessageCircle className="size-4" />
                +91 91521 91121
              </a>
              <a
                href={isHome ? "#contact" : "/#contact"}
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
