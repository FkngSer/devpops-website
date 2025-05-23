import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLocation } from 'wouter';
import { caseStudies } from '../data/CaseStudyData';

const PortfolioSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [_, setLocation] = useLocation();
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const handleViewAllProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    // In the future, we might create a dedicated projects page
    setLocation('/#portfolio');
  };

  return (
    <section id="portfolio" className="py-20 relative" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col items-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <span className="font-code text-sm text-toxic uppercase tracking-wider">Portfolio</span>
          <h2 className="font-space font-bold text-3xl md:text-4xl mt-2 text-center">
            Interdimensional <span className="text-portal">Projects</span>
          </h2>
          <p className="text-center text-gray-400 max-w-2xl mt-4">
            Explore a selection of my most interesting projects across various dimensions.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {caseStudies.map((project, index) => (
            <PortfolioCard
              key={project.id}
              id={project.id}
              image={project.thumbnailImage}
              category={project.category}
              title={project.title}
              description={project.description}
              technologies={project.technologies.slice(0, 3)} // Show only first 3 technologies
            />
          ))}
        </motion.div>
        
        <div className="flex justify-center mt-12">
          <a 
            href="/#portfolio" 
            onClick={handleViewAllProjects}
            className="portal-btn bg-transparent border-2 border-portal text-portal hover:bg-portal/10 font-space font-medium px-6 py-3 rounded-md transition-all"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

interface PortfolioCardProps {
  id: number;
  image: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
}

const PortfolioCard = ({ 
  id,
  image, 
  category, 
  title, 
  description, 
  technologies
}: PortfolioCardProps) => {
  const [_, setLocation] = useLocation();

  const handleViewCaseStudy = (e: React.MouseEvent) => {
    e.preventDefault();
    setLocation(`/case-study/${id}`);
  };

  // Determine category styling
  const isDevOps = category === 'DevOps';
  const categoryClass = isDevOps ? "bg-toxic/80" : "bg-portal/80";
  const techClass = isDevOps ? "text-portal" : "text-toxic";

  return (
    <motion.div 
      className="portal-card glass rounded-lg overflow-hidden transition-all hover:-translate-y-2"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
      }}
    >
      <div className="relative aspect-video overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-spaceblack to-transparent"></div>
        <div className="absolute bottom-3 left-3">
          <span className={`font-code text-xs ${categoryClass} text-spaceblack px-2 py-1 rounded`}>{category}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-space text-xl font-medium mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, techIndex) => (
            <span key={techIndex} className={`text-xs font-code bg-spaceblack px-2 py-1 rounded ${techClass}`}>{tech}</span>
          ))}
        </div>
        <a 
          href={`/case-study/${id}`}
          onClick={handleViewCaseStudy}
          className="font-code text-portal hover:text-toxic transition-colors text-sm flex items-center"
        >
          View Case Study
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default PortfolioSection;
