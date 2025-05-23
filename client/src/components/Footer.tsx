const Footer = () => {
  return (
    <footer className="py-10 bg-spaceblack border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center space-x-2">
              <div className="relative w-8 h-8 rounded-full bg-portal flex items-center justify-center">
                <div className="absolute w-6 h-6 rounded-full border-2 border-toxic animate-portal"></div>
                <span className="font-space font-bold text-xs text-spaceblack">D</span>
              </div>
              <span className="font-space font-bold text-xl">
                <span className="text-portal">Devp</span><span className="text-toxic">Ops</span>
              </span>
            </a>
            <p className="text-gray-500 mt-2 text-sm">© {new Date().getFullYear()} DevpOps. All rights reserved.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a href="#about" className="text-gray-400 hover:text-portal transition-colors" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({behavior: 'smooth'}); }}>About</a>
            <a href="#services" className="text-gray-400 hover:text-portal transition-colors" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({behavior: 'smooth'}); }}>Services</a>
            <a href="#portfolio" className="text-gray-400 hover:text-portal transition-colors" onClick={(e) => { e.preventDefault(); document.getElementById('portfolio')?.scrollIntoView({behavior: 'smooth'}); }}>Portfolio</a>
            <a href="#contact" className="text-gray-400 hover:text-portal transition-colors" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}); }}>Contact</a>
          </div>
        </div>
        
        <div className="mt-8 flex justify-center space-x-6">
          <a href="https://x.com/devpops_" target="_blank" rel="noopener noreferrer" className="social-icon w-8 h-8 rounded-full bg-portal/10 flex items-center justify-center text-portal hover:text-toxic hover:bg-toxic/10 transition-colors">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
            </svg>
          </a>
          <a href="https://ro.linkedin.com/in/sergiupopa89" target="_blank" rel="noopener noreferrer" className="social-icon w-8 h-8 rounded-full bg-portal/10 flex items-center justify-center text-portal hover:text-toxic hover:bg-toxic/10 transition-colors">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.instagram.com/devpops_" target="_blank" rel="noopener noreferrer" className="social-icon w-8 h-8 rounded-full bg-portal/10 flex items-center justify-center text-portal hover:text-toxic hover:bg-toxic/10 transition-colors">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.tiktok.com/@devpops_" target="_blank" rel="noopener noreferrer" className="social-icon w-8 h-8 rounded-full bg-portal/10 flex items-center justify-center text-portal hover:text-toxic hover:bg-toxic/10 transition-colors">
            <i className="fab fa-tiktok"></i>
          </a>
          <a href="https://t.me/devp0ps" target="_blank" rel="noopener noreferrer" className="social-icon w-8 h-8 rounded-full bg-portal/10 flex items-center justify-center text-portal hover:text-toxic hover:bg-toxic/10 transition-colors">
            <i className="fab fa-telegram-plane"></i>
          </a>
          <a href="https://discord.com/users/906947993217925140" target="_blank" rel="noopener noreferrer" className="social-icon w-8 h-8 rounded-full bg-portal/10 flex items-center justify-center text-portal hover:text-toxic hover:bg-toxic/10 transition-colors">
            <i className="fab fa-discord"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
