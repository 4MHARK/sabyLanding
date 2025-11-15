import React, { useEffect, useRef, useState } from "react";

interface GradientOrbsBackgroundProps {
  isDark: boolean;
}

interface Orb {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  hue: number;
  saturation: number;
  lightness: number;
}

export default function GradientOrbsBackground({
  isDark,
}: GradientOrbsBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);
  const mousePos = useRef({ x: -1000, y: -1000 }); // Start off-screen
  const orbsRef = useRef<Orb[]>([]);
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

      // Reinitialize orbs on resize if needed
      if (orbsRef.current.length === 0) {
        initializeOrbs();
      }
    };

    // Initialize orbs
    const initializeOrbs = () => {
      const orbs: Orb[] = [];
      const orbConfigs = [
        { hue: 210, saturation: 70, lightness: isDark ? 50 : 60, radius: 250 }, // Blue
        { hue: 280, saturation: 70, lightness: isDark ? 45 : 55, radius: 220 }, // Purple
        { hue: 320, saturation: 65, lightness: isDark ? 48 : 58, radius: 200 }, // Pink
        { hue: 170, saturation: 60, lightness: isDark ? 50 : 60, radius: 230 }, // Cyan
        { hue: 240, saturation: 75, lightness: isDark ? 52 : 62, radius: 210 }, // Indigo
        { hue: 200, saturation: 65, lightness: isDark ? 48 : 58, radius: 190 }, // Sky Blue
      ];

      orbConfigs.forEach((config, i) => {
        orbs.push({
          x:
            Math.random() * canvas.offsetWidth * 0.8 + canvas.offsetWidth * 0.1,
          y:
            Math.random() * canvas.offsetHeight * 0.8 +
            canvas.offsetHeight * 0.1,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: config.radius,
          hue: config.hue,
          saturation: config.saturation,
          lightness: config.lightness,
        });
      });

      orbsRef.current = orbs;
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);
    initializeOrbs();

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
      const orbs = orbsRef.current;

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      orbs.forEach((orb, index) => {
        // Mouse repulsion - orbs move away from cursor
        const dx = orb.x - mousePos.current.x;
        const dy = orb.y - mousePos.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 300 && distance > 0) {
          const force = (300 - distance) / 300;
          orb.vx += (dx / distance) * force * 0.5; // Push away from mouse
          orb.vy += (dy / distance) * force * 0.5;
        }

        // Add slight drift for organic movement
        orb.vx += (Math.random() - 0.5) * 0.02;
        orb.vy += (Math.random() - 0.5) * 0.02;

        // Damping
        orb.vx *= 0.95;
        orb.vy *= 0.95;

        // Limit velocity
        const speed = Math.sqrt(orb.vx ** 2 + orb.vy ** 2);
        const maxSpeed = 2;
        if (speed > maxSpeed) {
          orb.vx = (orb.vx / speed) * maxSpeed;
          orb.vy = (orb.vy / speed) * maxSpeed;
        }

        // Update position
        orb.x += orb.vx;
        orb.y += orb.vy;

        // Bounce off edges with padding
        const padding = orb.radius;
        if (orb.x < padding) {
          orb.x = padding;
          orb.vx *= -0.8;
        }
        if (orb.x > width - padding) {
          orb.x = width - padding;
          orb.vx *= -0.8;
        }
        if (orb.y < padding) {
          orb.y = padding;
          orb.vy *= -0.8;
        }
        if (orb.y > height - padding) {
          orb.y = height - padding;
          orb.vy *= -0.8;
        }

        // Create radial gradient for orb
        const gradient = ctx.createRadialGradient(
          orb.x,
          orb.y,
          0,
          orb.x,
          orb.y,
          orb.radius
        );

        // Check if mouse is near for color intensity
        const isNearMouse = distance < 400;
        const lightnessBoost = isNearMouse ? 10 : 0;

        // Gradient stops for glassmorphism effect
        gradient.addColorStop(
          0,
          `hsla(${orb.hue}, ${orb.saturation}%, ${
            orb.lightness + lightnessBoost
          }%, 0.4)`
        );
        gradient.addColorStop(
          0.5,
          `hsla(${orb.hue}, ${orb.saturation}%, ${
            orb.lightness + lightnessBoost
          }%, 0.2)`
        );
        gradient.addColorStop(
          1,
          `hsla(${orb.hue}, ${orb.saturation}%, ${
            orb.lightness + lightnessBoost
          }%, 0)`
        );

        // Draw orb with heavy blur
        ctx.filter = "blur(40px)";
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();

        // Add inner glow
        ctx.filter = "blur(20px)";
        const innerGradient = ctx.createRadialGradient(
          orb.x,
          orb.y,
          0,
          orb.x,
          orb.y,
          orb.radius * 0.6
        );
        innerGradient.addColorStop(
          0,
          `hsla(${orb.hue}, ${orb.saturation + 10}%, ${
            orb.lightness + 20
          }%, 0.6)`
        );
        innerGradient.addColorStop(
          1,
          `hsla(${orb.hue}, ${orb.saturation}%, ${orb.lightness}%, 0)`
        );
        ctx.fillStyle = innerGradient;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius * 0.6, 0, Math.PI * 2);
        ctx.fill();

        // Reset filter
        ctx.filter = "none";

        // Draw subtle core
        const coreGradient = ctx.createRadialGradient(
          orb.x,
          orb.y,
          0,
          orb.x,
          orb.y,
          orb.radius * 0.3
        );
        coreGradient.addColorStop(
          0,
          `hsla(${orb.hue}, ${orb.saturation + 20}%, ${
            orb.lightness + 30
          }%, 0.8)`
        );
        coreGradient.addColorStop(
          1,
          `hsla(${orb.hue}, ${orb.saturation}%, ${orb.lightness}%, 0)`
        );
        ctx.fillStyle = coreGradient;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius * 0.3, 0, Math.PI * 2);
        ctx.fill();
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

