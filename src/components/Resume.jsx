import React, { useEffect } from 'react';
import { Twemoji } from 'react-emoji-render';
import '../styles/Resume.css';

const ResumeViewer = () => {
  const googleDriveLink = import.meta.env.VITE_GOOGLE_DRIVE_LINK;
  const resumeImageUrl = import.meta.env.VITE_RESUME_IMAGE_URL;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    
    <div id="resume-container">
      <div id="resume-heading">
        <h1><Twemoji text="📄" /> My Resume</h1>
      </div>
      <div id="resume-body">
        <img 
          src={`${import.meta.env.BASE_URL}${resumeImageUrl}`} 
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