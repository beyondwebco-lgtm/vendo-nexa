import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  Lock,
  Cpu,
  Layers,
  Code,
  Zap,
  RefreshCw,
  Server,
  Users,
  Activity,
  Award,
  ChevronRight,
  FileCheck,
  TrendingUp,
} from "lucide-react";

export const metadata = {
  title: "Vendonexa | Enterprise Software & Cybersecurity Solutions",
  description:
    "Vendonexa provides enterprise Vendor Management Systems, Hospital Management Systems, and Cybersecurity Services (VAPT, SOC, Cloud Security) for global enterprises.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#101820] flex flex-col font-sans selection:bg-[#176BCE] selection:text-white">
      <Header />

      <main className="flex-grow pt-20">
        {/* =========================================================================
            SECTION 1: HERO SECTION
           ========================================================================= */}
        <section className="relative bg-[#071A2B] text-white pt-12 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2942] border border-[#176BCE]/40 text-xs font-semibold text-[#29B6D8] mb-6 shadow-inner">
                <span className="w-2 h-2 rounded-full bg-[#21B573] animate-pulse" />
                Building Smarter Systems. Securing Digital Businesses.
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight font-heading">
                Technology That Manages, Connects & Protects Your Business
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-300 mt-6 leading-relaxed max-w-3xl mx-auto">
                Vendonexa delivers enterprise software and cybersecurity solutions designed to simplify complex operations, automate workflows, improve organizational visibility, and protect critical digital assets.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#176BCE] to-[#29B6D8] text-white text-sm font-bold shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
                >
                  Request a Consultation <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  href="/solutions/vendor-management"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#0B2942] border border-[#176BCE]/40 text-slate-200 text-sm font-semibold hover:bg-[#176BCE]/20 transition-all"
                >
                  Explore Our Solutions
                </Link>
              </div>
            </div>

            {/* Ecosystem Visual */}
            <div className="mt-6">
              <EcosystemVisual />
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: ENTERPRISE TRUST STRIP
           ========================================================================= */}
        <section className="bg-[#0B2942] text-slate-200 py-6 border-y border-[#176BCE]/20">
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

        {/* =========================================================================
            SECTION 3: THREE CORE SOLUTIONS
           ========================================================================= */}
        <section className="py-20 bg-[#F5F7FA] px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#071A2B] font-heading">
                Our Three Core Solutions
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-3">
                A connected technology ecosystem combining management, automation, healthcare operations, and cybersecurity.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Card 1: Vendor Management */}
              <div className="bg-white rounded-2xl p-8 border border-[#DCE4EC] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#EDF6FC] text-[#176BCE] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
                      "Payment Visibility & Performance KPIs",
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
                  className="inline-flex items-center justify-between px-4 py-3 rounded-lg bg-[#EDF6FC] text-[#176BCE] font-bold text-xs hover:bg-[#176BCE] hover:text-white transition-colors"
                >
                  <span>Explore Vendor Management</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Card 2: Hospital Management */}
              <div className="bg-white rounded-2xl p-8 border border-[#DCE4EC] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#EDF6FC] text-[#29B6D8] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
                      "Billing, Insurance TPA & Analytics",
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
                  className="inline-flex items-center justify-between px-4 py-3 rounded-lg bg-[#EDF6FC] text-[#0B2942] font-bold text-xs hover:bg-[#0B2942] hover:text-white transition-colors"
                >
                  <span>Explore Hospital Management</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Card 3: Cybersecurity Services */}
              <div className="bg-[#071A2B] text-white rounded-2xl p-8 border border-[#21B573]/40 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group security-glow">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#21B573]/20 text-[#21B573] flex items-center justify-center mb-6 border border-[#21B573]/40 group-hover:scale-110 transition-transform">
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
                      "DevSecOps & Compliance Alignment",
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
                  className="inline-flex items-center justify-between px-4 py-3 rounded-lg bg-[#21B573]/20 text-[#21B573] border border-[#21B573]/40 font-bold text-xs hover:bg-[#21B573] hover:text-white transition-colors"
                >
                  <span>Explore Cybersecurity Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: THREE-SOLUTION ECOSYSTEM DIAGRAM
           ========================================================================= */}
        <section className="py-20 bg-[#071A2B] text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B2942] border border-[#176BCE]/40 text-xs font-semibold text-[#29B6D8] mb-3">
                Connected Architecture
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading">
                The Vendonexa Integrated Ecosystem
              </h2>
              <p className="text-sm text-slate-300 mt-2">
                Combining operations, clinical workflow automation, and security into one synchronized framework.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              <div className="bg-[#0B2942]/70 p-6 rounded-2xl border border-[#176BCE]/30 hover:border-[#176BCE] transition-all">
                <Building2 className="w-8 h-8 text-[#176BCE] mb-4" />
                <h3 className="text-lg font-bold text-white font-heading mb-2">
                  Manage Your Business Ecosystem
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Digitize vendor onboarding, procurement, contracts, compliance, payments, vendor performance, and business relationships.
                </p>
              </div>

              <div className="bg-[#0B2942]/70 p-6 rounded-2xl border border-[#29B6D8]/40 hover:border-[#29B6D8] transition-all">
                <Stethoscope className="w-8 h-8 text-[#29B6D8] mb-4" />
                <h3 className="text-lg font-bold text-white font-heading mb-2">
                  Transform Healthcare Operations
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Connect patients, doctors, departments, pharmacy, laboratory, billing, inventory, administration, and hospital management.
                </p>
              </div>

              <div className="bg-[#0B2942]/70 p-6 rounded-2xl border border-[#21B573]/40 hover:border-[#21B573] transition-all">
                <ShieldCheck className="w-8 h-8 text-[#21B573] mb-4" />
                <h3 className="text-lg font-bold text-white font-heading mb-2">
                  Protect Your Digital Ecosystem
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Secure applications, APIs, networks, cloud infrastructure, identities, endpoints, and sensitive organizational data.
                </p>
              </div>
            </div>

            <div className="mt-10 p-4 rounded-xl bg-gradient-to-r from-[#176BCE]/20 via-[#29B6D8]/20 to-[#21B573]/20 border border-[#176BCE]/40 text-center">
              <span className="text-sm font-bold font-heading text-white uppercase tracking-wider">
                Core Engine: Management + Automation + Security
              </span>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: VENDOR MANAGEMENT OVERVIEW & WORKFLOW
           ========================================================================= */}
        <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDF6FC] text-[#176BCE] text-xs font-semibold mb-3">
                Vendor Management Division
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#071A2B] font-heading">
                Complete Vendor Lifecycle Management
              </h2>
              <p className="text-sm text-[#5C6875] mt-3 leading-relaxed">
                Centralize vendor registration, verification, procurement, contracts, invoices, compliance, payments, performance, risk, documents, and communication through one structured platform.
              </p>
            </div>

            {/* Workflow Pipeline */}
            <div className="mb-10 p-6 bg-[#F5F7FA] rounded-2xl border border-[#DCE4EC]">
              <h3 className="text-xs font-bold uppercase text-[#5C6875] tracking-wider mb-4">
                Structured Lifecycle Pipeline:
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 text-center text-xs">
                {[
                  "1. Registration",
                  "2. Verification",
                  "3. Procurement",
                  "4. Contract",
                  "5. Invoice",
                  "6. Payment",
                  "7. Performance",
                  "8. Risk & Audit",
                ].map((step) => (
                  <div
                    key={step}
                    className="p-3 bg-white rounded-lg border border-[#DCE4EC] font-semibold text-[#071A2B] shadow-sm"
                  >
                    {step}
                  </div>
                ))}
              </div>
            </div>

            {/* Dashboard Mockup */}
            <VmsDashboardMockup />

            <div className="mt-8 text-center">
              <Link
                href="/solutions/vendor-management"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#071A2B] text-white text-xs font-bold hover:bg-[#176BCE] transition-colors"
              >
                Discover the Vendor Management Platform <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 6: HOSPITAL MANAGEMENT OVERVIEW
           ========================================================================= */}
        <section className="py-20 bg-[#EDF6FC] px-4 sm:px-6 lg:px-8 border-y border-[#DCE4EC]">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#29B6D8] border border-[#29B6D8]/30 text-xs font-semibold mb-3">
                Healthcare Division
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#071A2B] font-heading">
                Connected Digital Healthcare Management
              </h2>
              <p className="text-sm text-[#5C6875] mt-3 leading-relaxed">
                Bring clinical, administrative, operational, and financial hospital processes into one centralized and secure platform.
              </p>
            </div>

            {/* HMS Dashboard Mockup */}
            <HmsDashboardMockup />

            <div className="mt-8 text-center">
              <Link
                href="/solutions/hospital-management"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0B2942] text-white text-xs font-bold hover:bg-[#29B6D8] transition-colors"
              >
                Explore Hospital Management Solution <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 7: CYBERSECURITY SERVICES OVERVIEW
           ========================================================================= */}
        <section className="py-20 bg-[#051320] text-white px-4 sm:px-6 lg:px-8 border-b border-[#0B2942]">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#21B573]/20 border border-[#21B573]/40 text-[#21B573] text-xs font-semibold mb-3">
                Cybersecurity Division
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading">
                Protecting Applications, Infrastructure and Data
              </h2>
              <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                Vendonexa helps organizations identify vulnerabilities, reduce cyber risk, strengthen controls, monitor threats, and respond effectively to security incidents.
              </p>
            </div>

            {/* 6 Capabilities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-[#071A2B] p-6 rounded-xl border border-[#21B573]/20">
                <h3 className="text-base font-bold text-[#21B573] font-heading mb-3">
                  1. Assess
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  <li>• VAPT Testing (Web, Mobile, API)</li>
                  <li>• Network Vulnerability Scanning</li>
                  <li>• Cloud Infrastructure Assessment</li>
                </ul>
              </div>

              <div className="bg-[#071A2B] p-6 rounded-xl border border-[#21B573]/20">
                <h3 className="text-base font-bold text-[#21B573] font-heading mb-3">
                  2. Protect
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  <li>• Security Control Hardening</li>
                  <li>• Identity & Access Management (IAM)</li>
                  <li>• Data Security & Encryption</li>
                </ul>
              </div>

              <div className="bg-[#071A2B] p-6 rounded-xl border border-[#21B573]/20">
                <h3 className="text-base font-bold text-[#21B573] font-heading mb-3">
                  3. Build Securely
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  <li>• Secure Code Review & DevSecOps</li>
                  <li>• Security Architecture Review</li>
                  <li>• Secure SDLC Consulting</li>
                </ul>
              </div>

              <div className="bg-[#071A2B] p-6 rounded-xl border border-[#21B573]/20">
                <h3 className="text-base font-bold text-[#21B573] font-heading mb-3">
                  4. Monitor
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  <li>• SOC Services & Managed Monitoring</li>
                  <li>• SIEM Implementation & Rules</li>
                  <li>• Real-Time Threat Telemetry</li>
                </ul>
              </div>

              <div className="bg-[#071A2B] p-6 rounded-xl border border-[#21B573]/20">
                <h3 className="text-base font-bold text-[#21B573] font-heading mb-3">
                  5. Respond
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  <li>• Incident Response & Containment</li>
                  <li>• Threat Hunting & Forensics</li>
                  <li>• Root Cause Analysis</li>
                </ul>
              </div>

              <div className="bg-[#071A2B] p-6 rounded-xl border border-[#21B573]/20">
                <h3 className="text-base font-bold text-[#21B573] font-heading mb-3">
                  6. Improve
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  <li>• Phishing Simulations & Training</li>
                  <li>• Security Readiness & Auditing</li>
                  <li>• Retesting & Executive Reporting</li>
                </ul>
              </div>
            </div>

            {/* Security Dashboard */}
            <SecurityDashboardMockup />

            <div className="mt-8 text-center">
              <Link
                href="/solutions/cybersecurity"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#21B573] text-slate-950 text-xs font-bold hover:bg-[#21B573]/80 transition-colors"
              >
                Strengthen Your Cybersecurity Posture <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

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
              <p className="text-sm text-[#5C6875] mt-3">
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
                  className="p-4 rounded-xl bg-[#F5F7FA] border border-[#DCE4EC] font-semibold text-[#071A2B] text-xs shadow-sm hover:border-[#176BCE] transition-colors"
                >
                  {service}
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/solutions/custom-software"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#176BCE] text-white text-xs font-bold hover:bg-[#071A2B] transition-colors"
              >
                Discuss Your Software Requirement <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 9: INTEGRATION SERVICES
           ========================================================================= */}
        <section className="py-20 bg-[#071A2B] px-4 sm:px-6 lg:px-8 border-y border-[#0B2942]">
          <div className="max-w-7xl mx-auto">
            <IntegrationHubVisual />
          </div>
        </section>

        {/* =========================================================================
            SECTION 10: WHY VENDONEXA
           ========================================================================= */}
        <section className="py-20 bg-[#F5F7FA] px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#071A2B] font-heading">
                Why Choose Vendonexa
              </h2>
              <p className="text-sm text-[#5C6875] mt-3">
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
                <div key={item.title} className="bg-white p-6 rounded-xl border border-[#DCE4EC] shadow-sm">
                  <h3 className="font-bold text-[#071A2B] text-base font-heading mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#5C6875] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 11: IMPLEMENTATION PROCESS
           ========================================================================= */}
        <section className="py-20 bg-white px-4 sm:px-6 lg:px-8 border-b border-[#DCE4EC]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDF6FC] text-[#176BCE] text-xs font-semibold mb-3">
                Methodology
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#071A2B] font-heading">
                From Business Requirement to Secure Deployment
              </h2>
              <p className="text-sm text-[#5C6875] mt-3">
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
                <div key={item.step} className="bg-[#F5F7FA] p-6 rounded-xl border border-[#DCE4EC] relative">
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

        {/* =========================================================================
            SECTION 12: INDUSTRIES SERVED
           ========================================================================= */}
        <section className="py-20 bg-[#071A2B] text-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <IndustrySelector />
          </div>
        </section>

        {/* =========================================================================
            SECTION 13: FINAL BRAND STATEMENT
           ========================================================================= */}
        <section className="py-20 bg-[#0B2942] text-white px-4 sm:px-6 lg:px-8 border-y border-[#176BCE]/30 text-center relative">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
              Manage Smarter. Operate Better. Stay Secure.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl mx-auto">
              At Vendonexa, we believe digital transformation should deliver measurable business value. Our combination of enterprise management platforms, customized technology solutions, and cybersecurity expertise helps organizations improve operations while maintaining security at every stage.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#176BCE] to-[#29B6D8] text-white text-xs font-bold shadow-lg hover:shadow-cyan-500/25 transition-all"
              >
                Start a Conversation
              </Link>
              <Link
                href="/about"
                className="px-6 py-3.5 rounded-xl bg-[#071A2B] border border-[#176BCE]/40 text-slate-200 text-xs font-semibold hover:bg-[#176BCE]/20 transition-all"
              >
                Explore Vendonexa
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
