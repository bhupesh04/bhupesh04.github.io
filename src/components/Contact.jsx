import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiSend, FiCheck } from 'react-icons/fi'
import './Contact.css'

// ── Contact form: FormSubmit — the same service your original portfolio used ──
// Messages are delivered to this inbox. The very first message sent triggers a
// one-time "Activate form" email from FormSubmit: open it and click the link.
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/220490131090.bhupesh@gmail.com'
const DIRECT_EMAIL = 'suryawanshibhupesh4@gmail.com'

const socials = [
  { icon: <FiMail size={18} />, label: 'Email', value: 'suryawanshibhupesh4@gmail.com', href: 'mailto:suryawanshibhupesh4@gmail.com' },
  { icon: <FiLinkedin size={18} />, label: 'LinkedIn', value: '/in/bhupesh-suryawanshi15', href: 'https://www.linkedin.com/in/bhupesh-suryawanshi15/' },
  { icon: <FiGithub size={18} />, label: 'GitHub', value: 'github.com/bhupesh04', href: 'https://github.com/bhupesh04' },
  { icon: <FiPhone size={18} />, label: 'Phone', value: '+91 6354962174', href: 'tel:+916354962174' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: form.subject || 'New message from your portfolio',
          _template: 'table',
          _captcha: 'false',
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok && String(data.success) === 'true') {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        console.error('FormSubmit did not accept the message:', data)
        setStatus('error')
      }
    } catch (err) {
      console.error('Contact form request failed:', err)
      setStatus('error')
    }
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <p className="section-label">Contact</p>
          <h2 className="section-title">Let's talk</h2>
          <p className="section-subtitle">Open to full-time backend and full-stack roles. Immediate joiner. Drop a message and I'll respond within 24 hours.</p>
        </motion.div>

        <div className="contact-layout">
          <motion.div className="contact-info"
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}>

            <div className="contact-status-banner">
              <span className="contact-dot" />
              <div>
                <div className="contact-status-title">Available for opportunities</div>
                <div className="contact-status-sub">Immediate joiner · Full-time roles</div>
              </div>
            </div>

            <div className="contact-links">
              {socials.map(s => (
                <a key={s.label} href={s.href} className="contact-link-card"
                  target={s.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                  <span className="contact-link-icon">{s.icon}</span>
                  <div>
                    <div className="contact-link-label">{s.label}</div>
                    <div className="contact-link-value">{s.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div className="contact-form-wrap"
            initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>

            {status === 'success' ? (
              <div className="form-success">
                <div className="success-icon"><FiCheck size={28} /></div>
                <h3>Message sent!</h3>
                <p>Thanks for reaching out. I'll reply within 24 hours.</p>
                <button className="btn btn-outline" onClick={() => setStatus('idle')}>Send another</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Your name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input id="subject" name="subject" type="text" value={form.subject} onChange={handleChange} placeholder="Job opportunity / Collaboration / Question" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="Tell me about the role or project..." rows={5} required />
                </div>
                {status === 'error' && (
                  <p className="form-error">
                    Couldn't send your message right now. Please email me directly at{' '}
                    <a href={`mailto:${DIRECT_EMAIL}`} style={{ textDecoration: 'underline' }}>{DIRECT_EMAIL}</a>.
                  </p>
                )}
                <button type="submit" className="btn btn-primary submit-btn" disabled={status === 'loading'}>
                  {status === 'loading' ? <span className="spinner" /> : <><FiSend size={15} /> Send Message</>}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <div className="footer">
        <div className="container footer-inner">
          <span className="footer-copy">Built by Bhupesh Suryawanshi · React + Vite · {new Date().getFullYear()}</span>
          <div className="footer-links">
            <a href="https://github.com/bhupesh04" target="_blank" rel="noopener noreferrer"><FiGithub size={16} /></a>
            <a href="https://www.linkedin.com/in/bhupesh-suryawanshi15/" target="_blank" rel="noopener noreferrer"><FiLinkedin size={16} /></a>
          </div>
        </div>
      </div>
    </section>
  )
}