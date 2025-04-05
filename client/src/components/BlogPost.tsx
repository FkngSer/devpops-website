import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'wouter';

interface BlogPostProps {
  id: number;
  title: string;
  summary: string;
  date: string;
  imageUrl: string;
  category: 'devops' | 'web3' | 'blockchain';
  readTime: string;
  content?: string;
}

export const BlogPost: React.FC<BlogPostProps> = ({ 
  id, 
  title, 
  summary, 
  date, 
  imageUrl, 
  category, 
  readTime,
  content
}) => {
  const [_, setLocation] = useLocation();

  const handleReadMore = (e: React.MouseEvent) => {
    e.preventDefault();
    setLocation(`/blog/${id}`);
  };

  return (
    <motion.div
      className="glass rounded-xl overflow-hidden hover:shadow-xl transition-all group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
            category === 'devops' 
              ? 'bg-portal text-spaceblack' 
              : category === 'web3'
                ? 'bg-toxic text-spaceblack'
                : 'bg-warmred text-spaceblack'
          }`}>
            {category.toUpperCase()}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3 text-sm opacity-70">
          <span>{date}</span>
          <span>{readTime}</span>
        </div>
        <h3 className="text-xl font-bold mb-3 group-hover:text-portal transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="mb-4 opacity-80 line-clamp-3">
          {summary}
        </p>
        <a 
          href={`/blog/${id}`}
          onClick={handleReadMore}
          className="inline-flex items-center font-medium text-portal hover:text-toxic transition-colors"
        >
          Read More
          <svg 
            className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default BlogPost;