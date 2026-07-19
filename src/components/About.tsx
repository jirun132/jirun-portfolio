'use client';

const About = () => {
  const highlights = [
    'Full-stack development with modern frameworks',
    'Cloud architecture and DevOps',
    'Machine learning and AI integration',
    'Research and academic contributions',
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          {/* Section Header */}
          <div>
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">About Me</span>
            <h2 className="section-title text-gradient mt-2">Who I Am</h2>
          </div>

          {/* About Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main Text */}
            <div className="md:col-span-2 space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm a dedicated full-stack engineer with a passion for creating elegant solutions to complex
                problems. With expertise spanning frontend, backend, and infrastructure, I specialize in building
                scalable applications that make an impact.
              </p>

              <p className="text-lg text-slate-300 leading-relaxed">
                Beyond coding, I'm deeply involved in academic research, contributing to publications in machine
                learning and distributed systems. I believe in continuous learning and staying at the forefront of
                technology trends.
              </p>

              <p className="text-lg text-slate-300 leading-relaxed">
                When I'm not coding, you can find me contributing to open-source projects, mentoring junior
                developers, or exploring new technologies that could transform the industry.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Specializations</h3>
              {highlights.map((highlight, index) => (
                <div key={index} className="flex gap-3">
                  <svg
                    className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5"
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
