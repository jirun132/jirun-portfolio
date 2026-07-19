'use client';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Clinical Skills',
      skills: [
        'Occupational Health Assessment',
        'Workplace Risk Evaluation',
        'Occupational Disease Diagnosis',
        'Health Promotion',
        'Patient Management',
        'Clinical Reasoning',
      ],
    },
    {
      category: 'Research Methods',
      skills: [
        'Epidemiological Study Design',
        'Statistical Analysis',
        'Literature Review',
        'Data Collection',
        'Research Methodology',
        'Evidence-based Medicine',
      ],
    },
    {
      category: 'Technical Skills',
      skills: ['Data Analysis', 'Research Tools', 'Medical Records', 'EHR Systems', 'Documentation', 'Report Writing'],
    },
    {
      category: 'Languages',
      skills: ['Thai', 'English'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Section Header */}
          <div>
            <span className="text-teal-400 text-sm font-semibold uppercase tracking-wider">Expertise</span>
            <h2 className="section-title text-gradient mt-2">Skills</h2>
            <p className="section-subtitle">Clinical, research, and professional competencies</p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="glass p-6 hover:shadow-glow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-teal-400 mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/20 text-slate-300 text-sm font-medium hover:border-teal-500/50 hover:text-teal-400 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
