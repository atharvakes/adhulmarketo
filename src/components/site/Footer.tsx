import { Award, Linkedin, MessageCircle, Phone, MapPin, Factory, ArrowRight, ChevronRight } from "lucide-react";

const links = ["Home", "Products", "Services", "About", "Contact"];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="text-xl font-bold">Adhul Marketo (India) Pvt. Ltd.</div>
            <p className="mt-3 text-sm text-gray-400">
              An ISO 9001:2015 Certified Company
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs">
              <Award className="size-4 text-orange" />
              ISO 9001:2015
            </div>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="size-10 rounded-full border border-white/15 flex items-center justify-center hover:border-orange hover:text-orange hover:shadow-[0_0_20px_rgba(255,107,43,0.4)] transition-all"
              >
                <Linkedin className="size-4" />
              </a>
              <a
                href="https://wa.me/919152191121"
                aria-label="WhatsApp"
                className="size-10 rounded-full border border-white/15 flex items-center justify-center hover:border-orange hover:text-orange hover:shadow-[0_0_20px_rgba(255,107,43,0.4)] transition-all"
              >
                <MessageCircle className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-orange font-bold uppercase text-xs tracking-[0.2em]">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {links.map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="group inline-flex items-center gap-1.5 text-sm text-white/85 hover:text-orange transition-colors"
                  >
                    <ChevronRight className="size-3 text-orange opacity-70" />
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-orange font-bold uppercase text-xs tracking-[0.2em]">
              Contact Us
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/85">
              <li className="flex items-start gap-3">
                <Phone className="size-4 text-orange mt-0.5 shrink-0" />
                <a href="tel:+919152191121" className="hover:text-orange">
                  +91 9152191121
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="size-4 text-orange mt-0.5 shrink-0" />
                Mumbai, Maharashtra, India
              </li>
              <li className="flex items-start gap-3">
                <Factory className="size-4 text-orange mt-0.5 shrink-0" />
                Manufacturer · Supplier · Service Provider
              </li>
            </ul>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 border border-orange text-orange font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-orange hover:text-white transition-colors"
            >
              Get a Quote <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/60">
          <p>© 2024 Adhul Marketo (India) Pvt. Ltd. All rights reserved.</p>
          <p>Designed with ❤️ in Mumbai</p>
        </div>
      </div>
    </footer>
  );
}
