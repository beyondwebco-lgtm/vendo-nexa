import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBackground from "@/components/hero/HeroBackground";
import FounderSection from "@/components/FounderSection";
import Link from "next/link";
import { ShieldCheck, Building2, Stethoscope, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Vendonexa | Enterprise Software & Cybersecurity Company",
  description:
    "Discover Vendonexa's mission, vision, and core engineering philosophy. We provide enterprise vendor management, hospital management systems, and cybersecurity solutions.",
  keywords: [
    "about Vendonexa",
    "enterprise software partner",
    "cybersecurity firm",
    "vendor management vendor",
    "healthcare technology company",
  ],
  alternates: {
    canonical: "https://vendonexa.com/about",
  },
  openGraph: {
    title: "About Vendonexa | Enterprise Software & Cybersecurity Company",
    description: "Building Smarter Systems. Securing Digital Businesses.",
    url: "https://vendonexa.com/about",
    siteName: "Vendonexa",
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://vendonexa.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: "https://vendonexa.com/about",
    },
  ],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-[#101820] flex flex-col font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />

      <main className="flex-grow pt-16">
        {/* Hero */}
        <section className="relative min-h-[85vh] bg-[#071A2B] text-white pt-24 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-between overflow-hidden">
          <HeroBackground variant="default" />

          <div className="relative z-10 max-w-7xl mx-auto w-full pt-4">
            <span className="text-xs uppercase font-bold text-[#29B6D8] tracking-widest block font-mono">
              Company Overview
            </span>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end my-auto py-8">
            <div className="lg:col-span-8">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-heading leading-[1.05] max-w-2xl">
                Building Smarter Systems. Securing Digital Businesses.
              </h1>
            </div>

            <div className="lg:col-span-4 max-w-[380px] lg:ml-auto space-y-6">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                Vendonexa is a technology company delivering enterprise software and cybersecurity solutions designed to simplify complex operations, improve visibility, automate workflows, and protect critical digital assets.
              </p>

              <div className="flex items-center gap-3">
                <Link
                  href="/contact"
                  className="btn-primary-tech px-6 py-3.5 rounded-lg text-xs font-bold shadow-lg flex-1 text-center"
                >
                  Schedule Discussion
                </Link>
                <Link
                  href="#mission"
                  className="btn-secondary-outline px-4 py-3.5 rounded-lg text-xs font-semibold flex items-center gap-1.5"
                  aria-label="Explore Mission"
                >
                  Mission <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section id="mission" className="py-20 bg-[#F5F7FA] px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl card-interactive">
              <h2 className="text-xl font-bold text-[#071A2B] font-heading mb-3">Our Mission</h2>
              <p className="text-sm text-[#5C6875] leading-relaxed">
                To help organizations simplify operations, automate business processes, connect critical systems, and strengthen digital security through reliable and scalable technology solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl card-interactive">
              <h2 className="text-xl font-bold text-[#071A2B] font-heading mb-3">Our Vision</h2>
              <p className="text-sm text-[#5C6875] leading-relaxed">
                To become a trusted enterprise technology and cybersecurity partner for organizations undergoing digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <FounderSection />

        {/* Three Solution Ecosystem */}
        <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#071A2B] font-heading">
                Vendonexa’s Three-Solution Ecosystem
              </h2>
              <p className="text-sm text-[#5C6875] mt-2">
                Strategic focus across management platforms, healthcare operations, and cybersecurity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#EDF6FC] p-6 rounded-2xl card-interactive">
                <Building2 className="w-8 h-8 text-[#176BCE] mb-4 card-icon" />
                <h3 className="text-lg font-bold text-[#071A2B] font-heading mb-2">
                  Vendor Management System
                </h3>
                <p className="text-xs text-[#5C6875] leading-relaxed">
                  Digitizing supplier onboarding, procurement tenders, contracts, 3-way invoice matching, and performance tracking.
                </p>
              </div>

              <div className="bg-[#EDF6FC] p-6 rounded-2xl card-interactive">
                <Stethoscope className="w-8 h-8 text-[#29B6D8] mb-4 card-icon" />
                <h3 className="text-lg font-bold text-[#071A2B] font-heading mb-2">
                  Hospital Management System
                </h3>
                <p className="text-xs text-[#5C6875] leading-relaxed">
                  Connecting clinical EMR, OPD/IPD workflows, pharmacy, laboratory diagnostics, billing, and ICU bed management.
                </p>
              </div>

              <div className="bg-[#071A2B] text-white p-6 rounded-2xl border border-[#21B573]/40 card-interactive security-glow">
                <ShieldCheck className="w-8 h-8 text-[#21B573] mb-4 card-icon" />
                <h3 className="text-lg font-bold text-white font-heading mb-2">
                  Cybersecurity Services
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Identifying vulnerabilities (VAPT), monitoring threat telemetry in SOC/SIEM, securing cloud architecture, and building zero-trust defense.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Statement Banner */}
        <section className="py-16 bg-[#0B2942] text-white px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="max-w-4xl mx-auto space-y-4 relative z-10">
            <h2 className="text-2xl sm:text-4xl font-bold font-heading">
              Manage Smarter. Operate Better. Stay Secure.
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Whether an organization wants to modernize vendor management, digitize hospital operations, develop a customized enterprise platform, or strengthen its cybersecurity posture, Vendonexa provides the technology expertise required to move forward securely and confidently.
            </p>
            <div className="pt-4 flex items-center justify-center gap-3">
              <Link
                href="/contact"
                className="btn-primary-tech px-6 py-3 rounded-lg text-xs font-bold shadow-lg"
              >
                Schedule Executive Discussion
              </Link>
              <Link
                href="/contact"
                className="btn-secondary-outline px-4 py-3 rounded-lg text-xs font-semibold flex items-center gap-1.5"
                aria-label="Contact Vendonexa"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
