import { useEffect, useState } from 'react';
import { useRoute, Link } from 'wouter';
import { motion } from 'framer-motion';
import { caseStudies, CaseStudy } from '../data/CaseStudyData';
import { BiArrowBack, BiTime, BiCalendar, BiUser } from 'react-icons/bi';
import { 
  FiClock, 
  FiDollarSign, 
  FiCheckCircle, 
  FiZap, 
  FiUsers, 
  FiBell, 
  FiActivity, 
  FiShield, 
  FiGitBranch, 
  FiCode, 
  FiCheck, 
  FiTrendingUp, 
  FiBellOff
} from 'react-icons/fi';

const CaseStudyDetailPage = () => {
  const [_, params] = useRoute('/case-study/:id');
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (params && params.id) {
      const id = parseInt(params.id);
      const study = caseStudies.find(study => study.id === id);
      
      // Simulate loading for a smoother experience
      setTimeout(() => {
        if (study) {
          setCaseStudy(study);
        }
        setIsLoading(false);
      }, 300);
    }
  }, [params]);

  // Function to get appropriate icon based on icon name
  const getIcon = (iconName: string) => {
    const iconProps = { className: "w-6 h-6" };
    
    switch (iconName) {
      case 'rocket': return <FiZap {...iconProps} />; // Using Zap icon for rocket
      case 'dollar': return <FiDollarSign {...iconProps} />;
      case 'check-circle': return <FiCheckCircle {...iconProps} />;
      case 'clock': return <FiClock {...iconProps} />;
      case 'zap': return <FiZap {...iconProps} />;
      case 'users': return <FiUsers {...iconProps} />;
      case 'activity': return <FiActivity {...iconProps} />;
      case 'shield': return <FiShield {...iconProps} />;
      case 'bell': return <FiBell {...iconProps} />;
      case 'bell-off': return <FiBellOff {...iconProps} />;
      case 'git-branch': return <FiGitBranch {...iconProps} />;
      case 'check': return <FiCheck {...iconProps} />;
      case 'code': return <FiCode {...iconProps} />;
      case 'trending-up': return <FiTrendingUp {...iconProps} />;
      default: return <FiCheckCircle {...iconProps} />;
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-portal border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Case Study Not Found</h1>
        <p className="mb-6">The case study you're looking for doesn't exist.</p>
        <Link href="/#portfolio">
          <a className="portal-btn inline-block px-6 py-3 bg-transparent border-2 border-portal rounded-md text-portal font-space font-medium hover:bg-portal/10 transition-all duration-300">
            Back to Portfolio
          </a>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link href="/#portfolio">
          <a className="inline-flex items-center text-portal hover:text-toxic mb-8 transition-colors">
            <BiArrowBack className="mr-2" />
            Back to all projects
          </a>
        </Link>
        
        {/* Hero Section */}
        <div className="mb-16">
          <motion.div 
            className="mb-6 flex flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase mr-4 ${
              caseStudy.category === 'DevOps' 
                ? 'bg-toxic/80 text-spaceblack' 
                : 'bg-portal/80 text-spaceblack'
            }`}>
              {caseStudy.category}
            </span>
            <span className="text-gray-400 text-sm flex items-center mr-4">
              <BiCalendar className="mr-1" /> Year: {caseStudy.year}
            </span>
            <span className="text-gray-400 text-sm flex items-center mr-4">
              <BiTime className="mr-1" /> Duration: {caseStudy.duration}
            </span>
            <span className="text-gray-400 text-sm flex items-center">
              <BiUser className="mr-1" /> Client: {caseStudy.client}
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-space font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {caseStudy.title}
          </motion.h1>
          
          <motion.p 
            className="text-lg text-gray-300 max-w-4xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {caseStudy.description}
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-2 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {caseStudy.technologies.map((tech, index) => (
              <span 
                key={index} 
                className={`px-3 py-1 rounded-full text-xs font-code ${
                  caseStudy.category === 'DevOps' 
                    ? 'bg-spaceblack border border-portal text-portal' 
                    : 'bg-spaceblack border border-toxic text-toxic'
                }`}
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
        
        {/* Hero Image */}
        <motion.div 
          className="w-full h-64 md:h-96 mb-16 overflow-hidden rounded-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <img 
            src={caseStudy.heroImage} 
            alt={caseStudy.title} 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Key Results */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl md:text-3xl font-space font-bold mb-8">Key Results</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {caseStudy.results.map((result, index) => (
              <div 
                key={index} 
                className="glass p-6 rounded-xl text-center"
              >
                <div className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  caseStudy.category === 'DevOps' ? 'bg-portal/20 text-portal' : 'bg-toxic/20 text-toxic'
                }`}>
                  {getIcon(result.icon)}
                </div>
                <h3 className="text-lg font-medium mb-1">{result.title}</h3>
                <p className={`text-2xl font-bold ${
                  caseStudy.category === 'DevOps' ? 'text-portal' : 'text-toxic'
                }`}>{result.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Challenge & Solution */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="glass p-8 rounded-xl">
            <h2 className="text-2xl font-space font-bold mb-4">The Challenge</h2>
            <p className="text-gray-300">{caseStudy.challenge}</p>
          </div>
          <div className="glass p-8 rounded-xl">
            <h2 className="text-2xl font-space font-bold mb-4">The Solution</h2>
            <p className="text-gray-300">{caseStudy.solution}</p>
          </div>
        </motion.div>
        
        {/* Process */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-space font-bold mb-8">Process & Approach</h2>
          
          <div className="space-y-12">
            {caseStudy.process.map((step, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-8">
                <div className={`md:order-${index % 2 === 0 ? 1 : 2}`}>
                  <div className="flex items-start mb-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${
                      caseStudy.category === 'DevOps' ? 'bg-portal text-spaceblack' : 'bg-toxic text-spaceblack'
                    }`}>
                      <span className="font-bold">{step.step}</span>
                    </div>
                    <h3 className="text-xl font-space font-medium">{step.title}</h3>
                  </div>
                  <p className="text-gray-300 ml-14">{step.description}</p>
                </div>
                {step.image && (
                  <div className={`md:order-${index % 2 === 0 ? 2 : 1}`}>
                    <div className="rounded-xl overflow-hidden h-full max-h-64">
                      <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Testimonial */}
        {caseStudy.testimonial && (
          <motion.div 
            className="mb-16 glass p-8 rounded-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex items-start">
              <div className="hidden md:block mr-6 flex-shrink-0">
                <svg className="w-16 h-16 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <div>
                <p className="text-xl italic mb-6">{caseStudy.testimonial.quote}</p>
                <div className="flex items-center">
                  <img 
                    src={caseStudy.testimonial.avatarUrl} 
                    alt={caseStudy.testimonial.author} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-medium">{caseStudy.testimonial.author}</h4>
                    <p className="text-sm text-gray-400">{caseStudy.testimonial.role}, {caseStudy.testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        
        {/* Next Steps */}
        {caseStudy.nextSteps && (
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h2 className="text-2xl md:text-3xl font-space font-bold mb-6">What's Next</h2>
            <div className="glass p-8 rounded-xl">
              <p className="text-gray-300">{caseStudy.nextSteps}</p>
            </div>
          </motion.div>
        )}
        
        {/* Gallery */}
        {caseStudy.gallery && caseStudy.gallery.length > 0 && (
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-space font-bold mb-6">Project Gallery</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {caseStudy.gallery.map((image, index) => (
                <div key={index} className="rounded-xl overflow-hidden">
                  <img src={image} alt={`${caseStudy.title} - Gallery ${index + 1}`} className="w-full h-60 object-cover" />
                </div>
              ))}
            </div>
          </motion.div>
        )}
        
        {/* CTA */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <h2 className="text-2xl md:text-3xl font-space font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Let's collaborate on your next DevOps or Web3 project and create something extraordinary together.
          </p>
          <Link href="/#contact">
            <a className="portal-btn inline-block px-8 py-4 bg-portal hover:bg-portal/80 text-spaceblack font-space font-medium rounded-md transition-all duration-300">
              Get in Touch
            </a>
          </Link>
        </motion.div>
        
        {/* Navigation */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudy.id > 1 && (
            <Link href={`/case-study/${caseStudy.id - 1}`}>
              <a className="glass p-6 rounded-xl hover:shadow-lg transition-all group">
                <span className="text-sm text-portal mb-2 inline-block">Previous Project</span>
                <h3 className="text-xl font-bold group-hover:text-portal transition-colors">
                  {caseStudies.find(study => study.id === caseStudy.id - 1)?.title}
                </h3>
              </a>
            </Link>
          )}
          
          {caseStudy.id < caseStudies.length && (
            <Link href={`/case-study/${caseStudy.id + 1}`}>
              <a className="glass p-6 rounded-xl hover:shadow-lg transition-all group ml-auto text-right">
                <span className="text-sm text-portal mb-2 inline-block">Next Project</span>
                <h3 className="text-xl font-bold group-hover:text-portal transition-colors">
                  {caseStudies.find(study => study.id === caseStudy.id + 1)?.title}
                </h3>
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetailPage;