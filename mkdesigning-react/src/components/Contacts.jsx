function Contacts() {
  return (
    <section className="cp-section" id="contact">
      <div className="cp-container">
        <div className="cp-section-label">Contact Us</div>
        <h2 className="cp-heading cp-heading-center">
          Have a Project in Mind? <span className="gradient-text">Let&apos;s Talk</span>
        </h2>

        <div className="cp-contact-grid">
          <div className="cp-contact-info">
            <div className="cp-contact-item">
              <i className="fas fa-phone"></i>
              <div>
                <strong>Call Us</strong>
                <p>+91 70927 80058</p>
                <p className="cp-contact-sub">Mon – Sat, 9 AM – 7 PM IST</p>
              </div>
            </div>
            <div className="cp-contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <strong>Email Us</strong>
                <p><a href="mailto:info@mkdesigning.in">info@mkdesigning.in</a></p>
                <p className="cp-contact-sub">We respond within 24 hours</p>
              </div>
            </div>
            <div className="cp-contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <strong>Visit Our Office</strong>
                <p>No.1/A Arni Road, Sainathapuram,<br />Vellore, Tamil Nadu 632001</p>
              </div>
            </div>
            <div className="cp-contact-item">
              <i className="fas fa-globe"></i>
              <div>
                <strong>Website</strong>
                <p><a href="https://mkdesigning.in" target="_blank" rel="noopener noreferrer">www.mkdesigning.in</a></p>
              </div>
            </div>
          </div>

          <div className="cp-contact-cta">
            <h3>Ready to Build Your Website?</h3>
            <p>
              Whether you need a brand-new website, an e-commerce store, or a
              complete redesign of your existing site — share your requirements
              and we&apos;ll get back to you within 24 hours with a free quote
              and project timeline.
            </p>
            <div className="cp-contact-cta-points">
              <div><i className="fas fa-check"></i> Free initial consultation</div>
              <div><i className="fas fa-check"></i> Detailed project proposal</div>
              <div><i className="fas fa-check"></i> No hidden charges</div>
            </div>
            <a href="mailto:info@mkdesigning.in" className="cp-btn cp-btn-primary">
              Request a Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts
