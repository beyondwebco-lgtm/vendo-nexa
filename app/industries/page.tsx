import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IndustrySelector from "@/components/visuals/IndustrySelector";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Industries Served | Enterprise Technology Solutions | Vendonexa",
  description:
    "Explore how Vendonexa delivers specialized enterprise management systems and cybersecurity services across Healthcare, Manufacturing, Construction, IT, Retail, and Finance.",
};

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-white text-[#101820] flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-20">
        <section className="bg-[#071A2B] text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <span className="text-xs uppercase font-bold text-[#29B6D8] tracking-widest block mb-2 font-mono">
                Domain Expertise
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading leading-tight">
                Technology Solutions Across Industries
              </h1>
              <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
                Vendonexa crafts software architectures and cybersecurity frameworks tailored to the operational compliance standards of diverse enterprise sectors.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#071A2B] text-white px-4 sm:px-6 lg:px-8 border-t border-[#0B2942]">
          <div className="max-w-7xl mx-auto">
            <IndustrySelector />
          </div>
        </section>

        <section className="py-20 bg-[#F5F7FA] px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
