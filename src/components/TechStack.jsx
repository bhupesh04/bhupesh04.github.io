import { motion } from 'framer-motion'
import {
  SiSpringboot, SiSpring, SiHibernate, SiMysql,
  SiReact, SiJavascript, SiHtml5, SiCss, SiBootstrap,
  SiGit, SiGithub, SiPostman, SiIntellijidea, SiApachemaven
} from 'react-icons/si'
import { FiShield, FiCode, FiDatabase, FiTool, FiCpu } from 'react-icons/fi'
import './TechStack.css'

const stacks = [
  {
    category: 'Backend', icon: <FiCode size={16} />, color: '#4f8ef7',
    skills: [
      { name: 'Java', icon: <FiCpu /> },
      { name: 'Spring Boot', icon: <SiSpringboot /> },
      { name: 'Spring MVC', icon: <SiSpring /> },
      { name: 'Spring Security', icon: <FiShield /> },
      { name: 'Hibernate / JPA', icon: <SiHibernate /> },
      { name: 'REST APIs', icon: <FiCode /> },
      { name: 'Microservices', icon: <FiCpu /> },
    ],
  },
  {
    category: 'Auth & Security', icon: <FiShield size={16} />, color: '#f9a825',
    skills: [
      { name: 'JWT', icon: <FiShield /> },
      { name: 'RBAC', icon: <FiShield /> },
      { name: 'Stateless Auth', icon: <FiShield /> },
      { name: 'Security Filter Chain', icon: <FiShield /> },
    ],
  },
  {
    category: 'Frontend', icon: <SiReact size={16} />, color: '#2dd4a0',
    skills: [
      { name: 'React.js', icon: <SiReact /> },
      { name: 'JavaScript ES6+', icon: <SiJavascript /> },
      { name: 'HTML5', icon: <SiHtml5 /> },
      { name: 'CSS3', icon: <SiCss /> },
      { name: 'Bootstrap 5', icon: <SiBootstrap /> },
    ],
  },
  {
    category: 'Database', icon: <FiDatabase size={16} />, color: '#e879f9',
    skills: [
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'Schema Design', icon: <FiDatabase /> },
      { name: 'Normalization 3NF', icon: <FiDatabase /> },
      { name: 'JPQL Queries', icon: <FiDatabase /> },
      { name: 'Query Optimization', icon: <FiDatabase /> },
    ],
  },
  {
    category: 'Tools & DevOps', icon: <FiTool size={16} />, color: '#fb923c',
    skills: [
      { name: 'Git', icon: <SiGit /> },
      { name: 'GitHub', icon: <SiGithub /> },
      { name: 'Postman', icon: <SiPostman /> },
      { name: 'IntelliJ IDEA', icon: <SiIntellijidea /> },
      { name: 'Maven', icon: <SiApachemaven /> },
      { name: 'Tableau', icon: <FiTool /> },
    ],
  },
  {
    category: 'CS Fundamentals', icon: <FiCpu size={16} />, color: '#a78bfa',
    skills: [
      { name: 'DSA', icon: <FiCpu /> },
      { name: 'OOP Principles', icon: <FiCpu /> },
      { name: 'DBMS', icon: <FiCpu /> },
      { name: 'OS Concepts', icon: <FiCpu /> },
      { name: 'Networking', icon: <FiCpu /> },
      { name: 'SDLC / Agile', icon: <FiCpu /> },
    ],
  },
]

export default function TechStack() {
  return (
    <section className="section" id="stack">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <p className="section-label">Tech Stack</p>
          <h2 className="section-title">What I work with</h2>
          <p className="section-subtitle">Technologies I've used to build real, working applications — not just completed courses.</p>
        </motion.div>

        <div className="stack-grid">
          {stacks.map((stack, i) => (
            <motion.div key={stack.category} className="stack-card"
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}>
              <div className="stack-header" style={{ '--cat-color': stack.color }}>
                <span className="stack-icon">{stack.icon}</span>
                <span className="stack-category">{stack.category}</span>
              </div>
              <div className="stack-skills">
                {stack.skills.map(skill => (
                  <div key={skill.name} className="skill-chip">
                    <span className="skill-icon">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}