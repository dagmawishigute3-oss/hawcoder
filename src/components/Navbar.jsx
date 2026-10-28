import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ onOpenApply }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Announcements", href: "#announcements" },
    { label: "Syllabus", href: "#syllabus" },
    { label: "AddisCoder Info Sessions", href: "#info-sessions" },
    { label: "Apply", href: "#apply" },
    { label: "Gallery", href: "#gallery" },
    { label: "Team", href: "#team" },
    { label: "FAQ", href: "#faq" }
  ];

  return (
    <nav className="sticky top-0 z-40 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo with symbolic programming prefix */}
          <a href="#" className="flex items-center gap-2.5 text-slate-900 group">
            <span className="font-mono font-bold text-lg text-slate-800 tracking-tighter bg-slate-100 px-2 py-0.5 rounded border border-slate-300 select-none">
              |=|
            </span>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-serif font-bold text-slate-900 leading-tight">
                Hawcoder
              </span>
              <span className="text-[11px] text-slate-500 font-sans">
                Hawassa • AddisCoder 2026 Alumni
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-5 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-blue-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenApply}
              className="bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-medium px-4 py-2 rounded transition-colors"
            >
              Apply (Free)
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenApply}
              className="text-xs bg-slate-900 text-white px-3 py-1.5 rounded"
            >
              Apply
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-700"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-3 space-y-2 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-slate-700 hover:text-blue-800 font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
