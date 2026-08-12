import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://eloquencelinux.org'),
  title: 'Eloquence GNU/Linux — The Next-Gen Debian Operating System',
  description:
    'Eloquence GNU/Linux is an independent, enterprise-ready Debian-based operating system featuring the Cinnamon desktop, Calamares GUI installer, and native x86_64 & ARM64 dual-architecture performance.',
  keywords: [
    'Eloquence Linux',
    'Debian Trixie',
    'Linux Distribution',
    'Cinnamon Desktop',
    'Calamares',
    'ARM64 Linux',
    'x86_64 Linux',
    'Enterprise Linux',
    'Open Source OS',
  ],
  authors: [{ name: 'Eloquence Linux Project' }],
  icons: {
    icon: '/assets/phoenix-logo.png',
    apple: '/assets/phoenix-logo.png',
  },
  openGraph: {
    title: 'Eloquence GNU/Linux — Reborn for Performance',
    description:
      'Experience the elegance of Cinnamon, the rock-solid stability of Debian Trixie, and dual-architecture speed.',
    images: ['/assets/phoenix-logo.png'],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#070b0e] text-[#f0f7f7] min-h-screen antialiased selection:bg-[#3aafa9] selection:text-[#070b0e]">
        {children}
      </body>
    </html>
  );
}
