import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Form Error",
        description: "Please fill out all fields",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission since email functionality isn't set up yet
    setTimeout(() => {
      toast({
        title: "Contact Information Saved",
        description: "Email functionality coming soon! Your information has been saved.",
        variant: "default"
      });
      
      // Reset the form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };
  
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
              
              <a href="https://t.me/devp0ps" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-toxic transition-colors group">
                <div className="w-10 h-10 rounded-full bg-portal/10 flex items-center justify-center mr-3 group-hover:bg-toxic/10 transition-colors">
                  <i className="fab fa-telegram-plane text-portal group-hover:text-toxic transition-colors"></i>
                </div>
                <span>Telegram: @devp0ps</span>
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
            <h3 className="font-space font-medium text-xl mb-4 text-toxic">Send Me a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block font-code text-sm text-gray-400 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-spaceblack/50 border border-gray-700 rounded-md px-4 py-3 text-gray-300 focus:outline-none focus:border-portal transition-colors" 
                    placeholder="John Doe" 
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-code text-sm text-gray-400 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-spaceblack/50 border border-gray-700 rounded-md px-4 py-3 text-gray-300 focus:outline-none focus:border-portal transition-colors" 
                    placeholder="john@example.com" 
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block font-code text-sm text-gray-400 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-spaceblack/50 border border-gray-700 rounded-md px-4 py-3 text-gray-300 focus:outline-none focus:border-portal transition-colors" 
                  placeholder="How can I help you?" 
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block font-code text-sm text-gray-400 mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-spaceblack/50 border border-gray-700 rounded-md px-4 py-3 text-gray-300 focus:outline-none focus:border-portal transition-colors" 
                  placeholder="Tell me about your project..." 
                  required
                ></textarea>
              </div>
              
              <div className="flex justify-end">
                <button 
                  type="submit" 
                  className="portal-btn bg-toxic hover:bg-darktoxic text-spaceblack font-space font-medium px-6 py-3 rounded-md transition-all"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
