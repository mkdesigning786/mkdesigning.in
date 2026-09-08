function About() {
  return (
    <section className="cp-section" id="about">
      <div className="cp-container">
        <div className="cp-section-label">Who We Are</div>
        <div className="cp-about-grid">
          <div className="cp-about-visual">
            <div className="cp-about-img">
              <span className="cp-about-corner cp-about-corner-top"></span>
              <img src="./logo.png" alt="MK Designing - Web Design & Development Agency Logo, Vellore Tamil Nadu" />
              <span className="cp-about-corner cp-about-corner-bottom"></span>
            </div>
            <div className="cp-about-location">
              <span className="cp-about-location-dot"></span>
              <span>Vellore, Tamil Nadu</span>
              <span className="cp-about-location-line"></span>
              <span>Est. 2020</span>
            </div>
          </div>
          <div className="cp-about-text">
            <h2 className="cp-heading">
              Your Digital Growth Starts with <span className="gradient-text">Great Design</span>
            </h2>
            <p className="cp-about-lead">
              We turn ambitious ideas into clear, confident digital experiences.
            </p>
            <p>
              MK Designing is a professional web design and development agency
              based in Vellore, Tamil Nadu. Founded by Mohammed Kasim, we help
              businesses — from startups to established brands — build a
              compelling online presence that helps customers connect with your business.
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
                <span>Fast &amp; Performance Optimized</span>
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
            <div className="cp-about-footer">
              <a href="#contact" className="cp-btn cp-btn-primary">
                Let&apos;s Discuss Your Project
              </a>
              <span className="cp-about-signoff">Thoughtful design. Measurable growth.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
