import { Link } from 'react-router-dom'

function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="cp-footer">
      <div className="cp-container">
        <div className="cp-footer-grid">
          <div className="cp-footer-col">
            <img src="./logo.png" alt="MK Designing - Web Design & Development Agency in Vellore" className="cp-footer-logo" />
            <p>
              Professional web design &amp; development agency helping
              businesses build a strong online presence with custom websites,
              e-commerce solutions, and digital experiences.
            </p>
          </div>

          <div className="cp-footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about" onClick={scrollTop}>About Us</Link></li>
              <li><Link to="/services" onClick={scrollTop}>Services</Link></li>
              <li><Link to="/portfolio" onClick={scrollTop}>Portfolio</Link></li>
              <li><Link to="/pricing" onClick={scrollTop}>Pricing</Link></li>
              <li><Link to="/team" onClick={scrollTop}>Our Team</Link></li>
              <li><Link to="/contact" onClick={scrollTop}>Contact</Link></li>
            </ul>
          </div>

          <div className="cp-footer-col">
            <h4>Resources</h4>
            <ul>
              <li><Link to="/courses" onClick={scrollTop}>Training Courses</Link></li>
              <li><Link to="/blog" onClick={scrollTop}>Blog &amp; Insights</Link></li>
              <li><Link to="/testimonials" onClick={scrollTop}>Testimonials</Link></li>
              <li><Link to="/faq" onClick={scrollTop}>FAQ</Link></li>
              <li><Link to="/process" onClick={scrollTop}>How We Work</Link></li>
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
