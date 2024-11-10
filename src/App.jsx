import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import './App.css';

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
    </div>
  );
}
export default App;