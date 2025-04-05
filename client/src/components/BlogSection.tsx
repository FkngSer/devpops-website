import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'wouter';
import { blogPosts } from '../data/BlogData';
import BlogPost from './BlogPost';

const BlogSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [_, setLocation] = useLocation();
  
  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);
  
  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'devops', label: 'DevOps' },
    { id: 'web3', label: 'Web3' },
    { id: 'blockchain', label: 'Blockchain' }
  ];
  
  const handleViewAllArticles = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveCategory('all');
    // We're just staying on the current page and showing all articles
  };
  
  return (
    <section id="blog" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-portal">Insights</span> & <span className="text-toxic">Articles</span>
          </motion.h2>
          <motion.p 
            className="text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Deep dive into DevOps strategies and Web3 innovations with our latest articles
          </motion.p>
        </div>
        
        {/* Category Tabs */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-2">
          <div className="flex space-x-2 md:space-x-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-portal text-spaceblack font-medium shadow-lg'
                    : 'bg-transparent border border-portal/30 text-cleanwhite hover:border-portal'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <BlogPost
              key={post.id}
              id={post.id}
              title={post.title}
              summary={post.summary}
              date={post.date}
              imageUrl={post.imageUrl}
              category={post.category}
              readTime={post.readTime}
              content={post.content}
            />
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <motion.a
            href="#blog"
            className="portal-btn inline-block px-8 py-4 bg-transparent border-2 border-portal rounded-full text-portal font-bold hover:bg-portal hover:text-spaceblack transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleViewAllArticles}
          >
            View All Articles
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;