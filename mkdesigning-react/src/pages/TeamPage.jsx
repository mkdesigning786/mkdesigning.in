import Team from '../components/Team'
import SEO from '../components/SEO'

function TeamPage() {
  return (
    <main className="cp-main">
      <SEO
        title="Our Team - Web Developers & Designers"
        description="Meet the expert team behind MK Designing — skilled web developers, UI/UX designers & project managers led by founder Mohammed Kasim. Based in Vellore, Tamil Nadu."
        keywords="MK Designing team, Mohammed Kasim web developer, web designers Vellore, frontend developer Tamil Nadu"
        path="team"
      />
      <div className="cp-page-header">
        <div className="cp-container">
          <h1 className="cp-page-title">Meet Our <span className="gradient-text">Team</span></h1>
          <p className="cp-page-desc">Expert web developers, UI/UX designers &amp; project managers dedicated to building exceptional digital experiences.</p>
        </div>
      </div>
      <Team />
    </main>
  )
}

export default TeamPage
