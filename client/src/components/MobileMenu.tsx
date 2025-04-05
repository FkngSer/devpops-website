import { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-spaceblack bg-opacity-95 z-50 md:hidden"
        >
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-end">
              <button 
                id="closeMenuBtn" 
                className="text-cleanwhite focus:outline-none"
                onClick={onClose}
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <nav className="mt-10 flex flex-col items-center space-y-6">
              <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({behavior: 'smooth'}); onClose(); }} className="font-space text-xl text-cleanwhite hover:text-portal transition-colors">About</a>
              <a href="#services" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({behavior: 'smooth'}); onClose(); }} className="font-space text-xl text-cleanwhite hover:text-portal transition-colors">Services</a>
              <a href="#portfolio" onClick={(e) => { e.preventDefault(); document.getElementById('portfolio')?.scrollIntoView({behavior: 'smooth'}); onClose(); }} className="font-space text-xl text-cleanwhite hover:text-portal transition-colors">Portfolio</a>
              <a href="#blog" onClick={(e) => { e.preventDefault(); document.getElementById('blog')?.scrollIntoView({behavior: 'smooth'}); onClose(); }} className="font-space text-xl text-cleanwhite hover:text-portal transition-colors">Blog</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}); onClose(); }} className="font-space text-xl text-cleanwhite hover:text-portal transition-colors">Contact</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}); onClose(); }} className="font-space bg-portal text-spaceblack px-6 py-3 rounded hover:bg-darkportal transition-colors mt-4">Get Started</a>
              
              <div className="mt-8 flex flex-col items-center">
                <div className="text-cleanwhite mb-2">Switch Theme</div>
                <ThemeToggle />
              </div>
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
