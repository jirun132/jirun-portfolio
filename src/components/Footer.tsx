'use client';

import { useState, useEffect } from 'react';

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-2">
            <p className="text-xl font-bold text-gradient">JP</p>
            <p className="text-sm text-slate-400">Occupational Medicine Physician</p>
            <p className="text-xs text-slate-500">Ramathibodi Hospital, Bangkok</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-slate-50 mb-3">Navigation</h4>
            <ul className="space-y-2 text-sm">
              {['About', 'Experience', 'Research', 'Publications'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic */}
          <div>
            <h4 className="font-semibold text-slate-50 mb-3">Academic</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://orcid.org/0009-0002-0028-1204" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors">
                  ORCID Profile
                </a>
              </li>
              <li>
                <a href="#publications" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Publications
                </a>
              </li>
              <li>
                <a href="#education" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Education
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-slate-50 mb-3">Connect</h4>
            <div className="flex gap-2 mb-4">
              {[
                { label: 'GitHub', href: 'https://github.com/jirun132', icon: '💻' },
                { label: 'LinkedIn', href: 'https://linkedin.com/in/jirun', icon: '🔗' },
                { label: 'Email', href: 'mailto:jirun.pon@gmail.com', icon: '✉️' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="btn-icon"
                  aria-label={link.label}
                  title={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
            <p>© {year} Dr. Jirun Pongsawatmanit. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-teal-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
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
