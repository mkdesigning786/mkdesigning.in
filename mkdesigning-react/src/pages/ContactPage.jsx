import Contacts from '../components/Contacts'
import SEO from '../components/SEO'

function ContactPage() {
  return (
    <main className="cp-main">
      <SEO
        title="Contact Us - Get a Free Website Quote"
        description="Contact MK Designing for a free website consultation. Call +91 70927 80058, email info@mkdesigning.in, or visit our office in Vellore, Tamil Nadu. We respond within 24 hours."
        keywords="contact MK Designing, web design quote, free website consultation Vellore, hire web developer Tamil Nadu, website enquiry"
        path="contact"
      />
      <div className="cp-page-header">
        <div className="cp-container">
          <h1 className="cp-page-title">Get in <span className="gradient-text">Touch</span></h1>
          <p className="cp-page-desc">Ready to start your project? Contact us for a free consultation and quote. We respond within 24 hours.</p>
        </div>
      </div>
      <Contacts />
    </main>
  )
}

export default ContactPage
