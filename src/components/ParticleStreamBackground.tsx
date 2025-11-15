import React, { useEffect, useRef, useState } from "react";

interface ParticleStreamBackgroundProps {
  isDark: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  trail: { x: number; y: number; opacity: number }[];
  hue: number;
}

export default function ParticleStreamBackground({
  isDark,
}: ParticleStreamBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    // Initialize particles
    const particleCount = 150;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 2.5 + 1,
        opacity: Math.random() * 0.5 + 0.3,
        trail: [],
        hue: isDark ? 210 : 220, // Blue hue
      });
    }

    particlesRef.current = particles;

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener("mousemove", handleMouseMove);
    }

    // Animation loop
    const animate = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      // Fade out previous frame for trail effect
      ctx.fillStyle = isDark
        ? "rgba(17, 24, 39, 0.15)"
        : "rgba(255, 255, 255, 0.15)";
      ctx.fillRect(0, 0, width, height);

      particles.forEach((particle) => {
        // Calculate distance to mouse
        const dx = mousePos.current.x - particle.x;
        const dy = mousePos.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Mouse interaction - create gravity well
        if (distance < 200) {
          const force = (200 - distance) / 200;
          particle.vx += (dx / distance) * force * 0.15;
          particle.vy += (dy / distance) * force * 0.15;

          // Change color near mouse
          particle.hue = isDark ? 200 : 210; // More blue
        } else {
          // Return to default color
          particle.hue = isDark ? 210 : 220;
        }

        // Add slight drift to create flow effect
        particle.vx += (Math.random() - 0.5) * 0.05;
        particle.vy += (Math.random() - 0.5) * 0.05;

        // Limit velocity
        const speed = Math.sqrt(particle.vx ** 2 + particle.vy ** 2);
        if (speed > 3) {
          particle.vx = (particle.vx / speed) * 3;
          particle.vy = (particle.vy / speed) * 3;
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = width;
        if (particle.x > width) particle.x = 0;
        if (particle.y < 0) particle.y = height;
        if (particle.y > height) particle.y = 0;

        // Add current position to trail
        particle.trail.push({
          x: particle.x,
          y: particle.y,
          opacity: particle.opacity,
        });

        // Limit trail length
        if (particle.trail.length > 15) {
          particle.trail.shift();
        }

        // Draw trail
        particle.trail.forEach((point, index) => {
          const trailOpacity = (index / particle.trail.length) * point.opacity;
          const trailSize =
            particle.size * (index / particle.trail.length) * 0.8;

          ctx.beginPath();
          ctx.arc(point.x, point.y, trailSize, 0, Math.PI * 2);

          // Use HSL for smooth color transitions
          ctx.fillStyle = `hsla(${particle.hue}, 70%, ${isDark ? 60 : 50}%, ${
            trailOpacity * 0.6
          })`;
          ctx.fill();
        });

        // Draw particle with glow
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 2
        );

        // Near mouse - bright blue glow
        if (distance < 200) {
          gradient.addColorStop(
            0,
            `hsla(${particle.hue}, 80%, 70%, ${particle.opacity})`
          );
          gradient.addColorStop(
            0.5,
            `hsla(${particle.hue}, 70%, 60%, ${particle.opacity * 0.5})`
          );
          gradient.addColorStop(1, `hsla(${particle.hue}, 60%, 50%, 0)`);
        } else {
          // Default state - subtle
          gradient.addColorStop(
            0,
            isDark
              ? `rgba(0, 0, 0, ${particle.opacity})`
              : `rgba(0, 0, 0, ${particle.opacity * 0.8})`
          );
          gradient.addColorStop(
            0.5,
            isDark
              ? `rgba(0, 0, 0, ${particle.opacity * 0.5})`
              : `rgba(0, 0, 0, ${particle.opacity * 0.4})`
          );
          gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw connections to nearby particles
        particles.forEach((otherParticle) => {
          const dx = otherParticle.x - particle.x;
          const dy = otherParticle.y - particle.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100 && dist > 0) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);

            const lineOpacity = (1 - dist / 100) * 0.15;
            ctx.strokeStyle = isDark
              ? `rgba(0, 0, 0, ${lineOpacity})`
              : `rgba(0, 0, 0, ${lineOpacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      const parent = canvas.parentElement;
      if (parent) {
        parent.removeEventListener("mousemove", handleMouseMove);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mounted, isDark]);

  if (!mounted) {
    return <div className="absolute inset-0" />;
  }

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{
        opacity: 1,
        zIndex: 0,
      }}
    />
  );
}

