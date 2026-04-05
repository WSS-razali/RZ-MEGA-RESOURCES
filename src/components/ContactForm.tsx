"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormData } from "@/lib/schemas/contact-form";
import { Loader2, Send } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log("Form Data:", data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert(`Enquiry submitted! We will follow up shortly.`);
  };

  return (
    <ScrollReveal direction="right" delay={0.2}>
      <div className="bg-[#121212] rounded-3xl p-8 w-full border border-white/10">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2 text-white">Send us a message</h2>
          <p className="text-gray-400 text-sm">
            Please feel free to send us any questions, feedback or suggestions you might have.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Base Fields */}
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-400 block mb-2 font-medium">Name</label>
                <input
                  {...register("name")}
                  placeholder="Name"
                  className="w-full p-3 bg-[#1a1a1a] border border-white/10 rounded-lg text-white placeholder-gray-600 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all outline-none"
                />
                {errors.name && (
                  <p className="text-rose-500 text-xs mt-1">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label className="text-sm text-gray-400 block mb-2 font-medium">Company</label>
                <input
                  placeholder="Company"
                  className="w-full p-3 bg-[#1a1a1a] border border-white/10 rounded-lg text-white placeholder-gray-600 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all outline-none"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-400 block mb-2 font-medium">Phone</label>
                <input
                  {...register("phone")}
                  placeholder="Phone"
                  className="w-full p-3 bg-[#1a1a1a] border border-white/10 rounded-lg text-white placeholder-gray-600 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all outline-none"
                />
                {errors.phone && (
                  <p className="text-rose-500 text-xs mt-1">{errors.phone.message}</p>
                )}
              </div>
              <div>
                <label className="text-sm text-gray-400 block mb-2 font-medium">Email</label>
                <input
                  {...register("email")}
                  placeholder="Email"
                  className="w-full p-3 bg-[#1a1a1a] border border-white/10 rounded-lg text-white placeholder-gray-600 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all outline-none"
                />
                {errors.email && (
                  <p className="text-rose-500 text-xs mt-1">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-400 block mb-2 font-medium">Subject</label>
              <input
                placeholder="Subject"
                className="w-full p-3 bg-[#1a1a1a] border border-white/10 rounded-lg text-white placeholder-gray-600 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400 block mb-2 font-medium">Message</label>
              <textarea
                {...register("message")}
                rows={4}
                placeholder="Tell us about your inquiry..."
                className="w-full p-3 bg-[#1a1a1a] border border-white/10 rounded-lg text-white placeholder-gray-600 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all outline-none"
              />
              {(errors as any).message && (
                <p className="text-rose-500 text-xs mt-1">{(errors as any).message.message}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 px-6 rounded-xl text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:-translate-y-1"
            }`}
          >
            {isSubmitting ? (
              <Loader2 className="animate-spin w-5 h-5" />
            ) : (
              <>
                Send Inquiry
                <Send className="w-5 h-5" />
              </>
            )}
          </button>
        </form>
      </div>
    </ScrollReveal>
  );
}
