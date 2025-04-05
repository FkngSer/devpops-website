import { useEffect, useState } from 'react';
import { useRoute, Link } from 'wouter';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { blogPosts, BlogPost as BlogPostType } from '../data/BlogData';
import { BiArrowBack, BiCalendar, BiTime, BiCategory } from 'react-icons/bi';

const BlogDetailPage = () => {
  const [_, params] = useRoute('/blog/:id');
  const [blogPost, setBlogPost] = useState<BlogPostType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (params && params.id) {
      const id = parseInt(params.id);
      const post = blogPosts.find(post => post.id === id);
      
      // Simulate loading for a smoother experience
      setTimeout(() => {
        if (post) {
          setBlogPost(post);
        }
        setIsLoading(false);
      }, 300);
    }
  }, [params]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-portal border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!blogPost) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
        <p className="mb-6">The blog post you're looking for doesn't exist.</p>
        <Link href="/#blog">
          <a className="portal-btn inline-block px-6 py-3 bg-transparent border-2 border-portal rounded-full text-portal font-bold hover:bg-portal hover:text-spaceblack transition-all duration-300">
            Back to Blog
          </a>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link href="/#blog">
          <a className="inline-flex items-center text-portal hover:text-toxic mb-8 transition-colors">
            <BiArrowBack className="mr-2" />
            Back to all articles
          </a>
        </Link>
        
        {/* Header */}
        <div className="mb-12">
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {blogPost.title}
          </motion.h1>
          
          <motion.div 
            className="flex flex-wrap gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className={`px-3 py-1 rounded-full text-xs font-bold inline-flex items-center ${
              blogPost.category === 'devops' 
                ? 'bg-portal text-spaceblack' 
                : blogPost.category === 'web3'
                  ? 'bg-toxic text-spaceblack'
                  : 'bg-warmred text-spaceblack'
            }`}>
              <BiCategory className="mr-1" />
              {blogPost.category.toUpperCase()}
            </span>
            <span className="inline-flex items-center text-sm opacity-70">
              <BiCalendar className="mr-1" />
              {blogPost.date}
            </span>
            <span className="inline-flex items-center text-sm opacity-70">
              <BiTime className="mr-1" />
              {blogPost.readTime}
            </span>
          </motion.div>
          
          <motion.div 
            className="flex items-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src={blogPost.author.avatarUrl} 
              alt={blogPost.author.name} 
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h3 className="font-bold">{blogPost.author.name}</h3>
              <p className="text-sm opacity-70">{blogPost.author.role}</p>
            </div>
          </motion.div>
        </div>
        
        {/* Featured Image */}
        <motion.div 
          className="w-full h-64 md:h-96 mb-12 overflow-hidden rounded-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src={blogPost.imageUrl} 
            alt={blogPost.title} 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Content */}
        <motion.div 
          className="prose prose-lg md:prose-xl max-w-none prose-headings:font-bold prose-headings:text-cleanwhite prose-a:text-portal prose-code:text-toxic prose-code:bg-spaceblack/30 prose-code:rounded prose-code:px-1 prose-strong:text-portal prose-hr:border-white/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <ReactMarkdown>
            {blogPost.content}
          </ReactMarkdown>
        </motion.div>
        
        {/* Navigation */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPost.id > 1 && (
            <Link href={`/blog/${blogPost.id - 1}`}>
              <a className="glass p-6 rounded-xl hover:shadow-lg transition-all group">
                <span className="text-sm text-portal mb-2 inline-block">Previous Article</span>
                <h3 className="text-xl font-bold group-hover:text-portal transition-colors">
                  {blogPosts.find(post => post.id === blogPost.id - 1)?.title}
                </h3>
              </a>
            </Link>
          )}
          
          {blogPost.id < blogPosts.length && (
            <Link href={`/blog/${blogPost.id + 1}`}>
              <a className="glass p-6 rounded-xl hover:shadow-lg transition-all group ml-auto text-right">
                <span className="text-sm text-portal mb-2 inline-block">Next Article</span>
                <h3 className="text-xl font-bold group-hover:text-portal transition-colors">
                  {blogPosts.find(post => post.id === blogPost.id + 1)?.title}
                </h3>
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;