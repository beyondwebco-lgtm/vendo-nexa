"use me";
"use client";

import { motion } from "framer-motion";
import {
  Layers,
  Database,
  Users,
  CreditCard,
  Cloud,
  Lock,
  Activity,
  ArrowRightLeft,
  ShieldCheck,
  CheckCircle2,
  Server,
  Building,
} from "lucide-react";

export default function IntegrationHubVisual() {
  const integrationNodes = [
    { name: "ERP Systems", detail: "SAP, Oracle, Dynamics", icon: Database, color: "text-blue-400" },
    { name: "CRM Platforms", detail: "Salesforce, Hubspot", icon: Users, color: "text-cyan-400" },
    { name: "HRMS & Payroll", detail: "Workday, SuccessFactors", icon: Building, color: "text-emerald-400" },
    { name: "Payment Gateways", detail: "Stripe, Razorpay, Banks", icon: CreditCard, color: "text-[#29B6D8]" },
    { name: "Identity & SSO", detail: "Okta, Azure AD, OAuth2", icon: Lock, color: "text-[#21B573]" },
    { name: "Healthcare HL7/FHIR", detail: "EMR, LIS, RIS Standards", icon: Activity, color: "text-[#29B6D8]" },
    { name: "Cloud Infrastructure", detail: "AWS, Azure, GCP", icon: Cloud, color: "text-indigo-400" },
    { name: "BI & Analytics", detail: "PowerBI, Tableau, Snowflake", icon: Server, color: "text-sky-400" },
  ];

  return (
    <div className="w-full bg-[#071A2B] rounded-2xl border border-[#176BCE]/30 p-6 sm:p-8 relative overflow-hidden shadow-2xl">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-10 pointer-events-none" />

      {/* Central Vendonexa Hub */}
      <div className="relative z-10 text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-[#0B2942] border border-[#176BCE]/40 px-4 py-1.5 rounded-full text-xs text-[#29B6D8] font-mono mb-3">
          <ArrowRightLeft className="w-3.5 h-3.5" />
          Enterprise Middleware & REST/gRPC API Hub
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
          Seamless Connection Across Your Enterprise Ecosystem
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto mt-2">
          Eliminate data silos. Vendonexa platforms integrate bi-directionally with legacy systems, modern cloud tools, and third-party enterprise services.
        </p>
      </div>

      {/* Grid of Nodes surrounding Central Badge */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {integrationNodes.map((node, index) => {
          const Icon = node.icon;
          return (
            <motion.div
              key={node.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-[#0B2942]/60 rounded-xl p-4 border border-[#176BCE]/20 hover:border-[#29B6D8] transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#071A2B] border border-[#176BCE]/30 group-hover:scale-110 transition-transform">
                  <Icon className={`w-5 h-5 ${node.color}`} />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-xs font-heading">
                    {node.name}
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">{node.detail}</p>
                </div>
              </div>
              <div className="mt-3 pt-2 border-t border-[#176BCE]/15 flex items-center justify-between text-[10px] font-mono text-[#21B573]">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Secure Sync
                </span>
                <span className="text-slate-400">TLS 1.3 / OAuth</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
