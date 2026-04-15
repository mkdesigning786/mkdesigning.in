function About() {
  return (
    <section className="cp-section" id="about">
      <div className="cp-container">
        <div className="cp-section-label">Who We Are</div>
        <div className="cp-about-grid">
          <div className="cp-about-img">
            <img src="./logo.png" alt="MK Designing" />
          </div>
          <div className="cp-about-text">
            <h2 className="cp-heading">
              Your Digital Growth Starts with <span className="gradient-text">Great Design</span>
            </h2>
            <p>
              MK Designing is a professional web design and development agency
              based in Vellore, Tamil Nadu. Founded by Mohammed Kasim, we help
              businesses — from startups to established brands — build a
              compelling online presence that converts visitors into customers.
            </p>
            <p>
              Our expertise spans static business websites, content-driven
              dynamic platforms, full-stack e-commerce solutions, custom web
              applications, and complete website redesigns. Every project is
              built with clean code, fast load times, and a design that
              reflects your brand identity.
            </p>
            <div className="cp-about-highlights">
              <div className="cp-highlight">
                <i className="fas fa-check-circle"></i>
                <span>Tailored UI/UX Design</span>
              </div>
              <div className="cp-highlight">
                <i className="fas fa-check-circle"></i>
                <span>Responsive on All Devices</span>
              </div>
              <div className="cp-highlight">
                <i className="fas fa-check-circle"></i>
                <span>SEO &amp; Performance Optimized</span>
              </div>
              <div className="cp-highlight">
                <i className="fas fa-check-circle"></i>
                <span>Ongoing Support &amp; Maintenance</span>
              </div>
              <div className="cp-highlight">
                <i className="fas fa-check-circle"></i>
                <span>On-time Project Delivery</span>
              </div>
              <div className="cp-highlight">
                <i className="fas fa-check-circle"></i>
                <span>Transparent Communication</span>
              </div>
            </div>
            <a href="#contact" className="cp-btn cp-btn-primary" style={{ marginTop: '25px' }}>
              Let&apos;s Discuss Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
