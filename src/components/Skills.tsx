'use client';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Svelte'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'MongoDB', 'Redis'],
    },
    {
      category: 'DevOps & Cloud',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Linux'],
    },
    {
      category: 'AI & ML',
      skills: ['PyTorch', 'TensorFlow', 'LLMs', 'NLP', 'Computer Vision', 'Data Science'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Section Header */}
          <div>
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">Expertise</span>
            <h2 className="section-title text-gradient mt-2">Skills</h2>
            <p className="section-subtitle">Technologies and tools I work with</p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="glass p-6 hover:shadow-glow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-slate-300 text-sm font-medium hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300"
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
