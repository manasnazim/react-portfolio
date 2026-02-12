import React from "react";
import "../styles/Header.css";
import Resume from "../assets/resume.pdf"; 

function Header() {
  return (
    <>
        <header className="header">
            <h1>Mohammad Anas Nazim</h1>
            <div className="header-buttons">
                <a href="#projects" className="btn-primary">View Projects</a>
                <a href="#contact" className="btn-secondary">Contact Me</a>
            </div>
            <a href={Resume} download className="btn-resume">Resume</a>
            
            <p>Frontend Web Developer | React.js | Firebase</p>
        </header>
        
    </>
  );
}

export default Header;
