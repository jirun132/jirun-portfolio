'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-blob animation-delay-2" />
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="space-y-4">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium">
                  Welcome to my portfolio
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="text-gradient">Jirun Pon</span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-400 leading-relaxed">
                Full-stack engineer passionate about building beautiful, scalable applications and
                contributing to academic research.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#projects" className="btn-primary text-center">
                View My Work
              </a>
              <a href="#contact" className="btn-secondary text-center">
                Let's Connect
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { number: '5+', label: 'Years Experience' },
                { number: '20+', label: 'Projects' },
                { number: '10+', label: 'Publications' },
              ].map((stat, index) => (
                <div key={index} className="space-y-1">
                  <p className="text-2xl md:text-3xl font-bold text-cyan-400">{stat.number}</p>
                  <p className="text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-3xl blur-3xl" />

              {/* Image container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10">
                <Image
                  src="/profile.jpg"
                  alt="Jirun Pon"
                  fill
                  className="object-cover"
                  priority
                  quality={90}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
