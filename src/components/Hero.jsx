import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowDown } from 'react-icons/fi'
import './Hero.css'

const ROLES = ['Java Full Stack Developer', 'Backend Engineer', 'Spring Boot Developer', 'Software Engineer']

export default function Hero() {
  const roleRef = useRef(null)
  const indexRef = useRef(0)
  const charRef = useRef(0)
  const deletingRef = useRef(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const type = () => {
      const el = roleRef.current
      if (!el) return
      const current = ROLES[indexRef.current]
      if (!deletingRef.current) {
        el.textContent = current.slice(0, charRef.current + 1)
        charRef.current++
        if (charRef.current === current.length) {
          deletingRef.current = true
          timeoutRef.current = setTimeout(type, 1800)
          return
        }
      } else {
        el.textContent = current.slice(0, charRef.current - 1)
        charRef.current--
        if (charRef.current === 0) {
          deletingRef.current = false
          indexRef.current = (indexRef.current + 1) % ROLES.length
        }
      }
      timeoutRef.current = setTimeout(type, deletingRef.current ? 38 : 68)
    }
    timeoutRef.current = setTimeout(type, 600)
    return () => clearTimeout(timeoutRef.current)
  }, [])

  const scrollToProjects = () => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero" id="home">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="container hero-inner">
        <motion.div className="hero-content"
          initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>

          <div className="hero-tag">
            <span className="hero-dot" />
            <span>Available · Immediate Joiner</span>
          </div>

          <h1 className="hero-name">
            Bhupesh<br />
            <span className="hero-name-accent">Suryawanshi</span>
          </h1>

          <div className="hero-role-line">
            <span ref={roleRef} className="hero-role" />
            <span className="hero-cursor" aria-hidden="true">|</span>
          </div>

          <div className="hero-tech-pills">
            {['Spring Boot', 'React.js', 'REST APIs', 'JWT', 'MySQL'].map(t => (
              <span key={t} className="tech-pill">{t}</span>
            ))}
          </div>

          <p className="hero-tagline">
            Building production-grade applications — not tutorials.
            Spring Boot backends, JWT-secured APIs, React frontends, deployed and working.
          </p>

          <div className="hero-cta">
            <button className="btn btn-primary" onClick={scrollToProjects}>View Projects</button>
            <a href="/assets/Bhupesh_Suryawanshi_Resume.pdf" className="btn btn-outline"
              target="_blank" rel="noopener noreferrer" download>
              <FiDownload size={15} /> Download Resume
            </a>
            <a href="#contact" className="btn btn-outline"
              onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
              Contact Me
            </a>
          </div>

          <div className="hero-social">
            <a href="https://github.com/bhupesh04" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FiGithub size={20} /></a>
            <a href="https://linkedin.com/in/bhupesh-suryawanshi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin size={20} /></a>
            <a href="mailto:suryawanshibhupesh4@gmail.com" aria-label="Email"><FiMail size={20} /></a>
          </div>
        </motion.div>

        <motion.div className="hero-visual"
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
          <div className="hero-code-card">
            <div className="code-card-header">
              <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
              <span className="code-filename">BhupeshController.java</span>
            </div>
            <pre className="code-card-body"><code>
<span className="c-ann">@RestController</span>
<span className="c-ann">@RequestMapping("/api/developer")</span>
<span className="c-key">public class</span> <span className="c-class">BhupeshController</span> {"{"}

  <span className="c-ann">@GetMapping("/skills")</span>
  <span className="c-key">public</span> ResponseEntity{"<"}Developer{">"} getSkills() {"{"}
    <span className="c-key">return</span> ResponseEntity.ok(
      Developer.builder()
        .name(<span className="c-str">"Bhupesh Suryawanshi"</span>)
        .backend(<span className="c-str">"Spring Boot, JWT, REST"</span>)
        .frontend(<span className="c-str">"React.js, Bootstrap"</span>)
        .database(<span className="c-str">"MySQL, JPA/Hibernate"</span>)
        .status(<span className="c-str">"Immediate Joiner"</span>)
        .build()
    );
  {"}"}
{"}"}
            </code></pre>
          </div>
        </motion.div>
      </div>

      <button className="hero-scroll-hint" onClick={scrollToProjects} aria-label="Scroll to projects">
        <FiArrowDown size={18} />
      </button>
    </section>
  )
}