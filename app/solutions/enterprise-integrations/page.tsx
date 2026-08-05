import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBackground from "@/components/hero/HeroBackground";
import IntegrationHubVisual from "@/components/visuals/IntegrationHubVisual";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { Layers, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Enterprise Integration Services | REST, gRPC & Middleware | Vendonexa",
  description:
    "Vendonexa connects business applications, legacy ERPs, CRM systems, payment gateways, and healthcare standards (HL7/FHIR) through secure API middleware.",
};

export default function EnterpriseIntegrationsPage() {
  return (
    <div className="min-h-screen bg-white text-[#101820] flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-16">
        <section className="relative min-h-[85vh] bg-[#071A2B] text-white pt-24 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-between overflow-hidden corner-ticks">
          <HeroBackground variant="default" />

          <span className="corner-tick-tl">+</span>
          <span className="corner-tick-tr">+</span>
          <span className="corner-tick-bl">+</span>
          <span className="corner-tick-br">+</span>

          <div className="relative z-10 max-w-7xl mx-auto w-full pt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B2942]/90 border border-[#176BCE]/40 text-[#29B6D8] text-xs font-semibold">
              <Layers className="w-4 h-4" /> Middleware Division
            </div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end my-auto py-8">
            <div className="lg:col-span-8">
              <h1 className="font-display-hero text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] tracking-tight text-white max-w-2xl">
                Enterprise Integration Services
              </h1>
            </div>

            <div className="lg:col-span-4 max-w-[380px] lg:ml-auto space-y-6">
              <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed font-sans">
                Connect your existing software ecosystem to eliminate data silos, avoid duplicate data entry, and establish real-time automated workflows.
              </p>

              <div className="flex items-center gap-3">
                <Link
                  href="#contact"
                  className="btn-primary-tech px-6 py-3.5 rounded-lg text-xs font-bold shadow-lg flex-1 text-center"
                >
                  Discuss Integration
                </Link>
                <Link
                  href="#hub"
                  className="btn-icon-square"
                  aria-label="View Integration Architecture"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="hub" className="py-16 bg-[#071A2B] px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <IntegrationHubVisual />
          </div>
        </section>

        <section id="contact" className="py-20 bg-[#071A2B] px-4 sm:px-6 lg:px-8 border-t border-[#0B2942]">
          <div className="max-w-4xl mx-auto">
            <ContactForm defaultSolution="Integration Services" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
