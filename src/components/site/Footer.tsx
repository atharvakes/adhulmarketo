import { Linkedin, MessageCircle, ArrowUpRight, Mail } from "lucide-react";

const cols = [
  {
    h: "Catalogue",
    items: ["Calibration Gases", "Pressure Regulators", "Manifold Systems", "Gas Line Setup"],
  },
  {
    h: "Services",
    items: ["Detector Repair", "AMC", "Calibration", "Rental"],
  },
  {
    h: "Company",
    items: ["About", "Credentials", "Contact", "Careers"],
  },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="font-display text-4xl lg:text-5xl leading-[1]">
              Adhul Marketo
              <br />
              <em className="italic text-cobalt opacity-90">India Pvt. Ltd.</em>
            </div>
            <p className="mt-6 text-sm text-white/60 max-w-sm leading-relaxed">
              An ISO 9001:2015 certified B2B house engineering gas safety solutions for
              India&apos;s most demanding operations.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <a
                href="mailto:info@adhul.com?subject=Enquiry%20from%20website"
                className="flex items-center gap-2 text-white/85 hover:text-cobalt transition-colors"
              >
                <Mail className="size-3.5" /> info@adhul.com
              </a>
              <a
                href="mailto:rfd@adhulmarketo.com?subject=Request%20for%20Quotation"
                className="flex items-center gap-2 text-white/85 hover:text-cobalt transition-colors"
              >
                <Mail className="size-3.5" /> rfd@adhulmarketo.com
              </a>
            </div>
            <div className="mt-8 flex gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="size-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-white hover:text-navy transition-colors"
              >
                <Linkedin className="size-4" />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=919152191121"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="size-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-white hover:text-navy transition-colors"
              >
                <MessageCircle className="size-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10">
            {cols.map((c) => (
              <div key={c.h}>
                <h4 className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/50">
                  {c.h}
                </h4>
                <ul className="mt-5 space-y-3">
                  {c.items.map((it) => (
                    <li key={it}>
                      <a
                        href="#contact"
                        className="text-sm text-white/85 hover:text-cobalt transition-colors inline-flex items-center gap-1.5 group"
                      >
                        {it}
                        <ArrowUpRight className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Adhul Marketo (India) Pvt. Ltd.</p>
          <p className="uppercase tracking-[0.2em]">Mumbai · India</p>
        </div>
      </div>
    </footer>
  );
}
