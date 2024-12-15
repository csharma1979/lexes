import React from 'react';

interface PageBannerProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const PageBanner = ({ title, subtitle, backgroundImage }: PageBannerProps) => {
  return (
    <div 
      className="relative h-[300px] flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto">{subtitle}</p>
      </div>
    </div>
  );
};

export default PageBanner;