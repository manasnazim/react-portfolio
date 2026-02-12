import React from "react";
import "../styles/Header.css";
import Resume from "../assets/resume.pdf"; 

function Header() {
  return (
    <>
        <header className="header">
            <h1>Mohammad Anas Nazim</h1>
            <div className="header-buttons">
                <a href="#about" className="btn-about">About</a>
                <a href="#projects" className="btn-primary">Projects</a>
                <a href="#contact" className="btn-secondary">Contact</a>
            </div>
            <a href={Resume} download className="btn-resume">Resume</a>
            
            <h4>Frontend Web Developer</h4>
            <p>Crafting fast, accessible web interfaces <br /> React | Firestore</p>
        </header>
        
    </>
  );
}

export default Header;
