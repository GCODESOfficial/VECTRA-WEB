/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Link from "next/link";

const links = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '#Features' },
  { label: 'Tokenomics', href: '#Tokenomics' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = (href: string) => {
    window.location.href = href; // Full page reload
  };

  return (
    <nav className="w-full font-[SpaceGrotesk] fixed bg-[#00010C] text-white px-6 md:px-32 py-4 flex justify-between items-center z-50">
      {/* Logo */}
      <Link href="/" onClick={() => handleLinkClick('/')}>
        <div>
          <img
            src="/images/logo.svg"
            alt="GS Labs"
            className="md:w-24 h-auto w-[80px]"
          />
        </div>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => handleLinkClick(link.href)}
            className={clsx(
              'text-base hover:text-white text-[#ADB5C5] relative',
              pathname === link.href && 'text-white'
            )}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <Link
        href="/Waitlist"
        onClick={() => handleLinkClick('/Waitlist')}
        rel="noopener noreferrer"
        className="hidden px-4 py-1.5 bg-[#3B82F6] text-white rounded md:flex items-center font-medium"
      >
        Join Waitlist
      </Link>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-7 h-7" /> : <img src="/images/menu.svg" alt='' className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#0A0F1C] text-[#ADB5C5] px-6 py-6 flex flex-col z-40">
          {/* Header with Logo & Close */}
          <div className="flex justify-between items-center mb-10">
            <Link href="/" onClick={() => handleLinkClick('/')}>
              <div className="flex items-center gap-2 font-bold text-xl">
                <img src="/images/logo.svg" alt="GS Labs" className="w-[80px]" />
              </div>
            </Link>
            <button onClick={() => setMenuOpen(false)}>
              <X className="w-7 h-7" />
            </button>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => {
                  setMenuOpen(false);
                  handleLinkClick(link.href);
                }}
                className={clsx(
                  'text-sm text-[#ADB5C5] relative pb-1',
                  pathname === link.href && 'text-white'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Waitlist Button */}
          <Link
            href="/Waitlist"
            onClick={() => handleLinkClick('/Waitlist')}
            rel="noopener noreferrer"
            className="mt-6 px-4 py-2 bg-[#3B82F6] text-white rounded flex items-center gap-2 w-fit text-sm font-semibold"
          >
            Join Waitlist
          </Link>
        </div>
      )}
    </nav>
  );
}
