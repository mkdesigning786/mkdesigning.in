import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const location = useLocation()
  const [open, setOpen] = useState(false)

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/courses', label: 'Courses' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
  ]

  const handleNav = () => {
    setOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className="cp-nav">
      <div className="cp-nav-inner">
        <Link to="/" className="cp-nav-logo" onClick={() => { setOpen(false); window.scrollTo({ top: 0 }) }}>
          <img src="./logo.png" alt="MK Designing - Professional Web Design Company" />
          <span className="cp-nav-brand">
            mk<strong>designing</strong>
          </span>
        </Link>

        <button className={`cp-nav-toggle ${open ? 'active' : ''}`} onClick={() => setOpen(!open)}>
          <span></span><span></span><span></span>
        </button>

        <ul className={`cp-nav-links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                onClick={handleNav}
                className={location.pathname === l.to ? 'active' : ''}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
