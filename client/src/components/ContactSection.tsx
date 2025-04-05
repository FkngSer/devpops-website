import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="contact" className="py-20 bg-spaceblack/50 relative" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col items-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <span className="font-code text-sm text-toxic uppercase tracking-wider">Contact</span>
          <h2 className="font-space font-bold text-3xl md:text-4xl mt-2 text-center">
            Start Your <span className="text-portal">Interdimensional</span> Journey
          </h2>
          <p className="text-center text-gray-400 max-w-2xl mt-4">
            Ready to take your projects to the next level? Get in touch to discuss how I can help you achieve your goals.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <motion.div 
            className="md:col-span-2 glass rounded-lg p-8"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-space font-medium text-xl mb-4 text-portal">Connect With Me</h3>
            <p className="text-gray-400 mb-6">
              I'm always open to new projects and collaborations. Feel free to reach out through any of these channels.
            </p>
            
            <div className="space-y-4">
              <a href="https://ro.linkedin.com/in/sergiupopa89" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-toxic transition-colors group">
                <div className="w-10 h-10 rounded-full bg-portal/10 flex items-center justify-center mr-3 group-hover:bg-toxic/10 transition-colors">
                  <i className="fab fa-linkedin-in text-portal group-hover:text-toxic transition-colors"></i>
                </div>
                <span>LinkedIn</span>
              </a>
              
              <a href="https://discord.com/users/906947993217925140" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-toxic transition-colors group">
                <div className="w-10 h-10 rounded-full bg-portal/10 flex items-center justify-center mr-3 group-hover:bg-toxic/10 transition-colors">
                  <i className="fab fa-discord text-portal group-hover:text-toxic transition-colors"></i>
                </div>
                <span>Discord</span>
              </a>
              

            </div>
            
            <div className="mt-8">
              <h4 className="font-space text-base mb-4 text-gray-300">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="https://x.com/devpops_" target="_blank" rel="noopener noreferrer" className="social-icon w-10 h-10 rounded-full bg-portal/10 flex items-center justify-center text-portal hover:text-toxic hover:bg-toxic/10 transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                  </svg>
                </a>
                <a href="https://t.me/devp0ps" target="_blank" rel="noopener noreferrer" className="social-icon w-10 h-10 rounded-full bg-portal/10 flex items-center justify-center text-portal hover:text-toxic hover:bg-toxic/10 transition-colors">
                  <i className="fab fa-telegram-plane"></i>
                </a>
                <a href="https://www.instagram.com/devpops_" target="_blank" rel="noopener noreferrer" className="social-icon w-10 h-10 rounded-full bg-portal/10 flex items-center justify-center text-portal hover:text-toxic hover:bg-toxic/10 transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.tiktok.com/@devpops_" target="_blank" rel="noopener noreferrer" className="social-icon w-10 h-10 rounded-full bg-portal/10 flex items-center justify-center text-portal hover:text-toxic hover:bg-toxic/10 transition-colors">
                  <i className="fab fa-tiktok"></i>
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:col-span-3 glass rounded-lg p-8"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-space font-medium text-xl mb-4 text-toxic">Message Me on Telegram</h3>
            
            <div className="space-y-6">
              <p className="text-gray-300">
                I prefer direct communication for discussing projects. Reach out to me on Telegram for:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-portal/20 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                    <svg className="w-4 h-4 text-portal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-space text-base text-portal">Project Inquiries</h4>
                    <p className="text-gray-400 mt-1">Get a quote or discuss your DevOps or Web3 project requirements</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-toxic/20 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                    <svg className="w-4 h-4 text-toxic" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-space text-base text-toxic">Technical Consultations</h4>
                    <p className="text-gray-400 mt-1">Get expert advice on blockchain tech, cloud architecture or CI/CD pipelines</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-warmred/20 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                    <svg className="w-4 h-4 text-warmred" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-space text-base text-warmred">Collaboration Opportunities</h4>
                    <p className="text-gray-400 mt-1">Discuss potential partnerships or collaboration on joint ventures</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-center">
                <a 
                  href="https://t.me/devp0ps" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="portal-btn bg-portal hover:bg-portal/80 text-spaceblack font-space font-medium px-10 py-4 rounded-md transition-all flex items-center text-lg"
                >
                  <i className="fab fa-telegram-plane mr-3 text-xl"></i>
                  Message on Telegram
                </a>
              </div>
              
              <p className="text-center text-gray-500 mt-6 text-sm">
                I typically respond within 24 hours
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
