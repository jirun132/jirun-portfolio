'use client';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full-Stack Engineer',
      company: 'Tech Company Inc',
      period: '2022 - Present',
      description: 'Leading development of cloud-based applications serving 100k+ users. Architected microservices infrastructure and mentored junior developers.',
      tags: ['React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL'],
    },
    {
      title: 'Full-Stack Developer',
      company: 'StartUp Co',
      period: '2020 - 2022',
      description: 'Built and maintained full-stack applications using modern tech stack. Implemented CI/CD pipelines and improved application performance by 40%.',
      tags: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    },
    {
      title: 'Junior Developer',
      company: 'Web Solutions Ltd',
      period: '2018 - 2020',
      description: 'Developed responsive web applications and learned best practices in software development. Collaborated with cross-functional teams.',
      tags: ['React', 'JavaScript', 'CSS', 'MongoDB'],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          {/* Section Header */}
          <div>
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">Professional Journey</span>
            <h2 className="section-title text-gradient mt-2">Experience</h2>
            <p className="section-subtitle">A timeline of my professional growth and achievements</p>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div key={index} className="relative pl-8 pb-8">
                {/* Timeline line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-3 top-10 w-0.5 h-24 bg-gradient-to-b from-cyan-500/50 to-transparent" />
                )}

                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                </div>

                {/* Content */}
                <div className="glass p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-cyan-400">{experience.title}</h3>
                      <p className="text-slate-400">{experience.company}</p>
                    </div>
                    <span className="text-sm text-slate-500 whitespace-nowrap ml-4">{experience.period}</span>
                  </div>

                  <p className="text-slate-300 mb-4">{experience.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {experience.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
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
