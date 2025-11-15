import React, { useEffect, useRef, useState } from "react";

interface GridWavesBackgroundProps {
  isDark: boolean;
}

export default function GridWavesBackground({
  isDark,
}: GridWavesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();
  const timeRef = useRef(0);

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

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      timeRef.current += 0.01;

      // Grid settings
      const gridSize = 40;
      const perspective = 800;
      const centerX = width / 2;
      const centerY = height / 2;

      // Draw horizontal lines with 3D perspective
      for (let y = -10; y <= 20; y++) {
        ctx.beginPath();

        for (let x = -10; x <= 10; x++) {
          const gridX = x * gridSize;
          const gridY = y * gridSize;
          const gridZ = 0;

          // Create wave effect
          const waveOffset =
            Math.sin(x * 0.5 + timeRef.current) * 20 +
            Math.cos(y * 0.5 + timeRef.current * 0.8) * 20;

          // Mouse interaction - create ripple
          const dx = mousePos.current.x - (centerX + gridX);
          const dy = mousePos.current.y - (centerY + gridY / 2);
          const mouseDistance = Math.sqrt(dx * dx + dy * dy);
          const mouseRipple =
            mouseDistance < 200
              ? Math.sin((200 - mouseDistance) * 0.05 + timeRef.current * 3) *
                30
              : 0;

          const finalZ = gridZ + waveOffset + mouseRipple;

          // 3D projection
          const scale = perspective / (perspective + finalZ);
          const projectedX = centerX + gridX * scale;
          const projectedY = centerY + gridY * scale;

          if (x === -10) {
            ctx.moveTo(projectedX, projectedY);
          } else {
            ctx.lineTo(projectedX, projectedY);
          }
        }

        // Color based on position and mouse proximity
        const lineY = centerY + y * gridSize * 0.5;
        const distanceToMouse = Math.abs(mousePos.current.y - lineY);
        const mouseNear = distanceToMouse < 150;

        if (mouseNear) {
          const intensity = 1 - distanceToMouse / 150;
          ctx.strokeStyle = isDark
            ? `rgba(59, 130, 246, ${0.3 + intensity * 0.5})`
            : `rgba(37, 99, 235, ${0.3 + intensity * 0.5})`;
          ctx.lineWidth = 1.5 + intensity;
        } else {
          const opacity = Math.max(0.1, 0.4 - Math.abs(y) * 0.02);
          ctx.strokeStyle = isDark
            ? `rgba(0, 0, 0, ${opacity})`
            : `rgba(0, 0, 0, ${opacity})`;
          ctx.lineWidth = 1;
        }

        ctx.stroke();
      }

      // Draw vertical lines with 3D perspective
      for (let x = -10; x <= 10; x++) {
        ctx.beginPath();

        for (let y = -10; y <= 20; y++) {
          const gridX = x * gridSize;
          const gridY = y * gridSize;
          const gridZ = 0;

          // Create wave effect
          const waveOffset =
            Math.sin(x * 0.5 + timeRef.current) * 20 +
            Math.cos(y * 0.5 + timeRef.current * 0.8) * 20;

          // Mouse interaction
          const dx = mousePos.current.x - (centerX + gridX);
          const dy = mousePos.current.y - (centerY + gridY / 2);
          const mouseDistance = Math.sqrt(dx * dx + dy * dy);
          const mouseRipple =
            mouseDistance < 200
              ? Math.sin((200 - mouseDistance) * 0.05 + timeRef.current * 3) *
                30
              : 0;

          const finalZ = gridZ + waveOffset + mouseRipple;

          // 3D projection
          const scale = perspective / (perspective + finalZ);
          const projectedX = centerX + gridX * scale;
          const projectedY = centerY + gridY * scale;

          if (y === -10) {
            ctx.moveTo(projectedX, projectedY);
          } else {
            ctx.lineTo(projectedX, projectedY);
          }
        }

        // Color based on mouse proximity
        const lineX = centerX + x * gridSize;
        const distanceToMouse = Math.abs(mousePos.current.x - lineX);
        const mouseNear = distanceToMouse < 150;

        if (mouseNear) {
          const intensity = 1 - distanceToMouse / 150;
          ctx.strokeStyle = isDark
            ? `rgba(59, 130, 246, ${0.3 + intensity * 0.5})`
            : `rgba(37, 99, 235, ${0.3 + intensity * 0.5})`;
          ctx.lineWidth = 1.5 + intensity;
        } else {
          const opacity = Math.max(0.1, 0.4 - Math.abs(x) * 0.02);
          ctx.strokeStyle = isDark
            ? `rgba(0, 0, 0, ${opacity})`
            : `rgba(0, 0, 0, ${opacity})`;
          ctx.lineWidth = 1;
        }

        ctx.stroke();
      }

      // Draw intersection dots for extra detail
      for (let y = -10; y <= 20; y += 2) {
        for (let x = -10; x <= 10; x += 2) {
          const gridX = x * gridSize;
          const gridY = y * gridSize;

          const waveOffset =
            Math.sin(x * 0.5 + timeRef.current) * 20 +
            Math.cos(y * 0.5 + timeRef.current * 0.8) * 20;

          const dx = mousePos.current.x - (centerX + gridX);
          const dy = mousePos.current.y - (centerY + gridY / 2);
          const mouseDistance = Math.sqrt(dx * dx + dy * dy);
          const mouseRipple =
            mouseDistance < 200
              ? Math.sin((200 - mouseDistance) * 0.05 + timeRef.current * 3) *
                30
              : 0;

          const finalZ = waveOffset + mouseRipple;
          const scale = perspective / (perspective + finalZ);
          const projectedX = centerX + gridX * scale;
          const projectedY = centerY + gridY * scale;

          // Draw dot
          ctx.beginPath();
          ctx.arc(projectedX, projectedY, 1.5, 0, Math.PI * 2);

          if (mouseDistance < 150) {
            const intensity = 1 - mouseDistance / 150;
            ctx.fillStyle = isDark
              ? `rgba(59, 130, 246, ${0.5 + intensity * 0.5})`
              : `rgba(37, 99, 235, ${0.5 + intensity * 0.5})`;
          } else {
            ctx.fillStyle = isDark
              ? `rgba(0, 0, 0, 0.4)`
              : `rgba(0, 0, 0, 0.3)`;
          }
          ctx.fill();
        }
      }

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

