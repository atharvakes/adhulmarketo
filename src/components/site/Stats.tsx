/**
 * Logo / credential marquee — subtle brand-authority strip.
 * Uses pure typography "wordmarks" so we don't depend on third-party assets.
 */
const credentials = [
  "ISO 9001:2015",
  "MSME Registered",
  "Make in India",
  "GST Compliant",
  "ASTER Framework",
  "Pan-India Logistics",
  "MoEF Aligned",
  "DGFASLI Aware",
];

export function Stats() {
  return (
    <section
      id="trust"
      className="relative bg-surface border-y hairline py-10 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[11px] font-medium uppercase tracking-[0.25em] text-text-muted">
          Trusted across India · Certifications & affiliations
        </p>
      </div>

      <div className="mt-6 relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-surface to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface to-transparent z-10" />

        <div className="flex marquee gap-12 whitespace-nowrap">
          {[...credentials, ...credentials].map((c, i) => (
            <div
              key={i}
              className="font-display text-2xl text-navy/70 tracking-tight"
            >
              {c}
              <span className="ml-12 text-cobalt/40">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
