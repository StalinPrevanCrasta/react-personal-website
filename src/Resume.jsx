import React from 'react';
import './styles/Resume.css';

const ResumeViewer = () => {
  const googleDriveLink = import.meta.env.VITE_GOOGLE_DRIVE_LINK;
  return (
    
    <div id="resume-container">
      <div id="resume-heading">
        <h1>My Resume</h1>
      </div>
      <div id="resume-body">
        <img 
          src={`${import.meta.env.BASE_URL}StalinPrevanCrasta_Resume.png`} 
          alt="Resume" 
          width="100%" 
        />
      </div>
      <div id="resume-download">
        <a href={googleDriveLink} download>
          <button>Download Resume</button>
        </a>
      </div>
    </div>
  );
};

export default ResumeViewer;