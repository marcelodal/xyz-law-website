import React from 'react';

const ServicesPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[#0A2342] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl">
            Comprehensive legal and advisory services for international clients navigating Brazilian opportunities and cross-border matters.
          </p>
        </div>
      </div>

      {/* Services Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold text-[#0A2342] mb-4">How We Help Our Clients</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our services combine Brazilian legal expertise, international perspective, and practical business insight to provide comprehensive solutions for sophisticated clients.
            </p>
          </div>
        </div>
      </section>

      {/* Real Estate Legal Consulting */}
      <section id="legal-representation" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-playfair font-bold text-[#0A2342] mb-6">Real Estate Legal Consulting & Representation</h2>
              <p className="text-gray-700 mb-4">
                XYZ Law provides comprehensive legal support throughout the property acquisition process in Brazil, from initial strategy to final registration. Our services include:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[#006D77]">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">Strategic consultation on regional property laws and ownership structures</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[#006D77]">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">Thorough due diligence (title verification, zoning checks, environmental compliance)</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[#006D77]">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">Negotiation support with sellers and developers</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[#006D77]">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">Drafting and review of bilingual purchase agreements</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[#006D77]">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">Coordination with notaries (Cartórios) and local authorities</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[#006D77]">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">Oversight of final title registration</p>
                </li>
              </ul>
              <p className="text-gray-700">
                For clients who have not yet identified a property, our Pre-Acquisition Advisory service provides education on regional laws, potential risks, and property screening to ensure you pursue only viable opportunities.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg mb-6">
                {/* Placeholder for real estate image */}
                <div className="flex items-center justify-center h-full">
                  <span className="text-gray-500">Real Estate Image</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#0A2342] mb-3">Client Success Story</h3>
              <p className="text-gray-700 italic mb-4">
                "XYZ Law's thorough due diligence uncovered a potential title issue that would have been costly to resolve after purchase. Their expertise saved us from a significant investment mistake and guided us to a better property opportunity."
              </p>
              <p className="text-gray-600 text-sm">— International Family Office Client</p>
            </div>
          </div>
        </div>
      </section>

      {/* International Structuring */}
      <section id="international-structuring" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gray-50 rounded-lg shadow-md p-8">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg mb-6">
                  {/* Placeholder for structuring image */}
                  <div className="flex items-center justify-center h-full">
                    <span className="text-gray-500">Structuring Diagram</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#0A2342] mb-3">Our Approach</h3>
                <p className="text-gray-700 mb-4">
                  We focus on creating compliant, efficient structures that achieve client objectives while minimizing unnecessary complexity. Each solution is tailored to the specific needs and risk profile of the client.
                </p>
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#006D77] flex items-center justify-center">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <p className="ml-4 text-gray-700 font-medium">Legitimate, compliant strategies that protect client interests</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-playfair font-bold text-[#0A2342] mb-6">International Investment & Asset Structuring</h2>
              <p className="text-gray-700 mb-4">
                We advise clients on establishing and managing compliant cross-border structures for holding Brazilian assets or conducting international business. Our approach emphasizes:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[#006D77]">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">Analysis of client objectives (asset protection, privacy, estate planning)</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[#006D77]">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">Jurisdiction selection based on legal requirements and tax implications</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[#006D77]">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">Coordination with registered agents for entity formation and maintenance</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[#006D77]">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">Rigorous compliance with international reporting requirements</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[#006D77]">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">Clear documentation of ownership and control arrangements</p>
                </li>
              </ul>
              <p className="text-gray-700">
                All structuring advice focuses on legitimate, compliant strategies that protect client interests while meeting regulatory obligations in relevant jurisdictions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certified Translation */}
      <section id="certified-translation" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-playfair font-bold text-[#0A2342] mb-6">Certified Translation Services</h2>
              <p className="text-gray-700 mb-4">
                As a <em>Tradutor Juramentado</em> (Sworn Translator) certified by the Brazilian authorities, our principal attorney provides official, legally recognized translations of documents required for Brazilian legal processes:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[#006D77]">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">Personal identification documents</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[#006D77]">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">Birth, marriage, and death certificates</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[#006D77]">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">Financial statements and proof of funds</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[#006D77]">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">Powers of attorney</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[#006D77]">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">Corporate documents</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[#006D77]">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">Court orders and legal judgments</p>
                </li>
              </ul>
              <p className="text-gray-700 mb-6">
                This in-house capability eliminates a common friction point for international clients, ensuring accuracy, confidentiality, and seamless integration with your legal matters.
              </p>
              <h3 className="text-xl font-semibold text-[#0A2342] mb-3">Bilingual Legal Document Drafting</h3>
              <p className="text-gray-700">
                We draft sophisticated legal documents that bridge Brazilian and international legal concepts, ensuring clarity and enforceability in both contexts. Our documents combine Brazilian legal precision with an understanding of common law concepts and international client expectations.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg mb-6">
                {/* Placeholder for translation image */}
                <div className="flex items-center justify-center h-full">
                  <span className="text-gray-500">Translation Service Image</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#0A2342] mb-3">The Value of Sworn Translation</h3>
              <p className="text-gray-700 mb-4">
                In Brazil, only translations performed by a certified <em>Tradutor Juramentado</em> are legally recognized by courts, notaries, and government agencies. This official status is essential for:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-[#006D77]">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-2 text-gray-700 text-sm">Property transactions</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-[#006D77]">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-2 text-gray-700 text-sm">Visa applications</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-[#006D77]">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-2 text-gray-700 text-sm">Business registration</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-[#006D77]">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-2 text-gray-700 text-sm">Legal proceedings</p>
                </li>
              </ul>
              <p className="text-gray-700 text-sm">
                Having this service integrated with your legal representation streamlines processes and ensures consistency across all documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#0A2342] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-playfair font-bold mb-6">Discuss Your Specific Needs</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Every client situation is unique. Contact us to discuss how our services can be tailored to your specific requirements.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[#0A2342] bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
