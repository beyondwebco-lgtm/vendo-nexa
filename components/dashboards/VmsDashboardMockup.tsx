"use me";
"use client";

import {
  Building2,
  CheckCircle2,
  Clock,
  AlertTriangle,
  FileCheck,
  TrendingUp,
  Search,
  Filter,
  ArrowUpRight,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

export default function VmsDashboardMockup() {
  return (
    <div className="w-full bg-[#071A2B] text-slate-100 rounded-2xl border border-[#176BCE]/30 shadow-2xl p-4 sm:p-6 overflow-hidden">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#0B2942]">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-[#176BCE]/20 text-[#29B6D8] border border-[#176BCE]/30">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-white text-base font-heading">
              Vendor Operations Control Center
            </h3>
            <p className="text-xs text-slate-400">
              Live enterprise vendor lifecycle analytics & risk tracking
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
            <input
              type="text"
              readOnly
              value="Search 1,482 master vendors..."
              className="bg-[#0B2942] border border-[#176BCE]/30 text-xs rounded-lg pl-8 pr-3 py-1.5 text-slate-300 w-48 focus:outline-none"
            />
          </div>
          <button className="px-3 py-1.5 bg-[#0B2942] border border-[#176BCE]/30 rounded-lg text-xs font-medium text-slate-300 flex items-center gap-1.5">
            <Filter className="w-3 h-3 text-[#29B6D8]" /> Filter
          </button>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-5">
        <div className="bg-[#0B2942]/60 p-3.5 rounded-xl border border-[#176BCE]/20">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span>Total Registered</span>
            <Building2 className="w-3.5 h-3.5 text-[#29B6D8]" />
          </div>
          <div className="text-xl font-bold font-mono text-white">1,482</div>
          <div className="text-[10px] text-[#21B573] mt-1 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> +12 this month
          </div>
        </div>

        <div className="bg-[#0B2942]/60 p-3.5 rounded-xl border border-[#176BCE]/20">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span>Active Vendors</span>
            <UserCheck className="w-3.5 h-3.5 text-[#21B573]" />
          </div>
          <div className="text-xl font-bold font-mono text-white">1,340</div>
          <div className="text-[10px] text-slate-400 mt-1">90.4% Active Ratio</div>
        </div>

        <div className="bg-[#0B2942]/60 p-3.5 rounded-xl border border-[#176BCE]/20">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span>Pending Approvals</span>
            <Clock className="w-3.5 h-3.5 text-amber-400" />
          </div>
          <div className="text-xl font-bold font-mono text-amber-400">14</div>
          <div className="text-[10px] text-slate-400 mt-1">SLA: &lt; 24h turn</div>
        </div>

        <div className="bg-[#0B2942]/60 p-3.5 rounded-xl border border-[#176BCE]/20">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span>High-Risk Flagged</span>
            <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
          </div>
          <div className="text-xl font-bold font-mono text-rose-400">3</div>
          <div className="text-[10px] text-rose-400 mt-1">Requires audit review</div>
        </div>
      </div>

      {/* Main Content Grid: Table + Risk Status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Table */}
        <div className="lg:col-span-2 bg-[#0B2942]/40 rounded-xl border border-[#176BCE]/20 p-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-xs text-white uppercase tracking-wider">
              Recent Onboarding & Contract Lifecycle
            </h4>
            <span className="text-[11px] text-[#29B6D8] font-mono">Realtime Feed</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[#176BCE]/20 text-slate-400 font-mono text-[11px]">
                  <th className="pb-2">Vendor Name</th>
                  <th className="pb-2">Category</th>
                  <th className="pb-2">Compliance</th>
                  <th className="pb-2">Contract</th>
                  <th className="pb-2 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#176BCE]/10">
                <tr>
                  <td className="py-2.5 font-medium text-white">Apex Logistics Global</td>
                  <td className="py-2.5 text-slate-300">Supply Chain</td>
                  <td className="py-2.5">
                    <span className="text-[#21B573] bg-[#21B573]/10 px-2 py-0.5 rounded text-[10px] font-mono">
                      Verified
                    </span>
                  </td>
                  <td className="py-2.5 text-slate-300">Exp. 11/2027</td>
                  <td className="py-2.5 text-right font-medium text-[#21B573]">Active</td>
                </tr>
                <tr>
                  <td className="py-2.5 font-medium text-white">MedTech Solutions Inc</td>
                  <td className="py-2.5 text-slate-300">Medical Devices</td>
                  <td className="py-2.5">
                    <span className="text-[#21B573] bg-[#21B573]/10 px-2 py-0.5 rounded text-[10px] font-mono">
                      Verified
                    </span>
                  </td>
                  <td className="py-2.5 text-slate-300">Exp. 04/2026</td>
                  <td className="py-2.5 text-right font-medium text-[#21B573]">Active</td>
                </tr>
                <tr>
                  <td className="py-2.5 font-medium text-white">CyberShield Systems</td>
                  <td className="py-2.5 text-slate-300">Security Hardware</td>
                  <td className="py-2.5">
                    <span className="text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded text-[10px] font-mono">
                      Doc Pending
                    </span>
                  </td>
                  <td className="py-2.5 text-slate-300">Exp. 09/2026</td>
                  <td className="py-2.5 text-right font-medium text-amber-400">Review</td>
                </tr>
                <tr>
                  <td className="py-2.5 font-medium text-white">Quantum Cloud Networks</td>
                  <td className="py-2.5 text-slate-300">Cloud Services</td>
                  <td className="py-2.5">
                    <span className="text-[#21B573] bg-[#21B573]/10 px-2 py-0.5 rounded text-[10px] font-mono">
                      Verified
                    </span>
                  </td>
                  <td className="py-2.5 text-slate-300">Exp. 02/2028</td>
                  <td className="py-2.5 text-right font-medium text-[#21B573]">Active</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Risk & KPI Breakdown Panel */}
        <div className="bg-[#0B2942]/40 rounded-xl border border-[#176BCE]/20 p-4 space-y-4">
          <h4 className="font-semibold text-xs text-white uppercase tracking-wider flex items-center justify-between">
            <span>Vendor Performance KPIs</span>
            <ShieldCheck className="w-4 h-4 text-[#21B573]" />
          </h4>

          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-300">On-Time Delivery SLA</span>
              <span className="font-mono text-[#21B573] font-bold">96.4%</span>
            </div>
            <div className="w-full bg-[#071A2B] h-2 rounded-full overflow-hidden">
              <div className="bg-[#21B573] h-full w-[96.4%]" />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-300">Contract Compliance Index</span>
              <span className="font-mono text-[#29B6D8] font-bold">98.2%</span>
            </div>
            <div className="w-full bg-[#071A2B] h-2 rounded-full overflow-hidden">
              <div className="bg-[#29B6D8] h-full w-[98.2%]" />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-300">Invoice Reconciliation Rate</span>
              <span className="font-mono text-white font-bold">99.1%</span>
            </div>
            <div className="w-full bg-[#071A2B] h-2 rounded-full overflow-hidden">
              <div className="bg-[#176BCE] h-full w-[99.1%]" />
            </div>
          </div>

          <div className="pt-2 border-t border-[#176BCE]/20 flex items-center justify-between text-[11px]">
            <span className="text-slate-400">Automated Payment Gateway</span>
            <span className="text-[#21B573] font-mono">Sync Active</span>
          </div>
        </div>
      </div>
    </div>
  );
}
