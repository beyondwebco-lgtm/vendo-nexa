import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms and Conditions | Vendonexa Enterprise Software",
  description: "Vendonexa Terms & Conditions governing software usage, SLAs, and service agreements.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-[#101820] flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-extrabold text-[#071A2B] font-heading">Terms & Conditions</h1>
        <p className="text-xs text-slate-500 font-mono">Last updated: August 5, 2026</p>

        <section className="space-y-3 text-xs sm:text-sm text-[#5C6875] leading-relaxed">
          <h2 className="text-base font-bold text-[#071A2B] font-heading">1. Acceptable Use</h2>
          <p>
            By accessing or using Vendonexa platforms, APIs, or cybersecurity services, client organizations agree to comply with all applicable enterprise regulations, data privacy laws, and security agreements.
          </p>

          <h2 className="text-base font-bold text-[#071A2B] font-heading pt-3">2. Service Level Agreements (SLA)</h2>
          <p>
            All custom software development, Vendor Management System deployments, Hospital Management System instances, and SOC services are governed by formal Master Services Agreements (MSA) and enterprise SLAs executed between Vendonexa and the client.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
