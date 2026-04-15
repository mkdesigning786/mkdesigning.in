import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import WhyUs from '../components/WhyUs'
import Process from '../components/Process'
import Portfolio from '../components/Portfolio'
import Pricing from '../components/Pricing'
import Courses from '../components/Courses'
import Team from '../components/Team'
import Clients from '../components/Clients'
import Blog from '../components/Blog'
import FAQ from '../components/FAQ'
import Contacts from '../components/Contacts'
import SEO from '../components/SEO'

function Home() {
  return (
    <main className="cp-main">
      <SEO
        description="MK Designing — Leading web design & development agency in Vellore, Tamil Nadu. Custom websites, e-commerce stores, web apps, SEO services & web development training. 50+ projects delivered. Get a free quote!"
        keywords="web design Vellore, website development Tamil Nadu, e-commerce website India, custom web application, web development company, best web designer Vellore, affordable website design, MK Designing"
      />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Process />
      <Portfolio />
      <Pricing />
      <Courses />
      <Team />
      <Clients />
      <Blog />
      <FAQ />
      <Contacts />
    </main>
  )
}

export default Home
