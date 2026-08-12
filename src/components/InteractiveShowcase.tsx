'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Terminal as TerminalIcon, Monitor, Disc, Sparkles, Send } from 'lucide-react';
import { assetPath } from '@/lib/utils';

export default function InteractiveShowcase() {
  const [activeTab, setActiveTab] = useState<'desktop' | 'terminal' | 'installer'>('terminal');

  // Interactive Terminal State
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<Array<{ cmd: string; output: React.ReactNode }>>([
    {
      cmd: 'fastfetch',
      output: (
        <div className="font-mono text-xs sm:text-sm leading-relaxed text-gray-300">
          <div className="text-[#3aafa9] font-bold">{"       .---.          "}<span className="text-[#f4a261]">OS:</span> Eloquence GNU/Linux 2026.1 (Trixie Core)</div>
          <div className="text-[#3aafa9] font-bold">{"      /     \\         "}<span className="text-[#f4a261]">Host:</span> Enterprise Workstation Platform</div>
          <div className="text-[#3aafa9] font-bold">{"     | () () |        "}<span className="text-[#f4a261]">Kernel:</span> 6.12.100+deb13 (x86_64 / aarch64)</div>
          <div className="text-[#3aafa9] font-bold">{"      \\  ^  /         "}<span className="text-[#f4a261]">Uptime:</span> 14 hours, 28 mins</div>
          <div className="text-[#3aafa9] font-bold">{"       |||||          "}<span className="text-[#f4a261]">Packages:</span> 1842 (dpkg), 12 (flatpak)</div>
          <div className="text-[#3aafa9] font-bold">{"       |||||          "}<span className="text-[#f4a261]">Shell:</span> bash 5.2.32</div>
          <div className="text-[#3aafa9] font-bold">{"     .-'   '-.        "}<span className="text-[#f4a261]">DE:</span> Cinnamon 6.2 (Adwaita-Dark)</div>
          <div className="text-[#3aafa9] font-bold">{"    /  PHOENIX \\      "}<span className="text-[#f4a261]">WM:</span> Muffin (Hardware Compositing)</div>
          <div className="text-[#3aafa9] font-bold">{"   |  ELOQUENCE |     "}<span className="text-[#f4a261]">Memory:</span> 1.24 GiB / 16.00 GiB (8%)</div>
          <div className="text-[#3aafa9] font-bold">{"    \\_________/       "}<span className="text-[#f4a261]">Security:</span> UFW Active (Zero Telemetry)</div>
          <div className="text-[#5cdb95] mt-2 font-bold">===================================================================</div>
          <div className="text-[#5cdb95] font-bold">  ⚡ Welcome to Eloquence GNU/Linux</div>
          <div className="text-[#5cdb95] font-bold">===================================================================</div>
        </div>
      ),
    },
  ]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCmd = inputVal.trim().toLowerCase();
    if (!cleanCmd) return;

    let response: React.ReactNode = null;

    switch (cleanCmd) {
      case 'help':
        response = (
          <div className="text-xs text-gray-300 space-y-1">
            <div>Available interactive commands:</div>
            <div className="text-[#3aafa9]">  fastfetch     - Show system information and Phoenix ASCII art</div>
            <div className="text-[#3aafa9]">  uname -a      - Print Linux kernel and system architecture</div>
            <div className="text-[#3aafa9]">  calamares     - Launch system installer simulation</div>
            <div className="text-[#3aafa9]">  apps          - List pre-installed productivity software</div>
            <div className="text-[#3aafa9]">  clear         - Clear terminal console history</div>
          </div>
        );
        break;

      case 'uname -a':
        response = (
          <div className="text-xs text-emerald-400">
            Linux eloquence 6.12.100+deb13 #1 SMP Eloquence Linux 2026.1 (Trixie) aarch64/x86_64 GNU/Linux
          </div>
        );
        break;

      case 'calamares':
        response = (
          <div className="text-xs text-cyan-300">
            [CALAMARES] Launching Eloquence Phoenix Graphical Installer wizard...
            <div className="text-gray-400 text-[11px] mt-1">Switch to the &apos;Calamares Installer&apos; tab above to view the interface!</div>
          </div>
        );
        break;

      case 'apps':
        response = (
          <div className="text-xs text-gray-300 space-y-1">
            <div className="text-white font-bold">Pre-Installed Stock Linux Applications:</div>
            <div>• <span className="text-[#3aafa9]">LibreOffice:</span> Writer, Calc, Impress, Draw, Math</div>
            <div>• <span className="text-[#3aafa9]">Internet:</span> Firefox ESR, Mozilla Thunderbird</div>
            <div>• <span className="text-[#3aafa9]">Multimedia:</span> VLC Media Player, Rhythmbox, GIMP, Inkscape, Evince</div>
            <div>• <span className="text-[#3aafa9]">System & Security:</span> Timeshift (Restore Points), GParted, GUFW Firewall</div>
            <div>• <span className="text-[#3aafa9]">Virtualization:</span> Virt-Manager, QEMU / KVM, Libvirt Daemon</div>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        response = (
          <div className="text-xs text-red-400">
            eloquence: command not found: {cleanCmd}. Type <span className="text-[#5cdb95] font-bold">help</span> for a list of commands.
          </div>
        );
    }

    setHistory((prev) => [...prev, { cmd: inputVal, output: response }]);
    setInputVal('');
  };

  return (
    <section className="py-24 relative" id="showcase">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-xs font-mono text-[#3aafa9] mb-3 border border-teal-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive OS Environment</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Experience the <span className="gradient-text">Operating System.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Interact with the live terminal, inspect the desktop aesthetic, or explore the Calamares installer workflow below.
          </p>
        </div>

        {/* Showcase Frame Container */}
        <div className="glass-panel rounded-2xl overflow-hidden shadow-2xl shadow-black/80 border border-teal-500/30">
          
          {/* Window Titlebar */}
          <div className="bg-[#0b1015] px-5 py-3.5 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            {/* macOS Window Controls */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <span className="text-xs font-mono text-gray-400 ml-2 hidden sm:inline">
                eloquence-os-live-session [tty1]
              </span>
            </div>

            {/* Showcase Mode Switcher Tabs */}
            <div className="flex items-center gap-1.5 bg-[#141d24] p-1 rounded-lg border border-white/10">
              <button
                onClick={() => setActiveTab('terminal')}
                className={`flex items-center gap-2 px-3 py-1.5 text-xs font-mono rounded-md transition-all ${
                  activeTab === 'terminal'
                    ? 'bg-gradient-to-r from-[#3aafa9] to-[#2b7a78] text-white shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <TerminalIcon className="w-3.5 h-3.5" />
                <span>Interactive Terminal</span>
              </button>

              <button
                onClick={() => setActiveTab('desktop')}
                className={`flex items-center gap-2 px-3 py-1.5 text-xs font-mono rounded-md transition-all ${
                  activeTab === 'desktop'
                    ? 'bg-gradient-to-r from-[#3aafa9] to-[#2b7a78] text-white shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Cinnamon Desktop</span>
              </button>

              <button
                onClick={() => setActiveTab('installer')}
                className={`flex items-center gap-2 px-3 py-1.5 text-xs font-mono rounded-md transition-all ${
                  activeTab === 'installer'
                    ? 'bg-gradient-to-r from-[#3aafa9] to-[#2b7a78] text-white shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Disc className="w-3.5 h-3.5" />
                <span>Calamares Installer</span>
              </button>
            </div>
          </div>

          {/* Window Body */}
          <div className="relative min-h-[520px] bg-[#070b0e]">
            
            {/* Tab 1: Interactive Terminal */}
            {activeTab === 'terminal' && (
              <div className="p-6 font-mono text-sm text-gray-200 h-[520px] flex flex-col justify-between overflow-y-auto">
                <div className="space-y-4">
                  <div className="text-xs text-gray-500 pb-2 border-b border-white/5">
                    💡 Tip: Try typing <span className="text-[#3aafa9] font-bold">help</span>, <span className="text-[#3aafa9] font-bold">uname -a</span>, <span className="text-[#3aafa9] font-bold">apps</span>, or <span className="text-[#3aafa9] font-bold">fastfetch</span> below!
                  </div>

                  {history.map((item, index) => (
                    <div key={index} className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-[#3aafa9] font-bold">eloquence@system</span>
                        <span className="text-gray-500">:</span>
                        <span className="text-cyan-400">~</span>
                        <span className="text-gray-300">$ {item.cmd}</span>
                      </div>
                      <div className="pl-4">{item.output}</div>
                    </div>
                  ))}
                </div>

                {/* Input Prompt Form */}
                <form onSubmit={handleCommand} className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2">
                  <span className="text-[#3aafa9] font-bold">eloquence@system</span>
                  <span className="text-gray-500">:</span>
                  <span className="text-cyan-400">~</span>
                  <span className="text-gray-300">$</span>
                  <input
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    placeholder="Type command (e.g. 'help', 'apps', 'uname -a')..."
                    className="flex-1 bg-transparent text-white focus:outline-none font-mono text-sm placeholder:text-gray-600"
                    autoFocus
                  />
                  <button type="submit" className="text-teal-400 hover:text-teal-300 p-1">
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            )}

            {/* Tab 2: Desktop Mockup View */}
            {activeTab === 'desktop' && (
              <div className="relative h-[520px] w-full">
                <Image
                  src={assetPath('/assets/wallpaper-dark.jpg')}
                  alt="Eloquence Dark Desktop View"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 text-xs font-mono text-gray-200">
                  ⚡ Cinnamon 6.x with Eloquence Dark Space Theme
                </div>
              </div>
            )}

            {/* Tab 3: Calamares Installer View */}
            {activeTab === 'installer' && (
              <div className="relative h-[520px] w-full">
                <Image
                  src={assetPath('/assets/wallpaper-light.png')}
                  alt="Calamares Installer Workflow"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 text-xs font-mono text-gray-200">
                  💿 Calamares GUI Installer with Custom Phoenix Styling
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
