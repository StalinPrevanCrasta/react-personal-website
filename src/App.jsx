import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import './styles/App.css';

function App() {
  return (
    <div id="root">
      <div className="component">
        <Navbar />
      </div>
      <div className="component">
        <About />
      </div>
      <div className="component">
        <Skills />
      </div>
      <div className="component">
        <Projects />
      </div>
      <div className="component">
        <Contact />
      </div>
    </div>
  );
}
export default App;