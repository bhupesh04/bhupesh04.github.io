import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiChevronDown, FiChevronUp } from 'react-icons/fi'
import './Projects.css'

const projects = [
  {
    id: 'prepmate',
    title: 'PrepMate',
    subtitle: 'Community-Driven Technical Interview Question Bank',
    status: 'Best Project',
    description:
      'A full-stack microservices application built from the ground up — four independent Spring Boot services communicating over REST, each with its own database, fronted by a custom API Gateway handling auth and routing for the entire system.',
    problem:
      'Most student full-stack projects are a single monolithic Spring Boot app. PrepMate is architected as genuinely independent services — Auth, Question, Vote, and Gateway — each deployable and scalable on its own, the way production systems actually work.',
    solution:
      'Four Spring Boot microservices, each with its own MySQL database, communicating via REST APIs. Spring Cloud Gateway on port 8080 handles JWT validation, CORS, and routing to all downstream services. JWT-based stateless authentication and RBAC enforced consistently across every service.',
    impact: [
      'Architected 4 independent microservices (Auth, Question, Vote, API Gateway) each with its own MySQL database and full JWT + RBAC security',
      'Strategy Pattern for vote handling (UpvoteStrategy / DownvoteStrategy via VoteStrategyFactory) with two-layer duplicate-vote prevention — application-level exception plus a database UNIQUE KEY constraint',
      'Optimistic locking with @Version for safe concurrent voting under load',
      'Spring Cloud Gateway as a single entry point — JWT validation, CORS, and request routing for all services on port 8080',
      'React.js frontend with Hooks-based state management and Bootstrap 5, fully decoupled from the backend',
      'Applied 10+ advanced Java concepts: Streams API, functional interfaces, Optional<T>, @Async with ThreadPoolTaskExecutor, CompletableFuture<T>, custom annotations (@ValidDifficulty, @CurrentUser), and JdbcTemplate alongside JPA for native SQL aggregation',
    ],
    architecture: 'Microservices architecture — 4 independently deployable Spring Boot services, each with its own database, communicating via REST behind a Spring Cloud Gateway. Strategy, Factory, and Builder patterns applied for vote handling and object construction. RBAC enforced uniformly via JWT across every service.',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'Spring Cloud Gateway', 'JWT', 'JPA/Hibernate', 'Microservices', 'MySQL', 'React.js'],
    github: 'https://github.com/bhupesh04',
    color: '#4f8ef7',
  },
  {
    id: 'shopmate',
    title: 'ShopMate',
    subtitle: 'Full-Stack E-Commerce Platform',
    status: 'Featured',
    description:
      'A production-quality e-commerce platform built from scratch. Not a clone, not a tutorial — a fully working application with four modules, role-based access control, an admin dashboard tracking live KPIs, and automated PDF invoice generation.',
    problem:
      'Most e-commerce demos skip the hard parts: authentication, state management across user roles, and real order workflows. ShopMate implements all of them.',
    solution:
      'Spring Boot REST backend secured with Spring Security and JWT. Four modules (Customer, Product, Order, Admin) each with full CRUD. React.js frontend with hooks connected to the live API.',
    impact: [
      'Role-Based Access Control using Spring Security + JWT — customers and admins see different interfaces',
      'Complete order lifecycle: cart → checkout → placed → fulfilled, with correct DB transitions',
      'Admin dashboard with real KPIs: total orders, revenue, active users',
      'Automated PDF invoice generation via iText 7 on every order',
      'Responsive UI across desktop, tablet, mobile with Bootstrap 5 + CSS3',
    ],
    architecture: 'Controller → Service → Repository (Spring MVC layered), JWT stateless auth, normalized MySQL schema in 3NF, React functional components with Hooks',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'JPA/Hibernate', 'MySQL', 'React.js', 'Bootstrap 5', 'iText 7'],
    github: 'https://github.com/bhupesh04',
    color: '#2dd4a0',
  },
  {
    id: 'enrollment',
    title: 'Student Course Enrollment',
    subtitle: 'Secured REST API System',
    status: 'Backend',
    description:
      'A complete RESTful backend system with 10+ secured endpoints managing Students, Courses, and Enrollments. Full CRUD on every resource, JWT-protected routes, proper HTTP status codes, and tested across 20+ Postman test cases.',
    problem:
      'Designing a clean, secure API with complex relational data (students enrolling in many courses) while keeping architecture decoupled from any frontend.',
    solution:
      'Strict Controller–Service–Repository separation. One-to-many and many-to-many JPA mappings. Custom JPQL queries for filtered lookups. JWT on every route.',
    impact: [
      '10+ secured REST endpoints — GET, POST, PUT, DELETE with correct HTTP status codes',
      'Complex JPA mappings: one-to-many (student ↔ enrollments) and many-to-many (student ↔ courses)',
      'Custom JPQL filter endpoints: by city, email, course duration, enrollment count',
      'Fully decoupled — zero frontend dependency, tested end-to-end in Postman across 20+ cases',
    ],
    architecture: 'Controller–Service–Repository layered architecture, JWT stateless auth, Spring Data JPA with custom JPQL, MySQL relational schema',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'JPA/Hibernate', 'MySQL', 'Postman', 'REST APIs'],
    github: 'https://github.com/bhupesh04',
    color: '#fb923c',
  },
]

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      style={{ '--project-color': project.color }}
    >
      <div className="project-card-top">
        <div className="project-header">
          <div>
            <div className="project-status-row">
              <span className="project-status">{project.status}</span>
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-subtitle">{project.subtitle}</p>
          </div>
          <div className="project-links">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub">
              <FiGithub size={18} />
            </a>
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="Live Demo">
                <FiExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        <p className="project-description">{project.description}</p>

        <div className="project-tech">
          {project.tech.map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>

      <button className="project-expand-btn" onClick={() => setExpanded(e => !e)}>
        {expanded ? (
          <><span>Hide Details</span><FiChevronUp size={16} /></>
        ) : (
          <><span>View Architecture & Impact</span><FiChevronDown size={16} /></>
        )}
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            className="project-details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="project-details-inner">
              <div className="detail-block">
                <h4 className="detail-label">Problem</h4>
                <p className="detail-text">{project.problem}</p>
              </div>
              <div className="detail-block">
                <h4 className="detail-label">Solution</h4>
                <p className="detail-text">{project.solution}</p>
              </div>
              <div className="detail-block">
                <h4 className="detail-label">Architecture</h4>
                <p className="detail-text">{project.architecture}</p>
              </div>
              <div className="detail-block">
                <h4 className="detail-label">Key Features & Impact</h4>
                <ul className="impact-list">
                  {project.impact.map((item, i) => (
                    <li key={i} className="impact-item">
                      <span className="impact-dot" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Featured Projects</p>
          <h2 className="section-title">Real applications, real code</h2>
          <p className="section-subtitle">
            Not tutorials, not clones. Working applications built with production patterns —
            RBAC, JWT auth, normalized schemas, and proper architecture.
          </p>
        </motion.div>

        <div className="projects-list">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className="projects-github-cta">
          <a href="https://github.com/bhupesh04" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <FiGithub size={16} />
            Explore All Repositories
          </a>
        </div>
      </div>
    </section>
  )
}