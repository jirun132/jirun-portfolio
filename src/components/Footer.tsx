'use client';

import { useState, useEffect } from 'react';

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/jirun132', icon: 'GitHub' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/jirun', icon: 'LinkedIn' },
    { label: 'Twitter', href: 'https://twitter.com', icon: 'Twitter' },
    { label: 'Email', href: 'mailto:jirun.pon@gmail.com', icon: 'Email' },
  ];

  return (
    <footer className="relative border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-2">
            <p className="text-xl font-bold text-gradient">JP</p>
            <p className="text-sm text-slate-400">Full-stack engineer & researcher</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-slate-50 mb-3">Navigation</h4>
            <ul className="space-y-2 text-sm">
              {['About', 'Experience', 'Projects', 'Publications'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-slate-50 mb-3">Resources</h4>
            <ul className="space-y-2 text-sm">
              {['Blog', 'Resume', 'Open Source', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-slate-50 mb-3">Follow</h4>
            <div className="flex gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-icon"
                  aria-label={link.label}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    {/* Generic icon - replace with actual social icons */}
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
            <p>© {year} Jirun Pon. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
