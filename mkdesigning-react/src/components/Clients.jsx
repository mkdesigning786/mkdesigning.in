function Clients() {
  const testimonials = [
    {
      quote: 'We needed an e-commerce website that could handle 500+ products with a smooth checkout experience. MK Designing delivered exactly that — our online sales grew 40% in the first quarter.',
      name: 'Rahul Verma',
      role: 'Managing Director, TrendBazaar',
    },
    {
      quote: 'Our old website was slow and outdated. The redesign transformed everything — modern look, fast loading, and mobile-friendly. Enquiries from Google have doubled since launch.',
      name: 'Dr. Lakshmi Nair',
      role: 'Founder, BrightPath Coaching',
    },
    {
      quote: 'From the first discovery call to final launch, the communication was excellent. They understood our brand, met every deadline, and the final website exceeded our expectations.',
      name: 'Arjun Menon',
      role: 'CEO, Freshroots Organics',
    },
    {
      quote: 'MK Designing built our rental platform from scratch — property listings, booking system, and payment integration. The quality of work was outstanding for the price.',
      name: 'Priya Sharma',
      role: 'Co-founder, UrbanStay Rentals',
    },
    {
      quote: 'They redesigned our salon website and it looks absolutely gorgeous. The appointment booking feature has saved us hours of phone calls every week.',
      name: 'Meera Krishnan',
      role: 'Owner, Velvet Salon & Spa',
    },
    {
      quote: 'I took the React training course at MK Designing. The hands-on approach with real projects made all the difference. I landed my first developer job within 2 months!',
      name: 'Arun Kumar',
      role: 'Frontend Developer, Tech Startup',
    },
  ]

  const clientLogos = [
    { name: 'TrendBazaar', icon: 'fas fa-shopping-bag' },
    { name: 'BrightPath', icon: 'fas fa-graduation-cap' },
    { name: 'Freshroots', icon: 'fas fa-leaf' },
    { name: 'UrbanStay', icon: 'fas fa-building' },
    { name: 'Velvet Salon', icon: 'fas fa-spa' },
    { name: 'KasimTech', icon: 'fas fa-microchip' },
    { name: 'AutoDrive', icon: 'fas fa-car' },
    { name: 'MediCare+', icon: 'fas fa-heartbeat' },
  ]

  return (
    <section className="cp-section" id="clients">
      <div className="cp-container">
        <div className="cp-section-label">Client Testimonials</div>
        <h2 className="cp-heading cp-heading-center">
          Real Results, <span className="gradient-text">Real Feedback</span>
        </h2>

        <div className="cp-client-logos">
          {clientLogos.map((c, i) => (
            <div className="cp-client-logo" key={i}>
              <i className={c.icon}></i>
              <span>{c.name}</span>
            </div>
          ))}
        </div>

        <div className="cp-testimonials">
          {testimonials.map((t, i) => (
            <div className="cp-testimonial-card" key={i}>
              <i className="fas fa-quote-left cp-quote-icon"></i>
              <p>{t.quote}</p>
              <div className="cp-testimonial-author">
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients
