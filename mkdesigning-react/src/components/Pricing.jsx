function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '₹9,999',
      period: 'one-time',
      desc: 'Perfect for small businesses and personal brands needing a professional online presence.',
      features: [
        'Up to 5 pages',
        'Mobile responsive design',
        'Contact form integration',
        'Basic SEO setup',
        'Social media links',
        '1 month free support',
      ],
      highlighted: false,
    },
    {
      name: 'Business',
      price: '₹24,999',
      period: 'one-time',
      desc: 'Ideal for growing businesses that need dynamic features and content management.',
      features: [
        'Up to 15 pages',
        'Admin panel / CMS',
        'Blog integration',
        'Advanced SEO optimization',
        'Google Analytics setup',
        'WhatsApp & chat integration',
        'Speed optimization',
        '3 months free support',
      ],
      highlighted: true,
    },
    {
      name: 'E-Commerce',
      price: '₹49,999',
      period: 'one-time',
      desc: 'Full-featured online store with payment gateway, product management, and order tracking.',
      features: [
        'Unlimited products',
        'Payment gateway integration',
        'Order & inventory management',
        'Customer accounts',
        'Coupon & discount system',
        'Email notifications',
        'SSL certificate setup',
        '6 months free support',
      ],
      highlighted: false,
    },
  ]

  return (
    <section className="cp-section cp-section-alt" id="pricing">
      <div className="cp-container">
        <div className="cp-section-label">Pricing Plans</div>
        <h2 className="cp-heading cp-heading-center">
          Transparent Pricing, <span className="gradient-text">No Hidden Costs</span>
        </h2>
        <div className="cp-pricing-grid">
          {plans.map((p, i) => (
            <div className={`cp-pricing-card ${p.highlighted ? 'cp-pricing-popular' : ''}`} key={i}>
              {p.highlighted && <div className="cp-pricing-badge">Most Popular</div>}
              <h3>{p.name}</h3>
              <div className="cp-pricing-price">
                {p.price}
                <span>/{p.period}</span>
              </div>
              <p className="cp-pricing-desc">{p.desc}</p>
              <ul className="cp-pricing-features">
                {p.features.map((f, j) => (
                  <li key={j}><i className="fas fa-check"></i> {f}</li>
                ))}
              </ul>
              <a href="#contact" className={`cp-btn ${p.highlighted ? 'cp-btn-primary' : 'cp-btn-outline'}`}>
                Get Started
              </a>
            </div>
          ))}
        </div>
        <p className="cp-pricing-note">
          * All prices are starting estimates. Final quote depends on project scope and features. GST extra where applicable.
        </p>
      </div>
    </section>
  )
}

export default Pricing
