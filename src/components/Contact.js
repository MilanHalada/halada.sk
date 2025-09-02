import React from 'react';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'milan.halada@gmail.com',
      link: 'mailto:milan.halada@gmail.com'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+421 915 778 305',
      link: 'tel:+421915778305'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Malženice 357, Malženice',
      link: 'https://maps.google.com/?q=Malženice+357,+Malženice'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'milan-halada-a483254a',
      link: 'https://www.linkedin.com/in/milan-halada-a483254a'
    }
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          I'm always interested in new opportunities and exciting projects. 
          Let's discuss how we can work together!
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>
              Feel free to reach out to me through any of the channels below. 
              I typically respond within 24 hours.
            </p>
            
            <div className="contact-methods">
              {contactInfo.map((contact, index) => (
                <a 
                  key={index} 
                  href={contact.link} 
                  className="contact-method"
                  target={contact.link.startsWith('http') ? '_blank' : '_self'}
                  rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  <div className="contact-icon">
                    <span>{contact.icon}</span>
                  </div>
                  <div className="contact-details">
                    <h4>{contact.label}</h4>
                    <p>{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div className="contact-cta">
            <div className="cta-content">
              <h3>Ready to Start a Project?</h3>
              <p>
                Whether you need a full-stack application, AI integration, 
                or consultation on your next project, I'm here to help.
              </p>
              
              <div className="cta-buttons">
                <a href="mailto:milan.halada@gmail.com" className="btn">
                  Send Email
                </a>
                <a 
                  href="https://www.linkedin.com/in/milan-halada-a483254a" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  Connect on LinkedIn
                </a>
              </div>
              
              <div className="availability">
                <div className="availability-indicator">
                  <span className="status-dot"></span>
                  <span>Available for new projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
