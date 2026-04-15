import Portfolio from '../components/Portfolio'
import SEO from '../components/SEO'

function PortfolioPage() {
  return (
    <main className="cp-main">
      <SEO
        title="Portfolio - Web Design Projects & Case Studies"
        description="Explore 50+ web design and development projects by MK Designing — e-commerce stores, business websites, web applications & website redesigns for clients across India."
        keywords="web design portfolio, website development projects, e-commerce case study, MK Designing projects, web application examples"
        path="portfolio"
      />
      <div className="cp-page-header">
        <div className="cp-container">
          <h1 className="cp-page-title">Our <span className="gradient-text">Portfolio</span></h1>
          <p className="cp-page-desc">50+ successfully delivered projects — e-commerce stores, business websites, web apps &amp; redesigns for clients across India.</p>
        </div>
      </div>
      <Portfolio />
    </main>
  )
}

export default PortfolioPage
