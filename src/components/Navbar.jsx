import { useState, useEffect } from 'react'
import './Navbar.css'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleLink = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner container">
        <a href="#" className="nav-logo" onClick={e => handleLink(e, '#')}>
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">BS</span>
          <span className="logo-bracket">/&gt;</span>
        </a>

        <div className={`nav-links${menuOpen ? ' open' : ''}`}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="nav-link"
              onClick={e => handleLink(e, link.href)}>
              {link.label}
            </a>
          ))}
          <a href="/assets/Bhupesh_Suryawanshi_Resume.pdf"
            className="btn btn-outline nav-resume"
            target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>

        <button className={`nav-hamburger${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}