import Services from '../components/Services'
function ServicesPage() {
  return (
    <main className="cp-main">
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
