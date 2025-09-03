import React from 'react';
import './FeaturedProjects.css';

const FeaturedProjects = () => {
  const projects = [
    {
      id: 'smartbooks',
      title: 'SmartBooks',
      subtitle: 'CMS for Education App',
      description: 'A comprehensive Content Management System designed specifically for educational applications. This platform enables educators to create, manage, and distribute educational content efficiently.',
      longDescription: 'SmartBooks is a sophisticated CMS that revolutionizes how educational content is created and managed. The system provides intuitive tools for content creators, supports multimedia integration, and offers advanced analytics for tracking student engagement and learning outcomes.',
      technologies: ['.NET Core', 'React', 'AI Integration', 'Azure', 'SQL Server'],
      features: [
        'Intuitive content creation and editing tools',
        'AI-powered content creation',
        'Multi-media support (videos, images, documents)',
        'Advanced analytics and reporting',
        'User role management and permissions'
      ],
      images: [
        '/images/smartbooks/editor.png',
        '/images/smartbooks/material.png', 
        '/images/smartbooks/quality.png'
      ],
      color: '#667eea'
    },
    {
      id: 'beri',
      title: 'Beri',
      subtitle: 'Resource & Employee Management System',
      description: 'A comprehensive web-based system for managing resources and employees across organizations. Streamlines HR processes and resource allocation.',
      longDescription: 'Beri is a powerful resource and employee management platform that helps organizations optimize their workforce and resource allocation. The system provides real-time insights, automated workflows, and comprehensive reporting capabilities to enhance operational efficiency.',
      technologies: ['.NET Core', 'React', 'Azure', 'Entity Framework', 'SignalR'],
      features: [
        'Employee lifecycle management',
        'Resource allocation and tracking',
        'Advanced reporting and analytics',
        'Automated workflow management'
      ],
      images: [
        '/images/beri/dashboard.png',
        '/images/beri/planning.png',
        '/images/beri/table.png'
      ],
      color: '#764ba2'
    },
    {
      id: 'bluewinston',
      title: 'BlueWinston',
      subtitle: 'Google Ads Administration System',
      description: 'A specialized system for managing and optimizing Google Ads campaigns. Provides comprehensive tools for campaign management, performance tracking, and optimization.',
      longDescription: 'BlueWinston is a cutting-edge platform designed to simplify and enhance Google Ads management. The system automates routine tasks, provides intelligent insights, and offers advanced optimization tools to maximize campaign performance and ROI.',
      technologies: ['.NET', 'Angular', 'Google Ads API'],
      features: [
        'Automated campaign management',
        'Real-time performance monitoring',
        'Budget allocation and bidding strategies',
        'Comprehensive reporting dashboard',
        'Multi-account management'
      ],
      images: ['📊'], // Keep emoji for BlueWinston as no images provided
      color: '#f093fb'
    }
  ];

  return (
    <section id="projects" className="featured-projects section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Here are some of my recent projects that showcase my expertise in full-stack development and AI integration.
        </p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <div className="project-images">
                  {project.images.map((image, imgIndex) => (
                    <div key={imgIndex} className="project-image-container">
                      {image.startsWith('/') ? (
                        <img 
                          src={image} 
                          alt={`${project.title} screenshot ${imgIndex + 1}`}
                          className="project-image"
                        />
                      ) : (
                        <div className="project-icon" style={{ backgroundColor: project.color }}>
                          <span>{image}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="project-title-section">
                  <h3 className="project-title">{project.title}</h3>
                  <h4 className="project-subtitle">{project.subtitle}</h4>
                </div>
              </div>
              
              <div className="project-content">
                <p className="project-description">{project.description}</p>
                
                <div className="project-details">
                  <h5>Key Features:</h5>
                  <ul className="features-list">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-technologies">
                  <h5>Technologies Used:</h5>
                  <div className="tech-tags">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="project-footer">
                <div className="project-status">
                  <span className="status-indicator"></span>
                  <span>Completed</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
