import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPhone, FaArrowRight } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [focusedField, setFocusedField] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success')
      setIsSubmitting(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 3000)
    }, 1500)
  }

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/Rajas2912',
      color: '#333',
      hoverColor: '#2b2b2b'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedinIn />,
      url: 'https://www.linkedin.com/in/rajas-bhosale-44773a258',
      color: '#0077b5',
      hoverColor: '#006396'
    },
    {
      name: 'Instagram',
      icon: <FaInstagram />,
      url: 'https://www.instagram.com/rajas_2912?igsh=MW9panltZDQxeDc1bg==',
      color: '#e4405f',
      hoverColor: '#d63850'
    }
  ]

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      text: 'rajasvbhosale.com',
      label: 'Email',
      action: 'mailto:rajasvbhosale@gmail.com'
    },
    {
      icon: <FaPhone />,
      text: '+91 8080498171',
      label: 'Phone',
      action: 'tel:+91 8080498171'
    },
    {
      icon: <FaMapMarkerAlt />,
      text: 'Pune , Maharashtra, India',
      label: 'Location',
      action: 'https://g.co/kgs/TNVXdvc'
    }
  ]

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          <h1>✦ CONTACT</h1>
        </motion.div>

        <div className="contact-content">
          <div className="contact-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="contact-header"
            >
              <h2>Let's Connect</h2>
              <p>Ready to turn ideas into reality? I'm excited to collaborate on your next project. 
                Whether you have a question or just want to say hi, I'll get back to you!</p>
            </motion.div>
          
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.action}
                  target={info.label === 'Location' ? '_blank' : undefined}
                  rel={info.label === 'Location' ? 'noopener noreferrer' : undefined}
                  className="info-item"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="info-icon">{info.icon}</div>
                  <div className="info-content">
                    <h3>{info.label}</h3>
                    <p>{info.text}</p>
                  </div>
                  <FaArrowRight className="arrow-icon" />
                </motion.a>
              ))}
            </motion.div>

            <motion.div 
              className="social-links"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3>Find me on</h3>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    style={{ backgroundColor: social.color }}
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: social.hoverColor 
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + (index * 0.1) }}
                >
                    {social.icon}
                    <span className="tooltip">{social.name}</span>
                  </motion.a>
              ))}
            </div>
            </motion.div>
          </div>
        
        <motion.div
            className="contact-right"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <div className="contact-form-container">
              <h3>Send me a message</h3>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                    placeholder="Your Name"
                  required
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    animate={{
                      scale: focusedField === 'name' ? 1.02 : 1
                    }}
                />
              </div>
                <div className="form-group">
                  <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                    placeholder="Your Email"
                  required
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    animate={{
                      scale: focusedField === 'email' ? 1.02 : 1
                    }}
                />
              </div>
                <div className="form-group">
                  <motion.input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                    placeholder="Subject"
                required
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    animate={{
                      scale: focusedField === 'subject' ? 1.02 : 1
                    }}
              />
            </div>
                <div className="form-group">
                  <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                    placeholder="Your Message"
                    required
                rows="5"
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    animate={{
                      scale: focusedField === 'message' ? 1.02 : 1
                    }}
                  />
            </div>
                <AnimatePresence>
                  {submitStatus === 'success' && (
              <motion.div
                      className="success-message"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
              >
                      Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}
                </AnimatePresence>
                <motion.button
                  type="submit"
                  className={`submit-button ${isSubmitting ? 'submitting' : ''} ${submitStatus ? 'success' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="loading-text">Sending...</span>
                  ) : submitStatus ? (
                    <span className="success-text">Sent!</span>
                  ) : (
                    <>
                      Send Message
                      <FaArrowRight className="button-icon" />
                    </>
                  )}
                </motion.button>
          </form>
            </div>
        </motion.div>
      </div>
    </div>
    </section>
  )
}

export default Contact