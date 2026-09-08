import FAQ from '../components/FAQ'

function FAQPage() {
  return (
    <main className="cp-main">
      <div className="cp-page-header">
        <div className="cp-container">
          <h1 className="cp-page-title">Frequently Asked <span className="gradient-text">Questions</span></h1>
          <p className="cp-page-desc">Quick answers to common questions about our web design services, pricing, timelines &amp; support.</p>
        </div>
      </div>
      <FAQ />
    </main>
  )
}

export default FAQPage
