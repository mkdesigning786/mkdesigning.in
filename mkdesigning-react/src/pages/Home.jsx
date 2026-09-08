import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import WhyUs from '../components/WhyUs'
import Process from '../components/Process'
import Courses from '../components/Courses'
import Team from '../components/Team'
import FAQ from '../components/FAQ'
import Contacts from '../components/Contacts'
function Home() {
  return (
    <main className="cp-main">
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Process />
      <Courses />
      <Team />
      <FAQ />
      <Contacts />
    </main>
  )
}

export default Home
