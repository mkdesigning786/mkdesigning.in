function Footer() {
  return (
    <footer className="cp-footer">
      <div className="cp-container">
        <div className="cp-footer-grid">
          <div className="cp-footer-col">
            <img src="/logo.png" alt="MK Designing" className="cp-footer-logo" />
            <p>
              Professional web design &amp; development agency helping
              businesses build a strong online presence with custom websites,
              e-commerce solutions, and digital experiences.
            </p>
          </div>

          <div className="cp-footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#why-us">Why Choose Us</a></li>
              <li><a href="#clients">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="cp-footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#hero">Static Web Design</a></li>
              <li><a href="#hero">Dynamic Websites</a></li>
              <li><a href="#hero">E-Commerce Development</a></li>
              <li><a href="#hero">Web Applications</a></li>
              <li><a href="#hero">Website Redesign</a></li>
            </ul>
          </div>

          <div className="cp-footer-col">
            <h4>Get in Touch</h4>
            <p>
              <i className="fas fa-envelope" style={{ marginRight: '8px', color: '#00d4ff' }}></i>
              info@mkdesigning.in
            </p>
            <p>
              <i className="fas fa-phone" style={{ marginRight: '8px', color: '#00d4ff' }}></i>
              +91 70927 80058
            </p>
            <p>
              <i className="fas fa-map-marker-alt" style={{ marginRight: '8px', color: '#00d4ff' }}></i>
              Vellore, Tamil Nadu, India
            </p>
            <div className="cp-footer-social" style={{ marginTop: '16px' }}>
              <a href="https://www.instagram.com/mkdesigning.in/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://pin.it/3pGxfjK82" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-pinterest"></i>
              </a>
              <a href="https://dribbble.com/mkdesigning/about" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-dribbble"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="cp-footer-bottom">
          <p>&copy; {new Date().getFullYear()} MK Designing. All rights reserved. | Designed &amp; Developed in India</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
