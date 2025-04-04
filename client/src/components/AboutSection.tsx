import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SkillBar from './ui/skill-bar';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-20 relative" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col items-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <span className="font-code text-sm text-toxic uppercase tracking-wider">About Me</span>
          <h2 className="font-space font-bold text-3xl md:text-4xl mt-2 text-center">The Mind Behind <span className="text-portal">DevpOps</span></h2>
        </motion.div>
        
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <motion.div 
            className="md:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg leading-relaxed mb-6">
              Hey there! I'm <span className="text-portal font-medium">Sergiu Popa</span>, a DevOps Engineer and the mind behind <span className="text-toxic font-medium">DevpOps</span>. I specialize in optimizing software development and deployment processes with a touch of out-of-this-world efficiency.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              My mission is to build and maintain infrastructure that's not just robust and scalable, but also secure enough to withstand any attack. I've got the skills, the tools, and a healthy obsession with all things tech.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              When I'm not wrangling servers, I'm diving deep into the decentralized universe of <span className="text-toxic font-medium">Web3</span>. With expertise in <span className="text-portal font-medium">MultiversX</span> and <span className="text-toxic font-medium">Solana</span>, along with experience in Base, TON, and Bitcoin, I bring DevOps expertise to these thriving blockchain ecosystems.
            </p>
            
            {/* Skills */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <SkillBar label="DevOps" percentage={95} color="portal" isInView={isInView} delay={0.4} />
              <SkillBar label="Kubernetes" percentage={90} color="toxic" isInView={isInView} delay={0.6} />
              <SkillBar label="MultiversX" percentage={88} color="portal" isInView={isInView} delay={0.8} />
              <SkillBar label="Solana" percentage={85} color="toxic" isInView={isInView} delay={1.0} />
              <SkillBar label="Cloud Platforms" percentage={92} color="portal" isInView={isInView} delay={1.2} />
              <SkillBar label="TON & Base" percentage={75} color="toxic" isInView={isInView} delay={1.4} />
            </div>
          </motion.div>
          
          <motion.div 
            className="md:col-span-2 portal-card glass p-6 rounded-lg"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Sergiu Popa - DevOps Engineer" className="w-full h-auto rounded-lg mb-4" />
            <div className="text-center">
              <h3 className="font-space font-medium text-xl mb-1">Sergiu Popa</h3>
              <p className="font-code text-toxic text-sm mb-3">DevOps Engineer & Web3 Specialist</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="social-icon text-portal hover:text-toxic transition-colors">
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a href="#" className="social-icon text-portal hover:text-toxic transition-colors">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="social-icon text-portal hover:text-toxic transition-colors">
                  <i className="fab fa-github text-xl"></i>
                </a>
                <a href="#" className="social-icon text-portal hover:text-toxic transition-colors">
                  <i className="fab fa-discord text-xl"></i>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
