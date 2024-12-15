import React from 'react';
import { Link } from 'react-router-dom';
import BlogCarousel from './BlogCarousel';
import Button from '../common/Button';

const HomeBlogSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Latest Insights
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Stay updated with our latest thoughts and discoveries
          </p>
        </div>

        <BlogCarousel />

        <div className="mt-12 text-center">
          <Link to="/blog">
            <Button>
              View All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeBlogSection;