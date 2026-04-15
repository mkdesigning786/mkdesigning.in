import FAQ from '../components/FAQ'
import SEO from '../components/SEO'

function FAQPage() {
  return (
    <main className="cp-main">
      <SEO
        title="FAQ - Web Design & Development Questions"
        description="Frequently asked questions about web design services, pricing, timelines, hosting, post-launch support & training at MK Designing, Vellore."
        keywords="web design FAQ, website development questions, how long to build website, website cost India, web hosting help, MK Designing FAQ"
        path="faq"
      />
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
