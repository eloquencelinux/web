'use client';

import React from 'react';
import { Cpu, Disc, Shield, Laptop, Zap, Box, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Cpu className="w-6 h-6 text-[#3aafa9]" />,
    title: 'Dual-Architecture Native',
    description:
      'Engineered with first-class binaries for both x86_64 (Intel & AMD) and ARM64 (Apple Silicon M1/M2/M3/M4 via UTM, Raspberry Pi 5, and ARM cloud servers).',
    badge: 'Multi-Arch',
  },
  {
    icon: <Disc className="w-6 h-6 text-[#5cdb95]" />,
    title: 'Calamares GUI Installer',
    description:
      'Intuitive graphical installation wizard with official Eloquence Phoenix branding, LUKS full-disk encryption, and automated post-install live user cleanup.',
    badge: 'Seamless Setup',
  },
  {
    icon: <Shield className="w-6 h-6 text-[#f4a261]" />,
    title: 'Zero Telemetry & Bloat',
    description:
      'Complete digital sovereignty. No user tracking, no telemetry daemons, and pre-configured UFW firewall protection enabled out of the box.',
    badge: '100% Private',
  },
  {
    icon: <Laptop className="w-6 h-6 text-cyan-400" />,
    title: 'Cinnamon Dark Aesthetic',
    description:
      'High-contrast, eye-friendly dark design system featuring custom Eloquence wallpapers, GTK3 dark styling, and crisp Outfit & JetBrains Mono typography.',
    badge: 'Modern DE',
  },
  {
    icon: <Box className="w-6 h-6 text-teal-300" />,
    title: 'Complete Productivity Suite',
    description:
      'Pre-loaded with the full LibreOffice suite (Writer, Calc, Impress, Draw, Math), Firefox ESR, Timeshift snapshot manager, and GIMP image editor.',
    badge: 'Production Ready',
  },
  {
    icon: <Zap className="w-6 h-6 text-emerald-400" />,
    title: 'KVM/QEMU Virtualization',
    description:
      'Integrated Virt-Manager, QEMU multi-arch emulation, and Libvirt system daemon for high-performance hardware-accelerated virtual machines.',
    badge: 'DevOps & VM',
  },
];

export default function FeatureGrid() {
  return (
    <section className="py-24 relative" id="features">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-xs font-mono text-[#3aafa9] mb-3 border border-teal-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Architecture & Capabilities</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Engineered for <span className="gradient-text">Uncompromising Speed.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Everything you need for an enterprise workstation, developer rig, or daily driver operating system.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-teal-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/10 group relative overflow-hidden"
            >
              {/* Top Card Strip */}
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 rounded-xl bg-teal-500/10 border border-teal-500/20 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 group-hover:text-teal-300 transition-colors">
                  {item.badge}
                </span>
              </div>

              {/* Title & Desc */}
              <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-[#3aafa9] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {item.description}
              </p>

              {/* Ambient Hover Glow */}
              <div className="absolute -right-16 -bottom-16 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl group-hover:bg-teal-500/20 transition-all pointer-events-none" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
