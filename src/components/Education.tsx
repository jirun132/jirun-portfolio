'use client';

const Education = () => {
  const education = [
    {
      degree: 'Master of Science in Occupational Health and Toxicology',
      institution: 'Faculty of Medicine, Mahidol University',
      period: '2023 - Present',
      program: 'International Program',
      description: 'Advanced studies in occupational health, toxicology, occupational epidemiology, and environmental health assessment. Focus on evidence-based occupational medicine practice.',
      location: 'Bangkok, Thailand',
    },
    {
      degree: 'Doctor of Medicine (MD)',
      institution: 'Faculty of Medicine, Mahidol University',
      period: '2014 - 2020',
      program: '',
      description: 'Comprehensive medical training with emphasis on clinical excellence, evidence-based medicine, and patient care.',
      location: 'Bangkok, Thailand',
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          {/* Section Header */}
          <div>
            <span className="text-teal-400 text-sm font-semibold uppercase tracking-wider">Academic Path</span>
            <h2 className="section-title text-gradient mt-2">Education</h2>
            <p className="section-subtitle">Formal education and training</p>
          </div>

          {/* Education Cards */}
          <div className="grid grid-cols-1 gap-6">
            {education.map((edu, index) => (
              <div key={index} className="glass p-8 hover:shadow-glow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-4 flex-col sm:flex-row">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-teal-400 mb-1">{edu.degree}</h3>
                    <p className="text-lg text-slate-300 font-medium">{edu.institution}</p>
                    {edu.program && <p className="text-sm text-slate-400">{edu.program}</p>}
                    <p className="text-sm text-slate-500">{edu.location}</p>
                  </div>
                  <span className="px-4 py-2 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-400 text-sm font-medium whitespace-nowrap mt-4 sm:mt-0">
                    {edu.period}
                  </span>
                </div>

                <p className="text-slate-300">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
