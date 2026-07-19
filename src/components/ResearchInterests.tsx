'use client';

const ResearchInterests = () => {
  const interests = [
    {
      title: 'Occupational Epidemiology',
      description: 'Study of disease and health outcomes related to occupational exposures in diverse workplace settings.',
    },
    {
      title: 'Workplace Health & Safety',
      description: 'Prevention of occupational injuries, illnesses, and promotion of healthy work environments.',
    },
    {
      title: 'Environmental Health',
      description: 'Assessment and management of environmental exposures and their health impacts on workers and communities.',
    },
  ];

  return (
    <section id="research" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Section Header */}
          <div>
            <span className="text-teal-400 text-sm font-semibold uppercase tracking-wider">Focus Areas</span>
            <h2 className="section-title text-gradient mt-2">Research Interests</h2>
            <p className="section-subtitle">Key areas of academic and clinical interest</p>
          </div>

          {/* Research Interests Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="glass p-8 hover:shadow-glow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-500/20 to-cyan-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-teal-400 mb-2">{interest.title}</h3>
                <p className="text-slate-300 leading-relaxed">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchInterests;
