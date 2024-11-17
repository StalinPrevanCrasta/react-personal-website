import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';
import Resume from './components/Resume';
import { Twemoji } from 'react-emoji-render';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true, // Enable startTransition future flag
        v7_relativeSplatPath: true // Enable relativeSplatPath future flag
      }}
    >
      <div id="body">
        <Navbar />
        <Routes>
          {/* Main Page with sections */}
          <Route
            path="/"
            element={
              <>
                <div id="home" className="component">
                  <h1>Hi There! <Twemoji text="👋" className="interactive-emoji" /></h1>
                  <h1>I'M <span style={{ color: '#DDC1A6' }}> STALIN PREVAN CRASTA </span></h1>
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
              </>
            }
          />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
