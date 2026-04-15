import About from '../components/About'
import SEO from '../components/SEO'

function AboutPage() {
  return (
    <main className="cp-main">
      <SEO
        title="About Us - Web Design Agency in Vellore"
        description="MK Designing is a professional web design & development agency in Vellore, Tamil Nadu founded by Mohammed Kasim. 5+ years experience, 50+ projects delivered for startups & brands."
        keywords="about MK Designing, web design agency Vellore, Mohammed Kasim web developer, website company Tamil Nadu"
        path="about"
      />
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
