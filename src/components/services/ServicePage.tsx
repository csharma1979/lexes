import React from 'react';
import { useParams } from 'react-router-dom';
import { Brain, Database, Cpu, BarChart, Check } from 'lucide-react';
import { services } from '../../data/services';
import PageBanner from '../PageBanner';
import ServiceEnquiryForm from './ServiceEnquiryForm';

const iconMap: { [key: string]: any } = {
  Brain,
  Database,
  Cpu,
  BarChart,
};

const ServicePage = () => {
  const { serviceId } = useParams();
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return <div>Service not found</div>;
  }

  const Icon = iconMap[service.icon];

  return (
    <div>
      <PageBanner
        title={service.title}
        subtitle={service.shortDescription}
        backgroundImage={service.image}
      />
      
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Service Overview */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <Icon className="h-16 w-16 text-[#056daa]" />
            </div>
            {service.fullDescription.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-600 mb-4 max-w-3xl mx-auto text-center">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Features and Benefits */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Features */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-6 w-6 text-[#056daa] mr-2 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Benefits</h3>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-6 w-6 text-[#056daa] mr-2 flex-shrink-0" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="max-w-2xl mx-auto">
            <ServiceEnquiryForm serviceName={service.title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;