import { useState, useEffect } from 'react'
import './Navbar.css'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const RESUME_URL = '/assets/Bhupesh_Suryawanshi_FullStack_Resume.pdf'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollToTop = e => {
    e.preventDefault()
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleLink = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner container">
        <a href="#home" className="nav-logo" onClick={scrollToTop} aria-label="Back to top">
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
          <a href={RESUME_URL}
            className="btn btn-outline nav-resume"
            target="_blank" rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}>
            Resume
          </a>
        </div>

        <button className={`nav-hamburger${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu" aria-expanded={menuOpen}>
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}