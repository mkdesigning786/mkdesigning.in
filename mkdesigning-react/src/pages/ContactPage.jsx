import Contacts from '../components/Contacts'

function ContactPage() {
  return (
    <main className="cp-main">
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
