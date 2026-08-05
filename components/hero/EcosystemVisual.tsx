"use me";
"use client";

import {
  Building2,
  Stethoscope,
  ShieldCheck,
  CheckCircle2,
  Lock,
} from "lucide-react";

export default function EcosystemVisual() {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#C2704A]/20 via-transparent to-[#5C6B5D]/20 rounded-2xl filter blur-2xl" />

      {/* Main Glass Container */}
      <div className="relative bg-[#26211D]/90 backdrop-blur-xl border border-[#C2704A]/30 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
        {/* Top Header Strip */}
        <div className="flex items-center justify-between border-b border-[#C2704A]/20 pb-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#C2704A]" />
            <div className="w-3 h-3 rounded-full bg-[#8B5E3C]" />
            <div className="w-3 h-3 rounded-full bg-[#5C6B5D]" />
          </div>
          <span className="text-[11px] font-mono text-[#F0E6D8]/60 uppercase tracking-widest">
            VENDONEXA CORE OS v4.2
          </span>
        </div>

        {/* 3 Interconnected Pillars */}
        <div className="space-y-3">
          {/* Pillar 1: VMS */}
          <div className="bg-[#1C1815] p-4 rounded-xl border border-[#C2704A]/30 flex items-center justify-between hover:border-[#C2704A] transition-colors group">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#C2704A]/20 text-[#C2704A] border border-[#C2704A]/40">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#FAF6F0] font-heading group-hover:text-[#C2704A] transition-colors">
                  Vendor Management System
                </h4>
                <p className="text-[11px] text-[#F0E6D8]/70">
                  Onboarding • Procurement • Contracts • 3-Way Matching
                </p>
              </div>
            </div>
            <span className="text-[10px] font-mono px-2 py-1 rounded bg-[#C2704A]/20 text-[#C2704A] border border-[#C2704A]/30">
              ACTIVE
            </span>
          </div>

          {/* Connection Line */}
          <div className="flex items-center justify-center -my-1">
            <div className="w-0.5 h-3 bg-gradient-to-b from-[#C2704A] to-[#5C6B5D]" />
          </div>

          {/* Pillar 2: HMS */}
          <div className="bg-[#1C1815] p-4 rounded-xl border border-[#C2704A]/30 flex items-center justify-between hover:border-[#C2704A] transition-colors group">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#C2704A]/20 text-[#C2704A] border border-[#C2704A]/40">
                <Stethoscope className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#FAF6F0] font-heading group-hover:text-[#C2704A] transition-colors">
                  Hospital Management System
                </h4>
                <p className="text-[11px] text-[#F0E6D8]/70">
                  Patient EMR • OPD/IPD • Diagnostics • Billing Sync
                </p>
              </div>
            </div>
            <span className="text-[10px] font-mono px-2 py-1 rounded bg-[#C2704A]/20 text-[#C2704A] border border-[#C2704A]/30">
              CONNECTED
            </span>
          </div>

          {/* Connection Line */}
          <div className="flex items-center justify-center -my-1">
            <div className="w-0.5 h-3 bg-gradient-to-b from-[#C2704A] to-[#5C6B5D]" />
          </div>

          {/* Pillar 3: Cybersecurity */}
          <div className="bg-[#1C1815] p-4 rounded-xl border border-[#5C6B5D]/40 flex items-center justify-between hover:border-[#5C6B5D] transition-colors group security-glow">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#5C6B5D]/20 text-[#5C6B5D] border border-[#5C6B5D]/40">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#FAF6F0] font-heading group-hover:text-[#5C6B5D] transition-colors">
                  Cybersecurity Operations
                </h4>
                <p className="text-[11px] text-[#F0E6D8]/70">
                  VAPT Testing • SOC SIEM • Zero-Trust • AES-256
                </p>
              </div>
            </div>
            <span className="text-[10px] font-mono px-2 py-1 rounded bg-[#5C6B5D]/20 text-[#5C6B5D] border border-[#5C6B5D]/30 flex items-center gap-1">
              <Lock className="w-3 h-3" /> SECURED
            </span>
          </div>
        </div>

        {/* Footer Metrics Strip */}
        <div className="pt-2 border-t border-[#C2704A]/20 grid grid-cols-3 gap-2 text-center">
          <div className="bg-[#1C1815]/60 p-2 rounded-lg border border-[#C2704A]/20">
            <span className="text-[10px] text-[#F0E6D8]/60 block font-mono">UPTIME</span>
            <span className="text-xs font-bold text-[#5C6B5D] font-mono">99.99%</span>
          </div>
          <div className="bg-[#1C1815]/60 p-2 rounded-lg border border-[#C2704A]/20">
            <span className="text-[10px] text-[#F0E6D8]/60 block font-mono">VAPT STATUS</span>
            <span className="text-xs font-bold text-[#5C6B5D] font-mono">PASSED</span>
          </div>
          <div className="bg-[#1C1815]/60 p-2 rounded-lg border border-[#C2704A]/20">
            <span className="text-[10px] text-[#F0E6D8]/60 block font-mono">ENCRYPTION</span>
            <span className="text-xs font-bold text-[#C2704A] font-mono">AES-256</span>
          </div>
        </div>
      </div>
    </div>
  );
}
