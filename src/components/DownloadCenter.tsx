'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Download, Copy, Check, ShieldCheck, Disc, HardDrive } from 'lucide-react';

export default function DownloadCenter() {
  const [copiedSha, setCopiedSha] = useState<string | null>(null);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#3aafa9', '#5cdb95', '#def2f1', '#f4a261'],
    });
  };

  const copyChecksum = (arch: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSha(arch);
    setTimeout(() => setCopiedSha(null), 2500);
  };

  return (
    <section className="py-24 relative bg-gradient-to-b from-transparent via-[#090e12] to-transparent" id="download">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-xs font-mono text-[#3aafa9] mb-3 border border-teal-500/20">
            <Download className="w-3.5 h-3.5" />
            <span>Official Release 2026.1</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Download <span className="gradient-text">Eloquence ISO.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Choose your architecture below. All images are 100% Free, Open Source, and cryptographically verified.
          </p>
        </div>

        {/* Dual Download Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1: x86_64 */}
          <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-teal-500/40 hover:border-teal-400 transition-all shadow-2xl relative flex flex-col justify-between group">
            <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-[#3aafa9] to-[#2b7a78] text-[11px] font-mono font-bold text-white uppercase tracking-wider shadow-md">
              Most Popular
            </div>

            <div>
              <div className="flex items-center gap-3 text-teal-400 mb-2">
                <Disc className="w-6 h-6" />
                <span className="font-mono text-xs uppercase tracking-wider text-gray-400">Standard PC Edition</span>
              </div>

              <h3 className="font-heading text-3xl font-extrabold text-white mb-2">
                x86_64 / amd64
              </h3>
              <p className="text-sm text-gray-300 mb-6">
                Compatible with all 64-bit Intel Core, Intel Xeon, AMD Ryzen, and AMD Threadripper computers with UEFI or BIOS.
              </p>

              {/* Specs bullet points */}
              <div className="space-y-2.5 mb-6 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Hybrid Boot: UEFI & Legacy BIOS Syslinux</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Calamares Graphical Installer & Live Mode</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Approximate ISO Size: <strong>~2.8 GB</strong></span>
                </div>
              </div>

              {/* SHA256 Box */}
              <div className="bg-[#070b0e] p-3.5 rounded-xl border border-white/10 mb-6">
                <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 mb-1.5">
                  <span>SHA256 CHECKSUM</span>
                  <button
                    onClick={() => copyChecksum('x64', 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855')}
                    className="text-teal-400 hover:text-teal-300 flex items-center gap-1"
                  >
                    {copiedSha === 'x64' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedSha === 'x64' ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
                <div className="font-mono text-xs text-gray-400 truncate">
                  eloquence-amd64.iso (Release 2026.1)
                </div>
              </div>
            </div>

            <a
              href="https://github.com/eloquencelinux/eloquence/releases"
              target="_blank"
              rel="noopener noreferrer"
              onClick={triggerConfetti}
              className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl bg-gradient-to-r from-[#3aafa9] via-[#2b7a78] to-[#17252a] text-white font-semibold shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 hover:scale-[1.01] transition-all border border-white/20"
            >
              <Download className="w-5 h-5" />
              <span>Download x86_64 ISO</span>
            </a>
          </div>

          {/* Card 2: ARM64 */}
          <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-white/10 hover:border-teal-400 transition-all shadow-2xl relative flex flex-col justify-between group">
            <div>
              <div className="flex items-center gap-3 text-cyan-400 mb-2">
                <Disc className="w-6 h-6" />
                <span className="font-mono text-xs uppercase tracking-wider text-gray-400">Apple Silicon & ARM Edition</span>
              </div>

              <h3 className="font-heading text-3xl font-extrabold text-white mb-2">
                ARM64 / aarch64
              </h3>
              <p className="text-sm text-gray-300 mb-6">
                Engineered for Apple Silicon Macs (M1/M2/M3/M4 via UTM/QEMU), Raspberry Pi 4/5, and ARM64 cloud instances.
              </p>

              {/* Specs bullet points */}
              <div className="space-y-2.5 mb-6 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>UEFI GRUB EFI Native Bootloader</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>Near-native hypervisor speed via UTM / QEMU</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>Approximate ISO Size: <strong>~2.7 GB</strong></span>
                </div>
              </div>

              {/* SHA256 Box */}
              <div className="bg-[#070b0e] p-3.5 rounded-xl border border-white/10 mb-6">
                <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 mb-1.5">
                  <span>SHA256 CHECKSUM</span>
                  <button
                    onClick={() => copyChecksum('arm64', 'c7be1a27e7f6e3c0429f98485292372d8a4bbd41e4649b934ca495991b7852b8')}
                    className="text-teal-400 hover:text-teal-300 flex items-center gap-1"
                  >
                    {copiedSha === 'arm64' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedSha === 'arm64' ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
                <div className="font-mono text-xs text-gray-400 truncate">
                  eloquence-arm64.iso (Release 2026.1)
                </div>
              </div>
            </div>

            <a
              href="https://github.com/eloquencelinux/eloquence/releases"
              target="_blank"
              rel="noopener noreferrer"
              onClick={triggerConfetti}
              className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl bg-[#0f171e] hover:bg-[#17252a] text-white font-semibold border border-teal-500/30 hover:border-teal-500/60 shadow-lg hover:scale-[1.01] transition-all"
            >
              <Download className="w-5 h-5" />
              <span>Download ARM64 ISO</span>
            </a>
          </div>

        </div>

        {/* System Requirements Table */}
        <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-white/10">
          <div className="flex items-center gap-2.5 mb-6 text-white font-heading font-bold text-xl">
            <HardDrive className="w-5 h-5 text-[#3aafa9]" />
            <span>Hardware Requirements</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-xs font-mono uppercase text-gray-400">
                  <th className="pb-3 px-4">Component</th>
                  <th className="pb-3 px-4">Minimum (Basic Use)</th>
                  <th className="pb-3 px-4 text-teal-300">Recommended (Full Experience)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-gray-300">
                <tr>
                  <td className="py-3.5 px-4 font-medium text-white">Processor (CPU)</td>
                  <td className="py-3.5 px-4">64-bit Dual Core (x86_64 or ARM64)</td>
                  <td className="py-3.5 px-4 text-teal-300 font-medium">Quad-Core 2.0 GHz+ (Intel, AMD, Apple Silicon, ARM)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-white">System RAM</td>
                  <td className="py-3.5 px-4">2 GB RAM</td>
                  <td className="py-3.5 px-4 text-teal-300 font-medium">4 GB+ DDR4 / LPDDR5</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-white">Storage Disk</td>
                  <td className="py-3.5 px-4">15 GB Free Disk Space</td>
                  <td className="py-3.5 px-4 text-teal-300 font-medium">30 GB+ NVMe SSD Space</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-white">Display</td>
                  <td className="py-3.5 px-4">1024 x 768 Resolution</td>
                  <td className="py-3.5 px-4 text-teal-300 font-medium">1920 x 1080 Full HD or 4K with 3D Acceleration</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
