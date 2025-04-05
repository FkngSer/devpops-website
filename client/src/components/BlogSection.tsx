import { useState } from 'react';
import { motion } from 'framer-motion';

interface BlogPost {
  id: number;
  title: string;
  summary: string;
  date: string;
  imageUrl: string;
  category: 'devops' | 'web3' | 'blockchain';
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'How to Implement CI/CD Pipelines for Web3 Projects',
    summary: 'Learn how to set up efficient CI/CD pipelines for Web3 applications to ensure quality and streamline deployment.',
    date: 'Apr 5, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'devops',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'MultiversX Smart Contract Testing Strategies',
    summary: 'Explore effective testing methodologies for MultiversX blockchain smart contracts to ensure security and reliability.',
    date: 'Apr 2, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'web3',
    readTime: '7 min read'
  },
  {
    id: 3,
    title: 'Scaling Solana DApps: Infrastructure Challenges',
    summary: 'Discover how to address common infrastructure challenges when scaling decentralized applications on Solana.',
    date: 'Mar 28, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1642052502080-42274e955fbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'blockchain',
    readTime: '6 min read'
  },
  {
    id: 4,
    title: 'Kubernetes for Web3 Applications: Best Practices',
    summary: 'Learn how to effectively leverage Kubernetes to orchestrate and scale your Web3 infrastructure.',
    date: 'Mar 21, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'devops',
    readTime: '8 min read'
  },
  {
    id: 5,
    title: 'Secure Deployment Strategies for Base Chain Projects',
    summary: 'Explore secure deployment methodologies specifically tailored for projects built on Base, the Ethereum Layer 2 solution.',
    date: 'Mar 15, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1644061594233-697dbc35961e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'web3',
    readTime: '6 min read'
  },
  {
    id: 6,
    title: 'TON Blockchain: Infrastructure Setup Guide',
    summary: 'A comprehensive guide to setting up robust infrastructure for projects building on The Open Network (TON).',
    date: 'Mar 8, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1669023414166-8b2bb0c69fa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'blockchain',
    readTime: '9 min read'
  }
];

const BlogSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);
  
  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'devops', label: 'DevOps' },
    { id: 'web3', label: 'Web3' },
    { id: 'blockchain', label: 'Blockchain' }
  ];
  
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
            <motion.div
              key={post.id}
              className="glass rounded-xl overflow-hidden hover:shadow-xl transition-all group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    post.category === 'devops' 
                      ? 'bg-portal text-spaceblack' 
                      : post.category === 'web3'
                        ? 'bg-toxic text-spaceblack'
                        : 'bg-warmred text-spaceblack'
                  }`}>
                    {post.category.toUpperCase()}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3 text-sm opacity-70">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-portal transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="mb-4 opacity-80 line-clamp-3">
                  {post.summary}
                </p>
                <a 
                  href="#" 
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
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <motion.a
            href="#"
            className="portal-btn inline-block px-8 py-4 bg-transparent border-2 border-portal rounded-full text-portal font-bold hover:bg-portal hover:text-spaceblack transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Articles
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;