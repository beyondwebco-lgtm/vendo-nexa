import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | Vendonexa Data Protection",
  description: "Vendonexa Privacy Policy details our enterprise data handling, encryption protocols, and user privacy practices.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-[#101820] flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-extrabold text-[#071A2B] font-heading">Privacy Policy</h1>
        <p className="text-xs text-slate-500 font-mono">Last updated: August 5, 2026</p>

        <section className="space-y-3 text-xs sm:text-sm text-[#5C6875] leading-relaxed">
          <h2 className="text-base font-bold text-[#071A2B] font-heading">1. Enterprise Data Commitment</h2>
          <p>
            At Vendonexa, we prioritize data privacy and confidentiality for enterprise client information, hospital EMR records, vendor data, and cybersecurity logs. All data transmitted through Vendonexa platforms is protected using industry-standard TLS 1.3 in transit and AES-256 encryption at rest.
          </p>

          <h2 className="text-base font-bold text-[#071A2B] font-heading pt-3">2. Information Collection</h2>
          <p>
            We collect business email addresses, contact details, organization names, and system telemetry voluntarily provided during consultation requests or platform usage to deliver enterprise software services.
          </p>

          <h2 className="text-base font-bold text-[#071A2B] font-heading pt-3">3. Data Sharing & Zero-Sale Policy</h2>
          <p>
            Vendonexa never sells, rents, or monetizes organizational client data to third parties. Data is shared exclusively with authorized infrastructure subprocessors required to maintain 99.99% system uptime and security monitoring.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
