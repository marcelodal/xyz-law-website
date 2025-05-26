import React from 'react';

const PracticeAreasPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[#0A2342] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Practice Areas</h1>
          <p className="text-xl max-w-3xl">
            Specialized legal expertise for international clients with interests in Brazil and cross-border matters.
          </p>
        </div>
      </div>

      {/* Practice Areas Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold text-[#0A2342] mb-4">Our Areas of Focus</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We maintain focused expertise in select practice areas, allowing us to provide depth of knowledge and sophisticated counsel for our international clientele.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <a href="#brazilian-real-estate" className="group">
              <div className="bg-gray-50 rounded-lg p-8 transition-all duration-300 group-hover:shadow-md group-hover:bg-white">
                <div className="text-[#006D77] mb-4">
                  <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#0A2342] mb-2 group-hover:text-[#006D77] transition-colors duration-300">Brazilian Real Estate</h3>
                <p className="text-gray-700">
                  Legal guidance for international investors acquiring luxury and commercial properties in Brazil.
                </p>
              </div>
            </a>
            
            <a href="#cross-border-structuring" className="group">
              <div className="bg-gray-50 rounded-lg p-8 transition-all duration-300 group-hover:shadow-md group-hover:bg-white">
                <div className="text-[#006D77] mb-4">
                  <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#0A2342] mb-2 group-hover:text-[#006D77] transition-colors duration-300">Cross-Border Structuring</h3>
                <p className="text-gray-700">
                  Sophisticated asset protection and business structures spanning multiple jurisdictions.
                </p>
              </div>
            </a>
            
            <a href="#international-client-services" className="group">
              <div className="bg-gray-50 rounded-lg p-8 transition-all duration-300 group-hover:shadow-md group-hover:bg-white">
                <div className="text-[#006D77] mb-4">
                  <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#0A2342] mb-2 group-hover:text-[#006D77] transition-colors duration-300">International Client Services</h3>
                <p className="text-gray-700">
                  Specialized assistance for non-Brazilian clients navigating the Brazilian legal system.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Brazilian Real Estate */}
      <section id="brazilian-real-estate" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-playfair font-bold text-[#0A2342] mb-6">Brazilian Real Estate</h2>
              <p className="text-gray-700 mb-4">
                We guide international clients through all aspects of Brazilian property acquisition, from luxury residential to strategic commercial investments:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-[#0A2342] mb-2">Coastal Properties</h3>
                  <p className="text-gray-700 text-sm">
                    Premium locations in Angra dos Reis, Trancoso, Florianópolis, and other exclusive coastal areas.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-[#0A2342] mb-2">Urban Luxury Residences</h3>
                  <p className="text-gray-700 text-sm">
                    High-end apartments and homes in São Paulo, Rio de Janeiro, and other major cities.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-[#0A2342] mb-2">Commercial Real Estate</h3>
                  <p className="text-gray-700 text-sm">
                    Office spaces, retail properties, and mixed-use developments for international businesses.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-[#0A2342] mb-2">Agricultural Land</h3>
                  <p className="text-gray-700 text-sm">
                    Rural properties with compliance expertise in specialized regulations for foreign ownership.
                  </p>
                </div>
              </div>
              <p className="text-gray-700">
                Our comprehensive approach addresses the unique challenges foreign investors face in the Brazilian property market, from ownership restrictions to tax considerations and estate planning.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg mb-6">
                {/* Placeholder for luxury property image */}
                <div className="flex items-center justify-center h-full">
                  <span className="text-gray-500">Luxury Property Image</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#0A2342] mb-3">Key Considerations for Foreign Investors</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-[#006D77]">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <p className="ml-2 text-gray-700 text-sm">Border zone restrictions (150km from borders)</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-[#006D77]">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <p className="ml-2 text-gray-700 text-sm">CPF (tax ID) requirements for foreign buyers</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-[#006D77]">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <p className="ml-2 text-gray-700 text-sm">Rural land ownership limitations</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-[#006D77]">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <p className="ml-2 text-gray-700 text-sm">Brazilian forced heirship rules affecting estate planning</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Border Structuring */}
      <section id="cross-border-structuring" className="py-16 bg-white">
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
                <h3 className="text-xl font-semibold text-[#0A2342] mb-3">Client Objectives We Address</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-[#006D77] flex items-center justify-center">
                      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-700">Asset protection from political and economic risks</p>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-[#006D77] flex items-center justify-center">
                      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-700">Privacy and confidentiality concerns</p>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-[#006D77] flex items-center justify-center">
                      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-700">Succession planning across multiple jurisdictions</p>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-[#006D77] flex items-center justify-center">
                      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-700">Tax efficiency (within legal compliance frameworks)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-playfair font-bold text-[#0A2342] mb-6">Cross-Border Structuring</h2>
              <p className="text-gray-700 mb-4">
                We design and implement sophisticated legal structures that span multiple jurisdictions while maintaining strict compliance:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[#006D77]">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">Asset protection strategies for high-net-worth individuals</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[#006D77]">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">Privacy-enhancing ownership arrangements</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[#006D77]">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">Estate and succession planning for international families</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[#006D77]">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">Business structures for entrepreneurs entering the Brazilian market</p>
                </li>
              </ul>
              <p className="text-gray-700">
                Each structure is tailored to the client's specific objectives, risk tolerance, and long-term goals, with careful attention to reporting requirements and tax implications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* International Client Services */}
      <section id="international-client-services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-playfair font-bold text-[#0A2342] mb-6">International Client Services</h2>
              <p className="text-gray-700 mb-4">
                We provide specialized services for non-Brazilian clients navigating the Brazilian legal system:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[#006D77]">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">Guidance on visa and residency matters</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[#006D77]">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">Banking and financial account establishment</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[#006D77]">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">Compliance with Brazilian Central Bank regulations</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[#006D77]">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">Representation in legal proceedings requiring Brazilian counsel</p>
                </li>
              </ul>
              <p className="text-gray-700">
                Our international background ensures we understand both the legal requirements and the practical concerns of clients operating across borders.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg mb-6">
                {/* Placeholder for international client image */}
                <div className="flex items-center justify-center h-full">
                  <span className="text-gray-500">International Client Image</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#0A2342] mb-3">The Cross-Cultural Advantage</h3>
              <p className="text-gray-700 mb-4">
                Our unique combination of Brazilian and international experience allows us to:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-[#006D77]">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-2 text-gray-700 text-sm">Bridge communication gaps between Brazilian authorities and international clients</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-[#006D77]">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-2 text-gray-700 text-sm">Anticipate and address cultural misunderstandings before they become problems</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-[#006D77]">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-2 text-gray-700 text-sm">Explain Brazilian legal concepts in terms familiar to international clients</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-[#006D77]">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-2 text-gray-700 text-sm">Navigate bureaucratic processes with efficiency born of experience</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#0A2342] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-playfair font-bold mb-6">Ready to Discuss Your Legal Needs?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us to schedule a consultation and learn how our expertise in these practice areas can benefit your specific situation.
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

export default PracticeAreasPage;
