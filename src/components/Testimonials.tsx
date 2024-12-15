import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Senior Data Scientist',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200',
    content: 'The Machine Learning training program was exceptional. The hands-on projects and industry-focused curriculum helped me transition into AI development seamlessly.',
  },
  {
    name: 'Priya Sharma',
    role: 'AI Solutions Architect',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200',
    content: 'The deep learning specialization course was comprehensive and practical. The mentors were highly knowledgeable and provided excellent guidance throughout.',
  },
  {
    name: 'Amit Patel',
    role: 'Banking Operations Manager',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200',
    content: 'The banking operations course provided in-depth knowledge of modern banking practices. The practical training helped me advance in my career significantly.',
  },
  {
    name: 'Neha Verma',
    role: 'HR Manager',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200',
    content: 'The HR management program was excellent. The curriculum covered all aspects of modern HR practices and helped me implement effective strategies.',
  },
  {
    name: 'Suresh Reddy',
    role: 'Computer Vision Engineer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200',
    content: 'The computer vision course with PyTorch was outstanding. The practical projects helped me develop real-world applications effectively.',
  },
  {
    name: 'Meera Iyer',
    role: 'Insurance Operations Head',
    image: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?auto=format&fit=crop&q=80&w=200&h=200',
    content: 'The insurance management program provided comprehensive knowledge of the industry. The case studies were particularly helpful in understanding real scenarios.',
  },
  {
    name: 'Arjun Nair',
    role: 'Supply Chain Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200',
    content: 'The supply chain management course was excellent. It covered all aspects of modern SCM and helped optimize our operations significantly.',
  },
  {
    name: 'Ananya Desai',
    role: 'ML Team Lead',
    image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&q=80&w=200&h=200',
    content: 'The AI solutions training was transformative. The practical approach and industry-relevant projects helped our team deliver better results.',
  },
  {
    name: 'Karthik Krishnan',
    role: 'Risk Analytics Manager',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200',
    content: 'The banking and risk management training was comprehensive. It helped me understand modern banking challenges and solutions effectively.',
  },
  {
    name: 'Pooja Mehta',
    role: 'Talent Acquisition Head',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=200&h=200',
    content: 'The HR management course was perfectly structured. It provided valuable insights into modern HR practices and talent management strategies.',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Alumni Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Success stories from our training programs
          </p>
        </div>

        <div className="mt-20 relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="px-4"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 h-full">
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <img
                        className="h-12 w-12 rounded-full object-cover"
                        src={testimonial.image}
                        alt={testimonial.name}
                      />
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 italic">"{testimonial.content}"</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors">
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors">
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;