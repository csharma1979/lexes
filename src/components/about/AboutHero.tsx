import React from 'react';
import { Brain, Users, Award, Globe } from 'lucide-react';

const AboutHero: React.FC = () => (
  <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
    <div className="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1920&h=600"
        alt="About Lexes Technologies"
        className="w-full h-full object-cover opacity-10"
      />
    </div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Lexes Technologies</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Since 2010, we've been at the forefront of technological innovation, delivering cutting-edge AI solutions and transformative training programs that empower businesses and individuals alike.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Brain className="h-8 w-8 text-[#056daa]" />
          </div>
          <div className="text-3xl font-bold mb-2">13+</div>
          <div className="text-gray-300">Years of Excellence</div>
        </div>
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Users className="h-8 w-8 text-[#056daa]" />
          </div>
          <div className="text-3xl font-bold mb-2">5000+</div>
          <div className="text-gray-300">Trained Professionals</div>
        </div>
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Award className="h-8 w-8 text-[#056daa]" />
          </div>
          <div className="text-3xl font-bold mb-2">500+</div>
          <div className="text-gray-300">Corporate Clients</div>
        </div>
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Globe className="h-8 w-8 text-[#056daa]" />
          </div>
          <div className="text-3xl font-bold mb-2">20+</div>
          <div className="text-gray-300">Global Presence</div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutHero;