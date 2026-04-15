import Blog from '../components/Blog'
import SEO from '../components/SEO'

function BlogPage() {
  return (
    <main className="cp-main">
      <SEO
        title="Blog - Web Design Tips & Development Insights"
        description="Read expert articles on web design, SEO, e-commerce, React development & digital marketing. Stay updated with the latest web technology trends from MK Designing."
        keywords="web design blog, website development tips, SEO guide, React tutorials, e-commerce insights, web technology trends 2026"
        path="blog"
      />
      <div className="cp-page-header">
        <div className="cp-container">
          <h1 className="cp-page-title">Blog &amp; <span className="gradient-text">Insights</span></h1>
          <p className="cp-page-desc">Expert articles on web design, SEO, e-commerce &amp; modern web development — tips to grow your business online.</p>
        </div>
      </div>
      <Blog />
    </main>
  )
}

export default BlogPage
