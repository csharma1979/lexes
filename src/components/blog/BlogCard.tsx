import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { BlogPost } from '../../types/blog';

interface BlogCardProps {
  post: BlogPost;
  compact?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, compact = false }) => {
  return (
    <article className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${compact ? 'flex' : ''}`}>
      <Link to={`/blog/${post.id}`}>
        <img
          className={`w-full object-cover ${compact ? 'h-32 w-32' : 'h-48'}`}
          src={post.image}
          alt={post.title}
        />
      </Link>
      <div className={`p-6 ${compact ? 'flex-1' : ''}`}>
        <Link to={`/blog/${post.id}`}>
          <h3 className={`font-semibold text-gray-900 hover:text-[#056daa] transition-colors ${compact ? 'text-lg mb-2' : 'text-xl mb-3'}`}>
            {post.title}
          </h3>
        </Link>
        {!compact && (
          <>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <Link 
              to={`/blog/${post.id}`}
              className="inline-flex items-center text-[#056daa] hover:text-blue-700 font-medium"
            >
              Read More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </>
        )}
      </div>
    </article>
  );
};

export default BlogCard;