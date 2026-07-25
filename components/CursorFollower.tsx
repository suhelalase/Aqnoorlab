"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE_SELECTORS =
  "a, button, input, textarea, select, label, [role='button'], [tabindex]:not([tabindex='-1'])";

export default function CursorFollower() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const mouse = { x: width / 2, y: height / 2 };
    const cursor = { x: width / 2, y: height / 2 };
    let isOverInteractive = false;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      const el = document.elementFromPoint(e.clientX, e.clientY);
      isOverInteractive = !!(el && el.closest(INTERACTIVE_SELECTORS));
    };
    window.addEventListener("mousemove", handleMouseMove);

    const numDots = 9;
    const dots = Array.from({ length: numDots }).map((_, i) => ({
      x: mouse.x,
      y: mouse.y,
      angle: (i * Math.PI * 2) / numDots,
    }));

    let angleOffset = 0;
    let globalAlpha = 1;
    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Fade in/out when over interactive elements
      const targetAlpha = isOverInteractive ? 0 : 1;
      globalAlpha += (targetAlpha - globalAlpha) * 0.12;

      if (globalAlpha > 0.01) {
        cursor.x += (mouse.x - cursor.x) * 0.12;
        cursor.y += (mouse.y - cursor.y) * 0.12;

        const dx = mouse.x - cursor.x;
        const dy = mouse.y - cursor.y;
        const speed = Math.sqrt(dx * dx + dy * dy);

        const orbitRadius = 22 + Math.min(speed * 0.35, 22);
        angleOffset += 0.035 + Math.min(speed * 0.0015, 0.035);

        dots.forEach((dot, i) => {
          const targetAngle = (i * Math.PI * 2) / numDots + angleOffset;
          const targetX = cursor.x + Math.cos(targetAngle) * orbitRadius;
          const targetY = cursor.y + Math.sin(targetAngle) * orbitRadius;

          dot.x += (targetX - dot.x) * 0.18;
          dot.y += (targetY - dot.y) * 0.18;

          const alpha = (0.35 + 0.35 * Math.sin(angleOffset * 1.5 + i * 0.7)) * globalAlpha;

          // Glow effect: draw multiple concentric circles
          const gradient = ctx.createRadialGradient(dot.x, dot.y, 0, dot.x, dot.y, 5);
          gradient.addColorStop(0, `rgba(108, 99, 255, ${alpha})`);
          gradient.addColorStop(1, `rgba(108, 99, 255, 0)`);

          ctx.beginPath();
          ctx.arc(dot.x, dot.y, 5, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(dot.x, dot.y, 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(178, 172, 255, ${alpha + 0.1 * globalAlpha})`;
          ctx.fill();
        });

        // Central ring
        ctx.beginPath();
        ctx.arc(cursor.x, cursor.y, 5.5, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(108, 99, 255, ${0.55 * globalAlpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[999] hidden md:block"
    />
  );
}
