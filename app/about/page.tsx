import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ShieldCheck, Building2, Stethoscope, Award, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Vendonexa | Enterprise Software & Cybersecurity Partner",
  description:
    "Learn about Vendonexa, our mission, vision, three core platform divisions (Vendor Management, Hospital Management, Cybersecurity Services), and technology philosophy.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-[#101820] flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-20">
        {/* Hero */}
        <section className="bg-[#071A2B] text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <span className="text-xs uppercase font-bold text-[#29B6D8] tracking-widest block mb-2 font-mono">
                Company Overview
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading leading-tight">
                Building Smarter Systems. Securing Digital Businesses.
              </h1>
              <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
                Vendonexa is a technology company delivering enterprise software and cybersecurity solutions designed to simplify complex operations, improve visibility, automate workflows, and protect critical digital assets.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-[#F5F7FA] px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-[#DCE4EC] shadow-sm">
              <h2 className="text-xl font-bold text-[#071A2B] font-heading mb-3">Our Mission</h2>
              <p className="text-sm text-[#5C6875] leading-relaxed">
                To help organizations simplify operations, automate business processes, connect critical systems, and strengthen digital security through reliable and scalable technology solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#DCE4EC] shadow-sm">
              <h2 className="text-xl font-bold text-[#071A2B] font-heading mb-3">Our Vision</h2>
              <p className="text-sm text-[#5C6875] leading-relaxed">
                To become a trusted enterprise technology and cybersecurity partner for organizations undergoing digital transformation.
              </p>
            </div>
          </div>
        </section>

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
              <div className="bg-[#EDF6FC] p-6 rounded-2xl border border-[#DCE4EC]">
                <Building2 className="w-8 h-8 text-[#176BCE] mb-4" />
                <h3 className="text-lg font-bold text-[#071A2B] font-heading mb-2">
                  Vendor Management System
                </h3>
                <p className="text-xs text-[#5C6875] leading-relaxed">
                  Digitizing the complete supplier ecosystem, procurement tenders, contracts, 3-way invoice matching, and performance tracking.
                </p>
              </div>

              <div className="bg-[#EDF6FC] p-6 rounded-2xl border border-[#DCE4EC]">
                <Stethoscope className="w-8 h-8 text-[#29B6D8] mb-4" />
                <h3 className="text-lg font-bold text-[#071A2B] font-heading mb-2">
                  Hospital Management System
                </h3>
                <p className="text-xs text-[#5C6875] leading-relaxed">
                  Connecting clinical EMR, OPD/IPD workflows, pharmacy, laboratory diagnostics, billing, and ICU bed management.
                </p>
              </div>

              <div className="bg-[#071A2B] text-white p-6 rounded-2xl border border-[#21B573]/40">
                <ShieldCheck className="w-8 h-8 text-[#21B573] mb-4" />
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
        <section className="py-16 bg-[#0B2942] text-white px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-4xl font-bold font-heading">
              Manage Smarter. Operate Better. Stay Secure.
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Whether an organization wants to modernize vendor management, digitize hospital operations, develop a customized enterprise platform, or strengthen its cybersecurity posture, Vendonexa provides the technology expertise required to move forward securely and confidently.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#176BCE] to-[#29B6D8] text-white text-xs font-bold shadow-lg"
              >
                Schedule Executive Discussion <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
