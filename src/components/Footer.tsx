'use client';

import React from 'react';
import Image from 'next/image';
import { Layers } from 'lucide-react';
import { assetPath } from '@/lib/utils';

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#05080b] border-t border-white/10 pt-20 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8">
                <Image
                  src={assetPath('/assets/phoenix-logo.png')}
                  alt="Eloquence Phoenix"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-heading font-extrabold text-xl tracking-tight text-white">
                <span className="text-[#3aafa9]">Eloquence</span> GNU/Linux
              </span>
            </div>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              The next-generation Debian-based Linux operating system engineered for software engineers, creators, and power users. Designed around the Phoenix Visual Identity.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/eloquencelinux/eloquence"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors border border-white/10"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/eloquencelinux/web"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors border border-white/10"
              >
                <Layers className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 1: System */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-sm text-white uppercase tracking-wider">System</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#download" className="hover:text-[#3aafa9] transition-colors">Download x86_64</a></li>
              <li><a href="#download" className="hover:text-[#3aafa9] transition-colors">Download ARM64</a></li>
              <li><a href="#showcase" className="hover:text-[#3aafa9] transition-colors">Desktop Showcase</a></li>
              <li><a href="#compatibility" className="hover:text-[#3aafa9] transition-colors">Hardware Checker</a></li>
            </ul>
          </div>

          {/* Col 2: Developers */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-sm text-white uppercase tracking-wider">Developers</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="https://github.com/eloquencelinux/eloquence" target="_blank" rel="noopener noreferrer" className="hover:text-[#3aafa9] transition-colors">OS Repository</a></li>
              <li><a href="https://github.com/eloquencelinux/web" target="_blank" rel="noopener noreferrer" className="hover:text-[#3aafa9] transition-colors">Web Repository</a></li>
              <li><a href="https://github.com/eloquencelinux/eloquence/issues" target="_blank" rel="noopener noreferrer" className="hover:text-[#3aafa9] transition-colors">Issue Tracker</a></li>
              <li><a href="https://github.com/eloquencelinux/eloquence/releases" target="_blank" rel="noopener noreferrer" className="hover:text-[#3aafa9] transition-colors">Release Notes</a></li>
            </ul>
          </div>

          {/* Col 3: Legal & Open Source */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-sm text-white uppercase tracking-wider">Governance</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="https://github.com/eloquencelinux/eloquence/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="hover:text-[#3aafa9] transition-colors">GNU GPLv3 License</a></li>
              <li><a href="https://github.com/eloquencelinux/eloquence/blob/main/SECURITY.md" target="_blank" rel="noopener noreferrer" className="hover:text-[#3aafa9] transition-colors">Security Policy</a></li>
              <li><a href="https://github.com/eloquencelinux/eloquence/blob/main/CODE_OF_CONDUCT.md" target="_blank" rel="noopener noreferrer" className="hover:text-[#3aafa9] transition-colors">Code of Conduct</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-mono">
          <div>
            &copy; 2025-2026 Eloquence GNU/Linux Project. Free software under GNU GPLv3.
          </div>
          <div className="flex items-center gap-1">
            Built with Next.js & Tailwind &bull; Phoenix Visual Engine
          </div>
        </div>

      </div>
    </footer>
  );
}
