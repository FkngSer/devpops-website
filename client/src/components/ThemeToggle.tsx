import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/use-theme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'rick';

  return (
    <motion.button
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`relative w-14 h-7 rounded-full p-1 flex items-center justify-center overflow-hidden focus:outline-none focus:ring-2 focus:ring-portal ${
        isDark 
          ? 'bg-gradient-to-r from-portal to-darkportal border border-toxic/20' 
          : 'bg-gradient-to-r from-yellow-300 to-yellow-400 border border-yellow-500/20'
      }`}
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div 
        className="absolute inset-0 flex items-center justify-between px-1"
        initial={false}
      >
        {/* Rick portal-like icon for dark mode */}
        <svg 
          viewBox="0 0 24 24" 
          className={`w-5 h-5 text-white ${isDark ? 'opacity-100' : 'opacity-50'}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          <path d="M15 9l-3 3-3-3" />
          <path d="M12 12v5" />
        </svg>
        
        {/* Morty yellow-themed sun icon for light mode */}
        <svg 
          viewBox="0 0 24 24" 
          className={`w-5 h-5 text-yellow-800 ${!isDark ? 'opacity-100' : 'opacity-50'}`}
          fill="currentColor"
        >
          <path d="M12 17a5 5 0 100-10 5 5 0 000 10z" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      </motion.div>
      
      {/* The slider knob */}
      <motion.div 
        className={`absolute w-5 h-5 rounded-full flex items-center justify-center shadow-lg ${
          isDark 
            ? 'bg-gradient-to-r from-portal to-cyan-400 ' 
            : 'bg-gradient-to-r from-yellow-100 to-yellow-300'
        }`}
        animate={{ 
          x: isDark ? -5 : 13,
          scale: isDark ? [1, 1.2, 1] : 1,
          rotate: isDark ? [0, 360] : 0,
        }}
        transition={{ 
          duration: 0.3, 
          type: 'spring', 
          bounce: 0.5,
          rotate: { duration: 0.5, repeat: isDark ? Infinity : 0, repeatType: "loop" }
        }}
      >
        {/* Rick's face or Morty's face */}
        <div className="w-3 h-3">
          {isDark ? (
            // Simplified Rick face
            <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
              <path d="M12 3a9 9 0 100 18 9 9 0 000-18z" fill="#97fef8" />
              <path d="M8 14l2 2M14 14l2 2" stroke="#005b99" strokeWidth="2" />
              <path d="M15 9c.5522847 0 1-.44771525 1-1s-.4477153-1-1-1-1 .44771525-1 1 .4477153 1 1 1zM9 9c.55228475 0 1-.44771525 1-1s-.44771525-1-1-1-1 .44771525-1 1 .44771525 1 1 1z" 
                fill="#005b99" />
            </svg>
          ) : (
            // Simplified Morty face
            <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
              <path d="M12 3a9 9 0 100 18 9 9 0 000-18z" fill="#ffd580" />
              <path d="M9 10c.55228475 0 1-.44771525 1-1s-.44771525-1-1-1-1 .44771525-1 1 .44771525 1 1 1zM15 10c.5522847 0 1-.44771525 1-1s-.4477153-1-1-1-1 .44771525-1 1 .4477153 1 1 1z" 
                fill="#bf8040" />
              <path d="M9 15c1 1 5 1 6 0" stroke="#bf8040" strokeWidth="1" />
            </svg>
          )}
        </div>
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;