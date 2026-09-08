import Process from '../components/Process'

function ProcessPage() {
  return (
    <main className="cp-main">
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
