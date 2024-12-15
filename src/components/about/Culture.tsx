import React from 'react';
import { Heart, Briefcase, GraduationCap, Target } from 'lucide-react';

const Culture: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Our Culture</h2>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          At Lexes Technologies, we foster a culture of innovation, continuous learning, and employee well-being.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-50 rounded-lg p-8">
          <div className="flex items-center mb-6">
            <Heart className="h-8 w-8 text-[#056daa]" />
            <h3 className="text-xl font-bold text-gray-900 ml-4">Employee Well-being</h3>
          </div>
          <p className="text-gray-600">
            We prioritize work-life balance and provide comprehensive benefits to ensure our team's physical and mental well-being.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <div className="flex items-center mb-6">
            <Briefcase className="h-8 w-8 text-[#056daa]" />
            <h3 className="text-xl font-bold text-gray-900 ml-4">Professional Growth</h3>
          </div>
          <p className="text-gray-600">
            Regular training sessions, skill development programs, and career advancement opportunities are integral to our culture.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <div className="flex items-center mb-6">
            <GraduationCap className="h-8 w-8 text-[#056daa]" />
            <h3 className="text-xl font-bold text-gray-900 ml-4">Continuous Learning</h3>
          </div>
          <p className="text-gray-600">
            We encourage continuous learning through mentorship programs, knowledge sharing sessions, and access to learning resources.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <div className="flex items-center mb-6">
            <Target className="h-8 w-8 text-[#056daa]" />
            <h3 className="text-xl font-bold text-gray-900 ml-4">Innovation Focus</h3>
          </div>
          <p className="text-gray-600">
            We foster an environment that encourages creative thinking, experimentation, and innovative problem-solving.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Culture;