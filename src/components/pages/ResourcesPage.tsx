import React from 'react';

const ResourcesPage: React.FC = () => {
  const resources = [
    {
      id: 1,
      title: 'Brazilian Luxury Property Acquisition Guide',
      description: 'A comprehensive resource for international investors considering high-end real estate in Brazil.',
      type: 'Guide',
      image: '/resources-property-guide.jpg'
    },
    {
      id: 2,
      title: 'International Structuring Handbook',
      description: 'Strategic approaches to cross-border asset protection and management with Brazilian components.',
      type: 'Handbook',
      image: '/resources-structuring-handbook.jpg'
    },
    {
      id: 3,
      title: 'Legal Checklist for Foreign Entrepreneurs in Brazil',
      description: 'Essential legal considerations for international business founders entering the Brazilian market.',
      type: 'Checklist',
      image: '/resources-checklist.jpg'
    }
  ];

  const faqs = [
    {
      id: 1,
      question: 'Do I need a Brazilian tax ID (CPF) to purchase property?',
      answer: 'Yes, foreign individuals must obtain a CPF (Cadastro de Pessoas Físicas) before purchasing real estate in Brazil. We assist clients with this process as part of our comprehensive service.'
    },
    {
      id: 2,
      question: 'Can foreigners own property near Brazil\'s borders or coastal areas?',
      answer: 'There are restrictions on foreign ownership in border regions and certain coastal areas. However, compliant structures can be established to facilitate investment while adhering to Brazilian law.'
    },
    {
      id: 3,
      question: 'How are property transactions taxed in Brazil?',
      answer: 'Property transactions involve several taxes, including ITBI (property transfer tax), which varies by municipality. International investors may also face tax considerations in their home countries.'
    },
    {
      id: 4,
      question: 'What is the role of a Cartório in Brazilian real estate transactions?',
      answer: 'Cartórios (Notary Offices) play a central role in Brazilian property transactions, handling documentation, verification, and registration. Understanding their procedures is essential for smooth transactions.'
    },
    {
      id: 5,
      question: 'How does Brazilian inheritance law affect foreign property owners?',
      answer: 'Brazilian forced heirship rules may apply to property located in Brazil, potentially conflicting with estate plans established under other legal systems. Proper structuring can address these challenges.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[#0A2342] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Resources</h1>
          <p className="text-xl max-w-3xl">
            Educational materials and practical guides for international clients navigating Brazilian legal matters.
          </p>
        </div>
      </div>

      {/* Resources Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold text-[#0A2342] mb-4">Guides & Publications</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Download our comprehensive resources designed to help international clients navigate complex Brazilian legal matters.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <div key={resource.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  {/* Placeholder for resource image */}
                  <div className="flex items-center justify-center h-full">
                    <span className="text-gray-500">{resource.type} Image</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full mb-3">
                    {resource.type}
                  </div>
                  <h3 className="text-xl font-semibold text-[#0A2342] mb-2">{resource.title}</h3>
                  <p className="text-gray-700 mb-4">{resource.description}</p>
                  <a 
                    href={`/resources/${resource.id}`}
                    className="inline-flex items-center text-[#006D77] hover:text-[#005a63] font-medium"
                  >
                    Download
                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold text-[#0A2342] mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Common questions from international clients about Brazilian legal matters and our services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.id} className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-[#0A2342] mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Request Custom Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0A2342] rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-12 md:p-12 text-center">
              <h2 className="text-3xl font-playfair font-bold text-white mb-4">Need Customized Information?</h2>
              <p className="text-gray-200 mb-8 max-w-3xl mx-auto">
                Contact us to request resources tailored to your specific situation or to schedule a consultation with our team.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[#0A2342] bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
