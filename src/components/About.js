import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h1 className="about-title">
              Hi, I'm <span className="highlight">Milan Halada</span>
            </h1>
            <h2 className="about-subtitle">Full Stack Developer</h2>
            <p className="about-description">
              Experienced developer with over 10 years in software development, specializing in 
              .NET Core, React, Angular, and AI integration. I create robust, scalable applications 
              that solve real-world problems for businesses across various industries.
            </p>
            <div className="about-skills">
              <div className="skill-category">
                <h4>Backend</h4>
                <span>.NET Core, C#, REST APIs, SOAP</span>
              </div>
              <div className="skill-category">
                <h4>Frontend</h4>
                <span>React, Angular, Vue.js, TypeScript</span>
              </div>
              <div className="skill-category">
                <h4>Databases</h4>
                <span>MS SQL Server, PostgreSQL, MongoDB</span>
              </div>
              <div className="skill-category">
                <h4>Cloud & DevOps</h4>
                <span>Azure, Docker, Kubernetes</span>
              </div>
              <div className="skill-category">
                <h4>Tools & Version Control</h4>
                <span>Git, Postman, SonarQube, Fiddler, Jira</span>
              </div>
              <div className="skill-category">
                <h4>AI & Integration</h4>
                <span>AI Chatbots, API Integration, XML Processing</span>
              </div>
            </div>
            <div className="about-actions">
              <a href="#contact" className="btn">Get In Touch</a>
              <a href="#projects" className="btn btn-outline">View My Work</a>
            </div>
          </div>
          <div className="about-image">
            <div className="profile-image-container">
              <div className="profile-image-placeholder">
                <div className="placeholder-content">
                  <span>👨‍💻</span>
                  <p>Milan Halada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
