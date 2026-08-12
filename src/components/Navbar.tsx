'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Download, Terminal, Sparkles, Cpu, Layers } from 'lucide-react';
import { assetPath } from '@/lib/utils';

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070b0e]/90 backdrop-blur-md border-b border-teal-500/20 py-3 shadow-2xl shadow-black/50'
          : 'bg-transparent py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
            <Image
              src={assetPath('/assets/phoenix-logo.png')}
              alt="Eloquence Phoenix Emblem"
              fill
              className="object-contain drop-shadow-[0_0_12px_rgba(58,175,169,0.7)]"
              priority
            />
          </div>
          <span className="font-heading font-extrabold text-xl tracking-tight text-white flex items-center gap-1">
            <span className="text-[#3aafa9]">Eloquence</span>
            <span className="text-gray-300 font-light">GNU/Linux</span>
          </span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-sm font-medium text-gray-300 hover:text-[#3aafa9] transition-colors flex items-center gap-1.5"
          >
            <Sparkles className="w-4 h-4 text-[#3aafa9]" />
            Features
          </a>
          <a
            href="#showcase"
            className="text-sm font-medium text-gray-300 hover:text-[#3aafa9] transition-colors flex items-center gap-1.5"
          >
            <Terminal className="w-4 h-4 text-[#5cdb95]" />
            Showcase
          </a>
          <a
            href="#comparison"
            className="text-sm font-medium text-gray-300 hover:text-[#3aafa9] transition-colors flex items-center gap-1.5"
          >
            <Layers className="w-4 h-4 text-[#f4a261]" />
            Benchmark
          </a>
          <a
            href="#compatibility"
            className="text-sm font-medium text-gray-300 hover:text-[#3aafa9] transition-colors flex items-center gap-1.5"
          >
            <Cpu className="w-4 h-4 text-cyan-400" />
            Hardware
          </a>
          <a
            href="#download"
            className="text-sm font-medium text-gray-300 hover:text-[#3aafa9] transition-colors"
          >
            Download
          </a>
          <a
            href="https://github.com/eloquencelinux/eloquence"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors flex items-center gap-1"
          >
            <GithubIcon className="w-4 h-4" />
            GitHub
          </a>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <a
            href="#download"
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-[#3aafa9] to-[#2b7a78] text-white shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:-translate-y-0.5 transition-all border border-white/20"
          >
            <Download className="w-4 h-4" />
            <span>Get 2026.1</span>
          </a>
        </div>
      </div>
    </header>
  );
}
