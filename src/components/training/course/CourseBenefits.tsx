import React from 'react';
import { Star } from 'lucide-react';

interface CourseBenefitsProps {
  benefits: string[];
}

const CourseBenefits: React.FC<CourseBenefitsProps> = ({ benefits }) => (
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-12">Course Benefits</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start">
            <div className="flex-shrink-0">
              <Star className="h-6 w-6 text-[#056daa]" />
            </div>
            <p className="ml-3 text-lg text-gray-700">{benefit}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CourseBenefits;