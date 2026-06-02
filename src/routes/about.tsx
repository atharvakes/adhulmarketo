import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Phone, Mail, MessageCircle, MapPin, ShieldCheck, Award, Globe2, Factory } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Clients } from "@/components/site/Clients";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Adhul Marketo (India) Pvt. Ltd. | Gas Safety & Specialty Gases" },
      {
        name: "description",
        content:
          "Adhul Marketo is an ISO 9001:2015 certified Indian supplier of calibration mixtures, specialty gases, regulators and safety systems serving refineries, power plants and laboratories.",
      },
      { property: "og:title", content: "About Adhul Marketo (India) Pvt. Ltd." },
      {
        property: "og:description",
        content:
          "Precision gas solutions engineered in India. Calibration mixtures, specialty gases, regulators and turnkey gas safety systems.",
      },
    ],
  }),
});

const pillars = [
  {
    icon: ShieldCheck,
    title: "Certified quality",
    body: "ISO 9001:2015 governed processes for every cylinder, regulator and panel that leaves our facility.",
  },
  {
    icon: Award,
    title: "Engineering depth",
    body: "Calibration mixtures and gas systems built by chemists and instrumentation engineers, not resellers.",
  },
  {
    icon: Globe2,
    title: "Pan India delivery",
    body: "A logistics network that reaches refineries, plants and laboratories across every Indian state.",
  },
  {
    icon: Factory,
    title: "Built for industry",
    body: "Trusted by oil and gas majors, power utilities, EPC houses and research laboratories nationwide.",
  },
];

const stats = [
  { k: "12+", v: "Years in industrial gases" },
  { k: "500+", v: "Plants and labs served" },
  { k: "40+", v: "Specialty gas mixtures" },
  { k: "24h", v: "Quote turnaround" },
];

function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-text-muted">
              About Adhul Marketo
            </span>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl text-navy leading-[1]">
              Precision gas solutions,
              <br />
              engineered in <em className="italic text-cobalt">India.</em>
            </h1>
            <p className="mt-8 text-lg lg:text-xl text-text-dark leading-relaxed font-light max-w-2xl">
              Adhul Marketo (India) Pvt. Ltd. is an ISO 9001:2015 certified manufacturer
              and supplier of calibration gas mixtures, specialty gases, pressure
              regulators and turnkey gas safety systems for India&apos;s most demanding
              industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5 lg:sticky lg:top-28 h-fit">
            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-text-muted">
              (01) Our story
            </span>
            <h2 className="mt-6 font-display text-4xl lg:text-5xl text-navy leading-[1]">
              Bridging global gas
              <br />
              standards with Indian
              <br />
              <em className="italic text-cobalt">industry needs.</em>
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-text-dark leading-relaxed">
            <p className="text-lg font-light">
              We started with a simple belief: every plant, refinery and laboratory in
              India deserves access to calibration mixtures and safety equipment that
              match international standards, without import delays or inflated cost.
            </p>
            <p className="text-base text-text-muted">
              Today our team works with refineries, petrochemical plants, fertilizer
              units, steel mills, power utilities and research laboratories across the
              country. We blend, certify and supply calibration mixtures, specialty
              gases, high purity gases, pressure regulators, manifolds, gas sampling
              bombs and closed loop sampling systems from our Mumbai operations.
            </p>
            <p className="text-base text-text-muted">
              Every cylinder ships with a traceable certificate of analysis. Every
              regulator is leak tested. Every system installation is commissioned by
              our own engineers. That is how trust is built in this industry, one
              project at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-text-muted">
              (02) What we stand for
            </span>
            <h2 className="mt-6 font-display text-4xl lg:text-5xl text-navy leading-[1]">
              Four pillars that define
              <br />
              <em className="italic text-cobalt">how we deliver.</em>
            </h2>
          </div>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-background border hairline rounded-2xl p-7"
              >
                <div className="size-11 rounded-xl bg-navy/5 flex items-center justify-center text-navy">
                  <p.icon className="size-5" />
                </div>
                <h3 className="mt-6 font-display text-xl text-navy">{p.title}</h3>
                <p className="mt-3 text-sm text-text-muted leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 border-t hairline pt-12">
            {stats.map((s) => (
              <div key={s.v}>
                <div className="font-display text-5xl lg:text-6xl text-navy">{s.k}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.18em] text-text-muted">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Clients />

      {/* Contact */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-text-muted">
                (03) Talk to us
              </span>
              <h2 className="mt-6 font-display text-4xl lg:text-5xl text-navy leading-[1]">
                A real engineer.
                <br />
                <em className="italic text-cobalt">Within one business day.</em>
              </h2>
              <p className="mt-6 text-text-muted leading-relaxed">
                Whether you need a single calibration cylinder or a full gas safety
                system, our team will respond with a costed proposal.
              </p>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              <ContactCard
                icon={MessageCircle}
                label="WhatsApp"
                value="+91 91521 91121"
                href="https://wa.me/919152191121?text=Hi%20Adhul%20Marketo%2C%20I%27d%20like%20to%20request%20a%20quote."
              />
              <ContactCard
                icon={Phone}
                label="Call us"
                value="+91 91521 91121"
                href="tel:+919152191121"
              />
              <ContactCard
                icon={Mail}
                label="Sales"
                value="info@adhul.com"
                href="mailto:info@adhul.com?subject=Enquiry%20from%20website&body=Hi%20Adhul%20Marketo%20team%2C%0A%0AI%27d%20like%20to%20enquire%20about%3A%20"
              />
              <ContactCard
                icon={Mail}
                label="RFQ desk"
                value="rfd@adhulmarketo.com"
                href="mailto:rfd@adhulmarketo.com?subject=Request%20for%20Quotation&body=Hi%20Adhul%20Marketo%20team%2C%0A%0APlease%20share%20a%20quotation%20for%3A%20"
              />
              <div className="sm:col-span-2 border hairline rounded-2xl p-6 bg-background flex items-start gap-4">
                <div className="size-10 rounded-xl bg-navy/5 flex items-center justify-center text-navy shrink-0">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-text-muted">
                    Office
                  </div>
                  <div className="mt-1 text-navy font-medium">Mumbai, India</div>
                  <div className="text-sm text-text-muted">Mon to Sat, 09:00 to 19:00 IST</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 border-t hairline pt-10">
            <p className="text-text-muted text-sm">
              Looking for product specifications and datasheets?
            </p>
            <Link
              to="/"
              hash="products"
              className="group inline-flex items-center gap-2 bg-navy text-white font-medium px-6 py-3 rounded-full hover:bg-cobalt transition-colors"
            >
              Browse our catalogue
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href: string;
}) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group border hairline rounded-2xl p-6 bg-background hover:border-navy/40 hover:shadow-sm transition-all flex items-start gap-4"
    >
      <div className="size-10 rounded-xl bg-navy/5 flex items-center justify-center text-navy shrink-0 group-hover:bg-navy group-hover:text-white transition-colors">
        <Icon className="size-5" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-text-muted">
          {label}
        </div>
        <div className="mt-1 text-navy font-medium break-all">{value}</div>
      </div>
      <ArrowUpRight className="size-4 text-text-muted group-hover:text-navy transition-colors shrink-0" />
    </a>
  );
}
