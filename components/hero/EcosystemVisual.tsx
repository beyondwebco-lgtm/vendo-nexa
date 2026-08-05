"use me";
"use client";

import {
  Building2,
  Stethoscope,
  ShieldCheck,
  Lock,
} from "lucide-react";

export default function EcosystemVisual() {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-[#10B981]/20 rounded-2xl filter blur-2xl" />

      {/* Main Glass Container */}
      <div className="relative bg-[#1A1A18]/90 backdrop-blur-xl border border-[#2E2E2B] rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
        {/* Top Header Strip */}
        <div className="flex items-center justify-between border-b border-[#2E2E2B] pb-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-white" />
            <div className="w-3 h-3 rounded-full bg-[#A3A3A0]" />
            <div className="w-3 h-3 rounded-full bg-[#10B981]" />
          </div>
          <span className="text-[11px] font-mono text-[#A3A3A0] uppercase tracking-widest">
            VENDONEXA CORE OS v4.2
          </span>
        </div>

        {/* 3 Interconnected Pillars */}
        <div className="space-y-3">
          {/* Pillar 1: VMS */}
          <div className="bg-[#0A0A09] p-4 rounded-xl border border-[#2E2E2B] flex items-center justify-between hover:border-white transition-colors group">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-white/10 text-white border border-white/20">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white font-heading group-hover:text-white transition-colors">
                  Vendor Management System
                </h4>
                <p className="text-[11px] text-[#A3A3A0]">
                  Onboarding • Procurement • Contracts • 3-Way Matching
                </p>
              </div>
            </div>
            <span className="text-[10px] font-mono px-2 py-1 rounded bg-white/10 text-white border border-white/20">
              ACTIVE
            </span>
          </div>

          {/* Connection Line */}
          <div className="flex items-center justify-center -my-1">
            <div className="w-0.5 h-3 bg-gradient-to-b from-white to-[#10B981]" />
          </div>

          {/* Pillar 2: HMS */}
          <div className="bg-[#0A0A09] p-4 rounded-xl border border-[#2E2E2B] flex items-center justify-between hover:border-white transition-colors group">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-white/10 text-white border border-white/20">
                <Stethoscope className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white font-heading group-hover:text-white transition-colors">
                  Hospital Management System
                </h4>
                <p className="text-[11px] text-[#A3A3A0]">
                  Patient EMR • OPD/IPD • Diagnostics • Billing Sync
                </p>
              </div>
            </div>
            <span className="text-[10px] font-mono px-2 py-1 rounded bg-white/10 text-white border border-white/20">
              CONNECTED
            </span>
          </div>

          {/* Connection Line */}
          <div className="flex items-center justify-center -my-1">
            <div className="w-0.5 h-3 bg-gradient-to-b from-white to-[#10B981]" />
          </div>

          {/* Pillar 3: Cybersecurity */}
          <div className="bg-[#0A0A09] p-4 rounded-xl border border-[#10B981]/40 flex items-center justify-between hover:border-[#10B981] transition-colors group emerald-glow">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/40">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white font-heading group-hover:text-[#10B981] transition-colors">
                  Cybersecurity Operations
                </h4>
                <p className="text-[11px] text-[#A3A3A0]">
                  VAPT Testing • SOC SIEM • Zero-Trust • AES-256
                </p>
              </div>
            </div>
            <span className="text-[10px] font-mono px-2 py-1 rounded bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30 flex items-center gap-1">
              <Lock className="w-3 h-3" /> SECURED
            </span>
          </div>
        </div>

        {/* Footer Metrics Strip */}
        <div className="pt-2 border-t border-[#2E2E2B] grid grid-cols-3 gap-2 text-center">
          <div className="bg-[#0A0A09]/60 p-2 rounded-lg border border-[#2E2E2B]">
            <span className="text-[10px] text-[#A3A3A0] block font-mono">UPTIME</span>
            <span className="text-xs font-bold text-[#10B981] font-mono">99.99%</span>
          </div>
          <div className="bg-[#0A0A09]/60 p-2 rounded-lg border border-[#2E2E2B]">
            <span className="text-[10px] text-[#A3A3A0] block font-mono">VAPT STATUS</span>
            <span className="text-xs font-bold text-[#10B981] font-mono">PASSED</span>
          </div>
          <div className="bg-[#0A0A09]/60 p-2 rounded-lg border border-[#2E2E2B]">
            <span className="text-[10px] text-[#A3A3A0] block font-mono">ENCRYPTION</span>
            <span className="text-xs font-bold text-white font-mono">AES-256</span>
          </div>
        </div>
      </div>
    </div>
  );
}
