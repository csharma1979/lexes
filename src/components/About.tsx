import React from 'react';
import AboutHero from './about/AboutHero';
import Mission from './about/Mission';
import Timeline from './about/Timeline';
import Culture from './about/Culture';

const About: React.FC = () => {
  return (
    <div>
      <AboutHero />
      <Mission />
      <Timeline />
      <Culture />
    </div>
  );
};

export default About;