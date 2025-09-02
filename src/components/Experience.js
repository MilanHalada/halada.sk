import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      period: "JAN 2015 - Currently",
      title: "Developer",
      company: "Self-Employed",
      description: "Application development based on client requirements",
      technologies: [".NET Core", "React", "AI Integration", "Angular", "Azure"]
    },
    {
      period: "FEB 2023 - MAR 2025",
      title: "Programmer",
      company: "Millenium.sk",
      description: "Fullstack .NET/Angular/React development with AI integration. Various apps for insurance companies, e-commerce platforms, and business solutions.",
      technologies: [".NET Core", "Angular", "React", "AI Integration", "TypeScript"]
    },
    {
      period: "JULY 2022 - DEC 2022",
      title: "Developer",
      company: "Inspirea s.r.o., Banská Bystrica",
      description: "Bid proposal system development with .NET Core 6 backend and Vue.js frontend.",
      technologies: [".NET Core 6", "Vue.js", "JavaScript", "REST APIs"]
    },
    {
      period: "SEP 2021 - DEC 2022",
      title: "Developer",
      company: "ORIFLAME SLOVAKIA s.r.o., Brno",
      description: "Last mile delivery system - package tracking, API for courier systems, and logistics management.",
      technologies: [".NET Core", "Angular", "Kubernetes", "Docker", "Azure"]
    },
    {
      period: "DEC 2020 - JUNE 2022",
      title: "Senior Developer",
      company: "CRIF - Slovak Credit Bureau, Bratislava",
      description: "REST and SOAP API integration, XML and Excel report processing, frontend modifications for financial systems.",
      technologies: ["REST APIs", "SOAP", "XML Processing", "Excel Integration", "C#"]
    },
    {
      period: "AUG 2018 - DEC 2019",
      title: "CTO",
      company: "AVIGET j.s.a.",
      description: "Development of AI chatbot for airlines - architecture, programming, and DevOps responsibilities.",
      technologies: ["AI Chatbots", "Architecture", "DevOps", "Python", "Machine Learning"]
    },
    {
      period: "JAN 2014 - JAN 2017",
      title: "Developer",
      company: "YMS a.s.",
      description: "Software development and system integration projects.",
      technologies: ["C#", ".NET", "SQL Server", "Web Development"]
    },
    {
      period: "JAN 2012 - JAN 2014",
      title: "Programmer",
      company: "DataPhone",
      description: "Warehouse management systems development and support.",
      technologies: ["C#", ".NET", "SQL Server", "Warehouse Management"]
    },
    {
      period: "JAN 2009 - JAN 2012",
      title: "Programmer",
      company: "Samsung Electronics",
      description: "Internal application development for manufacturing and business processes.",
      technologies: ["C#", ".NET", "Manufacturing Systems", "Business Applications"]
    },
    {
      period: "JAN 2004 - JAN 2009",
      title: "Process Engineer",
      company: "Samsung Electronics",
      description: "Process engineering and optimization in manufacturing environment.",
      technologies: ["Process Engineering", "Manufacturing", "Quality Control"]
    }
  ];

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-period">{exp.period}</div>
                <h3 className="timeline-title">{exp.title}</h3>
                <h4 className="timeline-company">{exp.company}</h4>
                <p className="timeline-description">{exp.description}</p>
                <div className="timeline-technologies">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
