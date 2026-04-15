function Portfolio() {
  const projects = [
    {
      title: 'TrendBazaar E-Commerce',
      category: 'E-Commerce',
      desc: 'A full-featured online marketplace with 500+ products, secure checkout, and inventory management. Built with React and Node.js.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      color: '#ff6b6b',
    },
    {
      title: 'BrightPath Coaching',
      category: 'Website Redesign',
      desc: 'Complete redesign of an educational coaching platform — modern UI, course listings, and student testimonials with a booking system.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'PHP'],
      color: '#ffd93d',
    },
    {
      title: 'Freshroots Organics',
      category: 'Dynamic Website',
      desc: 'A content-driven website for an organic food brand featuring product catalogs, blog, and supply chain transparency pages.',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      color: '#6bcb77',
    },
    {
      title: 'UrbanStay Rentals',
      category: 'Web Application',
      desc: 'A property rental platform with map-based search, booking calendar, landlord dashboard, and online payment integration.',
      tech: ['Angular', 'Node.js', 'PostgreSQL', 'Maps API'],
      color: '#4d96ff',
    },
    {
      title: 'Velvet Salon & Spa',
      category: 'Static Website',
      desc: 'An elegant single-page website for a premium salon brand — service menu, photo gallery, and appointment booking via WhatsApp.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      color: '#c084fc',
    },
    {
      title: 'KasimTech Solutions',
      category: 'E-Commerce',
      desc: 'A computer hardware and accessories store with product comparison, EMI calculator, and customer review system.',
      tech: ['React', 'PHP', 'MySQL', 'Razorpay'],
      color: '#00d4ff',
    },
  ]

  return (
    <section className="cp-section" id="portfolio">
      <div className="cp-container">
        <div className="cp-section-label">Our Portfolio</div>
        <h2 className="cp-heading cp-heading-center">
          Projects That Speak <span className="gradient-text">For Themselves</span>
        </h2>
        <div className="cp-portfolio-grid">
          {projects.map((p, i) => (
            <div className="cp-portfolio-card" key={i}>
              <div className="cp-portfolio-thumb" style={{ borderColor: p.color }}>
                <div className="cp-portfolio-overlay">
                  <span className="cp-portfolio-cat" style={{ background: p.color }}>{p.category}</span>
                </div>
              </div>
              <div className="cp-portfolio-info">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="cp-portfolio-tech">
                  {p.tech.map((t, j) => (
                    <span key={j}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
