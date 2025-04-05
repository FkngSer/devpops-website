import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeMode = 'rick' | 'morty'; // Rick = dark/blue theme, Morty = light/yellow theme

interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
  setTheme: (theme: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize theme from localStorage or default to 'rick' (dark mode)
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const savedTheme = localStorage.getItem('theme');
    return (savedTheme === 'rick' || savedTheme === 'morty') ? savedTheme : 'rick';
  });

  // Toggle between themes
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'rick' ? 'morty' : 'rick');
  };

  // Update document classes and localStorage when theme changes
  useEffect(() => {
    const root = document.documentElement;
    
    // Remove all theme classes first
    root.classList.remove('theme-rick', 'theme-morty');
    
    // Add the appropriate theme class
    root.classList.add(`theme-${theme}`);
    
    // Store the selection in localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default useTheme;