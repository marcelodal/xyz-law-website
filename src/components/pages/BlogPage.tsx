import React from 'react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Understanding Brazilian Real Estate Ownership for Foreign Investors',
      excerpt: 'Navigate the legal nuances of property acquisition in Brazil, from ownership restrictions to registration requirements and tax considerations.',
      date: 'May 15, 2025',
      author: 'Marcelo Dalpasquale',
      category: 'Real Estate',
      image: '/blog-real-estate.jpg'
    },
    {
      id: 2,
      title: 'Cross-Border Estate Planning: Brazilian Assets in International Portfolios',
      excerpt: 'Explore strategies for integrating Brazilian property and investments into comprehensive estate plans that span multiple jurisdictions.',
      date: 'April 28, 2025',
      author: 'Marcelo Dalpasquale',
      category: 'Asset Structuring',
      image: '/blog-estate-planning.jpg'
    },
    {
      id: 3,
      title: 'The Strategic Value of Sworn Translation in Brazilian Legal Matters',
      excerpt: 'Learn why official certified translation is critical for international documents used in Brazilian legal proceedings and how it affects transaction timelines.',
      date: 'April 10, 2025',
      author: 'Marcelo Dalpasquale',
      category: 'Translation Services',
      image: '/blog-translation.jpg'
    },
    {
      id: 4,
      title: 'Luxury Property Markets in Brazil: Legal Considerations by Region',
      excerpt: 'Compare the legal landscapes of Brazil\'s premier luxury markets, from coastal paradises to urban centers, with insights on regional regulations.',
      date: 'March 22, 2025',
      author: 'Marcelo Dalpasquale',
      category: 'Real Estate',
      image: '/blog-luxury-property.jpg'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[#0A2342] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Insights</h1>
          <p className="text-xl max-w-3xl">
            Expert perspectives on Brazilian legal matters and cross-border considerations for international clients.
          </p>
        </div>
      </div>

      {/* Blog Posts Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  {/* Placeholder for blog post image */}
                  <div className="flex items-center justify-center h-full">
                    <span className="text-gray-500">{post.category} Image</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#0A2342] mb-2 hover:text-[#006D77] transition-colors duration-300">
                    <a href={`/blog/${post.id}`}>{post.title}</a>
                  </h3>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-gray-300 flex-shrink-0"></div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{post.author}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gray-50 rounded-lg p-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-playfair font-bold text-[#0A2342] mb-4">Subscribe to Our Insights</h2>
              <p className="text-gray-700 mb-6">
                Receive updates on Brazilian legal matters and international investment considerations directly to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 rounded-md border-gray-300 focus:ring-[#006D77] focus:border-[#006D77] flex-grow"
                />
                <button
                  type="submit"
                  className="bg-[#006D77] hover:bg-[#005a63] text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#006D77]"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-playfair font-bold text-[#0A2342] mb-8 text-center">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="/blog/category/real-estate" className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 text-center">
              <div className="text-[#006D77] mb-3">
                <svg className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0A2342] mb-2">Real Estate</h3>
              <p className="text-gray-700">Property acquisition, due diligence, and ownership structures in Brazil.</p>
            </a>
            
            <a href="/blog/category/asset-structuring" className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 text-center">
              <div className="text-[#006D77] mb-3">
                <svg className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0A2342] mb-2">Asset Structuring</h3>
              <p className="text-gray-700">Cross-border entity formation, asset protection, and succession planning.</p>
            </a>
            
            <a href="/blog/category/translation-services" className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 text-center">
              <div className="text-[#006D77] mb-3">
                <svg className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0A2342] mb-2">Translation Services</h3>
              <p className="text-gray-700">Official document translation and bilingual legal document drafting.</p>
            </a>
            
            <a href="/blog/category/international-clients" className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 text-center">
              <div className="text-[#006D77] mb-3">
                <svg className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0A2342] mb-2">International Clients</h3>
              <p className="text-gray-700">Visa matters, banking establishment, and cross-cultural considerations.</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
