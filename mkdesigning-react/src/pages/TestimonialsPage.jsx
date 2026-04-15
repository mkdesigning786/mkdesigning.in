import Clients from '../components/Clients'
import SEO from '../components/SEO'

function TestimonialsPage() {
  return (
    <main className="cp-main">
      <SEO
        title="Client Testimonials & Reviews"
        description="Read genuine reviews from 30+ satisfied clients of MK Designing. See how our web design, e-commerce & development services helped businesses grow online."
        keywords="MK Designing reviews, web design client testimonials, website development feedback, customer reviews Vellore"
        path="testimonials"
      />
      <div className="cp-page-header">
        <div className="cp-container">
          <h1 className="cp-page-title">Client <span className="gradient-text">Testimonials</span></h1>
          <p className="cp-page-desc">Real feedback from 30+ satisfied clients — see how we helped businesses grow their online presence.</p>
        </div>
      </div>
      <Clients />
    </main>
  )
}

export default TestimonialsPage
