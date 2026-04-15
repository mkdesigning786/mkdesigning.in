import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const location = useLocation()
  const [open, setOpen] = useState(false)

  const links = [
    { to: '/', hash: '#hero', label: 'Home' },
    { to: '/', hash: '#about', label: 'About' },
    { to: '/', hash: '#why-us', label: 'Why Us' },
    { to: '/', hash: '#courses', label: 'Courses' },
    { to: '/', hash: '#clients', label: 'Clients' },
    { to: '/', hash: '#contact', label: 'Contact' },
  ]

  const handleNav = (hash) => {
    setOpen(false)
    if (hash && location.pathname === '/') {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="cp-nav">
      <div className="cp-nav-inner">
        <Link to="/" className="cp-nav-logo" onClick={() => setOpen(false)}>
          <img src="./logo.png" alt="MK Designing" />
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
              {l.hash ? (
                <Link
                  to={l.to}
                  onClick={() => handleNav(l.hash)}
                  className={location.hash === l.hash ? 'active' : ''}
                >
                  {l.label}
                </Link>
              ) : (
                <Link
                  to={l.to}
                  className={location.pathname === l.to && !l.hash ? 'active' : ''}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
