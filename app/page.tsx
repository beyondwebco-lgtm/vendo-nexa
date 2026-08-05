import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBackground from "@/components/hero/HeroBackground";
import EcosystemVisual from "@/components/hero/EcosystemVisual";
import VmsDashboardMockup from "@/components/dashboards/VmsDashboardMockup";
import HmsDashboardMockup from "@/components/dashboards/HmsDashboardMockup";
import SecurityDashboardMockup from "@/components/dashboards/SecurityDashboardMockup";
import IntegrationHubVisual from "@/components/visuals/IntegrationHubVisual";
import IndustrySelector from "@/components/visuals/IndustrySelector";
import ContactForm from "@/components/ContactForm";

import {
  ShieldCheck,
  Building2,
  Stethoscope,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Zap,
  RefreshCw,
  Server,
} from "lucide-react";

export const metadata = {
  title: "Vendonexa | Enterprise Software & Cybersecurity Solutions",
  description:
    "Vendonexa provides enterprise Vendor Management Systems, Hospital Management Systems, and Cybersecurity Services (VAPT, SOC, Cloud Security) for global enterprises.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-[#101820] flex flex-col font-sans selection:bg-[#176BCE] selection:text-white">
      <Header />

      <main className="flex-grow pt-16">
        {/* =========================================================================
            SECTION 1: HERO SECTION (Asymmetric Composition, Archivo Display H1)
           ========================================================================= */}
        <section className="relative min-h-[85vh] lg:min-h-[90vh] bg-[#071A2B] text-white pt-24 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-between overflow-hidden corner-ticks">
          <HeroBackground variant="default" />

          {/* Corner Ticks */}
          <span className="corner-tick-tl">+</span>
          <span className="corner-tick-tr">+</span>
          <span className="corner-tick-bl">+</span>
          <span className="corner-tick-br">+</span>

          {/* Top Badge */}
          <div className="relative z-10 max-w-7xl mx-auto w-full pt-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2942]/90 border border-[#176BCE]/40 text-xs font-semibold text-[#29B6D8]">
              <span className="w-2 h-2 rounded-full bg-[#21B573] animate-pulse" />
              BUILDING SMARTER SYSTEMS. SECURING DIGITAL BUSINESSES.
            </div>
          </div>

          {/* Asymmetric Composition Grid */}
          <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end my-auto py-8">
            {/* Bottom-Left Headline */}
            <div className="lg:col-span-8">
              <h1 className="font-display-hero text-[clamp(2.5rem,6.5vw,6rem)] leading-[0.95] tracking-tight uppercase text-white max-w-2xl">
                TECHNOLOGY THAT MANAGES, CONNECTS & PROTECTS
              </h1>
            </div>

            {/* Bottom-Right Supporting Text & Dual CTAs */}
            <div className="lg:col-span-4 max-w-[380px] lg:ml-auto space-y-6">
              <p className="text-sm sm:text-base text-slate-300/80 leading-relaxed font-sans">
                Vendonexa delivers enterprise software and cybersecurity solutions designed to simplify complex operations, automate workflows, improve visibility, and protect critical digital assets.
              </p>

              <div className="flex items-center gap-3">
                <Link
                  href="/contact"
                  className="btn-primary-tech px-6 py-3.5 rounded-lg text-xs font-bold shadow-lg flex-1 text-center"
                >
                  Request a Consultation
                </Link>
                <Link
                  href="/solutions/vendor-management"
                  className="btn-icon-square"
                  aria-label="Explore Solutions"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Ecosystem Interactive Visualizer */}
          <div className="relative z-10 max-w-7xl mx-auto w-full pt-6">
            <EcosystemVisual />
          </div>
        </section>

        {/* Thin Section Divider */}
        <hr className="border-t border-[#DCE4EC]/60" />

        {/* =========================================================================
            SECTION 2: ENTERPRISE TRUST STRIP (Thin Centered)
           ========================================================================= */}
        <section className="bg-[#0B2942] text-slate-200 py-5 border-y border-[#176BCE]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
              <div className="flex items-center justify-center gap-2 p-2">
                <Cpu className="w-4 h-4 text-[#29B6D8]" />
                <span className="text-xs font-semibold">Enterprise-Ready</span>
              </div>
              <div className="flex items-center justify-center gap-2 p-2">
                <ShieldCheck className="w-4 h-4 text-[#21B573]" />
                <span className="text-xs font-semibold">Security-First</span>
              </div>
              <div className="flex items-center justify-center gap-2 p-2">
                <Layers className="w-4 h-4 text-[#29B6D8]" />
                <span className="text-xs font-semibold">Customizable Workflows</span>
              </div>
              <div className="flex items-center justify-center gap-2 p-2">
                <Server className="w-4 h-4 text-[#29B6D8]" />
                <span className="text-xs font-semibold">Scalable Cloud</span>
              </div>
              <div className="flex items-center justify-center gap-2 p-2">
                <Zap className="w-4 h-4 text-[#29B6D8]" />
                <span className="text-xs font-semibold">Integration-Friendly</span>
              </div>
              <div className="flex items-center justify-center gap-2 p-2">
                <RefreshCw className="w-4 h-4 text-[#29B6D8]" />
                <span className="text-xs font-semibold">Continuous Support</span>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-t border-[#DCE4EC]/60" />

        {/* =========================================================================
            SECTION 3: THREE CORE SOLUTIONS (Centered Grid)
           ========================================================================= */}
        <section className="py-20 bg-[#F5F7FA] px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#071A2B] font-heading">
                Our Three Core Solutions
              </h2>
              <p className="text-sm sm:text-base text-[#5C6875] mt-3">
                A connected technology ecosystem combining management, automation, healthcare operations, and cybersecurity.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Card 1: Vendor Management */}
              <div className="bg-white rounded-2xl p-8 card-interactive flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#EDF6FC] text-[#176BCE] flex items-center justify-center mb-6 card-icon">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#071A2B] font-heading mb-3">
                    Vendor Management System
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C6875] leading-relaxed mb-6">
                    Simplify the complete vendor lifecycle, from onboarding and procurement to contracts, compliance, invoices, payments, risk, and performance.
                  </p>
                  <div className="space-y-2 mb-6">
                    {[
                      "Vendor Onboarding & Verification",
                      "Procurement & RFQ/RFP Tenders",
                      "Contract & Invoice Lifecycle",
                      "Compliance Tracking & Risk Index",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-[#101820]">
                        <CheckCircle2 className="w-4 h-4 text-[#176BCE] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Link
                  href="/solutions/vendor-management"
                  className="btn-primary-tech inline-flex items-center justify-between px-4 py-3 rounded-lg font-bold text-xs"
                >
                  <span>Explore Vendor Management</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Card 2: Hospital Management */}
              <div className="bg-white rounded-2xl p-8 card-interactive flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#EDF6FC] text-[#29B6D8] flex items-center justify-center mb-6 card-icon">
                    <Stethoscope className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#071A2B] font-heading mb-3">
                    Hospital Management System
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C6875] leading-relaxed mb-6">
                    Connect clinical, administrative, financial, and operational hospital processes through one secure and integrated digital platform.
                  </p>
                  <div className="space-y-2 mb-6">
                    {[
                      "Patient Registration & Appointments",
                      "OPD & IPD Clinical Management",
                      "Electronic Medical Records (EMR)",
                      "Pharmacy, Lab & Radiology Sync",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-[#101820]">
                        <CheckCircle2 className="w-4 h-4 text-[#29B6D8] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Link
                  href="/solutions/hospital-management"
                  className="btn-primary-tech inline-flex items-center justify-between px-4 py-3 rounded-lg font-bold text-xs"
                >
                  <span>Explore Hospital Management</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Card 3: Cybersecurity Services */}
              <div className="bg-[#071A2B] text-white rounded-2xl p-8 border border-[#21B573]/40 shadow-xl security-glow card-interactive flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#21B573]/20 text-[#21B573] flex items-center justify-center mb-6 border border-[#21B573]/40 card-icon">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-heading mb-3">
                    Cybersecurity Services
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    Identify vulnerabilities, strengthen security controls, monitor threats, protect critical assets, and improve organizational cybersecurity posture.
                  </p>
                  <div className="space-y-2 mb-6">
                    {[
                      "VAPT (Web, Mobile, API & Network)",
                      "Cloud Security & Hardening",
                      "SOC Services & SIEM Integration",
                      "Incident Response & Readiness",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-[#21B573] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Link
                  href="/solutions/cybersecurity"
                  className="btn-primary-cyan inline-flex items-center justify-between px-4 py-3 rounded-lg font-bold text-xs"
                >
                  <span>Explore Cybersecurity Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-t border-[#DCE4EC]/60" />

        {/* =========================================================================
            SECTION 4: THREE-SOLUTION ECOSYSTEM DIAGRAM (Asymmetric Layout 40/60)
           ========================================================================= */}
        <section className="py-20 bg-[#071A2B] text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left 40%: Description */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B2942] border border-[#176BCE]/40 text-xs font-semibold text-[#29B6D8]">
                Connected Architecture
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading">
                The Vendonexa Integrated Ecosystem
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Combining business operations, clinical workflows, and threat defense into one synchronized digital framework.
              </p>
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#176BCE]/20 to-[#29B6D8]/20 border border-[#176BCE]/40 mt-4">
                <span className="text-xs font-bold font-heading text-white uppercase tracking-wider">
                  Core Engine: Management + Automation + Security
                </span>
              </div>
            </div>

            {/* Right 60%: Ecosystem Cards */}
            <div className="lg:col-span-7 space-y-4">
              <div className="bg-[#0B2942]/80 p-5 rounded-xl border border-[#176BCE]/30 card-interactive">
                <div className="flex items-center gap-3 mb-2">
                  <Building2 className="w-6 h-6 text-[#176BCE]" />
                  <h3 className="text-base font-bold text-white font-heading">
                    Manage Your Business Ecosystem
                  </h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pl-9">
                  Digitize vendor onboarding, procurement, contracts, compliance, payments, and vendor performance.
                </p>
              </div>

              <div className="bg-[#0B2942]/80 p-5 rounded-xl border border-[#29B6D8]/40 card-interactive">
                <div className="flex items-center gap-3 mb-2">
                  <Stethoscope className="w-6 h-6 text-[#29B6D8]" />
                  <h3 className="text-base font-bold text-white font-heading">
                    Transform Healthcare Operations
                  </h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pl-9">
                  Connect patients, doctors, departments, pharmacy, laboratory, billing, inventory, and ICU bed management.
                </p>
              </div>

              <div className="bg-[#0B2942]/80 p-5 rounded-xl border border-[#21B573]/40 card-interactive">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck className="w-6 h-6 text-[#21B573]" />
                  <h3 className="text-base font-bold text-white font-heading">
                    Protect Your Digital Ecosystem
                  </h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pl-9">
                  Secure applications, APIs, networks, cloud infrastructure, identities, endpoints, and data vaults.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-t border-[#DCE4EC]/60" />

        {/* =========================================================================
            SECTION 5: VENDOR MANAGEMENT OVERVIEW (Asymmetric: Copy Left 45 / Mockup Right 55)
           ========================================================================= */}
        <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Copy Left 45% */}
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDF6FC] text-[#176BCE] text-xs font-semibold">
                  Vendor Management Division
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#071A2B] font-heading">
                  Complete Vendor Lifecycle Management
                </h2>
                <p className="text-xs sm:text-sm text-[#5C6875] leading-relaxed">
                  Centralize vendor registration, verification, procurement, contracts, invoices, compliance, payments, performance, risk, documents, and communication through one structured platform.
                </p>
                <div className="pt-2">
                  <Link
                    href="/solutions/vendor-management"
                    className="btn-primary-tech px-5 py-3 rounded-lg text-xs font-bold inline-flex items-center gap-2"
                  >
                    Discover VMS Platform <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Pipeline & Preview Right 55% */}
              <div className="lg:col-span-7 space-y-4">
                <div className="p-4 bg-[#F5F7FA] rounded-xl border border-[#DCE4EC]">
                  <span className="text-[11px] font-bold uppercase text-[#5C6875] block mb-2">
                    Structured Lifecycle Pipeline:
                  </span>
                  <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-semibold text-[#071A2B]">
                    <div className="p-2 bg-white rounded border border-[#DCE4EC]">1. Register</div>
                    <div className="p-2 bg-white rounded border border-[#DCE4EC]">2. Verify</div>
                    <div className="p-2 bg-white rounded border border-[#DCE4EC]">3. RFQ Tender</div>
                    <div className="p-2 bg-white rounded border border-[#DCE4EC]">4. Contract</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard Mockup */}
            <VmsDashboardMockup />
          </div>
        </section>

        <hr className="border-t border-[#DCE4EC]/60" />

        {/* =========================================================================
            SECTION 6: HOSPITAL MANAGEMENT OVERVIEW (Mirrored: Mockup Left 55 / Copy Right 45)
           ========================================================================= */}
        <section className="py-20 bg-[#EDF6FC] px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Pipeline/Badges Left 55% */}
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div className="p-4 bg-white rounded-xl border border-[#DCE4EC]">
                  <span className="text-[11px] font-bold uppercase text-[#29B6D8] block mb-2">
                    Digital Patient Care Journey:
                  </span>
                  <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-semibold text-[#071A2B]">
                    <div className="p-2 bg-[#EDF6FC] rounded border border-[#DCE4EC]">1. Intake</div>
                    <div className="p-2 bg-[#EDF6FC] rounded border border-[#DCE4EC]">2. EMR Consult</div>
                    <div className="p-2 bg-[#EDF6FC] rounded border border-[#DCE4EC]">3. Lab/Rx</div>
                    <div className="p-2 bg-[#EDF6FC] rounded border border-[#DCE4EC]">4. Billing</div>
                  </div>
                </div>
              </div>

              {/* Copy Right 45% */}
              <div className="lg:col-span-5 order-1 lg:order-2 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#29B6D8] border border-[#29B6D8]/30 text-xs font-semibold">
                  Healthcare Division
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#071A2B] font-heading">
                  Connected Digital Healthcare Management
                </h2>
                <p className="text-xs sm:text-sm text-[#5C6875] leading-relaxed">
                  Bring clinical, administrative, operational, and financial hospital processes into one centralized and secure platform.
                </p>
                <div className="pt-2">
                  <Link
                    href="/solutions/hospital-management"
                    className="btn-primary-tech px-5 py-3 rounded-lg text-xs font-bold inline-flex items-center gap-2"
                  >
                    Explore HMS Platform <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Dashboard Mockup */}
            <HmsDashboardMockup />
          </div>
        </section>

        <hr className="border-t border-[#DCE4EC]/60" />

        {/* =========================================================================
            SECTION 7: CYBERSECURITY SERVICES OVERVIEW
           ========================================================================= */}
        <section className="py-20 bg-[#051320] text-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#21B573]/20 border border-[#21B573]/40 text-[#21B573] text-xs font-semibold mb-3">
                Cybersecurity Division
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading">
                Protecting Applications, Infrastructure and Data
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Vendonexa helps organizations identify vulnerabilities, reduce cyber risk, strengthen controls, monitor threats, and respond effectively to security incidents.
              </p>
            </div>

            {/* 6 Capabilities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { step: "1. Assess", items: ["VAPT Testing (Web, Mobile, API)", "Network Vulnerability Scanning", "Cloud Infrastructure Assessment"] },
                { step: "2. Protect", items: ["Security Control Hardening", "Identity & Access Management (IAM)", "Data Security & Encryption"] },
                { step: "3. Build Securely", items: ["Secure Code Review & DevSecOps", "Security Architecture Review", "Secure SDLC Consulting"] },
                { step: "4. Monitor", items: ["SOC Services & Managed Monitoring", "SIEM Implementation & Rules", "Real-Time Threat Telemetry"] },
                { step: "5. Respond", items: ["Incident Response & Containment", "Threat Hunting & Forensics", "Root Cause Analysis"] },
                { step: "6. Improve", items: ["Phishing Simulations & Training", "Security Readiness & Auditing", "Retesting & Executive Reporting"] },
              ].map((c) => (
                <div key={c.step} className="bg-[#071A2B] p-6 rounded-xl border border-[#21B573]/30 card-interactive">
                  <h3 className="text-base font-bold text-[#21B573] font-heading mb-3">
                    {c.step}
                  </h3>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {c.items.map((i) => (
                      <li key={i}>• {i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Security Dashboard */}
            <SecurityDashboardMockup />

            <div className="text-center">
              <Link
                href="/solutions/cybersecurity"
                className="btn-primary-cyan px-6 py-3.5 rounded-lg text-xs font-bold inline-flex items-center gap-2"
              >
                Strengthen Your Cybersecurity Posture <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <hr className="border-t border-[#DCE4EC]/60" />

        {/* =========================================================================
            SECTION 8: CUSTOM SOFTWARE DEVELOPMENT
           ========================================================================= */}
        <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDF6FC] text-[#176BCE] text-xs font-semibold mb-3">
                Engineering Capabilities
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#071A2B] font-heading">
                Technology Built Around Your Business
              </h2>
              <p className="text-xs sm:text-sm text-[#5C6875] mt-3">
                Vendonexa develops customized enterprise platforms based on actual organizational processes, departments, users, workflows, integrations, and operational goals.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
              {[
                "Custom Web Applications",
                "Enterprise Portals",
                "Workflow Automation",
                "Internal Management Systems",
                "Mobile Applications",
                "API Development",
                "Business Dashboards",
                "Cloud Applications",
                "Database Solutions",
                "Legacy Modernization",
              ].map((service) => (
                <div
                  key={service}
                  className="p-4 rounded-xl bg-[#F5F7FA] card-interactive font-semibold text-[#071A2B] text-xs"
                >
                  {service}
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/solutions/custom-software"
                className="btn-primary-tech px-6 py-3 rounded-lg text-xs font-bold inline-flex items-center gap-2"
              >
                Discuss Your Software Requirement <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <hr className="border-t border-[#DCE4EC]/60" />

        {/* =========================================================================
            SECTION 9: INTEGRATION SERVICES
           ========================================================================= */}
        <section className="py-20 bg-[#071A2B] px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <IntegrationHubVisual />
          </div>
        </section>

        <hr className="border-t border-[#DCE4EC]/60" />

        {/* =========================================================================
            SECTION 10: WHY VENDONEXA (Centered Grid)
           ========================================================================= */}
        <section className="py-20 bg-[#F5F7FA] px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#071A2B] font-heading">
                Why Choose Vendonexa
              </h2>
              <p className="text-xs sm:text-sm text-[#5C6875] mt-3">
                A reliable, long-term technology partner committed to security, scalability, and operational excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Client-Centric Solutions", desc: "Technology designed around real operational requirements." },
                { title: "Security-First Approach", desc: "Security considered throughout design, development, deployment, and ongoing operations." },
                { title: "Scalable Architecture", desc: "Platforms structured to grow seamlessly with organizational needs." },
                { title: "Customizable Workflows", desc: "Modules, permissions, approvals, and processes adapted to each organization." },
                { title: "Centralized Management", desc: "Bring disconnected information and processes into one structured platform." },
                { title: "Workflow Automation", desc: "Reduce repetitive work and improve operational efficiency." },
                { title: "Data-Driven Decisions", desc: "Use dashboards, reporting, and analytics to improve visibility." },
                { title: "Enterprise Integrations", desc: "Connect Vendonexa platforms with existing business applications." },
                { title: "Continuous Support", desc: "Receive maintenance, enhancements, monitoring, upgrades, and assistance." },
              ].map((item) => (
                <div key={item.title} className="bg-white p-6 rounded-xl card-interactive">
                  <h3 className="font-bold text-[#071A2B] text-base font-heading mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#5C6875] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-t border-[#DCE4EC]/60" />

        {/* =========================================================================
            SECTION 11: IMPLEMENTATION PROCESS (Horizontal connected timeline)
           ========================================================================= */}
        <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDF6FC] text-[#176BCE] text-xs font-semibold mb-3">
                Methodology
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#071A2B] font-heading">
                From Business Requirement to Secure Deployment
              </h2>
              <p className="text-xs sm:text-sm text-[#5C6875] mt-3">
                Our structured 9-step enterprise delivery framework ensures quality, security, and smooth adoption.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { step: "01", name: "Requirement Understanding", text: "Analyzing business objectives, departmental workflows, and legacy systems." },
                { step: "02", name: "Solution Planning", text: "Defining architecture, data schemas, module scopes, and security controls." },
                { step: "03", name: "UI/UX Design", text: "Crafting intuitive enterprise user interfaces for web and mobile roles." },
                { step: "04", name: "Development", text: "Building robust frontend and backend logic with clean TypeScript code." },
                { step: "05", name: "Security Integration", text: "Embedding encryption, IAM, and conducting internal VAPT audits." },
                { step: "06", name: "Testing & QA", text: "Rigorous functional, stress, and user acceptance testing." },
                { step: "07", name: "Deployment", text: "Smooth cloud or on-premise rollout with zero downtime." },
                { step: "08", name: "Training", text: "Conducting interactive user training for administrators and staff." },
                { step: "09", name: "Support & Maintenance", text: "24/7 technical monitoring, patch updates, and feature upgrades." },
              ].map((item) => (
                <div key={item.step} className="bg-[#F5F7FA] p-6 rounded-xl card-interactive relative">
                  <span className="font-mono font-extrabold text-2xl text-[#176BCE] opacity-40 block mb-2">
                    {item.step}
                  </span>
                  <h3 className="font-bold text-[#071A2B] text-base font-heading mb-1">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#5C6875] leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-t border-[#DCE4EC]/60" />

        {/* =========================================================================
            SECTION 12: INDUSTRIES SERVED
           ========================================================================= */}
        <section className="py-20 bg-[#071A2B] text-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <IndustrySelector />
          </div>
        </section>

        <hr className="border-t border-[#DCE4EC]/60" />

        {/* =========================================================================
            SECTION 13: FINAL BRAND STATEMENT BANNER (Corner Ticks)
           ========================================================================= */}
        <section className="py-20 bg-[#0B2942] text-white px-4 sm:px-6 lg:px-8 text-center relative corner-ticks">
          <span className="corner-tick-tl">+</span>
          <span className="corner-tick-tr">+</span>
          <span className="corner-tick-bl">+</span>
          <span className="corner-tick-br">+</span>

          <div className="max-w-4xl mx-auto space-y-6 relative z-10">
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
              Manage Smarter. Operate Better. Stay Secure.
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl mx-auto">
              At Vendonexa, we believe digital transformation should deliver measurable business value. Our combination of enterprise management platforms, customized technology solutions, and cybersecurity expertise helps organizations improve operations while maintaining security at every stage.
            </p>
            <div className="pt-4 flex items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-primary-tech px-6 py-3.5 rounded-lg text-xs font-bold shadow-lg"
              >
                Start a Conversation
              </Link>
              <Link
                href="/about"
                className="btn-icon-square"
                aria-label="Explore Vendonexa"
              >
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 14: CONTACT CTA FORM
           ========================================================================= */}
        <section id="contact-section" className="py-20 bg-[#F5F7FA] px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
