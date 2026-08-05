import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VmsDashboardMockup from "@/components/dashboards/VmsDashboardMockup";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import {
  Building2,
  CheckCircle2,
  FileCheck,
  ShieldAlert,
  BarChart3,
  RefreshCw,
  Users,
  CreditCard,
  Layers,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export const metadata = {
  title: "Vendor Management System (VMS) | Enterprise Procurement Platform | Vendonexa",
  description:
    "Vendonexa Vendor Management System simplifies the complete vendor lifecycle, from registration, RFQ/RFP procurement, contract management, and invoice tracking to risk and performance analytics.",
};

const vmsModuleCategories = [
  {
    title: "1. Onboarding & Master Data Management",
    modules: [
      { name: "Vendor Registration & Portal", desc: "Self-service onboarding portal for vendors with multi-step document uploads." },
      { name: "Vendor Verification & KYB", desc: "Automated business verification, tax ID check, and sanctions compliance." },
      { name: "Centralized Vendor Database", desc: "Single source of truth for all supplier contacts, banking details, and status." },
    ],
  },
  {
    title: "2. Procurement & Tender Management",
    modules: [
      { name: "RFQ / RFP Management", desc: "Create, distribute, and evaluate competitive request for quotes and proposals." },
      { name: "Tender Management Engine", desc: "Publish public or sealed tenders with automated bid evaluation matrices." },
      { name: "Purchase Order Automation", desc: "Convert approved requisitions into POs with automated approval hierarchies." },
    ],
  },
  {
    title: "3. Contracts & Financial Workflows",
    modules: [
      { name: "Contract Lifecycle Management", desc: "Drafting, e-signatures, key date alert triggers, and contract repository." },
      { name: "Invoice Management & Matching", desc: "Automated 3-way matching between POs, goods receipts, and vendor invoices." },
      { name: "Payment Tracking & Visibility", desc: "Real-time payment status tracking connected to corporate ERP gateways." },
    ],
  },
  {
    title: "4. Performance, Risk & Compliance",
    modules: [
      { name: "Vendor Performance Analytics", desc: "Track SLA compliance, delivery timeliness, quality index, and scorecards." },
      { name: "Vendor Risk Management (VRM)", desc: "Automated financial stability risk scoring, dependency risk, and audits." },
      { name: "Compliance & Doc Management", desc: "Monitor ISO, insurance, tax, and safety certificate expiration dates." },
    ],
  },
  {
    title: "5. Communication & Automation",
    modules: [
      { name: "Vendor Collaboration Portal", desc: "Secure messaging, dispute resolution, and document exchange channel." },
      { name: "Workflow Automation Engine", desc: "Custom approval rules, multi-tier authority signoffs, and event triggers." },
    ],
  },
  {
    title: "6. Dashboards, Analytics & Integrations",
    modules: [
      { name: "Executive Dashboards", desc: "Comprehensive spend visibility, vendor breakdown, and operational metrics." },
      { name: "Enterprise Integrations", desc: "Seamless REST APIs for SAP, Oracle, Workday, QuickBooks, and custom ERPs." },
    ],
  },
];

export default function VendorManagementPage() {
  return (
    <div className="min-h-screen bg-white text-[#101820] flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-20">
        {/* Page Hero */}
        <section className="bg-[#071A2B] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B2942] border border-[#176BCE]/40 text-[#29B6D8] text-xs font-semibold mb-4">
                <Building2 className="w-4 h-4" /> Enterprise Software Solution
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading leading-tight">
                Enterprise Vendor Management System
              </h1>
              <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
                Centralize supplier onboarding, RFQ tenders, contract lifecycle, invoice 3-way matching, compliance audits, and performance tracking across your enterprise.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="#contact"
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#176BCE] to-[#29B6D8] text-white text-xs font-bold shadow-lg"
                >
                  Request VMS Demo
                </Link>
                <Link
                  href="#modules"
                  className="px-6 py-3 rounded-lg bg-[#0B2942] text-slate-200 text-xs font-semibold border border-[#176BCE]/30"
                >
                  Explore Modules
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="py-16 bg-[#F5F7FA] px-4 sm:px-6 lg:px-8 border-b border-[#DCE4EC]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071A2B] font-heading mb-6">
              End-to-End Vendor Lifecycle Workflow
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 text-center text-xs">
              {[
                "1. Onboarding",
                "2. KYB Audit",
                "3. RFQ Bidding",
                "4. Award PO",
                "5. Contract",
                "6. 3-Way Invoice",
                "7. Payment",
                "8. KPI Review",
              ].map((step) => (
                <div
                  key={step}
                  className="p-3 bg-white rounded-xl border border-[#DCE4EC] font-semibold text-[#071A2B] shadow-sm"
                >
                  {step}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Live Mockup */}
        <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xl sm:text-3xl font-bold text-[#071A2B] font-heading mb-2">
              Centralized Operational Control
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-8">
              Interactive preview of the Vendonexa VMS executive dashboard.
            </p>
            <VmsDashboardMockup />
          </div>
        </section>

        {/* Categorized Modules Grid */}
        <section id="modules" className="py-20 bg-[#EDF6FC] px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#071A2B] font-heading">
                Comprehensive VMS Module Suite
              </h2>
              <p className="text-xs sm:text-sm text-[#5C6875] mt-2">
                Structured into 6 specialized capability groups for enterprise scale.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {vmsModuleCategories.map((cat) => (
                <div
                  key={cat.title}
                  className="bg-white p-6 rounded-2xl border border-[#DCE4EC] shadow-sm"
                >
                  <h3 className="text-sm font-bold text-[#176BCE] uppercase tracking-wider font-heading mb-4">
                    {cat.title}
                  </h3>
                  <div className="space-y-4">
                    {cat.modules.map((m) => (
                      <div key={m.name} className="border-b border-[#EDF6FC] pb-3 last:border-0 last:pb-0">
                        <div className="font-semibold text-xs text-[#071A2B] flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#21B573] shrink-0" />
                          {m.name}
                        </div>
                        <p className="text-[11px] text-[#5C6875] mt-1">{m.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Form */}
        <section id="contact" className="py-20 bg-[#071A2B] px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ContactForm defaultSolution="Vendor Management System" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
