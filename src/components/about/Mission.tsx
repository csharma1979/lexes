import React from 'react';
import { Target, Users, Lightbulb } from 'lucide-react';

const Mission: React.FC = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-3 gap-12">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Target className="h-12 w-12 text-[#056daa]" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
          <p className="text-gray-600">
            To empower businesses and individuals with cutting-edge technology solutions and comprehensive training programs that drive innovation and growth.
          </p>
        </div>

        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Lightbulb className="h-12 w-12 text-[#056daa]" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
          <p className="text-gray-600">
            To be a global leader in AI solutions and professional training, setting new standards in technological innovation and education.
          </p>
        </div>

        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Users className="h-12 w-12 text-[#056daa]" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Our Values</h3>
          <p className="text-gray-600">
            Excellence, innovation, integrity, and customer satisfaction form the cornerstone of everything we do.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Mission;