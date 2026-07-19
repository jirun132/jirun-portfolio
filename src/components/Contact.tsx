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
      label: 'ORCID',
      value: '0009-0002-0028-1204',
      href: 'https://orcid.org/0009-0002-0028-1204',
      icon: '🔗',
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
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <span className="text-teal-400 text-sm font-semibold uppercase tracking-wider">Get In Touch</span>
            <h2 className="section-title text-gradient">Connect</h2>
            <p className="section-subtitle text-center">
              Interested in collaboration, research opportunities, or clinical consultation? Feel free to reach out.
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
                  <span className="text-4xl group-hover:scale-125 transition-transform duration-300">{contact.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-50 group-hover:text-teal-400 transition-colors">
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
            <p className="text-slate-400 mb-4">Prefer email?</p>
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
