import { motion } from 'framer-motion';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="min-h-[80vh] relative flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 md:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={itemVariants} className="font-space font-bold text-4xl lg:text-5xl mb-4">
              <span className="text-toxic">DevOps</span> Engineering & <span className="text-portal">Web3</span> Solutions
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg mb-8 text-gray-300">
              Building the interdimensional bridges between your code and infrastructure across the multiverse.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <a href="#services" className="portal-btn bg-portal hover:bg-darkportal text-spaceblack font-space font-medium px-6 py-3 rounded-md transition-all transform hover:scale-105">
                Explore Services
              </a>
              <a href="#contact" className="portal-btn bg-transparent border-2 border-toxic text-toxic hover:bg-toxic/10 font-space font-medium px-6 py-3 rounded-md transition-all">
                Contact Me
              </a>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mt-12 flex items-center">
              <div className="mr-4 pr-4 border-r border-gray-700">
                <p className="font-code text-sm text-gray-400">Tech Stack</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="inline-block py-1 px-2 bg-spaceblack/50 rounded text-sm font-code text-gray-300 border border-gray-800">AWS</span>
                <span className="inline-block py-1 px-2 bg-spaceblack/50 rounded text-sm font-code text-gray-300 border border-gray-800">Docker</span>
                <span className="inline-block py-1 px-2 bg-spaceblack/50 rounded text-sm font-code text-gray-300 border border-gray-800">Kubernetes</span>
                <span className="inline-block py-1 px-2 bg-spaceblack/50 rounded text-sm font-code text-gray-300 border border-gray-800">MultiversX</span>
                <span className="inline-block py-1 px-2 bg-spaceblack/50 rounded text-sm font-code text-gray-300 border border-gray-800">Solana</span>
              </div>
            </motion.div>
          </motion.div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-portal/20 animate-portal flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-4 rounded-full border-4 border-dashed border-portal animate-pulse"></div>
                <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-spaceblack flex items-center justify-center z-10">
                  <div className="text-center">
                    <h2 className="font-space font-bold text-xl text-portal">DevpOps</h2>
                    <p className="font-code text-sm text-toxic mt-2">Sergiu Popa</p>
                    <p className="font-code text-xs text-gray-400 mt-1">DevOps Engineer</p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-10 -right-6 animate-float delay-500">
                <div className="w-12 h-12 rounded-lg bg-spaceblack border border-toxic flex items-center justify-center">
                  <span className="text-toxic text-sm font-code">K8s</span>
                </div>
              </div>
              <div className="absolute -bottom-4 left-0 animate-float delay-800">
                <div className="w-12 h-12 rounded-lg bg-spaceblack border border-portal flex items-center justify-center">
                  <span className="text-portal text-sm font-code">SOL</span>
                </div>
              </div>
              <div className="absolute top-20 -left-8 animate-float delay-1200">
                <div className="w-12 h-12 rounded-lg bg-spaceblack border border-warmred flex items-center justify-center">
                  <span className="text-warmred text-sm font-code">CI/CD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background grid element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-spaceblack to-transparent z-10"></div>
    </section>
  );
};

export default HeroSection;
