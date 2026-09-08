import Courses from '../components/Courses'

function CoursesPage() {
  return (
    <main className="cp-main">
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
