"use me";
"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Stethoscope,
  ShieldCheck,
  Activity,
  CheckCircle2,
  Lock,
  ArrowUpRight,
  TrendingUp,
  Server,
  Zap,
} from "lucide-react";

export default function EcosystemVisual() {
  return (
    <div className="relative w-full max-w-5xl mx-auto p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-[#0B2942]/90 to-[#071A2B]/95 border border-[#176BCE]/30 shadow-2xl overflow-hidden backdrop-blur-xl">
      {/* Background Glows & Grid */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-60 h-60 bg-[#176BCE]/25 rounded-full filter blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-[#29B6D8]/20 rounded-full filter blur-3xl" />

      {/* Top Header Bar of Mockup */}
      <div className="relative z-10 flex items-center justify-between pb-4 mb-6 border-b border-[#176BCE]/20 text-xs">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-slate-400 font-mono text-[11px] ml-2">
            vendonexa://enterprise-ecosystem.core
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-[#21B573] font-medium bg-[#21B573]/10 px-2.5 py-0.5 rounded-full border border-[#21B573]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#21B573] animate-ping" />
            Security Active: Zero Trust
          </span>
          <span className="text-slate-400 font-mono text-[11px] hidden sm:inline">
            Status: 99.99% Uptime
          </span>
        </div>
      </div>

      {/* 3 Core Platform Nodes Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Node 1: Vendor Management */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-[#071A2B]/80 rounded-xl p-4 border border-[#176BCE]/30 hover:border-[#176BCE] transition-all group"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-[#176BCE]/20 text-[#29B6D8] border border-[#176BCE]/40">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm font-heading">
                  Vendor Management
                </h4>
                <p className="text-[10px] text-slate-400">Enterprise Procurement</p>
              </div>
            </div>
            <span className="text-[10px] bg-[#176BCE]/20 text-[#29B6D8] px-2 py-0.5 rounded font-mono">
              VMS v4.2
            </span>
          </div>

          <div className="space-y-2 mt-3 text-xs">
            <div className="flex justify-between items-center bg-[#0B2942]/60 p-2 rounded border border-[#176BCE]/10">
              <span className="text-slate-300 text-[11px]">Active Vendors</span>
              <span className="font-mono font-bold text-white">1,482</span>
            </div>
            <div className="flex justify-between items-center bg-[#0B2942]/60 p-2 rounded border border-[#176BCE]/10">
              <span className="text-slate-300 text-[11px]">Pending RFQs</span>
              <span className="font-mono font-bold text-[#29B6D8]">18 Live</span>
            </div>
            <div className="flex justify-between items-center bg-[#0B2942]/60 p-2 rounded border border-[#176BCE]/10">
              <span className="text-slate-300 text-[11px]">Contract Compliance</span>
              <span className="font-mono font-bold text-[#21B573]">98.6%</span>
            </div>
          </div>
        </motion.div>

        {/* Node 2: Hospital Management */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#071A2B]/80 rounded-xl p-4 border border-[#176BCE]/30 hover:border-[#29B6D8] transition-all group"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-[#29B6D8]/20 text-[#29B6D8] border border-[#29B6D8]/40">
                <Stethoscope className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm font-heading">
                  Hospital Management
                </h4>
                <p className="text-[10px] text-slate-400">Clinical & Operations</p>
              </div>
            </div>
            <span className="text-[10px] bg-[#29B6D8]/20 text-[#29B6D8] px-2 py-0.5 rounded font-mono">
              HMS Core
            </span>
          </div>

          <div className="space-y-2 mt-3 text-xs">
            <div className="flex justify-between items-center bg-[#0B2942]/60 p-2 rounded border border-[#176BCE]/10">
              <span className="text-slate-300 text-[11px]">Today's OPD Count</span>
              <span className="font-mono font-bold text-white">412 Patients</span>
            </div>
            <div className="flex justify-between items-center bg-[#0B2942]/60 p-2 rounded border border-[#176BCE]/10">
              <span className="text-slate-300 text-[11px]">Bed Occupancy</span>
              <span className="font-mono font-bold text-[#29B6D8]">84% (IPD)</span>
            </div>
            <div className="flex justify-between items-center bg-[#0B2942]/60 p-2 rounded border border-[#176BCE]/10">
              <span className="text-slate-300 text-[11px]">EMR Sync & Security</span>
              <span className="font-mono font-bold text-[#21B573]">Encrypted</span>
            </div>
          </div>
        </motion.div>

        {/* Node 3: Cybersecurity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-[#071A2B]/80 rounded-xl p-4 border border-[#21B573]/40 hover:border-[#21B573] transition-all group"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-[#21B573]/20 text-[#21B573] border border-[#21B573]/40">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm font-heading">
                  Cybersecurity Services
                </h4>
                <p className="text-[10px] text-slate-400">SOC & Threat Defense</p>
              </div>
            </div>
            <span className="text-[10px] bg-[#21B573]/20 text-[#21B573] px-2 py-0.5 rounded font-mono">
              SIEM Monitored
            </span>
          </div>

          <div className="space-y-2 mt-3 text-xs">
            <div className="flex justify-between items-center bg-[#0B2942]/60 p-2 rounded border border-[#21B573]/10">
              <span className="text-slate-300 text-[11px]">Threat Posture</span>
              <span className="font-mono font-bold text-[#21B573]">Secure (0 Critical)</span>
            </div>
            <div className="flex justify-between items-center bg-[#0B2942]/60 p-2 rounded border border-[#21B573]/10">
              <span className="text-slate-300 text-[11px]">VAPT Status</span>
              <span className="font-mono font-bold text-[#29B6D8]">Passed & Verified</span>
            </div>
            <div className="flex justify-between items-center bg-[#0B2942]/60 p-2 rounded border border-[#21B573]/10">
              <span className="text-slate-300 text-[11px]">Endpoint Protection</span>
              <span className="font-mono font-bold text-[#21B573]">100% Covered</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Central Connectivity Bar */}
      <div className="relative z-10 mt-6 pt-4 border-t border-[#176BCE]/20 flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#0B2942]/40 p-3 rounded-xl border border-[#176BCE]/15">
        <div className="flex items-center gap-3">
          <div className="p-1.5 rounded-md bg-[#176BCE]/20 text-[#29B6D8]">
            <Zap className="w-4 h-4" />
          </div>
          <span className="text-xs text-slate-200 font-medium">
            Central Integration Bus: ERP, CRM, Cloud Infrastructure & Data Pipelines
          </span>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-[#29B6D8] font-mono">
          <span className="w-2 h-2 rounded-full bg-[#29B6D8] animate-pulse" />
          Connected & Synchronized
        </div>
      </div>
    </div>
  );
}
