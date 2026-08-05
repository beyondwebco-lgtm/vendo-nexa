import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IntegrationHubVisual from "@/components/visuals/IntegrationHubVisual";
import ContactForm from "@/components/ContactForm";
import { Layers } from "lucide-react";

export const metadata = {
  title: "Enterprise Integration Services | REST, gRPC & Middleware | Vendonexa",
  description:
    "Vendonexa connects business applications, legacy ERPs, CRM systems, payment gateways, and healthcare standards (HL7/FHIR) through secure API middleware.",
};

export default function EnterpriseIntegrationsPage() {
  return (
    <div className="min-h-screen bg-white text-[#101820] flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-20">
        <section className="bg-[#071A2B] text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B2942] border border-[#176BCE]/40 text-[#29B6D8] text-xs font-semibold mb-4">
                <Layers className="w-4 h-4" /> Middleware Division
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading leading-tight">
                Enterprise Integration Services
              </h1>
              <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
                Connect your existing software ecosystem to eliminate data silos, avoid duplicate data entry, and establish real-time automated workflows.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#071A2B] px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <IntegrationHubVisual />
          </div>
        </section>

        <section className="py-20 bg-[#071A2B] px-4 sm:px-6 lg:px-8 border-t border-[#0B2942]">
          <div className="max-w-4xl mx-auto">
            <ContactForm defaultSolution="Integration Services" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
