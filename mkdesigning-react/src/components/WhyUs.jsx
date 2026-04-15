function WhyUs() {
  const reasons = [
    {
      icon: 'fas fa-pencil-ruler',
      title: 'Custom Design, No Templates',
      desc: 'Every website is designed from scratch to match your brand. No cookie-cutter themes — just original, purposeful design.',
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile-First & Responsive',
      desc: 'Over 60% of web traffic is mobile. We build responsive sites that look flawless on phones, tablets, and desktops.',
    },
    {
      icon: 'fas fa-search',
      title: 'SEO Built-In from Day One',
      desc: 'Clean code, fast page speeds, and proper meta structure so your website ranks higher on Google from launch.',
    },
    {
      icon: 'fas fa-bolt',
      title: 'Lightning-Fast Performance',
      desc: 'Optimized images, minified code, and modern hosting. Your visitors get sub-2-second load times, every time.',
    },
    {
      icon: 'fas fa-handshake',
      title: 'Dedicated Project Manager',
      desc: 'A single point of contact from kickoff to launch. Clear timelines, weekly updates, and zero guesswork.',
    },
    {
      icon: 'fas fa-life-ring',
      title: 'Post-Launch Support',
      desc: 'We don\u2019t disappear after delivery. Get ongoing maintenance, security updates, and priority support whenever you need it.',
    },
  ]

  return (
    <section className="cp-section cp-section-alt" id="why-us">
      <div className="cp-container">
        <div className="cp-section-label">Why Choose Us</div>
        <h2 className="cp-heading cp-heading-center">
          What Sets Us <span className="gradient-text">Apart</span>
        </h2>
        <div className="cp-why-grid">
          {reasons.map((r, i) => (
            <div className="cp-why-card" key={i}>
              <div className="cp-why-icon">
                <i className={r.icon}></i>
              </div>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
