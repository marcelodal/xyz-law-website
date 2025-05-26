import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  position?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, position }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
      <div className="text-[#D4AF37] mb-4">
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-gray-700 italic mb-4">{quote}</p>
      <div>
        <p className="font-semibold text-[#0A2342]">{author}</p>
        {position && <p className="text-gray-600 text-sm">{position}</p>}
      </div>
    </div>
  );
};

export default Testimonial;
