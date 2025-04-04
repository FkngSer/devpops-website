import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const PortfolioSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
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
          {portfolioProjects.map((project, index) => (
            <PortfolioCard
              key={index}
              image={project.image}
              category={project.category}
              categoryClass={project.categoryClass}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              techClass={project.techClass}
            />
          ))}
        </motion.div>
        
        <div className="flex justify-center mt-12">
          <a href="#" className="portal-btn bg-transparent border-2 border-portal text-portal hover:bg-portal/10 font-space font-medium px-6 py-3 rounded-md transition-all">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

interface PortfolioCardProps {
  image: string;
  category: string;
  categoryClass: string;
  title: string;
  description: string;
  technologies: string[];
  techClass: string;
}

const PortfolioCard = ({ 
  image, 
  category, 
  categoryClass, 
  title, 
  description, 
  technologies, 
  techClass 
}: PortfolioCardProps) => {
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
          {technologies.map((tech, index) => (
            <span key={index} className={`text-xs font-code bg-spaceblack px-2 py-1 rounded ${techClass}`}>{tech}</span>
          ))}
        </div>
        <a href="#" className="font-code text-portal hover:text-toxic transition-colors text-sm flex items-center">
          View Case Study
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

// Portfolio Data
const portfolioProjects = [
  {
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "DevOps",
    categoryClass: "bg-toxic/80",
    title: "CloudNative Ecosystem",
    description: "Implemented a complete Kubernetes-based infrastructure for a fintech startup, reducing deployment time by 80%.",
    technologies: ["Kubernetes", "Terraform", "AWS"],
    techClass: "text-portal"
  },
  {
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Web3",
    categoryClass: "bg-portal/80",
    title: "MultiversX NFT Marketplace",
    description: "Designed and implemented the infrastructure for a high-volume NFT marketplace handling 10,000+ daily transactions.",
    technologies: ["MultiversX", "IPFS", "GraphQL"],
    techClass: "text-toxic"
  },
  {
    image: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "DevOps",
    categoryClass: "bg-toxic/80",
    title: "CI/CD Pipeline Automation",
    description: "Built a streamlined CI/CD pipeline for a SaaS company, enabling 30+ daily deployments with zero downtime.",
    technologies: ["GitHub Actions", "Docker", "ArgoCD"],
    techClass: "text-portal"
  },
  {
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Web3",
    categoryClass: "bg-portal/80",
    title: "Solana Token Tracker",
    description: "Developed a Discord bot for Solana communities, providing real-time alerts, wallet verification and community management.",
    technologies: ["Solana", "Node.js", "Discord.js"],
    techClass: "text-toxic"
  },
  {
    image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "DevOps",
    categoryClass: "bg-toxic/80",
    title: "Observability Platform",
    description: "Created a comprehensive monitoring solution for a microservices architecture, reducing incident response time by 65%.",
    technologies: ["Prometheus", "Grafana", "ELK Stack"],
    techClass: "text-portal"
  },
  {
    image: "https://images.unsplash.com/photo-1560732488-7b5f4d54f584?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Web3",
    categoryClass: "bg-portal/80",
    title: "Cross-Chain DeFi Platform",
    description: "Engineered the backend infrastructure for a cross-chain DeFi protocol connecting MultiversX, Solana, Base, and TON.",
    technologies: ["MultiversX", "Solana", "Base"],
    techClass: "text-toxic"
  }
];

export default PortfolioSection;
