"use me";
"use client";

import {
  Stethoscope,
  Users,
  Activity,
  Bed,
  FileText,
  Pill,
  DollarSign,
  AlertCircle,
  Clock,
  Heart,
  TrendingUp,
  ShieldAlert,
} from "lucide-react";

export default function HmsDashboardMockup() {
  return (
    <div className="w-full bg-[#071A2B] text-slate-100 rounded-2xl border border-[#29B6D8]/30 shadow-2xl p-4 sm:p-6 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#0B2942]">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-[#29B6D8]/20 text-[#29B6D8] border border-[#29B6D8]/30">
            <Stethoscope className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-white text-base font-heading">
              Hospital Operations Command Center
            </h3>
            <p className="text-xs text-slate-400">
              Real-time clinical workflows, bed management & patient throughput
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 text-xs text-[#21B573] bg-[#21B573]/10 px-3 py-1 rounded-full border border-[#21B573]/30 font-mono">
            <span className="w-2 h-2 rounded-full bg-[#21B573] animate-pulse" />
            HIPAA/EMR Encrypted
          </span>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-5">
        <div className="bg-[#0B2942]/60 p-3.5 rounded-xl border border-[#176BCE]/20">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span>Daily OPD Visits</span>
            <Users className="w-3.5 h-3.5 text-[#29B6D8]" />
          </div>
          <div className="text-xl font-bold font-mono text-white">412</div>
          <div className="text-[10px] text-[#21B573] mt-1 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> +8% vs avg
          </div>
        </div>

        <div className="bg-[#0B2942]/60 p-3.5 rounded-xl border border-[#176BCE]/20">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span>Admitted IPD</span>
            <Bed className="w-3.5 h-3.5 text-indigo-400" />
          </div>
          <div className="text-xl font-bold font-mono text-white">184 Patients</div>
          <div className="text-[10px] text-slate-400 mt-1">Bed Occupancy: 84%</div>
        </div>

        <div className="bg-[#0B2942]/60 p-3.5 rounded-xl border border-[#176BCE]/20">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span>ER Emergency Cases</span>
            <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
          </div>
          <div className="text-xl font-bold font-mono text-rose-400">9 Active</div>
          <div className="text-[10px] text-rose-400 mt-1">Triage Priority 1</div>
        </div>

        <div className="bg-[#0B2942]/60 p-3.5 rounded-xl border border-[#176BCE]/20">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span>Pending Lab Tests</span>
            <FileText className="w-3.5 h-3.5 text-amber-400" />
          </div>
          <div className="text-xl font-bold font-mono text-amber-400">27 Urgent</div>
          <div className="text-[10px] text-slate-400 mt-1">LIS & RIS Syncing</div>
        </div>
      </div>

      {/* Main Grid Layout: Live Wards + Pharmacy & Revenue */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Wards & Beds Stream */}
        <div className="lg:col-span-2 bg-[#0B2942]/40 rounded-xl border border-[#176BCE]/20 p-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-xs text-white uppercase tracking-wider">
              Department & Ward Status Matrix
            </h4>
            <span className="text-[11px] text-[#29B6D8] font-mono">Live Monitoring</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="bg-[#071A2B] p-3 rounded-lg border border-[#176BCE]/20">
              <div className="text-[11px] text-slate-400 mb-1">ICU Ward</div>
              <div className="flex items-baseline justify-between">
                <span className="text-lg font-bold font-mono text-white">18 / 20</span>
                <span className="text-[10px] text-rose-400 font-medium">90% Full</span>
              </div>
              <div className="w-full bg-[#0B2942] h-1.5 rounded-full mt-2">
                <div className="bg-rose-500 h-full w-[90%]" />
              </div>
            </div>

            <div className="bg-[#071A2B] p-3 rounded-lg border border-[#176BCE]/20">
              <div className="text-[11px] text-slate-400 mb-1">Cardiology IPD</div>
              <div className="flex items-baseline justify-between">
                <span className="text-lg font-bold font-mono text-white">32 / 40</span>
                <span className="text-[10px] text-[#29B6D8] font-medium">80% Full</span>
              </div>
              <div className="w-full bg-[#0B2942] h-1.5 rounded-full mt-2">
                <div className="bg-[#29B6D8] h-full w-[80%]" />
              </div>
            </div>

            <div className="bg-[#071A2B] p-3 rounded-lg border border-[#176BCE]/20">
              <div className="text-[11px] text-slate-400 mb-1">Surgical OT</div>
              <div className="flex items-baseline justify-between">
                <span className="text-lg font-bold font-mono text-white">4 Active</span>
                <span className="text-[10px] text-[#21B573] font-medium">2 Scheduled</span>
              </div>
              <div className="w-full bg-[#0B2942] h-1.5 rounded-full mt-2">
                <div className="bg-[#21B573] h-full w-[100%]" />
              </div>
            </div>

            <div className="bg-[#071A2B] p-3 rounded-lg border border-[#176BCE]/20">
              <div className="text-[11px] text-slate-400 mb-1">Pediatric Ward</div>
              <div className="flex items-baseline justify-between">
                <span className="text-lg font-bold font-mono text-white">14 / 25</span>
                <span className="text-[10px] text-[#21B573] font-medium">56% Full</span>
              </div>
              <div className="w-full bg-[#0B2942] h-1.5 rounded-full mt-2">
                <div className="bg-[#21B573] h-full w-[56%]" />
              </div>
            </div>

            <div className="bg-[#071A2B] p-3 rounded-lg border border-[#176BCE]/20">
              <div className="text-[11px] text-slate-400 mb-1">Emergency ER</div>
              <div className="flex items-baseline justify-between">
                <span className="text-lg font-bold font-mono text-white">9 / 12</span>
                <span className="text-[10px] text-amber-400 font-medium">75% Full</span>
              </div>
              <div className="w-full bg-[#0B2942] h-1.5 rounded-full mt-2">
                <div className="bg-amber-400 h-full w-[75%]" />
              </div>
            </div>

            <div className="bg-[#071A2B] p-3 rounded-lg border border-[#176BCE]/20">
              <div className="text-[11px] text-slate-400 mb-1">General Ward</div>
              <div className="flex items-baseline justify-between">
                <span className="text-lg font-bold font-mono text-white">107 / 120</span>
                <span className="text-[10px] text-[#29B6D8] font-medium">89% Full</span>
              </div>
              <div className="w-full bg-[#0B2942] h-1.5 rounded-full mt-2">
                <div className="bg-[#29B6D8] h-full w-[89%]" />
              </div>
            </div>
          </div>
        </div>

        {/* Pharmacy Alerts & EMR Compliance */}
        <div className="bg-[#0B2942]/40 rounded-xl border border-[#176BCE]/20 p-4 space-y-4">
          <h4 className="font-semibold text-xs text-white uppercase tracking-wider flex items-center justify-between">
            <span>Pharmacy & Inventory Stream</span>
            <Pill className="w-4 h-4 text-[#29B6D8]" />
          </h4>

          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between p-2 rounded bg-[#071A2B] border border-amber-500/30">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <div className="font-semibold text-white">Insulin Glargine</div>
                  <div className="text-[10px] text-slate-400">Stock &lt; 15 Vials (Reorder)</div>
                </div>
              </div>
              <span className="text-[10px] text-amber-400 font-mono">Alert Sent</span>
            </div>

            <div className="flex items-center justify-between p-2 rounded bg-[#071A2B] border border-[#176BCE]/20">
              <div className="flex items-center gap-2">
                <Pill className="w-4 h-4 text-[#29B6D8] shrink-0" />
                <div>
                  <div className="font-semibold text-white">Amoxicillin 500mg</div>
                  <div className="text-[10px] text-slate-400">Normal Stock (480 Units)</div>
                </div>
              </div>
              <span className="text-[10px] text-[#21B573] font-mono">OK</span>
            </div>

            <div className="flex items-center justify-between p-2 rounded bg-[#071A2B] border border-[#176BCE]/20">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#21B573] shrink-0" />
                <div>
                  <div className="font-semibold text-white">TPA Insurance Claims</div>
                  <div className="text-[10px] text-slate-400">42 Claims Processed Today</div>
                </div>
              </div>
              <span className="text-[10px] text-[#21B573] font-mono">Auto-Clear</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
