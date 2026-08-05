"use me";
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ShieldCheck,
  Building2,
  Stethoscope,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Code,
  Layers,
  CheckCircle2,
} from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileSection, setActiveMobileSection] = useState<string | null>(null);
  const pathname = usePathname();
  const megaMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMegaMenuOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        megaMenuRef.current &&
        !megaMenuRef.current.contains(event.target as Node)
      ) {
        setMegaMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMobileAccordion = (section: string) => {
    setActiveMobileSection(activeMobileSection === section ? null : section);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0A0A09]/95 backdrop-blur-md border-b border-[#2E2E2B] shadow-2xl py-3"
          : "bg-[#0A0A09] border-b border-[#2E2E2B]/80 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-white text-[#0A0A09] flex items-center justify-center font-black text-xl shadow-md group-hover:scale-105 transition-transform">
              V
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-white font-heading">
                VENDONEXA
              </span>
              <span className="text-[9px] uppercase tracking-widest text-[#A3A3A0] font-bold -mt-1 hidden sm:block">
                Enterprise Software & Cybersecurity
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" ref={megaMenuRef}>
            <Link
              href="/"
              className={`text-[13px] uppercase tracking-wider font-medium transition-colors hover:text-white nav-link-underline ${
                pathname === "/" ? "text-white active" : "text-[#A3A3A0]"
              }`}
            >
              Home
            </Link>

            {/* Mega Menu Trigger */}
            <div className="relative">
              <button
                onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                onMouseEnter={() => setMegaMenuOpen(true)}
                className={`flex items-center gap-1.5 text-[13px] uppercase tracking-wider font-medium transition-colors hover:text-white py-2 nav-link-underline ${
                  pathname.startsWith("/solutions")
                    ? "text-white active"
                    : "text-[#A3A3A0]"
                }`}
                aria-expanded={megaMenuOpen}
              >
                Solutions
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    megaMenuOpen ? "rotate-180 text-white" : ""
                  }`}
                />
              </button>

              {/* Mega Menu Popup */}
              {megaMenuOpen && (
                <div
                  onMouseLeave={() => setMegaMenuOpen(false)}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[940px] bg-[#0A0A09] border border-[#2E2E2B] rounded-xl shadow-2xl p-6 grid grid-cols-3 gap-6 animate-in fade-in slide-in-from-top-2 duration-200"
                  style={{
                    animationDuration: megaMenuOpen ? "220ms" : "150ms",
                    animationTimingFunction: megaMenuOpen ? "ease-out" : "ease-in",
                  }}
                >
                  {/* Column 1: Vendor Management */}
                  <div className="bg-[#1A1A18] p-4 rounded-lg border border-[#2E2E2B] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-3 text-white">
                        <span className="w-1.5 h-1.5 rounded-sm bg-white inline-block" />
                        <Building2 className="w-4 h-4" />
                        <h3 className="font-bold text-white text-sm">
                          Vendor Management
                        </h3>
                      </div>
                      <p className="text-xs text-[#A3A3A0] mb-4 leading-relaxed">
                        Digitize vendor onboarding, RFQ/RFP procurement, contracts, invoices, compliance & performance analytics.
                      </p>
                      <ul className="space-y-1.5 text-xs text-white/90 mb-4">
                        <li className="flex items-center gap-2 hover:text-white transition-colors">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                          Onboarding & Verification
                        </li>
                        <li className="flex items-center gap-2 hover:text-white transition-colors">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                          RFQ/RFP & Tenders
                        </li>
                        <li className="flex items-center gap-2 hover:text-white transition-colors">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                          Contracts & Invoices
                        </li>
                        <li className="flex items-center gap-2 hover:text-white transition-colors">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                          Risk & Performance KPIs
                        </li>
                      </ul>
                    </div>
                    <Link
                      href="/solutions/vendor-management"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-[#A3A3A0] transition-colors group/link pt-2 border-t border-[#2E2E2B]"
                    >
                      View Vendor Management Solution
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Column 2: Hospital Management */}
                  <div className="bg-[#1A1A18] p-4 rounded-lg border border-[#2E2E2B] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-3 text-white">
                        <span className="w-1.5 h-1.5 rounded-sm bg-white inline-block" />
                        <Stethoscope className="w-4 h-4" />
                        <h3 className="font-bold text-white text-sm">
                          Hospital Management
                        </h3>
                      </div>
                      <p className="text-xs text-[#A3A3A0] mb-4 leading-relaxed">
                        Unified digital healthcare platform connecting clinical EMR, OPD/IPD, pharmacy, lab & billing.
                      </p>
                      <ul className="space-y-1.5 text-xs text-white/90 mb-4">
                        <li className="flex items-center gap-2 hover:text-white transition-colors">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                          OPD/IPD & EMR Workflows
                        </li>
                        <li className="flex items-center gap-2 hover:text-white transition-colors">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                          Pharmacy & Lab Diagnostics
                        </li>
                        <li className="flex items-center gap-2 hover:text-white transition-colors">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                          Billing, Insurance & TPA
                        </li>
                        <li className="flex items-center gap-2 hover:text-white transition-colors">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                          Bed, ER & ICU Operations
                        </li>
                      </ul>
                    </div>
                    <Link
                      href="/solutions/hospital-management"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-[#A3A3A0] transition-colors group/link pt-2 border-t border-[#2E2E2B]"
                    >
                      View Hospital Management Solution
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Column 3: Cybersecurity Services */}
                  <div className="bg-[#1A1A18] p-4 rounded-lg border border-[#10B981]/30 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-3 text-[#10B981]">
                        <span className="w-1.5 h-1.5 rounded-sm bg-[#10B981] inline-block animate-pulse" />
                        <ShieldCheck className="w-4 h-4" />
                        <h3 className="font-bold text-white text-sm">
                          Cybersecurity Services
                        </h3>
                      </div>
                      <p className="text-xs text-[#A3A3A0] mb-4 leading-relaxed">
                        Assess vulnerabilities, monitor threats, secure cloud & APIs, SOC/SIEM, and build compliant enterprise defense.
                      </p>
                      <ul className="space-y-1.5 text-xs text-white/90 mb-4">
                        <li className="flex items-center gap-2 hover:text-[#10B981] transition-colors">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                          VAPT (Web, Mobile, API, Network)
                        </li>
                        <li className="flex items-center gap-2 hover:text-[#10B981] transition-colors">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                          Cloud Security & Architecture
                        </li>
                        <li className="flex items-center gap-2 hover:text-[#10B981] transition-colors">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                          SOC & SIEM Implementation
                        </li>
                        <li className="flex items-center gap-2 hover:text-[#10B981] transition-colors">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                          DevSecOps & Code Audit
                        </li>
                      </ul>
                    </div>
                    <Link
                      href="/solutions/cybersecurity"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#10B981] hover:text-white transition-colors group/link pt-2 border-t border-[#2E2E2B]"
                    >
                      Explore Cybersecurity Services
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Mega Menu Footer Sub-links */}
                  <div className="col-span-3 pt-3 border-t border-[#2E2E2B] flex items-center justify-between text-xs text-[#A3A3A0]">
                    <span className="text-[#A3A3A0] font-medium">
                      Supporting Capabilities:
                    </span>
                    <div className="flex gap-6">
                      <Link
                        href="/solutions/custom-software"
                        className="flex items-center gap-1.5 hover:text-white transition-colors"
                      >
                        <Code className="w-3.5 h-3.5 text-white" />
                        Custom Software Development
                      </Link>
                      <Link
                        href="/solutions/enterprise-integrations"
                        className="flex items-center gap-1.5 hover:text-white transition-colors"
                      >
                        <Layers className="w-3.5 h-3.5 text-white" />
                        Enterprise Integration Services
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className={`text-[13px] uppercase tracking-wider font-medium transition-colors hover:text-white nav-link-underline ${
                pathname === "/about" ? "text-white active" : "text-[#A3A3A0]"
              }`}
            >
              Company
            </Link>

            <Link
              href="/industries"
              className={`text-[13px] uppercase tracking-wider font-medium transition-colors hover:text-white nav-link-underline ${
                pathname === "/industries" ? "text-white active" : "text-[#A3A3A0]"
              }`}
            >
              Industries
            </Link>

            <Link
              href="/implementation"
              className={`text-[13px] uppercase tracking-wider font-medium transition-colors hover:text-white nav-link-underline ${
                pathname === "/implementation"
                  ? "text-white active"
                  : "text-[#A3A3A0]"
              }`}
            >
              Implementation
            </Link>

            <Link
              href="/contact"
              className={`text-[13px] uppercase tracking-wider font-medium transition-colors hover:text-white nav-link-underline ${
                pathname === "/contact" ? "text-white active" : "text-[#A3A3A0]"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="btn-primary-white px-4 py-2.5 rounded-lg text-xs font-bold shadow-md"
            >
              Request a Consultation
            </Link>
            <Link
              href="/solutions/vendor-management"
              className="btn-icon-square"
              title="Explore Solutions"
              aria-label="Explore Solutions"
            >
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#A3A3A0] hover:text-white hover:bg-[#1A1A18] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0A09] border-b border-[#2E2E2B] px-4 pt-4 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <Link
            href="/"
            className="block py-2 text-sm font-semibold uppercase tracking-wider text-white hover:text-[#A3A3A0]"
          >
            Home
          </Link>

          <div>
            <button
              onClick={() => toggleMobileAccordion("solutions")}
              className="w-full flex items-center justify-between py-2 text-sm font-semibold uppercase tracking-wider text-white hover:text-[#A3A3A0]"
            >
              <span>Solutions</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  activeMobileSection === "solutions" ? "rotate-180 text-white" : ""
                }`}
              />
            </button>

            {activeMobileSection === "solutions" && (
              <div className="pl-4 space-y-3 pt-2 border-l-2 border-white/30 my-2">
                <Link
                  href="/solutions/vendor-management"
                  className="block p-2 rounded-md bg-[#1A1A18] border border-[#2E2E2B]"
                >
                  <div className="font-semibold text-white text-xs flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-white" />
                    Vendor Management System
                  </div>
                </Link>

                <Link
                  href="/solutions/hospital-management"
                  className="block p-2 rounded-md bg-[#1A1A18] border border-[#2E2E2B]"
                >
                  <div className="font-semibold text-white text-xs flex items-center gap-2">
                    <Stethoscope className="w-4 h-4 text-white" />
                    Hospital Management System
                  </div>
                </Link>

                <Link
                  href="/solutions/cybersecurity"
                  className="block p-2 rounded-md bg-[#1A1A18] border border-[#10B981]/40"
                >
                  <div className="font-semibold text-[#10B981] text-xs flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                    Cybersecurity Services
                  </div>
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/about"
            className="block py-2 text-sm font-semibold uppercase tracking-wider text-white hover:text-[#A3A3A0]"
          >
            Company
          </Link>

          <Link
            href="/industries"
            className="block py-2 text-sm font-semibold uppercase tracking-wider text-white hover:text-[#A3A3A0]"
          >
            Industries
          </Link>

          <Link
            href="/implementation"
            className="block py-2 text-sm font-semibold uppercase tracking-wider text-white hover:text-[#A3A3A0]"
          >
            Implementation
          </Link>

          <Link
            href="/contact"
            className="block py-2 text-sm font-semibold uppercase tracking-wider text-white hover:text-[#A3A3A0]"
          >
            Contact
          </Link>

          <div className="pt-4 flex flex-col gap-3">
            <Link
              href="/contact"
              className="w-full text-center px-4 py-2.5 rounded-lg bg-white text-[#0A0A09] font-bold text-xs shadow-md"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
