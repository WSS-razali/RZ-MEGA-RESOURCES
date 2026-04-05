import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-32 pb-20 container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
            Start Your Journey.
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Our smart routing system ensures your inquiry reaches the exact right team at RZ MEGA.
          </p>
        </div>

        <ContactForm />
      </div>
    </main>
  );
}
