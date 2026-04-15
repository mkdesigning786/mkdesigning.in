function Process() {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Planning',
      desc: 'We start by understanding your business, goals, target audience, and competitors. This phase includes requirement gathering, sitemap planning, and project timeline.',
      icon: 'fas fa-lightbulb',
    },
    {
      num: '02',
      title: 'UI/UX Design',
      desc: 'Our designers create wireframes and high-fidelity mockups tailored to your brand. You review and approve the design before we write a single line of code.',
      icon: 'fas fa-pencil-ruler',
    },
    {
      num: '03',
      title: 'Development',
      desc: 'We build your website using modern technologies with clean, semantic code. Mobile responsiveness, performance, and SEO are baked in from the start.',
      icon: 'fas fa-code',
    },
    {
      num: '04',
      title: 'Testing & QA',
      desc: 'Rigorous testing across browsers, devices, and screen sizes. We check speed, accessibility, broken links, forms, and payment flows before anything goes live.',
      icon: 'fas fa-bug',
    },
    {
      num: '05',
      title: 'Launch & Deployment',
      desc: 'We deploy your website to production, set up SSL, configure DNS, and ensure everything runs smoothly. We also set up Google Analytics and Search Console.',
      icon: 'fas fa-rocket',
    },
    {
      num: '06',
      title: 'Support & Maintenance',
      desc: 'Post-launch, we provide ongoing support including updates, backups, security patches, and performance monitoring to keep your website running at its best.',
      icon: 'fas fa-life-ring',
    },
  ]

  return (
    <section className="cp-section cp-section-alt" id="process">
      <div className="cp-container">
        <div className="cp-section-label">How We Work</div>
        <h2 className="cp-heading cp-heading-center">
          Our Proven <span className="gradient-text">6-Step Process</span>
        </h2>
        <div className="cp-process-grid">
          {steps.map((s, i) => (
            <div className="cp-process-step" key={i}>
              <div className="cp-process-num">{s.num}</div>
              <div className="cp-process-icon">
                <i className={s.icon}></i>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
