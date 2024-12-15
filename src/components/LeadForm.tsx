import React from 'react';
import EnrollButton from './common/EnrollButton';

const LeadForm: React.FC = () => {
  return (
    <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-xl w-full max-w-[32rem]">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Get Started Today</h3>
      <p className="text-gray-600 mb-6">
        Take the first step towards your career transformation. Register now for our comprehensive training programs.
      </p>
      <EnrollButton fullWidth>
        Get Started Today
      </EnrollButton>
    </div>
  );
};

export default LeadForm;