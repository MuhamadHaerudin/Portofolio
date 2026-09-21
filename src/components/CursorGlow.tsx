"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  decay: number;
  r: number;
  color: string;
};

const COLORS = ["#22d3ee", "#3b82f6", "#a855f7", "#ec4899", "#f59e0b"];
const supportsPointer = typeof window !== "undefined" && "PointerEvent" in window;

export function CursorGlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: Particle[] = [];
    const mouse = {
      x: width / 2,
      y: height / 3,
      px: width / 2,
      py: height / 3,
      active: false,
    };

    const spawn = (x: number, y: number, burst: boolean) => {
      if (particles.length > 220) particles.shift();
      const angle = Math.random() * Math.PI * 2;
      const speed = (burst ? 1.3 : 0.5) + Math.random() * 2.2;
      particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed + 0.25,
        life: 1,
        decay: 0.012 + Math.random() * 0.022,
        r: 0.8 + Math.random() * 1.8,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      });
    };

    const setPosition = (x: number, y: number) => {
      mouse.px = mouse.x;
      mouse.py = mouse.y;
      mouse.x = x;
      mouse.y = y;
      mouse.active = true;
    };

    const burst = (x: number, y: number) => {
      for (let i = 0; i < 12; i++) {
        spawn(x + (Math.random() - 0.5) * 8, y + (Math.random() - 0.5) * 8, true);
      }
    };

    const onPointerMove = (e: PointerEvent) => setPosition(e.clientX, e.clientY);
    const onPointerDown = (e: PointerEvent) => {
      setPosition(e.clientX, e.clientY);
      burst(e.clientX, e.clientY);
    };
    const onPointerUp = () => {
      mouse.active = false;
    };
    const onMouseLeave = () => {
      mouse.active = false;
    };

    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) {
        setPosition(t.clientX, t.clientY);
        burst(t.clientX, t.clientY);
      }
    };
    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) setPosition(t.clientX, t.clientY);
    };
    const onTouchEnd = () => {
      mouse.active = false;
    };

    let raf = 0;
    const loop = () => {
      const dx = mouse.x - mouse.px;
      const dy = mouse.y - mouse.py;
      const dist = Math.hypot(dx, dy);

      const isDesktop = window.matchMedia("(pointer: fine)").matches;

      if (mouse.active) {
        const count = Math.min(
          isDesktop ? 6 : 3,
          Math.max(1, Math.round(dist / (isDesktop ? 7 : 12))),
        );
        for (let i = 0; i < count; i++) {
          spawn(
            mouse.x + (Math.random() - 0.5) * 5,
            mouse.y + (Math.random() - 0.5) * 5,
            dist > 2,
          );
        }
        if (dist < 1.5) spawn(mouse.x, mouse.y, false);
      }

      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.014;
        p.life -= p.decay;
        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
        glow.addColorStop(0, p.color);
        glow.addColorStop(1, "transparent");
        ctx.globalAlpha = Math.max(p.life, 0) * 0.85;
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.globalAlpha = Math.max(p.life, 0);
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(p.r * 0.5, 0.5), 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    if (supportsPointer) {
      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("pointerdown", onPointerDown);
      window.addEventListener("pointerup", onPointerUp);
    } else {
      window.addEventListener("touchstart", onTouchStart);
      window.addEventListener("touchmove", onTouchMove);
      window.addEventListener("touchend", onTouchEnd);
    }
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      if (supportsPointer) {
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("pointerdown", onPointerDown);
        window.removeEventListener("pointerup", onPointerUp);
      } else {
        window.removeEventListener("touchstart", onTouchStart);
        window.removeEventListener("touchmove", onTouchMove);
        window.removeEventListener("touchend", onTouchEnd);
      }
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[60] h-full w-full touch-none"
    />
  );
}