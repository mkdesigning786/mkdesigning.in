import Services from '../components/Services'
import SEO from '../components/SEO'

function ServicesPage() {
  return (
    <main className="cp-main">
      <SEO
        title="Web Design & Development Services in Vellore"
        description="Custom web design, e-commerce development, dynamic websites, web applications, website redesign & SEO services in Vellore, Tamil Nadu. Affordable packages starting ₹9,999."
        keywords="web design services Vellore, e-commerce development India, static website design, dynamic website development, custom web application, website redesign service, SEO services Tamil Nadu"
        path="services"
      />
      <div className="cp-page-header">
        <div className="cp-container">
          <h1 className="cp-page-title">Web Design &amp; Development <span className="gradient-text">Services</span></h1>
          <p className="cp-page-desc">From static business websites to full-stack e-commerce platforms — custom web solutions built to grow your business online.</p>
        </div>
      </div>
      <Services />
    </main>
  )
}

export default ServicesPage
