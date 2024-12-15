import React from 'react';
import EnrollButton from '../common/EnrollButton';

const CourseEnrollment: React.FC = () => (
  <section className="py-16 bg-[#056daa]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
      <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
        Enroll now and take the first step towards your new career. Limited seats available!
      </p>
      <EnrollButton variant="white">
        Enroll Now
      </EnrollButton>
    </div>
  </section>
);

export default CourseEnrollment;