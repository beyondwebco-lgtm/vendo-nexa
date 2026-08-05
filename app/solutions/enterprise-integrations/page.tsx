import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBackground from "@/components/hero/HeroBackground";
import IntegrationHubVisual from "@/components/visuals/IntegrationHubVisual";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { Layers, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Enterprise Integration Services | REST, gRPC & API Middleware",
  description:
    "Vendonexa connects business software, legacy ERPs, CRMs, payment gateways, and healthcare standards (HL7/FHIR) through secure API middleware.",
  keywords: [
    "enterprise integration services",
    "API middleware development",
    "ERP CRM integration",
    "HL7 FHIR healthcare integration",
  ],
  alternates: {
    canonical: "https://vendonexa.com/solutions/enterprise-integrations",
  },
  openGraph: {
    title: "Enterprise Integration Services | REST, gRPC & API Middleware",
    description: "Connect Your Existing Enterprise Technology Ecosystem with Vendonexa.",
    url: "https://vendonexa.com/solutions/enterprise-integrations",
    siteName: "Vendonexa",
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://vendonexa.com" },
    { "@type": "ListItem", position: 2, name: "Solutions", item: "https://vendonexa.com/solutions/enterprise-integrations" },
    { "@type": "ListItem", position: 3, name: "Enterprise Integrations", item: "https://vendonexa.com/solutions/enterprise-integrations" },
  ],
};

export default function EnterpriseIntegrationsPage() {
  return (
    <div className="min-h-screen bg-white text-[#101820] flex flex-col font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />

      <main className="flex-grow pt-16">
        <section className="relative min-h-[85vh] bg-[#071A2B] text-white pt-24 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-between overflow-hidden">
          <HeroBackground variant="default" />

          <div className="relative z-10 max-w-7xl mx-auto w-full pt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B2942]/90 border border-[#176BCE]/40 text-[#29B6D8] text-xs font-semibold">
              <Layers className="w-4 h-4" /> Middleware Division
            </div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end my-auto py-8">
            <div className="lg:col-span-8">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-heading leading-[1.05] max-w-2xl">
                Enterprise Integration Services
              </h1>
            </div>

            <div className="lg:col-span-4 max-w-[380px] lg:ml-auto space-y-6">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
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
                  className="btn-secondary-outline px-4 py-3.5 rounded-lg text-xs font-semibold flex items-center gap-1.5"
                  aria-label="View Integration Architecture"
                >
                  Hub <ArrowRight className="w-4 h-4" />
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
