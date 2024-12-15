import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import LeadForm from './LeadForm';
import Button from './common/Button';
import RegistrationModal from './registration/RegistrationModal';
import { bannerSlides } from '../data/bannerSlides';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Hero: React.FC = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  return (
    <div className="relative pt-16">
      <RegistrationModal 
        isOpen={isRegistrationOpen} 
        onClose={() => setIsRegistrationOpen(false)} 
      />
      
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-[700px]"
      >
        {bannerSlides.map((slide, index) => {
          const Icon = slide.icon;
          return (
            <SwiperSlide key={index}>
              <div className="relative h-full">
                <div className="absolute inset-0">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#056daa]/90 to-blue-900/75" />
                </div>
                
                <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="h-full flex items-center justify-between">
                    <div className="max-w-xl">
                      <div className="flex items-center space-x-2 mb-4">
                        <Icon className="h-8 w-8 text-blue-200" />
                        <span className="text-blue-200 text-xl font-medium">
                          {slide.subtitle}
                        </span>
                      </div>
                      
                      <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl mb-6">
                        {slide.title}
                      </h1>
                      
                      <p className="mt-3 text-lg text-blue-100 sm:text-xl max-w-xl mb-8">
                        {slide.description}
                      </p>
                      
                      <div className="mt-5">
                        <Button 
                          variant="white"
                          onClick={() => setIsRegistrationOpen(true)}
                        >
                          Get Started
                        </Button>
                      </div>
                    </div>

                    <div className="hidden lg:block">
                      <LeadForm />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Hero;