import { Navbar } from "@/components/Navbar";
import { HeroSection as BrandsHero } from "@/components/HeroSection";
import { RZMegaHero } from "@/components/RZMegaHero";
import { ProjectGallery } from "@/components/ProjectGallery";
import { ContactForm as SmartContactForm } from "@/components/ContactForm";
import { ContactInfo } from "@/components/ContactInfo";
import { NotesSection } from "@/components/NotesSection";
import Footer from "@/components/Footer";
import { Marquee } from "@/components/animations/Marquee";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 overflow-x-hidden">
      {/* 1. Navigation */}
      <Navbar />

      {/* 2. MAIN HERO (RZ MEGA RESOURCES) */}
      <section id="home">
        <RZMegaHero />
      </section>

      {/* About Company Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: About text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                About Company
              </h2>
              <p className="text-gray-600 leading-relaxed">
                At RZ Mega Resources, we believe that enterprise is more than just business; 
                it&apos;s about creating ecosystems that enhance human potential. Our portfolio spans 
                food &amp; beverage, technology, retail, consultation, and logistics — all driven 
                by a commitment to excellence and innovation.
              </p>
            </div>

            {/* Right: Stats grid */}
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center md:text-left">
                <p className="text-4xl md:text-5xl font-bold text-gray-900">25+</p>
                <p className="text-sm text-gray-500 mt-1">Years of Excellence in Enterprise &amp; Innovation</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-4xl md:text-5xl font-bold text-gray-900">500+</p>
                <p className="text-sm text-gray-500 mt-1">Projects Successfully Completed</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-4xl md:text-5xl font-bold text-gray-900">98%</p>
                <p className="text-sm text-gray-500 mt-1">Our Client Retention Rate</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-4xl md:text-5xl font-bold text-gray-900">15+</p>
                <p className="text-sm text-gray-500 mt-1">Countries with Our Projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Original Hero (Brands Overview) */}
      <section id="brands-overview">
        <BrandsHero />
      </section>

      {/* 3. Portfolio Section (Authority) */}
      <section id="projects" className="py-24 px-4 bg-gradient-to-b from-gray-900 via-[#0d0d0d] to-black overflow-hidden rounded-b-[3rem]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Project Vault
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              From enterprise software like CORPIQ to large-scale catering events, 
              explore how our four brands deliver excellence.
            </p>
          </div>
          <ProjectGallery />
        </div>
      </section>



      {/* 4. Notes Section */}
      <section id="notes">
        <NotesSection />
      </section>

      {/* 4. Smart Contact Section (Lead Router) */}
      <section id="contact" className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Contact Info */}
            <ContactInfo />
            
            {/* Right Column: Contact Form */}
            <SmartContactForm />

          </div>
        </div>
      </section>

      {/* 5. Footer */}
      <Footer />
    </main>
  );
}
