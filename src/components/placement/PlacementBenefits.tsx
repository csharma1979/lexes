import React from 'react';
import { CheckCircle, Target, Network, BookOpen, Rocket } from 'lucide-react';
import { BenefitCard } from './BenefitCard';

const benefits = [
  {
    icon: CheckCircle,
    title: '100% Placement Assistance',
    description: 'We connect you with leading companies across industries.',
  },
  {
    icon: Target,
    title: 'Expert Guidance',
    description: 'Get personalized resume building, interview preparation, and career counseling.',
  },
  {
    icon: Network,
    title: 'Vast Network',
    description: 'Benefit from our extensive partnerships with top IT and Non-IT organizations.',
  },
  {
    icon: BookOpen,
    title: 'Real-Time Projects',
    description: 'Gain hands-on experience to stand out in your interviews.',
  },
  {
    icon: Rocket,
    title: 'Dedicated Support',
    description: 'Our team is with you at every step until you land your dream job.',
  },
];

const PlacementBenefits = () => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Why Choose Our Placement Services?</h2>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, index) => (
          <BenefitCard key={index} {...benefit} />
        ))}
      </div>
    </div>
  </section>
);

export default PlacementBenefits;