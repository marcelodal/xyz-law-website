import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[#0A2342] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">About XYZ Law</h1>
          <p className="text-xl max-w-3xl">
            A boutique advisory practice specializing in Brazilian law, international real estate investment, and cross-border asset structuring.
          </p>
        </div>
      </div>

      {/* Firm Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-playfair font-bold text-[#0A2342] mb-6">Firm Overview</h2>
              <p className="text-gray-700 mb-4">
                XYZ Law operates at the intersection of Brazilian law, international investment, and cross-border asset structuring. Founded by a uniquely qualified attorney with both Brazilian and U.S. legal expertise, we provide sophisticated counsel to high-net-worth individuals, international entrepreneurs, and family offices navigating the complexities of the Brazilian legal landscape.
              </p>
              <p className="text-gray-700 mb-4">
                Our boutique approach ensures personalized attention, discretion, and strategic insight that larger firms cannot match. We leverage cutting-edge technology and a carefully vetted network of local partners to deliver exceptional service while maintaining the high-touch, principal-led experience our discerning clients expect.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="aspect-w-16 aspect-h-9 bg-gray-300 rounded-lg mb-6">
                {/* Placeholder for office image */}
                <div className="flex items-center justify-center h-full">
                  <span className="text-gray-500">Office Image</span>
                </div>
              </div>
              <blockquote className="italic text-gray-700 border-l-4 border-[#006D77] pl-4">
                "We bridge legal worlds, providing our international clients with the sophisticated counsel they need to navigate Brazilian opportunities with confidence and security."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-playfair font-bold text-[#0A2342] mb-4">Qualifications</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-[#006D77]">
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-700">Licensed attorney in Brazil with active OAB registration</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-[#006D77]">
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-700">U.S. legal education at Fordham University (Program for Foreign Lawyers)</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-[#006D77]">
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-700">Certified Sworn Translator (Tradutor Juramentado) for English/Portuguese</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-[#006D77]">
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-700">Former real estate agent in the competitive New York City market</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-[#006D77]">
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-700">Fluent in English and Portuguese with cross-cultural expertise</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-playfair font-bold text-[#0A2342] mb-6">Founder Profile</h2>
              <h3 className="text-xl font-semibold text-[#0A2342] mb-2">Marcelo Dalpasquale</h3>
              <p className="text-[#006D77] font-medium mb-4">Principal Attorney & Founder</p>
              <p className="text-gray-700 mb-4">
                Marcelo Dalpasquale brings a rare combination of qualifications that uniquely positions him to serve international clients with Brazilian legal matters.
              </p>
              <p className="text-gray-700 mb-4">
                This distinctive background allows Marcelo to not only provide formal legal representation in Brazil but also to communicate complex legal concepts clearly to international clients, translate and certify critical documents in-house, and approach property transactions with practical insight gained from direct market experience.
              </p>
              <div className="aspect-w-4 aspect-h-5 bg-gray-300 rounded-lg mt-6">
                {/* Placeholder for founder image */}
                <div className="flex items-center justify-center h-full">
                  <span className="text-gray-500">Founder Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold text-[#0A2342] mb-4">Our Approach</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We combine legal expertise, cultural understanding, and technological efficiency to deliver exceptional service to our international clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-[#006D77] mx-auto mb-4">
                <svg className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0A2342] mb-3">Elite Expertise</h3>
              <p className="text-gray-700">
                We maintain focused specialization in our core practice areas, allowing us to provide depth of knowledge that generalist firms cannot match.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-[#006D77] mx-auto mb-4">
                <svg className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0A2342] mb-3">Discretion & Privacy</h3>
              <p className="text-gray-700">
                We understand the privacy concerns of high-net-worth clients and maintain rigorous confidentiality protocols.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-[#006D77] mx-auto mb-4">
                <svg className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0A2342] mb-3">Bespoke Solutions</h3>
              <p className="text-gray-700">
                We recognize that each client's situation is unique and craft customized strategies rather than one-size-fits-all approaches.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-[#006D77] mx-auto mb-4">
                <svg className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0A2342] mb-3">Transparent Communication</h3>
              <p className="text-gray-700">
                We provide clear, jargon-free explanations of complex legal matters, ensuring clients fully understand their options and implications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#0A2342] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-playfair font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Schedule a consultation to discuss how our unique expertise can support your cross-border objectives.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[#0A2342] bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
