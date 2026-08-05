"use me";
"use client";

import { useState } from "react";
import {
  Stethoscope,
  Factory,
  HardHat,
  Server,
  Building,
  GraduationCap,
  ShoppingBag,
  Truck,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const industries = [
  {
    id: "healthcare",
    name: "Healthcare & Hospitals",
    icon: Stethoscope,
    tagline: "EMR Digitalization & Hospital Operational Control",
    description:
      "Transform hospital administration, IPD/OPD patient workflows, pharmacy management, diagnostic lab sync, and data privacy compliance.",
    solutions: [
      "Hospital Management Platform (HMS)",
      "HIPAA Data Encryption & EMR",
      "Pharmacy & Inventory Control",
      "Vendor Procurement for Medical Supplies",
    ],
    accent: "text-[#29B6D8]",
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Supply Chain",
    icon: Factory,
    tagline: "Procurement Automation & Vendor Compliance",
    description:
      "Digitize raw material vendor onboarding, purchase orders, quality checks, invoice matching, and supplier risk auditing.",
    solutions: [
      "Vendor Lifecycle & Procurement (VMS)",
      "Contract & Invoice Automation",
      "ERP Integration (SAP/Oracle)",
      "OT & Industrial Cybersecurity",
    ],
    accent: "text-amber-400",
  },
  {
    id: "construction",
    name: "Construction & Infrastructure",
    icon: HardHat,
    tagline: "Subcontractor Management & Material Tender Control",
    description:
      "Centralize contractor compliance, RFQ tender bids, equipment tracking, material purchase approvals, and site safety audits.",
    solutions: [
      "Subcontractor & Supplier Portal",
      "Tender & Bidding Automation",
      "Milestone Payment Tracking",
      "Custom Enterprise Workflow Engine",
    ],
    accent: "text-indigo-400",
  },
  {
    id: "it-tech",
    name: "IT & Technology Enterprises",
    icon: Server,
    tagline: "DevSecOps, Cloud Security & VAPT Testing",
    description:
      "Strengthen cloud posture, perform deep VAPT penetration testing, secure APIs, implement SIEM, and achieve regulatory readiness.",
    solutions: [
      "VAPT Assessment (Web, Mobile, API)",
      "SOC Services & Threat Monitoring",
      "Secure Code Review & DevSecOps",
      "Vendor Data Privacy Risk Audits",
    ],
    accent: "text-[#21B573]",
  },
  {
    id: "finance",
    name: "Corporate Enterprises & Finance",
    icon: Building,
    tagline: "Governance, Enterprise Integration & Data Protection",
    description:
      "Secure critical financial data, automate cross-departmental approval flows, streamline third-party vendor risks, and enforce zero-trust.",
    solutions: [
      "Enterprise Vendor Risk Management",
      "API Middleware & Banking Gateways",
      "SIEM & Compliance Monitoring",
      "Custom Internal Management Software",
    ],
    accent: "text-sky-400",
  },
  {
    id: "retail",
    name: "Retail & Supply Chain",
    icon: ShoppingBag,
    tagline: "Multi-Store Inventory & Supplier Management",
    description:
      "Manage thousands of retail suppliers, automated replenishment purchase orders, invoice matching, and distribution security.",
    solutions: [
      "Master Vendor Database & Portal",
      "Automated Purchase Orders & Payments",
      "Web Application Security & E-commerce VAPT",
      "API Integrations for POS Systems",
    ],
    accent: "text-[#29B6D8]",
  },
];

export default function IndustrySelector() {
  const [selectedId, setSelectedId] = useState(industries[0].id);
  const activeIndustry = industries.find((i) => i.id === selectedId) || industries[0];
  const ActiveIcon = activeIndustry.icon;

  return (
    <div className="w-full bg-[#071A2B] rounded-2xl border border-[#176BCE]/30 p-6 sm:p-8 shadow-2xl">
      <div className="text-center max-w-3xl mx-auto mb-8">
        <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
          Engineered for Complex Industry Workflows
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mt-2">
          Select your sector to explore tailored enterprise software platforms, operational automation, and security capabilities.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Industry Tabs */}
        <div className="lg:col-span-5 space-y-2">
          {industries.map((ind) => {
            const Icon = ind.icon;
            const isSelected = ind.id === selectedId;
            return (
              <button
                key={ind.id}
                onClick={() => setSelectedId(ind.id)}
                className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between group ${
                  isSelected
                    ? "bg-[#0B2942] border-[#29B6D8] shadow-lg text-white"
                    : "bg-[#071A2B] border-[#176BCE]/20 text-slate-300 hover:bg-[#0B2942]/50 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg ${
                      isSelected
                        ? "bg-[#176BCE]/30 text-[#29B6D8]"
                        : "bg-[#0B2942] text-slate-400 group-hover:text-[#29B6D8]"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold font-heading">
                      {ind.name}
                    </div>
                    <div className="text-[10px] text-slate-400 line-clamp-1">
                      {ind.tagline}
                    </div>
                  </div>
                </div>
                <ArrowRight
                  className={`w-4 h-4 transition-transform ${
                    isSelected ? "translate-x-1 text-[#29B6D8]" : "opacity-0"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Right Column: Industry Detail Panel */}
        <div className="lg:col-span-7 bg-[#0B2942]/60 rounded-xl border border-[#176BCE]/30 p-6 flex flex-col justify-between min-h-[360px]">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-[#176BCE]/20 border border-[#176BCE]/40">
                <ActiveIcon className={`w-6 h-6 ${activeIndustry.accent}`} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white font-heading">
                  {activeIndustry.name}
                </h4>
                <p className="text-xs text-[#29B6D8] font-medium">
                  {activeIndustry.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-6">
              {activeIndustry.description}
            </p>

            <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Recommended Enterprise Solutions:
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
              {activeIndustry.solutions.map((sol) => (
                <div
                  key={sol}
                  className="flex items-center gap-2 p-2 rounded bg-[#071A2B] border border-[#176BCE]/15 text-xs text-slate-200"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#21B573] shrink-0" />
                  <span>{sol}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-[#176BCE]/20 flex items-center justify-between">
            <span className="text-xs text-slate-400">
              Custom deployment & system integration available
            </span>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#176BCE] hover:bg-[#29B6D8] text-white text-xs font-semibold transition-colors"
            >
              Discuss Industry Solution <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
