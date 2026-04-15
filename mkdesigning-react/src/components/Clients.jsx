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
  ]

  return (
    <section className="cp-section" id="clients">
      <div className="cp-container">
        <div className="cp-section-label">Client Testimonials</div>
        <h2 className="cp-heading cp-heading-center">
          Real Results, <span className="gradient-text">Real Feedback</span>
        </h2>
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
