import React from 'react';
import EnrollButton from '../../common/EnrollButton';

interface CourseHeroProps {
  title: string;
  description: string;
  duration: string;
  price: number;
  image: string;
}

const CourseHero: React.FC<CourseHeroProps> = ({
  title,
  description,
  duration,
  price,
  image
}) => (
  <div className="relative">
    <div 
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black/60" />
    </div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="text-white">
          <h1 className="text-4xl font-bold mb-6">{title}</h1>
          <p className="text-lg mb-8">{description}</p>
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
              <p className="text-sm">Duration</p>
              <p className="text-xl font-semibold">{duration}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
              <p className="text-sm">Price</p>
              <p className="text-xl font-semibold">₹{price.toLocaleString()}</p>
            </div>
          </div>
          <EnrollButton variant="white">
            Enroll Now
          </EnrollButton>
        </div>
      </div>
    </div>
  </div>
);

export default CourseHero;