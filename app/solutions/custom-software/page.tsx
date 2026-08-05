import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { Code, CheckCircle2, Cpu, Layers, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Custom Software Development Services | Vendonexa",
  description:
    "Vendonexa develops custom web applications, enterprise portals, workflow automation engines, and legacy system modernizations tailored to complex business requirements.",
};

export default function CustomSoftwarePage() {
  return (
    <div className="min-h-screen bg-white text-[#101820] flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-20">
        <section className="bg-[#071A2B] text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B2942] border border-[#176BCE]/40 text-[#29B6D8] text-xs font-semibold mb-4">
                <Code className="w-4 h-4" /> Custom Engineering Division
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading leading-tight">
                Tailored Enterprise Software Engineering
              </h1>
              <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
                When off-the-shelf software falls short, Vendonexa builds customized enterprise web platforms, workflow engines, and internal management tools engineered around your exact operational rules.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#F5F7FA] px-4 sm:px-6 lg:px-8">
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
                <div key={s.title} className="bg-white p-6 rounded-2xl border border-[#DCE4EC] shadow-sm">
                  <h3 className="font-bold text-[#071A2B] text-base font-heading mb-2">{s.title}</h3>
                  <p className="text-xs text-[#5C6875] leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#071A2B] px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ContactForm defaultSolution="Custom Software Development" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
