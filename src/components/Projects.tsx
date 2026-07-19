'use client';

import Link from 'next/link';

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'Real-time analytics platform with ML-driven insights, built with Next.js and TensorFlow.',
      tags: ['Next.js', 'TensorFlow', 'PostgreSQL', 'D3.js'],
      link: '#',
      featured: true,
    },
    {
      title: 'Distributed Message Queue',
      description: 'High-performance message queue system supporting millions of messages per second.',
      tags: ['Go', 'Rust', 'Kubernetes', 'gRPC'],
      link: '#',
      featured: true,
    },
    {
      title: 'Open Source ML Framework',
      description: 'PyTorch-based framework for efficient neural network training and deployment.',
      tags: ['Python', 'PyTorch', 'CUDA', 'Docker'],
      link: '#',
      featured: false,
    },
    {
      title: 'Real-time Collaboration Platform',
      description: 'WebRTC-based platform for real-time document collaboration and communication.',
      tags: ['React', 'WebRTC', 'Node.js', 'Redis'],
      link: '#',
      featured: false,
    },
    {
      title: 'Cloud Cost Optimization Tool',
      description: 'Automated tool to analyze and optimize cloud infrastructure spending with 30% average savings.',
      tags: ['Python', 'AWS', 'Machine Learning', 'React'],
      link: '#',
      featured: false,
    },
    {
      title: 'Microservices Boilerplate',
      description: 'Production-ready boilerplate for building scalable microservices with best practices.',
      tags: ['Node.js', 'Docker', 'Kubernetes', 'TypeScript'],
      link: '#',
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Section Header */}
          <div>
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">Portfolio</span>
            <h2 className="section-title text-gradient mt-2">Projects</h2>
            <p className="section-subtitle">Selected projects showcasing my skills and experience</p>
          </div>

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-50">Featured Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredProjects.map((project, index) => (
                  <a
                    key={index}
                    href={project.link}
                    className="glass-lg p-8 hover:shadow-glow-lg transition-all duration-300 hover:scale-105 group"
                  >
                    <h3 className="text-2xl font-bold text-slate-50 group-hover:text-cyan-400 transition-colors duration-300 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-50">Other Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {otherProjects.map((project, index) => (
                  <a
                    key={index}
                    href={project.link}
                    className="glass p-6 hover:shadow-glow transition-all duration-300 hover:scale-105 group"
                  >
                    <h3 className="text-lg font-bold text-slate-50 group-hover:text-cyan-400 transition-colors duration-300 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 rounded-full bg-cyan-500/5 text-cyan-400 text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
