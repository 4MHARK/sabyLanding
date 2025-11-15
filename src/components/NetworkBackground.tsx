import React, { useEffect, useRef, useState } from "react";

interface NetworkBackgroundProps {
  isDark: boolean;
}

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export default function NetworkBackground({ isDark }: NetworkBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const nodesRef = useRef<Node[]>([]);
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

    // Initialize nodes - Dense network for mesh effect
    const nodeCount = 120; // More nodes for better mesh coverage
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.8, // Slower for more stable mesh
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2.5 + 1.5, // Medium nodes for mesh look
      });
    }

    nodesRef.current = nodes;

    // Mouse move handler - listen on parent container
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    // Listen on parent element to allow clicks to pass through
    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener("mousemove", handleMouseMove);
    }

    // Animation loop
    const animate = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Move nodes
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Keep within bounds
        node.x = Math.max(0, Math.min(width, node.x));
        node.y = Math.max(0, Math.min(height, node.y));

        // Mouse interaction - attract nodes to mouse
        const dx = mousePos.current.x - node.x;
        const dy = mousePos.current.y - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Check if mouse is near for color change
        const mouseNear = distance < 200;

        if (distance < 200) {
          const force = (200 - distance) / 200;
          node.vx += (dx / distance) * force * 0.08; // Stronger attraction
          node.vy += (dy / distance) * force * 0.08;
        }

        // Damping
        node.vx *= 0.98; // Slightly less damping for more movement
        node.vy *= 0.98;

        // Draw node - Black by default, blue when mouse is near
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);

        if (mouseNear) {
          // Blue when mouse is near
          const intensity = 1 - distance / 200;
          ctx.fillStyle = isDark
            ? `rgba(59, 130, 246, ${0.6 + intensity * 0.4})`
            : `rgba(37, 99, 235, ${0.5 + intensity * 0.4})`;
        } else {
          // Black by default
          ctx.fillStyle = isDark
            ? `rgba(0, 0, 0, ${0.7})`
            : `rgba(0, 0, 0, ${0.6})`;
        }
        ctx.fill();

        // Draw connections
        nodes.forEach((otherNode, j) => {
          if (i === j) return;

          const dx = otherNode.x - node.x;
          const dy = otherNode.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Draw connections to create a unified mesh network
          if (distance < 250) {
            // Much larger radius for interconnected web
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);

            // Check if either node is near mouse
            const node1Near =
              Math.sqrt(
                Math.pow(mousePos.current.x - node.x, 2) +
                  Math.pow(mousePos.current.y - node.y, 2)
              ) < 200;
            const node2Near =
              Math.sqrt(
                Math.pow(mousePos.current.x - otherNode.x, 2) +
                  Math.pow(mousePos.current.y - otherNode.y, 2)
              ) < 200;

            const opacity = (1 - distance / 250) * 0.4;

            if (node1Near || node2Near) {
              // Blue connections when near mouse
              ctx.strokeStyle = isDark
                ? `rgba(59, 130, 246, ${opacity * 1.5})`
                : `rgba(37, 99, 235, ${opacity * 1.5})`;
              ctx.lineWidth = 1.2;
            } else {
              // Black connections by default
              ctx.strokeStyle = isDark
                ? `rgba(0, 0, 0, ${opacity})`
                : `rgba(0, 0, 0, ${opacity})`;
              ctx.lineWidth = 1;
            }
            ctx.stroke();
          }
        });

        // Highlight connections to mouse cursor
        const mouseDistance = Math.sqrt(
          Math.pow(mousePos.current.x - node.x, 2) +
            Math.pow(mousePos.current.y - node.y, 2)
        );

        if (mouseDistance < 250) {
          // Increased radius
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mousePos.current.x, mousePos.current.y);

          const opacity = (1 - mouseDistance / 250) * 0.5;
          ctx.strokeStyle = isDark
            ? `rgba(96, 165, 250, ${opacity})`
            : `rgba(59, 130, 246, ${opacity})`;
          ctx.lineWidth = 2;
          ctx.stroke();

          // Highlight node near mouse with glow
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius + 3, 0, Math.PI * 2);
          ctx.strokeStyle = isDark
            ? `rgba(96, 165, 250, ${opacity * 0.8})`
            : `rgba(59, 130, 246, ${opacity * 0.8})`;
          ctx.lineWidth = 2;
          ctx.stroke();
        }
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
