import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBackground from "@/components/hero/HeroBackground";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { Code, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Custom Software Development Services | Vendonexa",
  description:
    "Vendonexa develops custom web applications, enterprise portals, workflow automation engines, and legacy system modernizations tailored to complex business requirements.",
};

export default function CustomSoftwarePage() {
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
              <Code className="w-4 h-4" /> Custom Engineering Division
            </div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end my-auto py-8">
            <div className="lg:col-span-8">
              <h1 className="font-display-hero text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] tracking-tight text-white max-w-2xl">
                Tailored Enterprise Software Engineering
              </h1>
            </div>

            <div className="lg:col-span-4 max-w-[380px] lg:ml-auto space-y-6">
              <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed font-sans">
                When off-the-shelf software falls short, Vendonexa builds customized enterprise web platforms, workflow engines, and internal management tools engineered around your exact operational rules.
              </p>

              <div className="flex items-center gap-3">
                <Link
                  href="#contact"
                  className="btn-primary-tech px-6 py-3.5 rounded-lg text-xs font-bold shadow-lg flex-1 text-center"
                >
                  Discuss Requirement
                </Link>
                <Link
                  href="#services"
                  className="btn-icon-square"
                  aria-label="Explore Capabilities"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-[#F5F7FA] px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Custom Web Applications", desc: "High-performance Next.js and React enterprise applications built for high concurrency." },
                { title: "Enterprise Portals", desc: "Role-based customer, vendor, and internal employee portals with secure authentication." },
                { title: "Workflow Automation", desc: "Automate complex multi-step approval workflows across departments and legacy databases." },
                { title: "Internal Management Systems", desc: "Bespoke ERP modules, asset tracking, inventory, and field operation suites." },
                { title: "Mobile Applications", desc: "iOS and Android apps integrated with central enterprise backend APIs." },
                { title: "Legacy System Modernization", desc: "Refactor legacy monolithic codebases into modern cloud-native microservices." },
              ].map((s) => (
                <div key={s.title} className="bg-white p-6 rounded-2xl card-interactive">
                  <h3 className="font-bold text-[#071A2B] text-base font-heading mb-2">{s.title}</h3>
                  <p className="text-xs text-[#5C6875] leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-[#071A2B] px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ContactForm defaultSolution="Custom Software Development" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
