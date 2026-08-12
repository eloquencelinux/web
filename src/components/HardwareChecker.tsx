'use client';

import React, { useState } from 'react';
import { Laptop, Apple, Server, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';

const devices = [
  {
    id: 'pc',
    name: 'Intel / AMD PC & Laptop',
    subtitle: 'Dell, ThinkPad, HP, Custom PCs',
    icon: <Laptop className="w-6 h-6 text-[#3aafa9]" />,
    arch: 'x86_64 / amd64',
    iso: 'eloquence-amd64.iso',
    rating: '100% Native Compatibility',
    details: 'Supports Intel Core 2nd Gen through 14th Gen, AMD Ryzen 1000-8000 series, NVIDIA/AMD/Intel Graphics, and dual-booting with Windows.',
  },
  {
    id: 'mac',
    name: 'Apple Silicon Mac',
    subtitle: 'MacBook M1, M2, M3, M4, Mac mini',
    icon: <Apple className="w-6 h-6 text-[#5cdb95]" />,
    arch: 'ARM64 / aarch64',
    iso: 'eloquence-arm64.iso',
    rating: '100% Virtualized & Native ARM',
    details: 'Runs at near bare-metal speeds in UTM, Parallels, or QEMU with hardware accelerated display composition.',
  },
  {
    id: 'rpi',
    name: 'Raspberry Pi & Single Board',
    subtitle: 'Raspberry Pi 4, 5, Orange Pi',
    icon: <Cpu className="w-6 h-6 text-[#f4a261]" />,
    arch: 'ARM64 / aarch64',
    iso: 'eloquence-arm64.iso',
    rating: '100% Tested on Pi 5 & 4B',
    details: 'Optimized RAM footprint (~1.2 GB) leaves plenty of headroom for microservices, IoT automation, and lightweight desktop use.',
  },
  {
    id: 'server',
    name: 'Hypervisors & Cloud Servers',
    subtitle: 'Proxmox VE, VMware ESXi, KVM',
    icon: <Server className="w-6 h-6 text-cyan-400" />,
    arch: 'Both (x86_64 & ARM64)',
    iso: 'Dual Architecture',
    rating: '100% Enterprise Ready',
    details: 'Includes QEMU Guest Agent support, virtio drivers out-of-the-box, and headless CLI boot modes for server compute nodes.',
  },
];

export default function HardwareChecker() {
  const [selectedId, setSelectedId] = useState('pc');
  const activeDevice = devices.find((d) => d.id === selectedId) || devices[0];

  return (
    <section className="py-24 relative" id="compatibility">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-xs font-mono text-[#3aafa9] mb-3 border border-teal-500/20">
            <Cpu className="w-3.5 h-3.5" />
            <span>Compatibility Inspector</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Select Your <span className="gradient-text">Hardware Platform.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Choose your device below to see the exact recommended ISO image and performance expectations.
          </p>
        </div>

        {/* Device Picker Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {devices.map((device) => (
            <button
              key={device.id}
              onClick={() => setSelectedId(device.id)}
              className={`p-6 rounded-xl text-left transition-all border ${
                selectedId === device.id
                  ? 'bg-teal-500/15 border-teal-400 shadow-xl shadow-teal-500/20 -translate-y-1'
                  : 'glass-panel border-white/10 hover:border-white/20 text-gray-400'
              }`}
            >
              <div className="mb-4">{device.icon}</div>
              <div className="font-heading font-bold text-white text-base mb-1">
                {device.name}
              </div>
              <div className="text-xs text-gray-400">
                {device.subtitle}
              </div>
            </button>
          ))}
        </div>

        {/* Selected Result Card */}
        <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-teal-500/30 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{activeDevice.rating}</span>
              </div>
              
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3">
                {activeDevice.name}
              </h3>
              
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                {activeDevice.details}
              </p>

              <div className="flex flex-wrap gap-4 text-xs font-mono">
                <div className="px-3 py-1.5 rounded-lg bg-black/50 border border-white/10 text-gray-300">
                  Target Architecture: <strong className="text-teal-300">{activeDevice.arch}</strong>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-black/50 border border-white/10 text-gray-300">
                  Recommended File: <strong className="text-[#5cdb95]">{activeDevice.iso}</strong>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end">
              <a
                href="#download"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#3aafa9] to-[#2b7a78] text-white font-semibold text-sm shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 hover:scale-105 transition-all"
              >
                <span>Download for {activeDevice.name.split(' ')[0]}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
