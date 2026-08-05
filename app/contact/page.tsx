import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, ShieldCheck, Share2 } from "lucide-react";

export const metadata = {
  title: "Contact & Consultation | Vendonexa Enterprise Software & Cybersecurity",
  description:
    "Get in touch with Vendonexa enterprise solution architects to discuss your Vendor Management, Hospital Operations, or Cybersecurity objectives.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-[#101820] flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-20">
        <section className="bg-[#071A2B] text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <span className="text-xs uppercase font-bold text-[#29B6D8] tracking-widest block mb-2 font-mono">
                Executive Engagement
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading leading-tight">
                Let’s Build a Smarter and More Secure Digital Future
              </h1>
              <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
                Tell us about your organization, operational challenges, software requirements, or cybersecurity objectives. Our team will help you identify the right solution.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#F5F7FA] px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Contact Info Column */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-[#DCE4EC] shadow-sm space-y-6">
                <h3 className="text-lg font-bold text-[#071A2B] font-heading border-b border-[#EDF6FC] pb-3">
                  Direct Inquiries
                </h3>

                <div className="flex items-start gap-3 text-xs">
                  <div className="p-2 rounded-lg bg-[#EDF6FC] text-[#176BCE]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#071A2B] block">Email Us</span>
                    <span className="text-[#5C6875]">contact@vendonexa.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs">
                  <div className="p-2 rounded-lg bg-[#EDF6FC] text-[#176BCE]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#071A2B] block">Call Us</span>
                    <span className="text-[#5C6875]">+1 (800) 555-VENDO</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs">
                  <div className="p-2 rounded-lg bg-[#EDF6FC] text-[#176BCE]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#071A2B] block">Headquarters</span>
                    <span className="text-[#5C6875] leading-relaxed">
                      Enterprise Technology Center, Innovation Park, HQ
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs">
                  <div className="p-2 rounded-lg bg-[#EDF6FC] text-[#176BCE]">
                    <Share2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#071A2B] block">LinkedIn</span>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#176BCE] hover:underline"
                    >
                      linkedin.com/company/vendonexa
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#071A2B] text-white p-6 rounded-2xl border border-[#21B573]/30">
                <div className="flex items-center gap-2 text-[#21B573] font-bold text-xs mb-2">
                  <ShieldCheck className="w-4 h-4" /> Non-Disclosure Guarantee
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  All consultations and operational requirements shared with Vendonexa are strictly covered under standard enterprise Non-Disclosure Agreements (NDA).
                </p>
              </div>
            </div>

            {/* Right Contact Form Column */}
            <div className="lg:col-span-8">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
