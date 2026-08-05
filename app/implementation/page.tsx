import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Implementation Process | 9-Step Delivery Framework | Vendonexa",
  description:
    "Discover Vendonexa’s structured 9-step implementation methodology for enterprise software and cybersecurity deployment, from requirement planning to secure rollout.",
};

const implementationSteps = [
  { step: "01", name: "Requirement Understanding", desc: "In-depth discovery workshops with key operational stakeholders to document business rules, data workflows, user roles, and system boundaries." },
  { step: "02", name: "Solution Planning & Architecture", desc: "Defining cloud database schemas, REST API specs, module boundaries, integration endpoints, and zero-trust security architecture." },
  { step: "03", name: "UI/UX Interface Design", desc: "Creating intuitive wireframes and interactive high-fidelity user interface prototypes tailored for operational efficiency across roles." },
  { step: "04", name: "Custom Software Development", desc: "Agile sprint development using Next.js, React, Node.js, and TypeScript with clean code standards and continuous integration." },
  { step: "05", name: "Security Integration & VAPT Audit", desc: "Embedding AES-256 encryption, role-based access controls, and conducting internal vulnerability testing prior to deployment." },
  { step: "06", name: "Testing & Quality Assurance", desc: "Comprehensive functional testing, load testing, multi-browser validation, and user acceptance testing (UAT)." },
  { step: "07", name: "Secure Cloud / On-Prem Deployment", desc: "Controlled production deployment to AWS, Azure, or private enterprise datacenters with automated failover policies." },
  { step: "08", name: "User & Admin Training", desc: "Role-based training sessions, video walkthroughs, and technical documentation distribution for administrators and staff." },
  { step: "09", name: "Continuous Maintenance & Support", desc: "Ongoing SLA technical support, real-time SOC monitoring, periodic VAPT retesting, and feature enhancement updates." },
];

export default function ImplementationPage() {
  return (
    <div className="min-h-screen bg-white text-[#101820] flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-20">
        <section className="bg-[#071A2B] text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <span className="text-xs uppercase font-bold text-[#29B6D8] tracking-widest block mb-2 font-mono">
                Enterprise Methodology
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading leading-tight">
                From Business Requirement to Secure Deployment
              </h1>
              <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
                Our proven 9-step implementation process ensures on-time project delivery, zero operational disruption, and rigorous cybersecurity validation at every phase.
              </p>
            </div>
          </div>
        </section>

        {/* Desktop Process Roadmap */}
        <section className="py-20 bg-[#F5F7FA] px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {implementationSteps.map((s) => (
                <div key={s.step} className="bg-white p-6 rounded-2xl border border-[#DCE4EC] shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="font-mono font-extrabold text-2xl text-[#176BCE] block mb-2">
                      STEP {s.step}
                    </span>
                    <h3 className="text-lg font-bold text-[#071A2B] font-heading mb-2">
                      {s.name}
                    </h3>
                    <p className="text-xs text-[#5C6875] leading-relaxed">{s.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#EDF6FC] flex items-center justify-between text-[11px] text-[#21B573] font-mono">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Quality Gate Passed
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#071A2B] px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
