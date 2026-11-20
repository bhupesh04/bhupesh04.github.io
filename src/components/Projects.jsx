import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiPlayCircle, FiChevronDown, FiChevronUp } from 'react-icons/fi'
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
      'Optimistic locking with @Version for safe concurrent vote updates',
      'Spring Cloud Gateway as a single entry point — JWT validation, CORS, and request routing for all services on port 8080',
      'React.js frontend with Hooks-based state management and Bootstrap 5, fully decoupled from the backend',
      'Applied 10+ advanced Java concepts: Streams API, functional interfaces, Optional<T>, @Async with ThreadPoolTaskExecutor, CompletableFuture<T>, custom annotations (@ValidDifficulty, @CurrentUser), and JdbcTemplate alongside JPA for native SQL aggregation',
    ],
    architecture: 'Microservices architecture — 4 independently deployable Spring Boot services, each with its own database, communicating via REST behind a Spring Cloud Gateway. Strategy, Factory, and Builder patterns applied for vote handling and object construction. RBAC enforced uniformly via JWT across every service.',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'Spring Cloud Gateway', 'JWT', 'JPA/Hibernate', 'Microservices', 'MySQL', 'React.js'],
    github: 'https://github.com/bhupesh04/PrepMate',
    color: '#4f8ef7',
  },
  {
    id: 'wallet',
    title: 'Wallet System',
    subtitle: 'Secure Digital Wallet Backend — Idempotency & Concurrency',
    status: 'Latest',
    description:
      'A Paytm/PhonePe-style wallet backend where balances stay correct under concurrent requests and duplicate API calls. JWT-secured with USER and ADMIN roles, and the wallet identity always comes from the token — never from the request body.',
    problem:
      'Money APIs fail in subtle ways: a retried request can charge twice, and two simultaneous transfers can corrupt a balance or deadlock each other. The hard part is correctness, not CRUD.',
    solution:
      'Every money-moving call carries an Idempotency-Key backed by a database unique constraint. Single-wallet updates use optimistic locking (@Version); transfers take pessimistic write locks on both wallets in ascending ID order to rule out deadlocks. Each operation runs as one @Transactional unit.',
    impact: [
      'Idempotent add-money and transfer: duplicate or racing requests return the stored result or a 409 Conflict — never a double charge',
      'Two locking strategies chosen per case: optimistic (@Version) for a single wallet, pessimistic SELECT … FOR UPDATE for transfers, always acquired in ascending wallet-ID order to prevent deadlocks',
      'Atomic transactions: balance changes and the transaction record commit together or roll back; failed attempts are stored as FAILED rows for audit',
      'Stateless JWT authentication, BCrypt-hashed passwords, and USER / ADMIN role rules enforced in Spring Security',
      'Global exception handling that maps failures to precise status codes (400, 401, 403, 404, 409, 422)',
      'JUnit 5 + Mockito unit and integration tests with an enforced 80% JaCoCo coverage gate',
    ],
    architecture: 'Layered Spring Boot 3 / Java 17 application — config, controller, service, repository, entity, DTO and exception packages. Stateless Spring Security filter chain with a JWT filter, Spring Data JPA on an in-memory H2 database, Bean Validation on request DTOs.',
    tech: ['Java 17', 'Spring Boot 3', 'Spring Security', 'JWT', 'Spring Data JPA', 'H2', 'JUnit 5', 'Mockito', 'JaCoCo', 'Maven'],
    github: 'https://github.com/bhupesh04/Wallet-System',
    demo: 'https://www.loom.com/share/4c5c3a055144405e8de4d9141f984f5a',
    demoLabel: 'Watch code walkthrough video',
    demoType: 'video',
    color: '#a78bfa',
  },
  {
    id: 'shopmate',
    title: 'ShopMate',
    subtitle: 'Full-Stack E-Commerce Platform',
    status: 'Full-Stack',
    description:
      'A full-stack e-commerce application built end-to-end with Spring Boot MVC — four core modules (Customer, Product, Order, Admin), a responsive JSP + Bootstrap 5 interface, a normalized MySQL schema, and automated PDF invoices.',
    problem:
      'Most e-commerce demos stop at a product list. ShopMate carries an order through its entire lifecycle and gives administrators the numbers they need to run the store.',
    solution:
      'Spring Boot MVC with a layered Controller–Service–Repository structure, JPA/Hibernate persistence on a normalized MySQL schema, server-rendered JSP views styled with Bootstrap 5, and iText 7 for invoice generation.',
    impact: [
      'Four modules — Customer, Product, Order and Admin — covering the complete shopping flow',
      'Full order lifecycle across four states: cart → checkout → placed → fulfilled, persisted with JPA/Hibernate',
      'Separate customer and admin roles; the admin KPI dashboard (e.g. total orders and revenue) sits behind a session-protected login',
      'Automated PDF invoice generation with iText 7',
      'Responsive interface across desktop, tablet and mobile with Bootstrap 5',
    ],
    architecture: 'Spring Boot MVC with layered Controller–Service–Repository architecture, JPA/Hibernate over a normalized MySQL schema, and server-rendered JSP views.',
    tech: ['Java', 'Spring Boot', 'Spring MVC', 'JPA/Hibernate', 'MySQL', 'JSP', 'Bootstrap 5', 'iText 7'],
    github: 'https://github.com/bhupesh04/ShopMate',
    color: '#2dd4a0',
  },
  {
    id: 'enrollment',
    title: 'Student Course Enrollment',
    subtitle: 'REST API for Students, Courses & Enrollments',
    status: 'REST API',
    description:
      'A Spring Boot REST API with 20 endpoints across three controllers — Students, Courses and Enrollments — covering full CRUD, filter and lookup endpoints, and MySQL persistence through Spring Data JPA.',
    problem:
      'Keeping students, courses and their enrollments queryable from every angle: by city, by email, by course duration, and by student or course.',
    solution:
      'Three REST controllers sitting on Spring Data JPA repositories. Derived query methods power the filter endpoints, and an Enrollment entity links students to courses.',
    impact: [
      '20 REST endpoints across Students, Courses and Enrollments, with full CRUD on students and courses',
      'Filter and lookup endpoints: students by city and email, courses by duration, enrollments by student or by course',
      'Spring Data JPA derived query methods over a MySQL schema',
      'Tested end-to-end in Postman',
    ],
    architecture: 'Spring Web REST controllers over Spring Data JPA repositories, backed by a MySQL relational schema.',
    tech: ['Java', 'Spring Boot', 'Spring Data JPA', 'REST APIs', 'MySQL', 'Postman'],
    github: 'https://github.com/bhupesh04/Student-Course-Enrollment',
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
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="icon-btn"
              aria-label={`${project.title} source code on GitHub`} title="View source on GitHub">
              <FiGithub size={18} />
            </a>
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="icon-btn"
                aria-label={project.demoLabel || 'Live demo'} title={project.demoLabel || 'Live demo'}>
                {project.demoType === 'video' ? <FiPlayCircle size={18} /> : <FiExternalLink size={18} />}
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