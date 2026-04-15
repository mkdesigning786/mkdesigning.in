function Services() {
  const services = [
    {
      icon: 'fas fa-laptop-code',
      title: 'Static Website Design',
      desc: 'Professional, fast-loading static websites perfect for portfolios, landing pages, and small businesses. Built with clean HTML, CSS, and JavaScript for maximum speed and SEO performance.',
      features: ['Lightning-fast page loads', 'Mobile responsive design', 'SEO optimized structure', 'Easy to host & maintain'],
    },
    {
      icon: 'fas fa-code',
      title: 'Dynamic Website Development',
      desc: 'Content-driven websites with admin panels, user authentication, and database-powered features. Perfect for blogs, news portals, directories, and membership sites.',
      features: ['Admin dashboard', 'User authentication', 'Database integration', 'Content management'],
    },
    {
      icon: 'fas fa-shopping-cart',
      title: 'E-Commerce Solutions',
      desc: 'Full-featured online stores with product catalogs, shopping carts, secure payment gateways, and order management. We build scalable stores that drive revenue.',
      features: ['Product catalog & search', 'Secure payment gateway', 'Order & inventory management', 'Customer accounts & tracking'],
    },
    {
      icon: 'fas fa-window-restore',
      title: 'Web Applications',
      desc: 'Custom web applications tailored to your business processes — CRM systems, booking platforms, dashboards, and internal tools built with modern frameworks.',
      features: ['Custom business logic', 'Real-time data processing', 'API integrations', 'Role-based access control'],
    },
    {
      icon: 'fas fa-sync-alt',
      title: 'Website Redesign',
      desc: 'Transform your outdated website into a modern, high-performing digital asset. We preserve your brand while upgrading design, speed, and user experience.',
      features: ['Modern UI/UX overhaul', 'Performance optimization', 'Mobile-first approach', 'SEO migration'],
    },
    {
      icon: 'fas fa-search',
      title: 'SEO & Digital Marketing',
      desc: 'Search engine optimization, Google Analytics setup, and digital marketing strategies to increase your online visibility and drive organic traffic to your website.',
      features: ['On-page SEO', 'Google Analytics & Search Console', 'Speed optimization', 'Content strategy'],
    },
  ]

  return (
    <section className="cp-section" id="services">
      <div className="cp-container">
        <div className="cp-section-label">Our Services</div>
        <h2 className="cp-heading cp-heading-center">
          Everything You Need to <span className="gradient-text">Go Digital</span>
        </h2>
        <div className="cp-services-grid">
          {services.map((s, i) => (
            <div className="cp-service-card" key={i}>
              <div className="cp-service-icon">
                <i className={s.icon}></i>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul className="cp-service-features">
                {s.features.map((f, j) => (
                  <li key={j}><i className="fas fa-check"></i> {f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
