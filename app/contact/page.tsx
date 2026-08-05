import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBackground from "@/components/hero/HeroBackground";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { Mail, Phone, MapPin, ShieldCheck, Share2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Contact & Executive Consultation | Vendonexa Enterprise",
  description:
    "Schedule a confidential consultation with Vendonexa enterprise solution architects to discuss your Vendor Management, Hospital Operations, or Cybersecurity objectives.",
  keywords: [
    "contact Vendonexa",
    "enterprise software consultation",
    "cybersecurity audit request",
    "vendor management demo",
  ],
  alternates: {
    canonical: "https://vendonexa.com/contact",
  },
  openGraph: {
    title: "Contact & Executive Consultation | Vendonexa Enterprise",
    description: "Schedule a confidential consultation with Vendonexa enterprise architects.",
    url: "https://vendonexa.com/contact",
    siteName: "Vendonexa",
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://vendonexa.com" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://vendonexa.com/contact" },
  ],
};

export default function ContactPage() {
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
              Executive Engagement
            </span>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end my-auto py-8">
            <div className="lg:col-span-8">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-heading leading-[1.05] max-w-2xl">
                Let’s Build a Smarter and More Secure Digital Future
              </h1>
            </div>

            <div className="lg:col-span-4 max-w-[380px] lg:ml-auto space-y-6">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                Tell us about your organization, operational challenges, software requirements, or cybersecurity objectives. Our team will help you identify the right solution.
              </p>

              <div className="flex items-center gap-3">
                <Link
                  href="#form"
                  className="btn-primary-tech px-6 py-3.5 rounded-lg text-xs font-bold shadow-lg flex-1 text-center"
                >
                  Fill Consultation Form
                </Link>
                <Link
                  href="#form"
                  className="btn-secondary-outline px-4 py-3.5 rounded-lg text-xs font-semibold flex items-center gap-1.5"
                  aria-label="Fill Form"
                >
                  Form <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="form" className="py-20 bg-[#F5F7FA] px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Contact Info Column */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white p-6 rounded-2xl card-interactive space-y-6">
                <h3 className="text-lg font-bold text-[#071A2B] font-heading border-b border-[#EDF6FC] pb-3">
                  Direct Inquiries
                </h3>

                <div className="flex items-start gap-3 text-xs">
                  <div className="p-2 rounded-lg bg-[#EDF6FC] text-[#176BCE]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#071A2B] block">Email Us</span>
                    <span className="text-[#5C6875]">contact@vendonexa.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs">
                  <div className="p-2 rounded-lg bg-[#EDF6FC] text-[#176BCE]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#071A2B] block">Call Us</span>
                    <span className="text-[#5C6875]">+1 (800) 555-VENDO</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs">
                  <div className="p-2 rounded-lg bg-[#EDF6FC] text-[#176BCE]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#071A2B] block">Headquarters</span>
                    <span className="text-[#5C6875] leading-relaxed">
                      Enterprise Technology Center, Innovation Park, HQ
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs">
                  <div className="p-2 rounded-lg bg-[#EDF6FC] text-[#176BCE]">
                    <Share2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#071A2B] block">LinkedIn</span>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#176BCE] hover:underline"
                    >
                      linkedin.com/company/vendonexa
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#071A2B] text-white p-6 rounded-2xl border border-[#21B573]/30 security-glow">
                <div className="flex items-center gap-2 text-[#21B573] font-bold text-xs mb-2">
                  <ShieldCheck className="w-4 h-4" /> Non-Disclosure Guarantee
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  All consultations and operational requirements shared with Vendonexa are strictly covered under standard enterprise Non-Disclosure Agreements (NDA).
                </p>
              </div>
            </div>

            {/* Right Contact Form Column */}
            <div className="lg:col-span-8">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
