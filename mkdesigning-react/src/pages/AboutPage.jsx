import About from '../components/About'

function AboutPage() {
  return (
    <main className="cp-main">
      <div className="cp-page-header">
        <div className="cp-container">
          <h1 className="cp-page-title">About <span className="gradient-text">MK Designing</span></h1>
          <p className="cp-page-desc">A trusted web design &amp; development agency in Vellore, Tamil Nadu — empowering businesses with custom digital solutions since 2021.</p>
        </div>
      </div>
      <About />
    </main>
  )
}

export default AboutPage
