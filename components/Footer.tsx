import Link from "next/link";
import {
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Building2,
  Stethoscope,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A09] text-[#F5F5F4] border-t border-[#2E2E2B] pt-16 pb-8 relative overflow-hidden">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#2E2E2B]">
          {/* Column 1 — Brand */}
          <div className="lg:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-3 group inline-block">
              <div className="w-9 h-9 rounded-lg bg-white text-[#0A0A09] flex items-center justify-center font-black text-lg shadow-md">
                V
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-white font-heading">
                  VENDONEXA
                </span>
                <span className="text-[9px] uppercase tracking-widest text-[#A3A3A0] font-bold -mt-1">
                  Enterprise Software & Cybersecurity
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#A3A3A0] leading-relaxed pt-2">
              Enterprise Software | Business Automation | Healthcare Technology | Cybersecurity
            </p>

            <p className="text-xs text-white font-medium italic pt-1">
              "Building Smarter Systems. Securing Digital Businesses."
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#1A1A18] border border-[#2E2E2B] flex items-center justify-center text-white hover:bg-white hover:text-[#0A0A09] transition-colors"
                aria-label="Vendonexa LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <div className="flex items-center gap-1.5 text-xs text-[#10B981] bg-[#10B981]/10 px-2.5 py-1 rounded-full border border-[#10B981]/30">
                <ShieldCheck className="w-3.5 h-3.5" />
                Security-First Platform
              </div>
            </div>
          </div>

          {/* Column 2 — Solutions */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Core Solutions
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/solutions/vendor-management"
                  className="hover:text-white text-[#A3A3A0] transition-colors flex items-center gap-1.5"
                >
                  <Building2 className="w-3.5 h-3.5 text-white" />
                  Vendor Management System
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/hospital-management"
                  className="hover:text-white text-[#A3A3A0] transition-colors flex items-center gap-1.5"
                >
                  <Stethoscope className="w-3.5 h-3.5 text-white" />
                  Hospital Management System
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/cybersecurity"
                  className="hover:text-[#10B981] text-[#A3A3A0] transition-colors flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                  Cybersecurity Services
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/custom-software"
                  className="hover:text-white text-[#A3A3A0] transition-colors"
                >
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/enterprise-integrations"
                  className="hover:text-white text-[#A3A3A0] transition-colors"
                >
                  Integration Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Company
            </h3>
            <ul className="space-y-2 text-xs text-[#A3A3A0]">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Vendonexa
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="hover:text-white transition-colors"
                >
                  Industries Served
                </Link>
              </li>
              <li>
                <Link
                  href="/implementation"
                  className="hover:text-white transition-colors"
                >
                  Implementation Process
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact & Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 — Cybersecurity Services */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#10B981] uppercase tracking-wider font-heading">
              Cybersecurity
            </h3>
            <ul className="space-y-2 text-xs text-[#A3A3A0]">
              <li>
                <Link
                  href="/solutions/cybersecurity"
                  className="hover:text-[#10B981] transition-colors"
                >
                  VAPT Testing
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/cybersecurity"
                  className="hover:text-[#10B981] transition-colors"
                >
                  Application & API Security
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/cybersecurity"
                  className="hover:text-[#10B981] transition-colors"
                >
                  Cloud Security Assessment
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/cybersecurity"
                  className="hover:text-[#10B981] transition-colors"
                >
                  SOC & SIEM Implementation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5 — Contact Info */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Enterprise Contact
            </h3>
            <ul className="space-y-3 text-xs text-[#A3A3A0]">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>contact@vendonexa.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>+1 (800) 555-VENDO</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Enterprise Technology Center, Innovation Park, HQ
                </span>
              </li>
            </ul>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-[#A3A3A0] transition-colors"
              >
                Schedule Executive Demo <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#A3A3A0]">
          <p>© 2026 Vendonexa. All rights reserved. Enterprise Software & Cybersecurity Solutions.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
