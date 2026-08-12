'use client';

import React, { useEffect, useRef } from 'react';

export default function PhoenixBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const colors = [
      'rgba(58, 175, 169, ',
      'rgba(92, 219, 149, ',
      'rgba(43, 122, 120, ',
      'rgba(222, 242, 241, ',
      'rgba(244, 162, 97, '
    ];

    class Particle {
      x: number = 0;
      y: number = 0;
      size: number = 0;
      speedY: number = 0;
      speedX: number = 0;
      color: string = '';
      alpha: number = 0;
      decay: number = 0;

      constructor() {
        this.reset();
        this.y = Math.random() * height;
      }

      reset() {
        this.x = Math.random() * width;
        this.y = height + Math.random() * 40;
        this.size = Math.random() * 2.8 + 0.8;
        this.speedY = Math.random() * 0.9 + 0.3;
        this.speedX = (Math.random() - 0.5) * 0.6;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = Math.random() * 0.7 + 0.2;
        this.decay = Math.random() * 0.003 + 0.001;
      }

      update() {
        this.y -= this.speedY;
        this.x += this.speedX;
        this.alpha -= this.decay;

        if (this.alpha <= 0 || this.y < -20) {
          this.reset();
        }
      }

      draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fillStyle = `${this.color}${this.alpha})`;
        context.shadowBlur = 12;
        context.shadowColor = 'rgba(58, 175, 169, 0.9)';
        context.fill();
        context.closePath();
      }
    }

    const count = Math.min(Math.floor(window.innerWidth / 20), 60);
    const particles: Particle[] = Array.from({ length: count }, () => new Particle());

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0 opacity-60"
      />
      {/* Radiant ambient glow blobs */}
      <div className="fixed -top-32 -left-32 w-[550px] h-[550px] bg-teal-900/25 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed top-1/3 -right-32 w-[600px] h-[600px] bg-cyan-900/20 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="fixed -bottom-40 left-1/4 w-[700px] h-[700px] bg-emerald-950/20 rounded-full blur-[180px] pointer-events-none z-0" />
    </>
  );
}
