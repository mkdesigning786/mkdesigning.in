import Process from '../components/Process'
import SEO from '../components/SEO'

function ProcessPage() {
  return (
    <main className="cp-main">
      <SEO
        title="How We Work - Our Web Design Process"
        description="Our proven 6-step web design process — from discovery & planning to launch & support. Transparent timelines, weekly updates, and on-time delivery guaranteed."
        keywords="web design process, how website is built, website development steps, project workflow, MK Designing process"
        path="process"
      />
      <div className="cp-page-header">
        <div className="cp-container">
          <h1 className="cp-page-title">How We <span className="gradient-text">Work</span></h1>
          <p className="cp-page-desc">Our proven 6-step process — from discovery &amp; planning to launch &amp; ongoing support. On-time delivery guaranteed.</p>
        </div>
      </div>
      <Process />
    </main>
  )
}

export default ProcessPage
