import { motion } from 'framer-motion'
import { FiCalendar, FiMapPin, FiBriefcase } from 'react-icons/fi'
import './Experience.css'

const certifications = [
  { title: 'Deloitte Data Analytics Virtual Experience', issuer: 'Deloitte (Forage)', type: 'Analytics' },
  { title: 'Generative AI Mastermind', issuer: 'AI Council', type: 'AI / ML' },
  { title: 'Web Development Workshop', issuer: 'S N Patel Institute of Technology', type: 'Web Dev' },
]

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <p className="section-label">Experience</p>
          <h2 className="section-title">Where I've worked & learned</h2>
        </motion.div>

        <div className="exp-layout">
          <motion.div className="exp-main"
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}>

            <div className="exp-card featured-exp">
              <div className="exp-card-tag">Internship</div>
              <div className="exp-card-header">
                <div className="exp-org-icon"><FiBriefcase size={20} /></div>
                <div>
                  <h3 className="exp-role">Data Analytics Intern</h3>
                  <p className="exp-org">CSRBOX</p>
                </div>
                <div className="exp-meta">
                  <span className="exp-meta-item"><FiCalendar size={12} />Jul 2025</span>
                  <span className="exp-meta-item"><FiMapPin size={12} />Remote</span>
                </div>
              </div>

              <div className="exp-impact-grid">
                <div className="exp-impact-stat">
                  <div className="exp-impact-value">4+</div>
                  <div className="exp-impact-label">KPI Views in Tableau Dashboard</div>
                </div>
                <div className="exp-impact-stat">
                  <div className="exp-impact-value">2+</div>
                  <div className="exp-impact-label">Social Impact Project Domains</div>
                </div>
                <div className="exp-impact-stat">
                  <div className="exp-impact-value">100%</div>
                  <div className="exp-impact-label">Manual Reporting Replaced</div>
                </div>
              </div>

              <ul className="exp-bullets">
                <li><span className="bullet-dot" />Built an interactive Tableau dashboard with 4+ KPI views tracking account balances and cash flow across multiple financial categories — replaced a manual reporting process the team ran weekly.</li>
                <li><span className="bullet-dot" />Cleaned, processed, and ran statistical analysis on structured datasets across 2+ social impact project domains; packaged findings into a summary report shared with senior stakeholders.</li>
                <li><span className="bullet-dot" />Worked with real-world messy data using Excel and Tableau, pulling actionable insights that informed project team decisions.</li>
              </ul>

              <div className="exp-tools">
                {['Tableau', 'Microsoft Excel', 'Data Analysis', 'KPI Dashboards', 'Statistical Analysis'].map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>

            <div className="edu-card">
              <div className="edu-card-label">Education</div>
              <div className="edu-entry">
                <div className="edu-degree">B.E. Computer Science & Engineering</div>
                <div className="edu-school">S N Patel Institute of Technology & Research Centre, GTU</div>
                <div className="edu-year">2022 – 2026</div>
              </div>
            </div>
          </motion.div>

          <motion.div className="exp-side"
            initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>

            <div className="certs-section">
              <h3 className="certs-heading">Certifications</h3>
              <div className="certs-list">
                {certifications.map((cert, i) => (
                  <div key={i} className="cert-card">
                    <div className="cert-type tag tag-blue">{cert.type}</div>
                    <div className="cert-title">{cert.title}</div>
                    <div className="cert-issuer">{cert.issuer}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="achievement-card">
              <div className="achievement-emoji">🏆</div>
              <div>
                <div className="achievement-title">Co-ordinator, TechnoKruti TK24</div>
                <div className="achievement-sub">State Level Techfest — S N Patel Institute</div>
                <div className="achievement-detail">Handled end-to-end logistics and coordination for 100+ participants across multiple technical events.</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}