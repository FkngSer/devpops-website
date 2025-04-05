import { FC } from 'react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  onMenuToggle: () => void;
}

const Header: FC<HeaderProps> = ({ onMenuToggle }) => {
  return (
    <header className="glass fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <div className="relative w-10 h-10 rounded-full bg-portal flex items-center justify-center animate-pulse">
              <div className="absolute w-8 h-8 rounded-full border-2 border-toxic animate-portal"></div>
              <span className="font-space font-bold text-spaceblack">D</span>
            </div>
            <span className="font-space font-bold text-2xl">
              <span className="text-portal">Devp</span><span className="text-toxic">Ops</span>
            </span>
          </a>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="font-space text-cleanwhite hover:text-portal transition-colors" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({behavior: 'smooth'}); }}>About</a>
            <a href="#services" className="font-space text-cleanwhite hover:text-portal transition-colors" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({behavior: 'smooth'}); }}>Services</a>
            <a href="#portfolio" className="font-space text-cleanwhite hover:text-portal transition-colors" onClick={(e) => { e.preventDefault(); document.getElementById('portfolio')?.scrollIntoView({behavior: 'smooth'}); }}>Portfolio</a>
            <a href="#blog" className="font-space text-cleanwhite hover:text-portal transition-colors" onClick={(e) => { e.preventDefault(); document.getElementById('blog')?.scrollIntoView({behavior: 'smooth'}); }}>Blog</a>
            <a href="#contact" className="font-space text-cleanwhite hover:text-portal transition-colors" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}); }}>Contact</a>
            <a href="#contact" className="font-space bg-portal text-spaceblack px-4 py-2 rounded hover:bg-darkportal transition-colors" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}); }}>Get Started</a>
          </nav>
          
          {/* Theme Toggle and Mobile Menu Button */}
          <div className="flex items-center space-x-3">
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <button 
              id="menuBtn" 
              className="md:hidden text-cleanwhite focus:outline-none"
              onClick={onMenuToggle}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
