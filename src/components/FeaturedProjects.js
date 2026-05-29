import React, { useState } from 'react';
import './FeaturedProjects.css';

const FeaturedProjects = () => {
  const [galleryState, setGalleryState] = useState({
    isOpen: false,
    images: [],
    currentIndex: 0,
    projectTitle: ''
  });

  const openGallery = (images, projectTitle) => {
    setGalleryState({
      isOpen: true,
      images: images.filter(img => img.startsWith('/')), // Only show actual images, not emojis
      currentIndex: 0,
      projectTitle
    });
  };

  const closeGallery = () => {
    setGalleryState({
      isOpen: false,
      images: [],
      currentIndex: 0,
      projectTitle: ''
    });
  };

  const nextImage = () => {
    setGalleryState(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length
    }));
  };

  const prevImage = () => {
    setGalleryState(prev => ({
      ...prev,
      currentIndex: prev.currentIndex === 0 ? prev.images.length - 1 : prev.currentIndex - 1
    }));
  };

  const handleKeyDown = (e) => {
    if (!galleryState.isOpen) return;
    
    switch(e.key) {
      case 'Escape':
        closeGallery();
        break;
      case 'ArrowLeft':
        prevImage();
        break;
      case 'ArrowRight':
        nextImage();
        break;
      default:
        break;
    }
  };

  // Add keyboard event listener
  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [galleryState.isOpen]);

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
    },
    {
      id: 'ias',
      title: 'iAS',
      subtitle: 'Automotive Microservices Platform',
      description: 'Designed and implemented new microservices extending an incadea-based application for the automotive industry, improving modularity and scalability of the dealer management ecosystem.',
      longDescription: 'iAS involved architecting and building microservices that integrate with the incadea DMS platform used in automotive retail and service. The work focused on clean service boundaries, reliable data access, and containerized deployment to support evolving business requirements in a regulated, high-volume environment.',
      technologies: ['.NET', 'Docker', 'PostgreSQL', 'Entity Framework', 'Microservices', 'incadea'],
      features: [
        'Microservice architecture design and implementation',
        'Integration with incadea-based dealer management system',
        'Containerized deployment with Docker',
        'Relational data modeling with PostgreSQL and Entity Framework',
        'Automotive retail and service domain workflows'
      ],
      images: ['🚗'],
      color: '#43e97b'
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
                          className="project-image clickable"
                          onClick={() => openGallery(project.images, project.title)}
                          title="Click to view gallery"
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

      {/* Image Gallery Modal */}
      {galleryState.isOpen && (
        <div className="gallery-modal" onClick={closeGallery}>
          <div className="gallery-content" onClick={(e) => e.stopPropagation()}>
            <div className="gallery-header">
              <h3>{galleryState.projectTitle} - Screenshots</h3>
              <button className="gallery-close" onClick={closeGallery}>&times;</button>
            </div>
            
            <div className="gallery-main">
              <button className="gallery-nav gallery-prev" onClick={prevImage}>
                &#8249;
              </button>
              
              <div className="gallery-image-container">
                <img 
                  src={galleryState.images[galleryState.currentIndex]} 
                  alt={`${galleryState.projectTitle} screenshot ${galleryState.currentIndex + 1}`}
                  className="gallery-image"
                />
              </div>
              
              <button className="gallery-nav gallery-next" onClick={nextImage}>
                &#8250;
              </button>
            </div>
            
            <div className="gallery-footer">
              <div className="gallery-counter">
                {galleryState.currentIndex + 1} / {galleryState.images.length}
              </div>
              <div className="gallery-thumbnails">
                {galleryState.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className={`gallery-thumbnail ${index === galleryState.currentIndex ? 'active' : ''}`}
                    onClick={() => setGalleryState(prev => ({ ...prev, currentIndex: index }))}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedProjects;
