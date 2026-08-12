'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import PhoenixBackground from '@/components/PhoenixBackground';
import Hero from '@/components/Hero';
import InteractiveShowcase from '@/components/InteractiveShowcase';
import FeatureGrid from '@/components/FeatureGrid';
import DistroComparison from '@/components/DistroComparison';
import HardwareChecker from '@/components/HardwareChecker';
import DownloadCenter from '@/components/DownloadCenter';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#070b0e] text-[#f0f7f7] overflow-x-hidden">
      {/* Background Interactive Particle Canvas */}
      <PhoenixBackground />

      {/* Sticky Header */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero />
        <InteractiveShowcase />
        <FeatureGrid />
        <DistroComparison />
        <HardwareChecker />
        <DownloadCenter />
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
