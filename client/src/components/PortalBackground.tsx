import { useEffect, useRef } from 'react';

const PortalBackground = () => {
  const portalBgRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!portalBgRef.current) return;
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    portalBgRef.current.appendChild(canvas);
    
    const particles: Particle[] = [];
    const particleCount = 100;
    
    interface Particle {
      x: number;
      y: number;
      radius: number;
      color: string;
      speed: number;
    }
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        color: i % 2 === 0 ? '#00B5CC' : '#97CE4C',
        speed: Math.random() * 0.5 + 0.1
      });
    }
    
    function animate() {
      requestAnimationFrame(animate);
      if (!ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.y -= particle.speed;
        
        if (particle.y < -10) {
          particle.y = canvas.height + 10;
          particle.x = Math.random() * canvas.width;
        }
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
    }
    
    animate();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (portalBgRef.current && portalBgRef.current.contains(canvas)) {
        portalBgRef.current.removeChild(canvas);
      }
    };
  }, []);
  
  return (
    <div id="portal-bg" ref={portalBgRef} className="fixed inset-0 z-[-2] opacity-20 pointer-events-none"></div>
  );
};

export default PortalBackground;
