import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTabs } from '../hooks/use-tabs';

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const { activeTab, setActiveTab } = useTabs(['devops', 'web3', 'consulting'], 'devops');
  
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
    <section id="services" className="py-20 bg-spaceblack/50 relative" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col items-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <span className="font-code text-sm text-toxic uppercase tracking-wider">Services</span>
          <h2 className="font-space font-bold text-3xl md:text-4xl mt-2 text-center">
            Interdimensional <span className="text-portal">Solutions</span>
          </h2>
          <p className="text-center text-gray-400 max-w-2xl mt-4">
            I offer a wide range of DevOps and Web3 services to help your projects achieve their full potential across all dimensions.
          </p>
        </motion.div>
        
        {/* Services Tabs */}
        <div className="mb-8">
          <motion.div 
            className="flex flex-wrap justify-center space-x-2 md:space-x-4 mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button 
              className={`tab-btn px-4 py-2 border-b-2 font-space transition-colors ${activeTab === 'devops' ? 'tab-active' : 'border-transparent'}`}
              onClick={() => setActiveTab('devops')}
            >
              DevOps Services
            </button>
            <button 
              className={`tab-btn px-4 py-2 border-b-2 font-space transition-colors ${activeTab === 'web3' ? 'tab-active' : 'border-transparent'}`}
              onClick={() => setActiveTab('web3')}
            >
              Web3 Solutions
            </button>
            <button 
              className={`tab-btn px-4 py-2 border-b-2 font-space transition-colors ${activeTab === 'consulting' ? 'tab-active' : 'border-transparent'}`}
              onClick={() => setActiveTab('consulting')}
            >
              Consulting
            </button>
          </motion.div>
          
          {/* DevOps Tab Content */}
          {activeTab === 'devops' && (
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {devopsServices.map((service, index) => (
                <ServiceCard 
                  key={`devops-${index}`}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  iconClass="text-portal"
                  iconBgClass="bg-portal/20"
                  featureIconClass="text-toxic"
                />
              ))}
            </motion.div>
          )}
          
          {/* Web3 Tab Content */}
          {activeTab === 'web3' && (
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {web3Services.map((service, index) => (
                <ServiceCard 
                  key={`web3-${index}`}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  iconClass="text-toxic"
                  iconBgClass="bg-toxic/20"
                  featureIconClass="text-portal"
                />
              ))}
            </motion.div>
          )}
          
          {/* Consulting Tab Content */}
          {activeTab === 'consulting' && (
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {consultingServices.map((service, index) => (
                <ServiceCard 
                  key={`consulting-${index}`}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  iconClass="text-warmred"
                  iconBgClass="bg-warmred/20"
                  featureIconClass="text-portal"
                />
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  iconClass: string;
  iconBgClass: string;
  featureIconClass: string;
}

const ServiceCard = ({ icon, title, description, features, iconClass, iconBgClass, featureIconClass }: ServiceCardProps) => {
  return (
    <motion.div 
      className="glass rounded-lg p-6 transition-transform hover:-translate-y-2"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
      }}
    >
      <div className={`w-12 h-12 rounded-full ${iconBgClass} flex items-center justify-center mb-4`}>
        <i className={`${icon} ${iconClass}`}></i>
      </div>
      <h3 className="font-space font-medium text-xl mb-2 text-cleanwhite">{title}</h3>
      <p className="text-gray-400 mb-4">
        {description}
      </p>
      <ul className="font-code text-sm text-gray-300 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className={`${featureIconClass} mr-2`}>▸</span> {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

// Service Data
const devopsServices = [
  {
    icon: "fas fa-cloud",
    title: "Cloud Infrastructure",
    description: "Design, deployment and management of scalable cloud infrastructure on AWS, Azure, GCP and beyond.",
    features: ["Infrastructure as Code", "Multi-cloud strategies", "Cost optimization"]
  },
  {
    icon: "fas fa-rocket",
    title: "CI/CD Pipelines",
    description: "Automated CI/CD pipelines for seamless development, testing and deployment workflows.",
    features: ["Jenkins, GitHub Actions", "Automated testing", "Deployment strategies"]
  },
  {
    icon: "fas fa-cubes",
    title: "Container Orchestration",
    description: "Expert Kubernetes and Docker implementation for containerized applications.",
    features: ["Kubernetes cluster setup", "Docker optimization", "Service mesh integration"]
  },
  {
    icon: "fas fa-shield-alt",
    title: "Security & Compliance",
    description: "Infrastructure security, vulnerability assessment and compliance management.",
    features: ["Security audits", "Compliance automation", "Secret management"]
  },
  {
    icon: "fas fa-tachometer-alt",
    title: "Monitoring & Observability",
    description: "Comprehensive monitoring, logging and observability solutions for your infrastructure.",
    features: ["Prometheus & Grafana", "ELK stack implementation", "Performance optimization"]
  },
  {
    icon: "fas fa-terminal",
    title: "Automation",
    description: "Infrastructure and process automation to improve efficiency and reduce manual work.",
    features: ["Terraform, Ansible", "Custom automation scripts", "ChatOps implementation"]
  }
];

const web3Services = [
  {
    icon: "fas fa-code-branch",
    title: "dApp Infrastructure",
    description: "Robust infrastructure design and deployment for decentralized applications on MultiversX, Solana, and more.",
    features: ["Scalable architectures", "Cross-chain integration", "API development"]
  },
  {
    icon: "fas fa-link",
    title: "Smart Contract Integration",
    description: "Seamless integration of smart contracts with frontend and backend systems.",
    features: ["MultiversX & Solana support", "Cross-chain bridges", "Wallet connectivity"]
  },
  {
    icon: "fas fa-robot",
    title: "Discord/Telegram Bots",
    description: "Custom bot development for Web3 projects, NFT drops, and community management.",
    features: ["Community automation", "Wallet integration", "Custom commands"]
  },
  {
    icon: "fas fa-gem",
    title: "NFT Infrastructure",
    description: "Complete NFT project setup on MultiversX, Solana, and other chains.",
    features: ["IPFS integration", "Minting dApps", "Metadata management"]
  },
  {
    icon: "fas fa-chart-line",
    title: "DeFi Solutions",
    description: "Implementation of decentralized finance protocols and services across multiple chains.",
    features: ["MultiversX & Solana DeFi", "TON & Base integration", "Cross-chain bridging"]
  },
  {
    icon: "fas fa-shield-alt",
    title: "Web3 Security",
    description: "Security assessments and best practices implementation for blockchain projects.",
    features: ["Contract audits", "Infrastructure hardening", "Secure key management"]
  }
];

const consultingServices = [
  {
    icon: "fas fa-lightbulb",
    title: "Strategy Consulting",
    description: "Technical strategy development for DevOps implementation and Web3 projects.",
    features: ["Roadmap planning", "Technology selection", "Transformation guidance"]
  },
  {
    icon: "fas fa-users-cog",
    title: "Team Training",
    description: "Specialized training for your team on DevOps practices and Web3 technologies.",
    features: ["Custom workshops", "Hands-on training", "Knowledge transfer"]
  },
  {
    icon: "fas fa-search",
    title: "Technical Assessment",
    description: "In-depth analysis of your current infrastructure and processes with actionable recommendations.",
    features: ["Infrastructure audit", "Process evaluation", "Gap analysis"]
  }
];

export default ServicesSection;
