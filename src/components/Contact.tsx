'use client';

const Contact = () => {
  const contactLinks = [
    {
      label: 'Email',
      value: 'jirun.pon@gmail.com',
      href: 'mailto:jirun.pon@gmail.com',
      icon: '✉️',
    },
    {
      label: 'GitHub',
      value: 'github.com/jirun132',
      href: 'https://github.com/jirun132',
      icon: '💻',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/jirun',
      href: 'https://linkedin.com/in/jirun',
      icon: '🔗',
    },
    {
      label: 'Website',
      value: 'jirun.dev',
      href: 'https://jirun.dev',
      icon: '🌐',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">Get In Touch</span>
            <h2 className="section-title text-gradient">Let's Work Together</h2>
            <p className="section-subtitle text-center">
              I'm always interested in hearing about new projects and opportunities.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactLinks.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="glass p-6 hover:shadow-glow-lg transition-all duration-300 hover:translate-y-1 group"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{contact.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-50 group-hover:text-cyan-400 transition-colors">
                      {contact.label}
                    </h3>
                    <p className="text-slate-400 text-sm break-all">{contact.value}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center pt-8">
            <p className="text-slate-400 mb-4">Or reach out directly:</p>
            <a href="mailto:jirun.pon@gmail.com" className="btn-primary inline-block">
              Send an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
