'use client';

const Experience = () => {
  const experiences = [
    {
      title: 'Occupational & Environmental Medicine Resident',
      organization: 'Ramathibodi Hospital',
      period: '2023 - Present',
      description: 'Clinical training in occupational medicine, workplace health assessment, and occupational disease management. Comprehensive training in occupational epidemiology and health promotion programs.',
      location: 'Bangkok, Thailand',
    },
    {
      title: 'Community Medicine Physician',
      organization: 'Ramathibodi Hospital',
      period: '2020 - Present',
      description: 'Clinical practice in community and preventive medicine. Focus on population health, disease prevention, and occupational health services for diverse populations.',
      location: 'Bangkok, Thailand',
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          {/* Section Header */}
          <div>
            <span className="text-teal-400 text-sm font-semibold uppercase tracking-wider">Career</span>
            <h2 className="section-title text-gradient mt-2">Clinical Experience</h2>
            <p className="section-subtitle">Professional roles and clinical responsibilities</p>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 pb-8">
                {/* Timeline line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-3 top-10 w-0.5 h-24 bg-gradient-to-b from-teal-500/50 to-transparent" />
                )}

                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-teal-500/20 border-2 border-teal-400 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-teal-400" />
                </div>

                {/* Content */}
                <div className="glass p-6 hover:shadow-glow-lg transition-all duration-300">
                  <div className="flex items-start justify-between mb-2 flex-col sm:flex-row">
                    <div>
                      <h3 className="text-xl font-bold text-teal-400">{exp.title}</h3>
                      <p className="text-slate-400 font-medium">{exp.organization}</p>
                      <p className="text-sm text-slate-500">{exp.location}</p>
                    </div>
                    <span className="text-sm text-slate-500 whitespace-nowrap mt-2 sm:mt-0">{exp.period}</span>
                  </div>

                  <p className="text-slate-300">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
