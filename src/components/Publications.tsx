'use client';

const Publications = () => {
  const publications = [
    {
      title: 'Optimizing Neural Network Inference on Edge Devices',
      authors: 'Jirun Pon, Dr. Alice Smith',
      journal: 'IEEE Transactions on Machine Learning',
      year: '2023',
      link: '#',
    },
    {
      title: 'A Distributed System Architecture for Real-time Data Processing',
      authors: 'Jirun Pon, Bob Johnson, Carol Lee',
      journal: 'ACM Computing Surveys',
      year: '2022',
      link: '#',
    },
    {
      title: 'Advances in Natural Language Processing for Low-Resource Languages',
      authors: 'Jirun Pon, Dr. David Chen',
      journal: 'International Conference on NLP',
      year: '2022',
      link: '#',
    },
    {
      title: 'Microservices Architecture: Best Practices and Pitfalls',
      authors: 'Jirun Pon, Eve Wilson',
      journal: 'Software Architecture Review',
      year: '2021',
      link: '#',
    },
  ];

  return (
    <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          {/* Section Header */}
          <div>
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">Research</span>
            <h2 className="section-title text-gradient mt-2">Publications</h2>
            <p className="section-subtitle">Academic contributions and research papers</p>
          </div>

          {/* Publications List */}
          <div className="space-y-4">
            {publications.map((pub, index) => (
              <a
                key={index}
                href={pub.link}
                className="glass p-6 hover:shadow-glow-lg transition-all duration-300 hover:translate-x-1 group"
              >
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-slate-50 group-hover:text-cyan-400 transition-colors duration-300">
                    {pub.title}
                  </h3>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <p className="text-slate-400 text-sm">
                      <span className="font-medium">{pub.authors}</span>
                    </p>
                    <span className="text-slate-500 text-sm">{pub.year}</span>
                  </div>

                  <p className="text-slate-400 text-sm italic">{pub.journal}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
