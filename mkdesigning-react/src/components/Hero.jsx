import { useEffect, useState } from 'react'

const words = ['Business Websites', 'E-Commerce Platforms', 'Landing Pages', 'Web Applications', 'Brand Experiences']

function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]
    const speed = deleting ? 40 : 80
    if (!deleting && text === current) {
      setTimeout(() => setDeleting(true), 2000)
      return
    }
    if (deleting && text === '') {
      setDeleting(false)
      setWordIndex((i) => (i + 1) % words.length)
      return
    }
    const timer = setTimeout(() => {
      setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1))
    }, speed)
    return () => clearTimeout(timer)
  }, [text, deleting, wordIndex])

  return (
    <section className="cp-hero" id="hero">
      <div className="cp-hero-content">
        <div className="cp-hero-badge">
          <span className="cp-dot"></span>
          Trusted Web Design &amp; Development Partner
        </div>
        <h1 className="cp-hero-title">
          We Create<br />
          <span className="gradient-text">{text}</span>
          <span className="cursor-blink">|</span>
        </h1>
        <p className="cp-hero-desc">
          Transform your vision into a stunning digital reality. We design and
          develop custom websites that drive traffic, engage visitors, and grow
          your business — on time, on budget, and built to perform.
        </p>

        <div className="cp-hero-services">
          <div className="cp-hero-service">
            <i className="fas fa-laptop-code"></i>
            <span>Static Websites</span>
          </div>
          <div className="cp-hero-service">
            <i className="fas fa-code"></i>
            <span>Dynamic Websites</span>
          </div>
          <div className="cp-hero-service">
            <i className="fas fa-shopping-cart"></i>
            <span>E-Commerce</span>
          </div>
          <div className="cp-hero-service">
            <i className="fas fa-window-restore"></i>
            <span>Web Applications</span>
          </div>
          <div className="cp-hero-service">
            <i className="fas fa-sync-alt"></i>
            <span>Website Redesign</span>
          </div>
        </div>

        <div className="cp-hero-stats">
          <div className="cp-stat">
            <span className="cp-stat-num">50+</span>
            <span className="cp-stat-label">Projects Delivered</span>
          </div>
          <div className="cp-stat">
            <span className="cp-stat-num">5+</span>
            <span className="cp-stat-label">Years of Experience</span>
          </div>
          <div className="cp-stat">
            <span className="cp-stat-num">98%</span>
            <span className="cp-stat-label">Client Retention</span>
          </div>
          <div className="cp-stat">
            <span className="cp-stat-num">30+</span>
            <span className="cp-stat-label">Active Clients</span>
          </div>
        </div>
        <div className="cp-hero-actions">
          <a href="#contact" className="cp-btn cp-btn-primary">Get Free Consultation</a>
          <a href="#about" className="cp-btn cp-btn-outline">Explore Our Work</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
