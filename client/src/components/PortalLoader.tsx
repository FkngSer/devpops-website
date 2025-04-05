import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface PortalLoaderProps {
  isLoading: boolean;
  onLoadingComplete?: () => void;
}

const PortalLoader: React.FC<PortalLoaderProps> = ({ isLoading, onLoadingComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Handle portal animation
  useEffect(() => {
    if (!isLoading) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Portal properties
    const portalConfig = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      radius: 10,
      maxRadius: Math.max(canvas.width, canvas.height) * 1.5,
      hue: 180, // Cyan like Rick's portal
      growth: 1.04,
      particleCount: 100,
      particleSpeed: 3
    };
    
    // Particles
    const particles: {
      x: number;
      y: number;
      size: number;
      speed: number;
      angle: number;
      hue: number;
      alpha: number;
    }[] = [];
    
    // Create particles
    for (let i = 0; i < portalConfig.particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * portalConfig.radius;
      
      particles.push({
        x: portalConfig.x + Math.cos(angle) * distance,
        y: portalConfig.y + Math.sin(angle) * distance,
        size: Math.random() * 3 + 1,
        speed: Math.random() * portalConfig.particleSpeed + 0.5,
        angle: angle,
        hue: portalConfig.hue + Math.random() * 30 - 15,
        alpha: Math.random() * 0.8 + 0.2
      });
    }
    
    let frameCount = 0;
    const maxFrames = 120; // Approximately 2 seconds at 60fps
    let animationFrame: number;
    
    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw portal background
      const gradient = ctx.createRadialGradient(
        portalConfig.x,
        portalConfig.y,
        0,
        portalConfig.x,
        portalConfig.y,
        portalConfig.radius
      );
      
      gradient.addColorStop(0, 'hsla(180, 80%, 60%, 0.7)');
      gradient.addColorStop(0.7, 'hsla(180, 70%, 45%, 0.5)');
      gradient.addColorStop(1, 'hsla(180, 70%, 30%, 0)');
      
      ctx.beginPath();
      ctx.arc(portalConfig.x, portalConfig.y, portalConfig.radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Draw portal swirl
      for (let i = 0; i < 10; i++) {
        const angle = (frameCount / 20) + (i / 10) * Math.PI * 2;
        const swirlX = portalConfig.x + Math.cos(angle) * (portalConfig.radius * 0.8);
        const swirlY = portalConfig.y + Math.sin(angle) * (portalConfig.radius * 0.8);
        
        ctx.beginPath();
        ctx.arc(swirlX, swirlY, portalConfig.radius / 10, 0, Math.PI * 2);
        ctx.fillStyle = 'hsla(140, 80%, 50%, 0.3)';
        ctx.fill();
      }
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Calculate distance from center
        const dx = p.x - portalConfig.x;
        const dy = p.y - portalConfig.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Update particle position - spiral motion
        p.angle += 0.01;
        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed;
        
        // If particle is outside portal, reset it
        if (distance > portalConfig.radius) {
          const newAngle = Math.random() * Math.PI * 2;
          const newDistance = Math.random() * (portalConfig.radius * 0.5);
          
          p.x = portalConfig.x + Math.cos(newAngle) * newDistance;
          p.y = portalConfig.y + Math.sin(newAngle) * newDistance;
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 100%, 50%, ${p.alpha})`;
        ctx.fill();
      }
      
      // Grow portal
      if (frameCount < maxFrames && portalConfig.radius < portalConfig.maxRadius) {
        portalConfig.radius *= portalConfig.growth;
      } else if (frameCount >= maxFrames) {
        // Portal has reached full size, trigger completion callback
        if (onLoadingComplete) {
          onLoadingComplete();
        }
        return; // Stop animation
      }
      
      frameCount++;
      animationFrame = requestAnimationFrame(animate);
    };
    
    // Start animation
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      cancelAnimationFrame(animationFrame);
    };
  }, [isLoading, onLoadingComplete]);
  
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-spaceblack"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      style={{ pointerEvents: isLoading ? 'auto' : 'none' }}
    >
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0" 
      />
      <motion.div 
        className="relative font-space text-toxic text-2xl font-bold"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isLoading ? [0, 1, 0] : 0,
          scale: isLoading ? [0.8, 1.2, 0.8] : 0.8
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: 'loop' 
        }}
      >
        Loading...
      </motion.div>
    </motion.div>
  );
};

export default PortalLoader;