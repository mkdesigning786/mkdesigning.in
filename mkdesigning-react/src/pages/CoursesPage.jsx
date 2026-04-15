import Courses from '../components/Courses'
import SEO from '../components/SEO'

function CoursesPage() {
  return (
    <main className="cp-main">
      <SEO
        title="Web Development Courses & Training in Vellore"
        description="Learn HTML, CSS, JavaScript, PHP, React, Angular & SQL with hands-on training at MK Designing, Vellore. Live classes, real projects & certificate. Enroll now!"
        keywords="web development course Vellore, React training Tamil Nadu, HTML CSS JavaScript course, PHP training, Angular course, SQL training, learn web development India"
        path="courses"
      />
      <div className="cp-page-header">
        <div className="cp-container">
          <h1 className="cp-page-title">Web Development <span className="gradient-text">Training</span></h1>
          <p className="cp-page-desc">Master HTML, CSS, JavaScript, PHP, React, Angular &amp; SQL with hands-on projects, live classes &amp; certification.</p>
        </div>
      </div>
      <Courses />
    </main>
  )
}

export default CoursesPage
