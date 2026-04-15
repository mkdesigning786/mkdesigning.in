function Blog() {
  const posts = [
    {
      title: '10 Reasons Your Business Needs a Website in 2026',
      excerpt: 'In the digital-first world, not having a website means losing customers to competitors. Here are 10 compelling reasons why every business — big or small — needs a professional website.',
      date: 'April 10, 2026',
      category: 'Business',
      icon: 'fas fa-briefcase',
    },
    {
      title: 'Static vs Dynamic Websites: Which One Is Right for You?',
      excerpt: 'Confused between static and dynamic websites? We break down the differences, pros, cons, and help you decide which type fits your business goals and budget.',
      date: 'March 28, 2026',
      category: 'Web Development',
      icon: 'fas fa-code',
    },
    {
      title: 'How to Choose the Right E-Commerce Platform',
      excerpt: 'From WooCommerce to custom-built solutions — explore the top e-commerce platforms and learn which one delivers the best results for your online store.',
      date: 'March 15, 2026',
      category: 'E-Commerce',
      icon: 'fas fa-shopping-cart',
    },
    {
      title: 'SEO Basics Every Small Business Owner Should Know',
      excerpt: 'You don\'t need to be an SEO expert to rank on Google. Learn the fundamental SEO practices that can boost your website\'s visibility without spending a fortune.',
      date: 'February 22, 2026',
      category: 'SEO',
      icon: 'fas fa-search',
    },
    {
      title: 'Why Website Speed Matters More Than You Think',
      excerpt: 'A 1-second delay in page load can reduce conversions by 7%. Learn why website performance is critical and what we do to ensure every site loads under 2 seconds.',
      date: 'February 10, 2026',
      category: 'Performance',
      icon: 'fas fa-bolt',
    },
    {
      title: 'Getting Started with React: A Beginner\'s Roadmap',
      excerpt: 'Planning to learn React? Here\'s a step-by-step roadmap covering prerequisites, core concepts, projects to build, and resources to accelerate your learning journey.',
      date: 'January 30, 2026',
      category: 'Training',
      icon: 'fab fa-react',
    },
  ]

  return (
    <section className="cp-section cp-section-alt" id="blog">
      <div className="cp-container">
        <div className="cp-section-label">Blog &amp; Insights</div>
        <h2 className="cp-heading cp-heading-center">
          Latest from Our <span className="gradient-text">Blog</span>
        </h2>
        <div className="cp-blog-grid">
          {posts.map((p, i) => (
            <div className="cp-blog-card" key={i}>
              <div className="cp-blog-icon">
                <i className={p.icon}></i>
              </div>
              <div className="cp-blog-meta">
                <span className="cp-blog-cat">{p.category}</span>
                <span className="cp-blog-date">{p.date}</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.excerpt}</p>
              <span className="cp-blog-link">Read More <i className="fas fa-arrow-right"></i></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
