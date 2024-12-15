import React from 'react';
import EnrollButton from '../common/EnrollButton';

const PlacementCTA: React.FC = () => (
  <section className="py-20 bg-[#056daa]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold text-white mb-6">Transform your dreams into reality with us!</h2>
      <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
        Take the first step towards a bright career. Enroll in our training programs and unlock endless job opportunities.
      </p>
      <EnrollButton variant="white">
        Get Started Today
      </EnrollButton>
    </div>
  </section>
);

export default PlacementCTA;