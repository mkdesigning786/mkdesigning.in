import Hero from '../components/Hero'
import About from '../components/About'
import WhyUs from '../components/WhyUs'
import Clients from '../components/Clients'
import Contacts from '../components/Contacts'

function Home() {
  return (
    <main className="cp-main">
      <Hero />
      <About />
      <WhyUs />
      <Clients />
      <Contacts />
    </main>
  )
}

export default Home
