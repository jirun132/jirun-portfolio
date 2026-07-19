'use client';

const Publications = () => {
  const publications = [
    {
      title: 'Strained but Staying: Job Strain, Presenteeism, and Sickness Absenteeism Among Academic Staff in a Thai Teaching Hospital',
      authors: 'Dr. Jirun Pongsawatmanit, et al.',
      journal: 'Research Medical Journal',
      year: '2026',
      doi: '10.33165/rmj.2027.e279299',
      link: 'https://doi.org/10.33165/rmj.2027.e279299',
    },
  ];

  return (
    <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          {/* Section Header */}
          <div>
            <span className="text-teal-400 text-sm font-semibold uppercase tracking-wider">Research</span>
            <h2 className="section-title text-gradient mt-2">Publications</h2>
            <p className="section-subtitle">Peer-reviewed publications and research contributions</p>
          </div>

          {/* Publications List */}
          <div className="space-y-4">
            {publications.map((pub, index) => (
              <a
                key={index}
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-6 hover:shadow-glow-lg transition-all duration-300 hover:translate-x-1 group"
              >
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-slate-50 group-hover:text-teal-400 transition-colors duration-300">
                    {pub.title}
                  </h3>

                  <div className="flex flex-col gap-2 text-sm">
                    <p className="text-slate-400">
                      <span className="font-medium">{pub.authors}</span>
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <p className="text-slate-400 italic">{pub.journal} ({pub.year})</p>
                      <span className="text-teal-400 font-mono text-xs">{pub.doi}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m-4-6l4-4m0 0L20 2m-4 4v12" />
                    </svg>
                    <span className="text-xs text-slate-500">View on DOI</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* ORCID */}
          <div className="mt-12 p-6 glass-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22.5C6.2 22.5 1.5 17.8 1.5 12S6.2 1.5 12 1.5 22.5 6.2 22.5 12 17.8 22.5 12 22.5z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-slate-50 mb-1">ORCID</h4>
                <a
                  href="https://orcid.org/0009-0002-0028-1204"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-cyan-400 transition-colors text-sm font-mono"
                >
                  0009-0002-0028-1204
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
