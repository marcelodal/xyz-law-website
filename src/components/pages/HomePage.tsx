import React from 'react';
import HeroSection from '../ui/HeroSection';
import ServiceCard from '../ui/ServiceCard';
import Testimonial from '../ui/Testimonial';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Cross-Border Legal Excellence Between Brazil and the World"
        subtitle="Sophisticated legal counsel for high-net-worth individuals and international entrepreneurs navigating Brazilian opportunities."
        ctaText="Schedule a Consultation"
        ctaLink="/contact"
      />

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-playfair font-bold text-[#0A2342] mb-6">
                Bridging Legal Worlds
              </h2>
              <p className="text-gray-700 mb-6">
                At XYZ Law, we bridge legal worlds. As a boutique advisory practice specializing in Brazilian law, international real estate investment, and cross-border asset structuring, we serve a discerning global clientele seeking both opportunity and security in Brazil.
              </p>
              <p className="text-gray-700">
                Our unique combination of Brazilian legal licensure, U.S. legal education, practical real estate expertise, and certified translation capabilities creates an unparalleled service experience for sophisticated international clients.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-[#006D77] mb-3">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#0A2342] mb-2">Licensed Brazilian Attorney</h3>
                <p className="text-gray-600 text-sm">Formal legal representation and counsel under Brazilian jurisdiction.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-[#006D77] mb-3">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#0A2342] mb-2">U.S. Legal Education</h3>
                <p className="text-gray-600 text-sm">Understanding of American legal principles and international client expectations.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-[#006D77] mb-3">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#0A2342] mb-2">Real Estate Expertise</h3>
                <p className="text-gray-600 text-sm">Practical insights from direct experience in competitive property markets.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-[#006D77] mb-3">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#0A2342] mb-2">Certified Translator</h3>
                <p className="text-gray-600 text-sm">Official sworn translations for legal documents requiring Brazilian recognition.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold text-[#0A2342] mb-4">Our Services</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Comprehensive legal and advisory services for international clients navigating Brazilian opportunities and cross-border matters.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Legal Representation in Brazil"
              description="Comprehensive legal counsel for real estate transactions, business formation, and asset protection under Brazilian jurisdiction."
              icon={
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              }
              link="/services#legal-representation"
            />
            <ServiceCard
              title="International Structuring"
              description="Strategic entity formation and management across multiple jurisdictions for optimal asset protection and compliance."
              icon={
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              }
              link="/services#international-structuring"
            />
            <ServiceCard
              title="Certified Document Translation"
              description="Official sworn translations (Tradutor Juramentado) for legal documents requiring Brazilian recognition."
              icon={
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              }
              link="/services#certified-translation"
            />
          </div>
          <div className="text-center mt-12">
            <a
              href="/services"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#006D77] hover:bg-[#005a63] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#006D77]"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold text-[#0A2342] mb-4">Client Testimonials</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Hear from our international clients about their experience working with XYZ Law.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Testimonial
              quote="Working with XYZ Law transformed our Brazilian investment experience from complex and uncertain to streamlined and secure. Their unique combination of legal expertise and cultural fluency proved invaluable."
              author="John Smith"
              position="International Family Office Director"
            />
            <Testimonial
              quote="The certified translation service saved us weeks of delays. Having both legal counsel and official document translation under one roof made our property acquisition remarkably efficient."
              author="Maria Rodriguez"
              position="Real Estate Investor"
            />
            <Testimonial
              quote="Their deep understanding of both Brazilian and international legal frameworks provided us with structuring options we hadn't considered. A truly sophisticated advisory service."
              author="Thomas Weber"
              position="Private Wealth Manager"
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-[#0A2342] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-playfair font-bold mb-6">Your Brazilian Legal Matters Deserve Sophisticated Counsel</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Schedule a consultation to discuss how our unique expertise can support your cross-border objectives.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[#0A2342] bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              Schedule a Consultation
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
