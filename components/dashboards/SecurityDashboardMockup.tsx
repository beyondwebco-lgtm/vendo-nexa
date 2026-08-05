"use me";
"use client";

import {
  ShieldCheck,
  Lock,
  Terminal,
  Activity,
  AlertOctagon,
  Eye,
  CheckCircle2,
  Zap,
  Server,
  Cloud,
  Code2,
} from "lucide-react";

export default function SecurityDashboardMockup() {
  return (
    <div className="w-full bg-[#051320] text-slate-100 rounded-2xl border border-[#21B573]/40 shadow-2xl p-4 sm:p-6 overflow-hidden security-glow">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#0B2942]">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-[#21B573]/20 text-[#21B573] border border-[#21B573]/40">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-white text-base font-heading">
              SOC Security Operations & VAPT Suite
            </h3>
            <p className="text-xs text-slate-400">
              Live threat telemetry, SIEM event correlation & security monitoring
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs text-[#21B573] bg-[#21B573]/15 px-3 py-1 rounded-full border border-[#21B573]/40 font-mono">
            <span className="w-2 h-2 rounded-full bg-[#21B573] animate-ping" />
            SOC STATUS: SECURE
          </div>
        </div>
      </div>

      {/* Security KPI Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-5">
        <div className="bg-[#071A2B] p-3.5 rounded-xl border border-[#21B573]/20">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span>Threat Level</span>
            <Lock className="w-3.5 h-3.5 text-[#21B573]" />
          </div>
          <div className="text-xl font-bold font-mono text-[#21B573]">LOW (DEFCON 5)</div>
          <div className="text-[10px] text-slate-400 mt-1">0 Active Incidents</div>
        </div>

        <div className="bg-[#071A2B] p-3.5 rounded-xl border border-[#21B573]/20">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span>VAPT Scan Cycle</span>
            <CheckCircle2 className="w-3.5 h-3.5 text-[#29B6D8]" />
          </div>
          <div className="text-xl font-bold font-mono text-white">Pass (100%)</div>
          <div className="text-[10px] text-[#29B6D8] mt-1">Web, API & Cloud Retested</div>
        </div>

        <div className="bg-[#071A2B] p-3.5 rounded-xl border border-[#21B573]/20">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span>SIEM Events / Sec</span>
            <Activity className="w-3.5 h-3.5 text-indigo-400" />
          </div>
          <div className="text-xl font-bold font-mono text-white">4,820 EPS</div>
          <div className="text-[10px] text-slate-400 mt-1">Correlated in Realtime</div>
        </div>

        <div className="bg-[#071A2B] p-3.5 rounded-xl border border-[#21B573]/20">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span>Compliance Readiness</span>
            <ShieldCheck className="w-3.5 h-3.5 text-[#21B573]" />
          </div>
          <div className="text-xl font-bold font-mono text-[#21B573]">99.4% Aligned</div>
          <div className="text-[10px] text-slate-400 mt-1">Audit Trail Logging</div>
        </div>
      </div>

      {/* Main Grid: Terminal Console + Vulnerability Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Terminal SIEM Console */}
        <div className="lg:col-span-2 bg-[#030B12] rounded-xl border border-[#21B573]/30 p-4 font-mono text-xs">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#0B2942] text-slate-400 text-[11px]">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#21B573]" />
              <span>SIEM_LIVE_LOG_STREAM // SOC NODE #04</span>
            </div>
            <span className="text-[#21B573] text-[10px]">MONITORING</span>
          </div>

          <div className="space-y-1.5 text-[11px] leading-relaxed">
            <div className="text-slate-400">
              <span className="text-slate-500">[2026-08-05 20:41:02]</span>{" "}
              <span className="text-[#29B6D8]">[API-GATEWAY]</span> JWT Signature validation passed for endpoint /v1/vendors/auth.
            </div>
            <div className="text-slate-400">
              <span className="text-slate-500">[2026-08-05 20:41:04]</span>{" "}
              <span className="text-[#21B573]">[FIREWALL]</span> Blocked port scan attempt from 198.51.100.42 (Automated Mitigation).
            </div>
            <div className="text-slate-400">
              <span className="text-slate-500">[2026-08-05 20:41:06]</span>{" "}
              <span className="text-indigo-400">[EMR-VAULT]</span> AES-256 GCM payload decryption verified. Zero policy breach.
            </div>
            <div className="text-slate-400">
              <span className="text-slate-500">[2026-08-05 20:41:08]</span>{" "}
              <span className="text-[#21B573]">[VAPT-SUITE]</span> Dynamic Application Scan (DAST) completed: 0 Critical / 0 High.
            </div>
          </div>
        </div>

        {/* Vulnerability Severity Matrix */}
        <div className="bg-[#071A2B] rounded-xl border border-[#21B573]/20 p-4 space-y-4">
          <h4 className="font-semibold text-xs text-white uppercase tracking-wider flex items-center justify-between">
            <span>Vulnerability Remediation</span>
            <Eye className="w-4 h-4 text-[#29B6D8]" />
          </h4>

          <div className="space-y-3 text-xs">
            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>Critical Severity</span>
                <span className="font-mono text-[#21B573] font-bold">0 Remainder</span>
              </div>
              <div className="w-full bg-[#030B12] h-2 rounded-full overflow-hidden">
                <div className="bg-[#21B573] h-full w-full" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>High Severity</span>
                <span className="font-mono text-[#21B573] font-bold">0 Remainder</span>
              </div>
              <div className="w-full bg-[#030B12] h-2 rounded-full overflow-hidden">
                <div className="bg-[#21B573] h-full w-full" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>Medium / Low Severity</span>
                <span className="font-mono text-[#29B6D8] font-bold">2 Remediated</span>
              </div>
              <div className="w-full bg-[#030B12] h-2 rounded-full overflow-hidden">
                <div className="bg-[#29B6D8] h-full w-[95%]" />
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-[#0B2942] flex items-center justify-between text-[11px]">
            <span className="text-slate-400">Security Architecture Review</span>
            <span className="text-[#21B573] font-mono">Approved</span>
          </div>
        </div>
      </div>
    </div>
  );
}
