import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SecurityDashboardMockup from "@/components/dashboards/SecurityDashboardMockup";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Terminal,
  Eye,
  CheckCircle2,
  AlertTriangle,
  Server,
  Cloud,
  FileText,
  Zap,
} from "lucide-react";

export const metadata = {
  title: "Cybersecurity Services | VAPT, SOC, Cloud Security & SIEM | Vendonexa",
  description:
    "Vendonexa Cybersecurity Services provide comprehensive Vulnerability Assessment & Penetration Testing (VAPT), Web/API security, SOC monitoring, SIEM integration, Cloud Security, and Incident Response.",
};

const cybersecurityCategories = [
  {
    title: "Vulnerability Assessment & Penetration Testing (VAPT)",
    services: [
      { name: "Web Application VAPT", desc: "Identify OWASP Top 10 vulnerabilities, business logic flaws, and authentication bypasses." },
      { name: "API Security Assessment", desc: "Test REST, GraphQL, and gRPC endpoints for broken authorization and data leakage." },
      { name: "Mobile App Security", desc: "Static (SAST) and dynamic (DAST) analysis of Android & iOS binaries." },
      { name: "Network Security Assessment", desc: "Internal and external network penetration testing, port audits, and firewall reviews." },
    ],
  },
  {
    title: "Cloud & Architecture Security",
    services: [
      { name: "Cloud Security Assessment", desc: "Misconfiguration audits across AWS, Azure, GCP, IAM policies, and S3 bucket security." },
      { name: "Security Architecture Review", desc: "Evaluate threat boundaries, zero-trust network models, and data flow hygiene." },
      { name: "Container & Kubernetes Security", desc: "Scan Docker images, K8s cluster configurations, and CI/CD pipeline vulnerabilities." },
    ],
  },
  {
    title: "Security Operations & Monitoring (SOC / SIEM)",
    services: [
      { name: "SOC Services", desc: "Continuous security monitoring, threat detection, and telemetry correlation." },
      { name: "SIEM Implementation", desc: "Custom deployment, log collection parser rules, and alert correlation engines." },
      { name: "Managed Threat Hunting", desc: "Proactive investigation into undetected adversary techniques and anomalies." },
    ],
  },
  {
    title: "Application Security & DevSecOps",
    services: [
      { name: "Secure Code Review", desc: "Source code auditing to detect SQL injection, memory safety issues, and insecure crypto." },
      { name: "DevSecOps Integration", desc: "Automated vulnerability scanning embedded into GitHub Actions, GitLab, and CI pipelines." },
      { name: "Endpoint Hardening", desc: "EDR implementation, OS hardening policies, and device compliance monitoring." },
    ],
  },
  {
    title: "Incident Response & Governance",
    services: [
      { name: "Incident Response & Containment", desc: "Rapid isolation of compromised assets, breach remediation, and forensic analysis." },
      { name: "Compliance Readiness", desc: "Security posture alignment for SOC 2, ISO 27001, HIPAA, and PCI-DSS readiness." },
      { name: "Phishing Simulation & Awareness", desc: "Simulated spear-phishing campaigns and employee security training modules." },
    ],
  },
];

export default function CybersecurityPage() {
  return (
    <div className="min-h-screen bg-[#051320] text-slate-100 flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-20">
        {/* Dark Hero */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-[#071A2B] to-[#051320]">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#21B573]/20 border border-[#21B573]/40 text-[#21B573] text-xs font-semibold mb-4">
                <ShieldCheck className="w-4 h-4" /> Cybersecurity Division
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading leading-tight text-white">
                Enterprise Cybersecurity & VAPT Services
              </h1>
              <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
                Identify vulnerabilities, reduce cyber risk, strengthen controls, monitor threats, and build a resilient zero-trust digital infrastructure.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="#contact"
                  className="px-6 py-3 rounded-lg bg-[#21B573] text-slate-950 font-bold text-xs hover:bg-[#21B573]/80 transition-colors shadow-lg shadow-[#21B573]/20"
                >
                  Request Security Audit
                </Link>
                <Link
                  href="#workflow"
                  className="px-6 py-3 rounded-lg bg-[#071A2B] text-slate-200 text-xs font-semibold border border-[#21B573]/30"
                >
                  View Assessment Workflow
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Assessment Workflow */}
        <section id="workflow" className="py-16 bg-[#071A2B] px-4 sm:px-6 lg:px-8 border-y border-[#0B2942]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-white font-heading mb-6">
              Sample VAPT Assessment Methodology
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 text-center text-xs font-mono">
              {[
                "1. Scope",
                "2. Discovery",
                "3. Testing",
                "4. Validation",
                "5. Risk Analysis",
                "6. Reporting",
                "7. Remediation",
                "8. Retesting",
              ].map((step) => (
                <div
                  key={step}
                  className="p-3 bg-[#0B2942] rounded-xl border border-[#21B573]/30 text-[#21B573] font-semibold"
                >
                  {step}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dashboard Mockup */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xl sm:text-3xl font-bold text-white font-heading mb-2">
              SOC Command & Vulnerability Dashboard
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mb-8">
              Live threat correlation, event telemetry, and remediation management.
            </p>
            <SecurityDashboardMockup />
          </div>
        </section>

        {/* Categorized Services Grid */}
        <section className="py-20 bg-[#071A2B] px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading">
                Comprehensive Cybersecurity Capabilities
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                Grouped into specialized practice areas for enterprise protection.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cybersecurityCategories.map((cat) => (
                <div
                  key={cat.title}
                  className="bg-[#0B2942]/60 p-6 rounded-2xl border border-[#21B573]/30 shadow-xl"
                >
                  <h3 className="text-sm font-bold text-[#21B573] uppercase tracking-wider font-heading mb-4">
                    {cat.title}
                  </h3>
                  <div className="space-y-4">
                    {cat.services.map((s) => (
                      <div key={s.name} className="border-b border-[#071A2B] pb-3 last:border-0 last:pb-0">
                        <div className="font-semibold text-xs text-white flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#21B573] shrink-0" />
                          {s.name}
                        </div>
                        <p className="text-[11px] text-slate-300 mt-1">{s.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-20 bg-[#051320] px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ContactForm defaultSolution="Cybersecurity Services" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
