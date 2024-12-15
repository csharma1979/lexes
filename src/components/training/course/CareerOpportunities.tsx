import React from 'react';
import { Briefcase } from 'lucide-react';

interface CareerOpportunitiesProps {
  opportunities: string[];
}

const CareerOpportunities: React.FC<CareerOpportunitiesProps> = ({ opportunities }) => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-12">Career Opportunities</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {opportunities.map((opportunity, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Briefcase className="h-6 w-6 text-[#056daa]" />
              <h3 className="ml-3 text-lg font-semibold text-gray-900">{opportunity}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CareerOpportunities;