import Team from '../components/Team'

function TeamPage() {
  return (
    <main className="cp-main">
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
