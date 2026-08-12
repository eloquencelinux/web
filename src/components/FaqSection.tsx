'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'What is Eloquence GNU/Linux based on?',
    a: 'Eloquence GNU/Linux is built upon the Debian Trixie (testing core) repository stream, providing modern package versions, rock-solid kernel stability (6.12+), and native APT package management without Ubuntu/Canonical snap bloat.',
  },
  {
    q: 'Can I install Eloquence on Apple Silicon (M1, M2, M3, M4) Macs?',
    a: 'Yes! Eloquence provides a dedicated native ARM64 ISO built specifically with UEFI GRUB EFI bootloader support. It runs at near bare-metal virtualization speed inside UTM, QEMU, or Parallels on Apple Silicon Macs.',
  },
  {
    q: 'Does Eloquence GNU/Linux collect any telemetry or user data?',
    a: 'Zero (0%). Eloquence is committed to digital sovereignty and privacy. There are no tracking scripts, analytics daemons, or user telemetry services installed anywhere in the operating system.',
  },
  {
    q: 'How do I test Eloquence before installing it to my hard drive?',
    a: 'Eloquence boots directly into a passwordless Live Desktop session. You can test all hardware, Wi-Fi, audio, and graphics without making any changes to your computer. You can also choose the "Copy to RAM" (toram) bootloader option for blazing-fast speed.',
  },
  {
    q: 'What desktop environment and pre-installed software are included?',
    a: 'Eloquence features the Cinnamon Desktop Environment with dark mode styling, alongside a complete productivity suite: LibreOffice (Writer, Calc, Impress, Draw, Math), Firefox ESR, Thunderbird, VLC Media Player, GIMP, Timeshift snapshot manager, and Virt-Manager (KVM/QEMU).',
  },
  {
    q: 'Is Eloquence GNU/Linux completely free and open-source?',
    a: 'Yes, 100%. Eloquence is licensed under the GNU General Public License v3.0 (GPLv3). Both the operating system build recipes and this website are fully open-source on GitHub.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 relative" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-xs font-mono text-[#3aafa9] mb-3 border border-teal-500/20">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Everything You <span className="gradient-text">Need to Know.</span>
          </h2>
          <p className="text-gray-400 text-base">
            Have questions about compatibility, security, or installation? We have answers.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-panel rounded-xl border border-white/10 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-heading font-semibold text-white text-lg hover:text-[#3aafa9] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-teal-400 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-teal-300' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-gray-300 leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
