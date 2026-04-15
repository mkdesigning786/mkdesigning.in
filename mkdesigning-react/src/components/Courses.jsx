function Courses() {
  const courses = [
    {
      icon: 'fab fa-html5',
      title: 'HTML5',
      desc: 'Learn the foundation of web development — semantic markup, forms, accessibility, and modern HTML5 features.',
      color: '#e44d26',
    },
    {
      icon: 'fab fa-css3-alt',
      title: 'CSS3',
      desc: 'Master layouts with Flexbox & Grid, responsive design, animations, and modern CSS techniques.',
      color: '#264de4',
    },
    {
      icon: 'fab fa-js-square',
      title: 'JavaScript',
      desc: 'From fundamentals to ES6+, DOM manipulation, async programming, and real-world project building.',
      color: '#f7df1e',
    },
    {
      icon: 'fab fa-php',
      title: 'PHP',
      desc: 'Server-side scripting, MySQL integration, form handling, sessions, and building dynamic web applications.',
      color: '#777bb4',
    },
    {
      icon: 'fab fa-angular',
      title: 'Angular',
      desc: 'Build enterprise-grade single-page applications with TypeScript, components, services, and routing.',
      color: '#dd0031',
    },
    {
      icon: 'fab fa-react',
      title: 'React',
      desc: 'Component-based UI development, hooks, state management, routing, and building production-ready apps.',
      color: '#61dafb',
    },
    {
      icon: 'fas fa-database',
      title: 'SQL',
      desc: 'Database design, queries, joins, stored procedures, and working with MySQL and relational databases.',
      color: '#00d4ff',
    },
  ]

  return (
    <section className="cp-section cp-section-alt" id="courses">
      <div className="cp-container">
        <div className="cp-section-label">Training &amp; Courses</div>
        <h2 className="cp-heading cp-heading-center">
          Learn Web Development from <span className="gradient-text">Industry Experts</span>
        </h2>
        <p className="cp-courses-subtitle">
          We offer hands-on, project-based training for beginners and professionals.
          Learn the most in-demand web technologies with real-world projects and placement guidance.
        </p>

        <div className="cp-courses-grid">
          {courses.map((c, i) => (
            <div className="cp-course-card" key={i}>
              <div className="cp-course-icon" style={{ color: c.color }}>
                <i className={c.icon}></i>
              </div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="cp-courses-features">
          <div className="cp-courses-feature">
            <i className="fas fa-chalkboard-teacher"></i>
            <span>Live Instructor-Led Classes</span>
          </div>
          <div className="cp-courses-feature">
            <i className="fas fa-laptop-code"></i>
            <span>Hands-On Projects</span>
          </div>
          <div className="cp-courses-feature">
            <i className="fas fa-certificate"></i>
            <span>Course Completion Certificate</span>
          </div>
          <div className="cp-courses-feature">
            <i className="fas fa-users"></i>
            <span>Small Batch Size</span>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href="#contact" className="cp-btn cp-btn-primary">Enroll Now</a>
        </div>
      </div>
    </section>
  )
}

export default Courses
