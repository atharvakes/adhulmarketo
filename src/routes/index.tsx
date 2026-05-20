import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { About } from "@/components/site/About";
import { Products } from "@/components/site/Products";

import { IndustrialGases } from "@/components/site/IndustrialGases";
import { WhyUs } from "@/components/site/WhyUs";
import { Clients } from "@/components/site/Clients";
import { Testimonials } from "@/components/site/Testimonials";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title:
          "Adhul Marketo (India) Pvt. Ltd. — Gas Safety Equipment & Specialty Gases Mumbai",
      },
      {
        name: "description",
        content:
          "ISO 9001:2015 certified manufacturer & supplier of gas detectors, calibration gases, pressure regulators and industrial safety systems in Mumbai, India.",
      },
      { property: "og:title", content: "Adhul Marketo — Precision Gas Solutions" },
      {
        property: "og:description",
        content:
          "B2B specialists in gas safety equipment, calibration & specialty gases. Repair, AMC, rental and pan-India delivery.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Products />
      <Services />
      <IndustrialGases />
      <WhyUs />
      <Clients />
      <Testimonials />
      <CtaBanner />
      <Footer />
    </main>
  );
}
