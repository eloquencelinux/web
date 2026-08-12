'use client';

import React from 'react';
import Image from 'next/image';
import { Download, ShieldCheck, Zap, CheckCircle2 } from 'lucide-react';
import { assetPath } from '@/lib/utils';

function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Hero Copy & Actions */}
        <div className="lg:col-span-7 text-center lg:text-left">
          {/* Release Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-xs font-mono text-[#5cdb95] mb-6 shadow-inner shadow-teal-500/20 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#5cdb95] animate-ping" />
            <span>Eloquence GNU/Linux 2026.1 Stable</span>
            <span className="text-gray-500">|</span>
            <span className="text-gray-300">Debian Trixie Core</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6 text-white">
            Reborn for <span className="gradient-text">Performance.</span><br />
            Engineered for <span className="gradient-text">Elegance.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-300 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
            An independent, high-performance operating system designed for software developers, system administrators, and power users. Featuring the <strong>Cinnamon Desktop</strong>, <strong>Calamares GUI Installer</strong>, and native <strong>dual-architecture (x86_64 & ARM64)</strong> speed.
          </p>

          {/* Primary CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
            <a
              href="#download"
              className="flex items-center gap-3 px-7 py-3.5 text-base font-semibold rounded-xl bg-gradient-to-r from-[#3aafa9] via-[#2b7a78] to-[#17252a] text-white shadow-xl shadow-teal-500/30 hover:shadow-teal-500/50 hover:scale-[1.02] transition-all border border-white/20 group"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              <span>Download ISO (Free)</span>
            </a>

            <a
              href="https://github.com/eloquencelinux/eloquence"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-7 py-3.5 text-base font-semibold rounded-xl bg-[#0f171e]/80 hover:bg-[#17252a] text-gray-200 border border-teal-500/30 hover:border-teal-500/60 shadow-lg backdrop-blur-md hover:scale-[1.02] transition-all"
            >
              <GithubIcon className="w-5 h-5" />
              <span>Source & Docs</span>
            </a>
          </div>

          {/* Quick Specs Strip */}
          <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto lg:mx-0 text-left">
            <div>
              <div className="text-[11px] font-mono uppercase text-gray-400">Desktop</div>
              <div className="text-sm font-bold text-white flex items-center gap-1 mt-0.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#3aafa9]" />
                Cinnamon 6.x
              </div>
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase text-gray-400">Architecture</div>
              <div className="text-sm font-bold text-white flex items-center gap-1 mt-0.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#5cdb95]" />
                x86_64 & ARM64
              </div>
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase text-gray-400">Telemetry</div>
              <div className="text-sm font-bold text-white flex items-center gap-1 mt-0.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#f4a261]" />
                Zero (0%)
              </div>
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase text-gray-400">Installer</div>
              <div className="text-sm font-bold text-white flex items-center gap-1 mt-0.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                Calamares GUI
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Glowing 3D Phoenix Emblem */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          <div className="relative w-[340px] sm:w-[420px] h-[340px] sm:h-[420px] flex items-center justify-center">
            
            {/* Pulsing Concentric Rings */}
            <div className="absolute inset-0 rounded-full border border-dashed border-teal-500/30 animate-[spin_35s_linear_infinite]" />
            <div className="absolute inset-6 rounded-full border border-teal-500/20 animate-[spin_25s_linear_infinite_reverse]" />
            <div className="absolute inset-16 rounded-full bg-teal-500/10 blur-2xl animate-pulse-glow" />

            {/* Glowing Phoenix Centerpiece */}
            <div className="relative w-64 sm:w-72 h-64 sm:h-72 animate-float z-10">
              <Image
                src={assetPath('/assets/phoenix-logo.png')}
                alt="Eloquence Phoenix Emblem"
                fill
                className="object-contain drop-shadow-[0_0_40px_rgba(58,175,169,0.7)]"
                priority
              />
            </div>

            {/* Floating Info Badges */}
            <div className="absolute -top-4 -left-4 sm:left-2 bg-[#0f171e]/90 border border-teal-500/40 px-3.5 py-1.5 rounded-full text-xs font-mono text-white flex items-center gap-2 shadow-2xl backdrop-blur-md animate-bounce [animation-duration:4s]">
              <ShieldCheck className="w-4 h-4 text-[#5cdb95]" />
              <span>GPL-3.0 Free Software</span>
            </div>

            <div className="absolute -bottom-4 -right-4 sm:right-2 bg-[#0f171e]/90 border border-teal-500/40 px-3.5 py-1.5 rounded-full text-xs font-mono text-white flex items-center gap-2 shadow-2xl backdrop-blur-md animate-bounce [animation-duration:5s]">
              <Zap className="w-4 h-4 text-[#f4a261]" />
              <span>Hardware Accelerated</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
