import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { blogPosts } from '../../data/blogs';
import BlogCard from './BlogCard';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const BlogCarousel: React.FC = () => {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          prevEl: '.blog-swiper-button-prev',
          nextEl: '.blog-swiper-button-next',
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
        {blogPosts.map((post) => (
          <SwiperSlide key={post.id}>
            <BlogCard post={post} />
          </SwiperSlide>
        ))}
      </Swiper>
      
      <button className="blog-swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors">
        <ChevronLeft className="h-6 w-6 text-gray-600" />
      </button>
      <button className="blog-swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors">
        <ChevronRight className="h-6 w-6 text-gray-600" />
      </button>
    </div>
  );
};

export default BlogCarousel;