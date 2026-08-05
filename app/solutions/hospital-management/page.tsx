import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBackground from "@/components/hero/HeroBackground";
import HmsDashboardMockup from "@/components/dashboards/HmsDashboardMockup";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import {
  Stethoscope,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Hospital Management System (HMS) | Connected Healthcare Platform | Vendonexa",
  description:
    "Vendonexa Hospital Management System connects OPD/IPD clinical workflows, electronic medical records (EMR), pharmacy, lab diagnostics, billing, and ICU bed operations securely.",
};

const hmsModules = [
  { category: "Patient Care & Clinical", name: "Patient Registration & Portals", desc: "Digital demographic capture, UHID generation, and biometric patient lookup." },
  { category: "Patient Care & Clinical", name: "Appointment & Queue Engine", desc: "Multi-channel doctor appointment scheduling, token management, and SMS alerts." },
  { category: "Patient Care & Clinical", name: "OPD & IPD Operations", desc: "Consultation notes, clinical vitals, admission workflows, and ward transfers." },
  { category: "Patient Care & Clinical", name: "Electronic Medical Records (EMR)", desc: "Encrypted longitudinal patient charts, ICD-11 coding, and e-prescriptions." },

  { category: "Diagnostics & Pharmacy", name: "Pharmacy & Inventory Control", desc: "Batch tracking, expiry alerts, auto-reordering, and POS billing sync." },
  { category: "Diagnostics & Pharmacy", name: "Laboratory Management (LIS)", desc: "Sample barcode tracking, automated analyzer integration, and digital lab reports." },
  { category: "Diagnostics & Pharmacy", name: "Radiology & PACS (RIS)", desc: "DICOM image viewer integration, radiologist reporting, and order status." },
  { category: "Diagnostics & Pharmacy", name: "Blood Bank Management", desc: "Blood group inventory, cross-matching records, donor logs, and safety checks." },

  { category: "Specialized Care Wards", name: "Operation Theatre (OT) Suite", desc: "OT room scheduling, surgeon logs, anesthesia checklists, and post-op notes." },
  { category: "Specialized Care Wards", name: "Emergency Room (ER) & Triage", desc: "Fast-track emergency intake, critical vitals monitor, and rapid admission." },
  { category: "Specialized Care Wards", name: "ICU & CCU Care Monitoring", desc: "Intensive care bed telemetry, ventilator logs, and critical nurse charts." },
  { category: "Specialized Care Wards", name: "Bed & Ward Management", desc: "Real-time bed occupancy matrix, housekeeping status, and ward transfer." },

  { category: "Billing & Administration", name: "Billing & Counter Cashier", desc: "Integrated IPD/OPD billing, itemized tariffs, package pricing, and receipts." },
  { category: "Billing & Administration", name: "Insurance & TPA Claims", desc: "Pre-authorization requests, claim batch submission, and TPA settlement." },
  { category: "Billing & Administration", name: "HR, Staff & Doctor Rosters", desc: "Shift scheduling, doctor duty rosters, payroll sync, and credentialing." },
  { category: "Billing & Administration", name: "Healthcare Security & HIPAA", desc: "Role-based access controls (RBAC), audit trail logs, and AES-256 data protection." },
];

export default function HospitalManagementPage() {
  return (
    <div className="min-h-screen bg-white text-[#101820] flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-16">
        {/* Hero */}
        <section className="relative min-h-[85vh] bg-[#071A2B] text-white pt-24 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-between overflow-hidden corner-ticks">
          <HeroBackground variant="hms" />

          <span className="corner-tick-tl">+</span>
          <span className="corner-tick-tr">+</span>
          <span className="corner-tick-bl">+</span>
          <span className="corner-tick-br">+</span>

          <div className="relative z-10 max-w-7xl mx-auto w-full pt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B2942]/90 border border-[#29B6D8]/40 text-[#29B6D8] text-xs font-semibold">
              <Stethoscope className="w-4 h-4" /> Healthcare Technology Division
            </div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end my-auto py-8">
            <div className="lg:col-span-8">
              <h1 className="font-display-hero text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] tracking-tight text-white max-w-2xl">
                Integrated Hospital Management System
              </h1>
            </div>

            <div className="lg:col-span-4 max-w-[380px] lg:ml-auto space-y-6">
              <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed font-sans">
                Connect clinical, administrative, operational, and financial hospital processes into one secure, scalable, HIPAA-aligned digital healthcare platform.
              </p>

              <div className="flex items-center gap-3">
                <Link
                  href="#contact"
                  className="btn-primary-tech px-6 py-3.5 rounded-lg text-xs font-bold shadow-lg flex-1 text-center"
                >
                  Schedule Hospital Demo
                </Link>
                <Link
                  href="#journey"
                  className="btn-icon-square"
                  aria-label="View Patient Journey"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Patient Journey Flow */}
        <section id="journey" className="py-16 bg-[#EDF6FC] px-4 sm:px-6 lg:px-8 border-b border-[#DCE4EC]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071A2B] font-heading mb-6">
              Complete Digital Patient Journey
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2 text-center text-[11px]">
              {[
                "1. Registration",
                "2. Appointment",
                "3. Consultation",
                "4. Investigation",
                "5. Admission",
                "6. Treatment",
                "7. Billing",
                "8. Discharge",
                "9. Follow-Up",
              ].map((step) => (
                <div
                  key={step}
                  className="p-2.5 bg-white rounded-lg card-interactive font-semibold text-[#071A2B]"
                >
                  {step}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dashboard Mockup */}
        <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xl sm:text-3xl font-bold text-[#071A2B] font-heading mb-2">
              Real-Time Hospital Operations Console
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-8">
              Live operational monitoring for OPD, IPD, ICU bed occupancy, and diagnostic labs.
            </p>
            <HmsDashboardMockup />
          </div>
        </section>

        {/* Modules Matrix */}
        <section className="py-20 bg-[#F5F7FA] px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#071A2B] font-heading">
                Comprehensive HMS Module Suite
              </h2>
              <p className="text-xs sm:text-sm text-[#5C6875] mt-2">
                24+ interconnected clinical and administrative hospital modules.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {hmsModules.map((m) => (
                <div
                  key={m.name}
                  className="bg-white p-5 rounded-xl card-interactive"
                >
                  <span className="text-[10px] uppercase tracking-wider font-bold text-[#29B6D8] block mb-1">
                    {m.category}
                  </span>
                  <h3 className="font-bold text-[#071A2B] text-sm font-heading mb-2">
                    {m.name}
                  </h3>
                  <p className="text-xs text-[#5C6875] leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="py-20 bg-[#071A2B] px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ContactForm defaultSolution="Hospital Management System" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
