"use client";

import { useEffect, useRef } from "react";

interface ParticleBackgroundProps {
  className?: string;
}

export default function ParticleBackground({
  className = "",
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Detect mobile devices
  const isMobile = () => {
    return typeof window !== 'undefined' && window.innerWidth < 1000;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size to match container
    const resizeCanvas = () => {
      const container = containerRef.current;
      if (!container) return;
      
      const rect = container.getBoundingClientRect();
      const pixelRatio = window.devicePixelRatio || 1;
      
      canvas.width = rect.width * pixelRatio;
      canvas.height = rect.height * pixelRatio;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      
      ctx.scale(pixelRatio, pixelRatio);

      // Reinitialize particles with correct canvas dimensions
      initializeParticles();
    };

    // Initial setup with delay to ensure DOM is ready
    setTimeout(() => {
      resizeCanvas();
      window.addEventListener("resize", resizeCanvas);
    }, 50);

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    const colors = ["#22c55e", "#16a34a", "#8dc442", "#116839"];
    const baseParticleCount = 270;

    // Initialize particles after canvas is sized
    const initializeParticles = () => {
      particles.length = 0; // Clear existing particles
      const container = containerRef.current;
      if (!container) return;
      
      const rect = container.getBoundingClientRect();
      const mobile = isMobile();
      
      // Use half the particles on mobile for better performance
      const particleCount = mobile ? Math.floor(baseParticleCount / 2) : baseParticleCount;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          // Don't give particles velocity on mobile to prevent visual glitches
          vx: mobile ? 0 : (Math.random() - 0.5) * 0.2,
          vy: mobile ? 0 : (Math.random() - 0.5) * 0.2,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.3 + 0.3,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const container = containerRef.current;
      if (!container) return;
      
      const rect = container.getBoundingClientRect();
      const mobile = isMobile();

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Only animate particles if not on mobile
        if (!mobile) {
          // Apply gentle damping to reduce excessive movement
          particle.vx *= 0.99;
          particle.vy *= 0.99;

          // Update position
          particle.x += particle.vx;
          particle.y += particle.vy;

          // Bounce off walls with reduced energy using actual canvas dimensions
          if (particle.x <= 0 || particle.x >= rect.width) particle.vx *= -0.8;
          if (particle.y <= 0 || particle.y >= rect.height) particle.vy *= -0.8;
        }

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.save();
            ctx.globalAlpha = (1 - distance / 100) * 0.45;
            ctx.strokeStyle = "#22c55e";
            ctx.lineWidth = 0.4;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Mouse interaction (disabled on mobile)
    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      // Skip mouse interaction on mobile to prevent glitches
      if (isMobile()) return;
      
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;

      particles.forEach((particle) => {
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 80) {
          particle.vx += ((particle.x - mouseX) / distance) * 0.02;
          particle.vy += ((particle.y - mouseY) / distance) * 0.02;
        }
      });
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div ref={containerRef} className={`absolute inset-0 ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ zIndex: 1 }}
      />
    </div>
  );
}
