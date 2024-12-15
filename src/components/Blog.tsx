import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogs';
import BlogCard from './blog/BlogCard';
import PageBanner from './PageBanner';

const Blog: React.FC = () => {
  return (
    <>
      <PageBanner
        title="Latest Insights"
        subtitle="Stay updated with our latest thoughts and discoveries in AI, ML, and technology"
        backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1920&h=600"
      />
      
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;