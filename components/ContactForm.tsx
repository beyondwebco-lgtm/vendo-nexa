"use me";
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Send,
  CheckCircle2,
  Loader2,
  ShieldCheck,
  Building2,
  Mail,
  Phone,
  User,
} from "lucide-react";

interface FormInputs {
  fullName: string;
  businessEmail: string;
  phoneNumber: string;
  companyName: string;
  industry: string;
  interestedSolution: string;
  organizationSize: string;
  projectRequirement: string;
  preferredContact: string;
}

export default function ContactForm({ defaultSolution = "" }: { defaultSolution?: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>({
    defaultValues: {
      interestedSolution: defaultSolution || "Vendor Management System",
      organizationSize: "50-250 Employees",
      preferredContact: "Email",
    },
  });

  const onSubmit = async (data: FormInputs) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
  };

  return (
    <div className="bg-[#0A0A09] rounded-2xl border border-[#2E2E2B] p-6 sm:p-8 shadow-2xl relative overflow-hidden text-white">
      {/* Background Accent */}
      <div className="absolute -right-20 -top-20 w-60 h-60 bg-white/5 rounded-full filter blur-3xl" />

      <div className="relative z-10">
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1A18] border border-[#10B981]/40 text-xs font-semibold text-[#10B981] mb-2">
            <ShieldCheck className="w-4 h-4 text-[#10B981]" />
            Enterprise Executive Consultation
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
            Schedule a Confidential Consultation
          </h3>
          <p className="text-xs sm:text-sm text-[#A3A3A0] mt-1">
            Discuss your operational objectives, system integration needs, or cybersecurity assessment with our technical specialists.
          </p>
        </div>

        {isSuccess ? (
          <div className="bg-[#1A1A18] border border-[#10B981]/50 rounded-xl p-6 text-center space-y-4 animate-in fade-in duration-300">
            <div className="w-12 h-12 rounded-full bg-[#10B981]/20 text-[#10B981] flex items-center justify-center mx-auto border border-[#10B981]/40">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white font-heading">
              Consultation Request Received
            </h4>
            <p className="text-xs text-[#A3A3A0] max-w-md mx-auto leading-relaxed">
              Thank you for reaching out to Vendonexa. One of our enterprise solution architects will contact you within 4 business hours to discuss your project requirements.
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="px-4 py-2 bg-white text-[#0A0A09] text-xs font-semibold rounded-lg hover:bg-[#F5F5F4] transition-colors"
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-white mb-1">
                  Full Name <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#A3A3A0] absolute left-3 top-3" />
                  <input
                    type="text"
                    {...register("fullName", { required: "Full name is required" })}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full bg-[#1A1A18] border border-[#2E2E2B] rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-[#A3A3A0]/60 focus:outline-none focus:border-white"
                  />
                </div>
                {errors.fullName && (
                  <p className="text-[11px] text-rose-400 mt-1">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Business Email */}
              <div>
                <label className="block text-xs font-semibold text-white mb-1">
                  Business Email <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#A3A3A0] absolute left-3 top-3" />
                  <input
                    type="email"
                    {...register("businessEmail", {
                      required: "Business email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    placeholder="sarah@enterprise.com"
                    className="w-full bg-[#1A1A18] border border-[#2E2E2B] rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-[#A3A3A0]/60 focus:outline-none focus:border-white"
                  />
                </div>
                {errors.businessEmail && (
                  <p className="text-[11px] text-rose-400 mt-1">
                    {errors.businessEmail.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone Number */}
              <div>
                <label className="block text-xs font-semibold text-white mb-1">
                  Phone Number <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#A3A3A0] absolute left-3 top-3" />
                  <input
                    type="tel"
                    {...register("phoneNumber", { required: "Phone number is required" })}
                    placeholder="+91 9502892082"
                    className="w-full bg-[#1A1A18] border border-[#2E2E2B] rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-[#A3A3A0]/60 focus:outline-none focus:border-white"
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="text-[11px] text-rose-400 mt-1">
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-xs font-semibold text-white mb-1">
                  Company / Organization Name <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-[#A3A3A0] absolute left-3 top-3" />
                  <input
                    type="text"
                    {...register("companyName", { required: "Company name is required" })}
                    placeholder="e.g. Apex Health Systems"
                    className="w-full bg-[#1A1A18] border border-[#2E2E2B] rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-[#A3A3A0]/60 focus:outline-none focus:border-white"
                  />
                </div>
                {errors.companyName && (
                  <p className="text-[11px] text-rose-400 mt-1">
                    {errors.companyName.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Interested Solution */}
              <div>
                <label className="block text-xs font-semibold text-white mb-1">
                  Interested Solution <span className="text-rose-400">*</span>
                </label>
                <select
                  {...register("interestedSolution", { required: true })}
                  className="w-full bg-[#1A1A18] border border-[#2E2E2B] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-white"
                >
                  <option value="Vendor Management System">
                    Vendor Management System (VMS)
                  </option>
                  <option value="Hospital Management System">
                    Hospital Management System (HMS)
                  </option>
                  <option value="Cybersecurity Services">
                    Cybersecurity Services (VAPT/SOC/Cloud)
                  </option>
                  <option value="Custom Software Development">
                    Custom Software Development
                  </option>
                  <option value="Integration Services">
                    Enterprise Integration Services
                  </option>
                  <option value="Other">Other Strategic Requirement</option>
                </select>
              </div>

              {/* Organization Size */}
              <div>
                <label className="block text-xs font-semibold text-white mb-1">
                  Organization Size
                </label>
                <select
                  {...register("organizationSize")}
                  className="w-full bg-[#1A1A18] border border-[#2E2E2B] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-white"
                >
                  <option value="1-50 Employees">1 - 50 Employees</option>
                  <option value="50-250 Employees">50 - 250 Employees</option>
                  <option value="250-1000 Employees">250 - 1,000 Employees</option>
                  <option value="1000+ Enterprise">1,000+ Enterprise</option>
                </select>
              </div>
            </div>

            {/* Project Requirement */}
            <div>
              <label className="block text-xs font-semibold text-white mb-1">
                Project Requirement Details <span className="text-rose-400">*</span>
              </label>
              <textarea
                rows={3}
                {...register("projectRequirement", {
                  required: "Please describe your project objective",
                })}
                placeholder="Briefly describe your current technical setup, key challenges, or security objectives..."
                className="w-full bg-[#1A1A18] border border-[#2E2E2B] rounded-lg p-3 text-xs text-white placeholder-[#A3A3A0]/60 focus:outline-none focus:border-white"
              />
              {errors.projectRequirement && (
                <p className="text-[11px] text-rose-400 mt-1">
                  {errors.projectRequirement.message}
                </p>
              )}
            </div>

            {/* Preferred Contact Method */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
              <div>
                <span className="text-xs font-semibold text-white block mb-1">
                  Preferred Contact Method:
                </span>
                <div className="flex gap-4 text-xs text-[#A3A3A0]">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      value="Email"
                      {...register("preferredContact")}
                      className="accent-white"
                    />
                    Email
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      value="Phone"
                      {...register("preferredContact")}
                      className="accent-white"
                    />
                    Phone Call
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      value="Video Call"
                      {...register("preferredContact")}
                      className="accent-white"
                    />
                    Video Demo
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white text-[#0A0A09] hover:bg-[#F5F5F4] text-xs font-bold shadow-lg transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Submitting Request...
                  </>
                ) : (
                  <>
                    Request a Consultation <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
