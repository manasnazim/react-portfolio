import React from "react";
import "../styles/Projects.css";

function Projects() {
  const projects = [
    {
      name: "ChatGPT Clone",
      description: "SPA with React.js and Firebase, real-time chat, deployed on Netlify",
      tech: "React.js, Firebase, Netlify",
      live: "#",
      github: "#"
    },
    {
      name: "Real-Time Chat App",
      description: "Real-time messaging app using React.js and Firestore",
      tech: "React.js, Firebase, Netlify",
      live: "#",
      github: "#"
    },
    {
      name: "Portfolio Website",
      description: "Responsive SPA showcasing projects, deployed on Vercel",
      tech: "React.js, CSS3, Vercel",
      live: "#",
      github: "#"
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p className="tech">Tech: {project.tech}</p>
            <div className="project-links">
              <a href={project.live}>Live</a>
              <a href={project.github}>GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
