'use client';

import React from 'react';
import { Check, X, Sparkles } from 'lucide-react';

const comparisonData = [
  {
    feature: 'Base Foundation',
    eloquence: 'Debian Trixie (Rock-Solid)',
    ubuntu: 'Ubuntu LTS Base',
    fedora: 'Fedora Rawhide/Current',
    arch: 'Arch Rolling Release',
  },
  {
    feature: 'RAM Usage at Idle Boot',
    eloquence: '1.24 GB (Optimized Cinnamon)',
    ubuntu: '2.10 GB (GNOME + Snaps)',
    fedora: '1.85 GB (Default GNOME)',
    arch: 'Varies by user install',
  },
  {
    feature: 'Dual-Architecture (x64 & ARM64)',
    eloquence: true,
    ubuntu: true,
    fedora: true,
    arch: false,
  },
  {
    feature: 'Zero Forced Snaps / Sandboxes',
    eloquence: true,
    ubuntu: false,
    fedora: true,
    arch: true,
  },
  {
    feature: 'Calamares GUI Installer',
    eloquence: true,
    ubuntu: false,
    fedora: false,
    arch: false,
  },
  {
    feature: 'Out-of-Box Productivity Suite',
    eloquence: true,
    ubuntu: false,
    fedora: true,
    arch: false,
  },
  {
    feature: 'User Telemetry & Data Harvesting',
    eloquence: 'Zero (0%)',
    ubuntu: 'Opt-out Required',
    fedora: 'Metrics Collection',
    arch: 'None',
  },
];

export default function DistroComparison() {
  return (
    <section className="py-24 relative" id="comparison">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-xs font-mono text-[#3aafa9] mb-3 border border-teal-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Benchmark & Matrix</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            How Eloquence <span className="gradient-text">Compares.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            See how Eloquence GNU/Linux delivers lower memory overhead, zero telemetry, and maximum developer flexibility.
          </p>
        </div>

        {/* Comparison Table Card */}
        <div className="glass-panel rounded-2xl overflow-hidden border border-teal-500/30 shadow-2xl shadow-black/80">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0a0f14] border-b border-white/10 text-xs font-mono uppercase text-gray-400">
                  <th className="py-5 px-6">Feature / Capability</th>
                  <th className="py-5 px-6 text-[#3aafa9] font-bold text-sm bg-teal-500/10 border-x border-teal-500/20">
                    ⚡ Eloquence Linux
                  </th>
                  <th className="py-5 px-6">Ubuntu Desktop</th>
                  <th className="py-5 px-6">Fedora Workstation</th>
                  <th className="py-5 px-6">Arch Linux</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                {comparisonData.map((row, index) => (
                  <tr key={index} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 font-medium text-white">
                      {row.feature}
                    </td>

                    {/* Eloquence Column */}
                    <td className="py-4 px-6 bg-teal-500/[0.07] border-x border-teal-500/20 font-semibold text-teal-300">
                      {typeof row.eloquence === 'boolean' ? (
                        row.eloquence ? (
                          <span className="flex items-center gap-1.5 text-emerald-400">
                            <Check className="w-4 h-4 text-emerald-400" /> Yes
                          </span>
                        ) : (
                          <span className="flex items-center gap-1.5 text-red-400">
                            <X className="w-4 h-4 text-red-400" /> No
                          </span>
                        )
                      ) : (
                        row.eloquence
                      )}
                    </td>

                    {/* Ubuntu */}
                    <td className="py-4 px-6 text-gray-400">
                      {typeof row.ubuntu === 'boolean' ? (
                        row.ubuntu ? (
                          <Check className="w-4 h-4 text-gray-400" />
                        ) : (
                          <X className="w-4 h-4 text-red-400/80" />
                        )
                      ) : (
                        row.ubuntu
                      )}
                    </td>

                    {/* Fedora */}
                    <td className="py-4 px-6 text-gray-400">
                      {typeof row.fedora === 'boolean' ? (
                        row.fedora ? (
                          <Check className="w-4 h-4 text-gray-400" />
                        ) : (
                          <X className="w-4 h-4 text-red-400/80" />
                        )
                      ) : (
                        row.fedora
                      )}
                    </td>

                    {/* Arch */}
                    <td className="py-4 px-6 text-gray-400">
                      {typeof row.arch === 'boolean' ? (
                        row.arch ? (
                          <Check className="w-4 h-4 text-gray-400" />
                        ) : (
                          <X className="w-4 h-4 text-red-400/80" />
                        )
                      ) : (
                        row.arch
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
