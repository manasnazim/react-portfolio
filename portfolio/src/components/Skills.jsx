import React from "react";
import "../styles/Skills.css";

function Skills() {
  const skills = [
    "React.js", "JavaScript (ES6+)", "HTML5", "CSS3",
    "Firebase Authentication", "Cloud Firestore",
    "Git (basic)", "GitHub",
    "Netlify", "Vercel (auto-deploy)",
    "SPA", "Component-Based Architecture", "REST APIs", "JSON", "CRUD Operations"
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
