import React from 'react';
import { Brain, Database, Cpu, BarChart } from 'lucide-react';
import PageBanner from './PageBanner';

const services = [
  {
    icon: Brain,
    title: 'AI Solutions',
    description: 'Custom AI solutions to automate processes and enhance decision-making.',
  },
  {
    icon: Database,
    title: 'Machine Learning',
    description: 'Advanced ML models for predictive analytics and pattern recognition.',
  },
  {
    icon: Cpu,
    title: 'Computer Vision',
    description: 'Intelligent image and video analysis for various applications.',
  },
  {
    icon: BarChart,
    title: 'Data Analytics',
    description: 'Transform raw data into actionable business insights.',
  },
];

// Separate component for the services content without banner
export const ServicesContent = () => (
  <section id="services" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Our Services
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
          Comprehensive AI and ML solutions to drive your business forward
        </p>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <div className="inline-flex p-3 rounded-lg bg-[#056daa] text-white group-hover:scale-110 transition-transform duration-300">
                <service.icon size={24} />
              </div>
            </div>
            <div className="pt-8 text-center">
              <h3 className="text-xl font-medium text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-500">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Main component with banner for the services route
const Services = () => {
  return (
    <>
      <PageBanner
        title="Our Services"
        subtitle="Comprehensive AI and ML solutions tailored to your business needs"
        backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920&h=600"
      />
      <ServicesContent />
    </>
  );
};

export default Services;