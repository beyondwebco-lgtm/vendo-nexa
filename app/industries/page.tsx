import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBackground from "@/components/hero/HeroBackground";
import IndustrySelector from "@/components/visuals/IndustrySelector";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Industries Served | Enterprise Technology Solutions | Vendonexa",
  description:
    "Explore how Vendonexa delivers specialized enterprise management systems and cybersecurity services across Healthcare, Manufacturing, Construction, IT, Retail, and Finance.",
};

export default function IndustriesPage() {
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
            <span className="text-xs uppercase font-bold text-[#29B6D8] tracking-widest block font-mono">
              Domain Expertise
            </span>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end my-auto py-8">
            <div className="lg:col-span-8">
              <h1 className="font-display-hero text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] tracking-tight text-white max-w-2xl">
                Technology Solutions Across Industries
              </h1>
            </div>

            <div className="lg:col-span-4 max-w-[380px] lg:ml-auto space-y-6">
              <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed font-sans">
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
                  className="btn-icon-square"
                  aria-label="Explore Sectors"
                >
                  <ArrowRight className="w-4 h-4" />
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
