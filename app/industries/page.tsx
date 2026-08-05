import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBackground from "@/components/hero/HeroBackground";
import IndustrySelector from "@/components/visuals/IndustrySelector";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Industries Served | Tailored Technology & Cybersecurity Solutions",
  description:
    "Discover how Vendonexa delivers specialized enterprise software platforms and cybersecurity services for Healthcare, Manufacturing, Construction, IT, and Finance.",
  keywords: [
    "industries technology solutions",
    "healthcare enterprise software",
    "manufacturing procurement software",
    "construction subcontractor software",
  ],
  alternates: {
    canonical: "https://vendonexa.com/industries",
  },
  openGraph: {
    title: "Industries Served | Tailored Technology & Cybersecurity Solutions",
    description: "Technology Solutions Across Healthcare, Manufacturing, Supply Chain, and Finance.",
    url: "https://vendonexa.com/industries",
    siteName: "Vendonexa",
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://vendonexa.com" },
    { "@type": "ListItem", position: 2, name: "Industries", item: "https://vendonexa.com/industries" },
  ],
};

export default function IndustriesPage() {
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
            <span className="text-xs uppercase font-bold text-[#29B6D8] tracking-widest block font-mono">
              Domain Expertise
            </span>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end my-auto py-8">
            <div className="lg:col-span-8">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-heading leading-[1.05] max-w-2xl">
                Technology Solutions Across Industries
              </h1>
            </div>

            <div className="lg:col-span-4 max-w-[380px] lg:ml-auto space-y-6">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                Vendonexa crafts software architectures and cybersecurity frameworks tailored to the operational compliance standards of diverse enterprise sectors.
              </p>

              <div className="flex items-center gap-3">
                <Link
                  href="#selector"
                  className="btn-primary-tech px-6 py-3.5 rounded-lg text-xs font-bold shadow-lg flex-1 text-center"
                >
                  Explore Sectors
                </Link>
                <Link
                  href="#selector"
                  className="btn-secondary-outline px-4 py-3.5 rounded-lg text-xs font-semibold flex items-center gap-1.5"
                  aria-label="Explore Sectors"
                >
                  Sectors <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="selector" className="py-20 bg-[#071A2B] text-white px-4 sm:px-6 lg:px-8 border-t border-[#0B2942]">
          <div className="max-w-7xl mx-auto">
            <IndustrySelector />
          </div>
        </section>

        <section className="py-20 bg-[#F5F7FA] px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
