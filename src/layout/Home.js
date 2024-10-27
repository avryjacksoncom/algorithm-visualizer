import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function HomePage() {
  return (
    <div className="homepage-container">
      <header className="header-section">
        <h1 className="greeting">Welcome to My Algorithm Visualizer!</h1>

        <p className="intro">
          <b>To begin:</b>  The sidebar on the left will take you to different data structures and algorithms. Please use the sidebar to navigate throgh this project. I will be updating this project
          a long the way. As I learn more about algorithms and data structures on my journey to create fun projects.
        </p>
      </header>

      <section className="about-section">
        <h2>About Me</h2>
        <p>
           I'm  a trans Computer Science Major at Cal State domniguez hills, focusing on software engineering, and am always excited to learn and grow. This project reflects my learning path in creating efficient,
           interactive visualizations for various algorithms.
        </p>
      </section>

      <section className="why-section">
        <h2>Why the did I make this and Why am I motivated into making this project?</h2>
        <p>
           In order to help some of my classmates also understand algoritms better by visualizing because unfortunatley our professor at the time did 
           not provide any visualizations in our data structures course. I was also drawing and redrawing a lot with my group mates. So, instead of drawing over and over, ill just make
           my own visualizations to understand the bigger picture when it comes to these structures. Other code visualizations have like the code within them and for my classmates that 
           can get pretty confusing.
        </p>
      </section>

      <section className="contact-section">
        <h2>Connect with Me</h2>
        <div className="social-icons">
          <a href="https://github.com/avryjacksoncom" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/avry-jackson-886529265/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          {/* Add more links here */}
        </div>
      </section>

      <footer className="footer-section">
        <p>Connect with me on <a href="https://github.com/avryjacksoncom" target="_blank" rel="noopener noreferrer">GitHub</a></p>
      </footer>
    </div>
  );
}
