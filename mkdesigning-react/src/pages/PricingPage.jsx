import Pricing from '../components/Pricing'
import SEO from '../components/SEO'

function PricingPage() {
  return (
    <main className="cp-main">
      <SEO
        title="Website Design Pricing - Affordable Packages"
        description="Affordable website design packages starting ₹9,999. Static websites, dynamic sites & e-commerce stores with transparent pricing. No hidden charges. Get a free quote from MK Designing."
        keywords="website design cost India, affordable web design packages, e-commerce website price, static website cost, web development pricing Vellore"
        path="pricing"
      />
      <div className="cp-page-header">
        <div className="cp-container">
          <h1 className="cp-page-title">Website Design <span className="gradient-text">Pricing</span></h1>
          <p className="cp-page-desc">Affordable, transparent pricing starting ₹9,999. No hidden costs — choose a package that fits your business needs.</p>
        </div>
      </div>
      <Pricing />
    </main>
  )
}

export default PricingPage
