'use client';

const About = () => {
  const highlights = [
    'Occupational Medicine & Environmental Health',
    'Occupational Epidemiology',
    'Workplace Health & Safety',
    'Evidence-based Clinical Practice',
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          {/* Section Header */}
          <div>
            <span className="text-teal-400 text-sm font-semibold uppercase tracking-wider">About</span>
            <h2 className="section-title text-gradient mt-2">Professional Background</h2>
          </div>

          {/* About Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main Text */}
            <div className="md:col-span-2 space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                I am an Occupational & Environmental Medicine Resident at Ramathibodi Hospital in Bangkok, Thailand. My clinical practice focuses on occupational health, workplace safety, and environmental medicine with an evidence-based approach.
              </p>

              <p className="text-lg text-slate-300 leading-relaxed">
                Currently, I am pursuing a Master of Science in Occupational Health and Toxicology (International Program) at the Faculty of Medicine, Mahidol University, while maintaining clinical responsibilities in preventive and occupational medicine.
              </p>

              <p className="text-lg text-slate-300 leading-relaxed">
                My research interests center on occupational epidemiology and the health impacts of workplace exposures. I am committed to advancing occupational medicine through rigorous research and clinical excellence.
              </p>
            </div>

            {/* Research Interests */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Research Interests</h3>
              {highlights.map((highlight, index) => (
                <div key={index} className="flex gap-3">
                  <svg
                    className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-300">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
