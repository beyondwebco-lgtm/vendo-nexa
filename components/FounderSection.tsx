"use client";

import Image from "next/image";
import { Quote } from "lucide-react";

export default function FounderSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#F5F7FA] via-white to-[#EDF6FC]/40 overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background Decorative Tech Grid & Subtle Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#176BCE]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-[#29B6D8]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (35% on desktop: 4 of 12 cols, stacked center on mobile) */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="relative group mb-6">
              {/* Subtle Company Logo / Brand Glow Watermark behind image */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#176BCE]/20 via-[#29B6D8]/20 to-[#071A2B]/10 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Founder Image Container */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full p-1.5 bg-gradient-to-tr from-[#071A2B] via-[#176BCE] to-[#29B6D8] shadow-2xl transition-transform duration-500 group-hover:scale-[1.03]">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white bg-slate-900 relative">
                  <Image
                    src="/images/founder.png"
                    alt="Sharath Simha Reddy - Founder & CEO, VendoNexa"
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 192px, (max-width: 1024px) 224px, 256px"
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Watermark Logo Badge */}
              <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 bg-[#071A2B] text-white p-2 sm:p-2.5 rounded-full shadow-lg border border-white/20">
                <span className="font-heading font-extrabold text-[10px] sm:text-xs tracking-wider text-[#29B6D8]">
                  VX
                </span>
              </div>
            </div>

            {/* Founder Info */}
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#071A2B] font-heading tracking-tight">
              Sharath Simha Reddy
            </h3>
            <p className="text-sm font-semibold text-[#176BCE] mt-1 font-sans">
              Founder &amp; CEO
            </p>
            <p className="text-xs font-mono uppercase tracking-widest text-[#5C6875] mt-0.5">
              VendoNexa
            </p>

            {/* Optional LinkedIn & Contact Link */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Sharath Simha Reddy LinkedIn"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EDF6FC] hover:bg-[#176BCE] text-[#176BCE] hover:text-white text-xs font-semibold transition-all shadow-sm border border-[#176BCE]/20 hover:border-transparent group/link"
              >
                <svg className="w-3.5 h-3.5 fill-current transition-transform group-hover/link:scale-110" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
                </svg>
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column (65% on desktop: 7 or 8 of 12 cols) */}
          <div className="lg:col-span-7 xl:col-span-8">
            {/* Section Tag & Heading */}
            <div className="mb-6 flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-8 bg-gradient-to-r from-[#176BCE] to-[#29B6D8] rounded-full inline-block" />
                <span className="text-xs uppercase font-bold text-[#176BCE] tracking-widest font-mono">
                  Leadership Insight
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A2B] font-heading leading-[1.15] tracking-tight">
                A Word from Our Founder
              </h2>
            </div>

            {/* Premium Quote Card Container with Glassmorphism */}
            <div className="relative bg-white/85 backdrop-blur-xl border border-[#EDF6FC] rounded-3xl p-6 sm:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 group/card">
              
              {/* Background Large Semi-Transparent Quotation Watermark */}
              <Quote className="w-20 h-20 sm:w-28 sm:h-28 text-[#176BCE]/10 absolute top-4 right-4 sm:top-6 sm:right-6 pointer-events-none select-none transition-transform duration-500 group-hover/card:scale-105" />

              {/* Quotation Content */}
              <div className="relative z-10 space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed font-sans font-normal">
                <p className="font-semibold text-[#071A2B] text-base sm:text-lg leading-relaxed border-l-4 border-[#176BCE] pl-4 italic">
                  &ldquo;VendoNexa was founded on a simple yet powerful belief — that businesses should never have to compromise between innovation, quality, and reliability.&rdquo;
                </p>

                <p className="text-slate-600">
                  I established VendoNexa with a vision that goes beyond building just another technology company. My aim has always been to create a team that truly understands real-world business challenges, embraces emerging technologies with confidence, and delivers solutions that create meaningful and measurable impact.
                </p>

                <p className="text-slate-600">
                  For me, VendoNexa represents more than a company — it is a commitment to building long-term relationships, unlocking new opportunities, and transforming ambitious ideas into successful outcomes. We are still at the beginning of our journey, but our direction is clear: to continuously innovate, consistently improve, and build something that our clients, our team, and everyone associated with VendoNexa can take pride in.
                </p>
              </div>

              {/* Attribution Line */}
              <div className="mt-8 pt-6 border-t border-[#EDF6FC] flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h4 className="text-base font-extrabold text-[#071A2B] font-heading">
                    &mdash; Sharath Simha Reddy
                  </h4>
                  <p className="text-xs font-medium text-[#5C6875]">
                    Founder &amp; CEO, VendoNexa
                  </p>
                </div>

                {/* Subtle Decorative Signature Watermark / Badge */}
                <div className="text-xs font-mono font-bold text-[#176BCE]/80 tracking-widest uppercase bg-[#EDF6FC]/80 px-3 py-1.5 rounded-lg border border-[#176BCE]/10">
                  VENDONEXA LEADERSHIP
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
