import { motion } from 'framer-motion'
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi'
import './About.css'

const highlights = [
  { value: '2+', label: 'Years Building' },
  { value: '2', label: 'Full-Stack Projects' },
  { value: '10+', label: 'Secured API Endpoints' },
  { value: 'Day 1', label: 'Ready to Contribute' },
]

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          <motion.div className="about-text"
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>

            <p className="section-label">About</p>
            <h2 className="section-title">
              Not just learning —<br />
              <span style={{ color: 'var(--accent)' }}>actually building.</span>
            </h2>

            <p className="about-para">
              Final-year B.E. Computer Science student at GTU who spent the last two years building
              real applications instead of writing assignments. My projects ship working features: role-based
              access control, JWT authentication, order lifecycle management, PDF invoice generation,
              and admin dashboards — all in production-quality Spring Boot + React stacks.
            </p>

            <p className="about-para">
              I understand how a frontend connects to a real REST API, how Spring Security
              filter chains work, how JPA/Hibernate models normalized schemas, and how
              to write clean Controller–Service–Repository architectures. I pick up new tools
              from documentation, not tutorials.
            </p>

            <div className="about-meta">
              <span className="about-meta-item"><FiMapPin size={14} />Bardoli, Gujarat · Open to Relocation</span>
              <span className="about-meta-item"><FiMail size={14} />suryawanshibhupesh4@gmail.com</span>
              <span className="about-meta-item"><FiPhone size={14} />+91 6354962174</span>
            </div>

            <div className="about-badges">
              <span className="tag tag-green">✓ Immediate Joiner</span>
              <span className="tag tag-blue">Open to Full-Time Roles</span>
              <span className="tag tag-blue">Backend & Full Stack</span>
            </div>
          </motion.div>

          <motion.div className="about-stats"
            initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>

            <div className="stats-grid">
              {highlights.map((h, i) => (
                <div key={i} className="stat-card">
                  <div className="stat-value">{h.value}</div>
                  <div className="stat-label">{h.label}</div>
                </div>
              ))}
            </div>

            <div className="highlight-cards">
              <div className="highlight-card">
                <div className="highlight-stat">
                  <span className="highlight-number">8.17</span>
                  <span className="highlight-denom">/ 10</span>
                </div>
                <div className="highlight-label">CGPA</div>
                <div className="highlight-divider" />
                <div className="highlight-tagline">Built, not assigned</div>
              </div>

              <div className="highlight-card highlight-quote">
                <div className="quote-mark">"</div>
                <p className="highlight-quote-text">Stays calm, delivers under pressure.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}