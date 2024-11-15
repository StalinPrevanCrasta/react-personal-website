import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import './styles/App.css';
import Education from './Education';
import { Twemoji } from 'react-emoji-render';

function App() {
  return (
    <div id="root">
      <div className="component">
        <Navbar />
      </div>
      <div id="home" className="component">
        <h1>Hi There! <Twemoji text="👋" className="interactive-emoji" /></h1>
        <h1>I'M <span style={{color:'#DDC1A6'}}> STALIN PREVAN CRASTA </span> </h1>
      </div>
      <div className="component">
        <h2><Twemoji text="👀" /> About Me</h2>
        <About />
      </div>
      <div id="skills" className="component">
        <h2><Twemoji text="⚙️" /> Skills</h2>
        <Skills />
      </div>
      <div id="education" className="component">
        <h2><Twemoji text="🎓" /> Education</h2>
        <Education />
      </div>
      <div id="projects" className="component">
        <h2><Twemoji text="🚀" /> Projects</h2>
        <Projects />
      </div>
      <div id="contact" className="component">
        <h2><Twemoji text="📱" /> Contact</h2>
        <Contact />
      </div>
    </div>
  );
}
export default App;