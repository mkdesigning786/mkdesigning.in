import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Bubbles from './components/Bubbles'
import Home from './pages/Home'

function App() {
  return (
    <div className="cp-site">
      <Bubbles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

