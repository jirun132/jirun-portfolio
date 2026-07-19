'use client';

const Education = () => {
  const education = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'University of Technology',
      year: '2018 - 2020',
      description: 'Specialized in Machine Learning and Distributed Systems. Thesis on optimizing neural network inference.',
      gpa: '3.95/4.0',
    },
    {
      degree: 'Bachelor of Science in Computer Engineering',
      institution: 'State University',
      year: '2014 - 2018',
      description: 'Strong foundation in software engineering, algorithms, and system design. Graduated with honors.',
      gpa: '3.89/4.0',
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          {/* Section Header */}
          <div>
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">Learning Path</span>
            <h2 className="section-title text-gradient mt-2">Education</h2>
            <p className="section-subtitle">Academic achievements and credentials</p>
          </div>

          {/* Education Cards */}
          <div className="grid grid-cols-1 gap-6">
            {education.map((edu, index) => (
              <div key={index} className="glass p-8 hover:shadow-glow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-cyan-400 mb-1">{edu.degree}</h3>
                    <p className="text-lg text-slate-300 font-medium">{edu.institution}</p>
                  </div>
                  <span className="px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium whitespace-nowrap ml-4">
                    {edu.year}
                  </span>
                </div>

                <p className="text-slate-300 mb-4">{edu.description}</p>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-500">GPA:</span>
                  <span className="text-sm font-semibold text-cyan-400">{edu.gpa}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
