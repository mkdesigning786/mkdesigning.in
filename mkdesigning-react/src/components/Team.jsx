function Team() {
  const team = [
    {
      name: 'Mohammed Kasim',
      role: 'Founder & Lead Developer',
      desc: 'Full-stack web developer with 5+ years of experience in designing and building websites for businesses across India. Expert in React, PHP, and e-commerce solutions.',
      icon: 'fas fa-user-tie',
      social: {
        instagram: 'https://www.instagram.com/mkdesigning.in/',
        dribbble: 'https://dribbble.com/mkdesigning/about',
      },
    },
    {
      name: 'Design Team',
      role: 'UI/UX & Graphics',
      desc: 'Our design team crafts pixel-perfect interfaces, brand identities, and intuitive user experiences that make every website visually stunning and easy to navigate.',
      icon: 'fas fa-palette',
      social: {},
    },
    {
      name: 'Development Team',
      role: 'Frontend & Backend',
      desc: 'Skilled developers proficient in React, Angular, Node.js, PHP, and SQL. We write clean, scalable code that performs flawlessly across all platforms.',
      icon: 'fas fa-laptop-code',
      social: {},
    },
  ]

  return (
    <section className="cp-section cp-section-alt" id="team">
      <div className="cp-container">
        <div className="cp-section-label">Our Team</div>
        <h2 className="cp-heading cp-heading-center">
          Meet the People Behind <span className="gradient-text">MK Designing</span>
        </h2>
        <div className="cp-team-grid">
          {team.map((m, i) => (
            <div className="cp-team-card" key={i}>
              <div className="cp-team-avatar">
                <i className={m.icon}></i>
              </div>
              <h3>{m.name}</h3>
              <span className="cp-team-role">{m.role}</span>
              <p>{m.desc}</p>
              {Object.keys(m.social).length > 0 && (
                <div className="cp-team-social">
                  {m.social.instagram && (
                    <a href={m.social.instagram} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram"></i>
                    </a>
                  )}
                  {m.social.dribbble && (
                    <a href={m.social.dribbble} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-dribbble"></i>
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
