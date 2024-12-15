import React from 'react';

const milestones = [
  {
    year: 2010,
    title: 'Foundation',
    description: 'Established as a technology consulting firm in Bangalore',
  },
  {
    year: 2013,
    title: 'Training Division',
    description: 'Launched professional training programs in IT and BFSI sectors',
  },
  {
    year: 2015,
    title: 'AI Solutions',
    description: 'Expanded into AI and ML solutions development',
  },
  {
    year: 2017,
    title: 'Global Expansion',
    description: 'Extended operations to multiple countries',
  },
  {
    year: 2020,
    title: 'Digital Transformation',
    description: 'Launched comprehensive digital learning platforms',
  },
  {
    year: 2023,
    title: 'Innovation Hub',
    description: 'Established AI research and innovation center',
  },
];

const Timeline: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - 2010;
  const progressWidth = Math.min((yearsInBusiness / 15) * 100, 100); // Using 15 years as full scale

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Journey</h2>
          <div className="mt-8 bg-gray-200 rounded-full h-4 relative max-w-2xl mx-auto">
            <div 
              className="absolute left-0 top-0 h-full bg-[#056daa] rounded-full transition-all duration-1000"
              style={{ width: `${progressWidth}%` }}
            />
            <div className="absolute -top-8 right-0 text-sm font-medium text-gray-600">
              {yearsInBusiness} Years of Excellence
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200" />
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className={`relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} md:flex md:items-center`}>
                <div className="md:w-1/2 md:px-8">
                  <div className={`bg-white p-6 rounded-lg shadow-lg ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                    <div className="text-xl font-bold text-[#056daa] mb-2">{milestone.year}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-[#056daa]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;