import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>Email: anas@example.com</p>
      <p>LinkedIn: linkedin.com/in/anas</p>
      <p>GitHub: github.com/anas</p>
      <a href="mailto:anas@example.com" className="contact-btn">Send Email</a>
    </section>
  );
}

export default Contact;
