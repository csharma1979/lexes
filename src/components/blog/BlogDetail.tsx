import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getBlogPost, getRelatedPosts } from '../../data/blogs';
import BlogCard from './BlogCard';
import PageBanner from '../PageBanner';

const BlogDetail: React.FC = () => {
  const { blogId } = useParams<{ blogId: string }>();
  const post = getBlogPost(blogId || '');
  const relatedPosts = getRelatedPosts(blogId || '');

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div>
      <PageBanner
        title={post.title}
        subtitle={post.excerpt}
        backgroundImage={post.image}
      />

      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Featured Image */}
                <div className="relative h-[400px]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="prose max-w-none">
                    {post.content.map((paragraph, index) => (
                      <p key={index} className="text-gray-600 mb-6 text-lg leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="mt-8 pt-8 border-t border-gray-100">
                    <h4 className="text-sm font-semibold text-gray-600 mb-3">
                      Related Topics
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Related Articles
                </h3>
                <div className="space-y-6">
                  {relatedPosts.map((relatedPost) => (
                    <BlogCard
                      key={relatedPost.id}
                      post={relatedPost}
                      compact
                    />
                  ))}
                </div>
              </div>

              {/* Additional Resources Section */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Explore More
                </h3>
                <div className="space-y-4">
                  {post.tags.map((tag) => (
                    <div
                      key={tag}
                      className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <h4 className="font-medium text-gray-900">
                        More about {tag}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Discover related content about {tag.toLowerCase()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;