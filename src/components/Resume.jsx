import { useEffect, useState } from 'react';
import '../styles/Resume.css';

const ResumeViewer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const googleDriveLink = import.meta.env.VITE_GOOGLE_DRIVE_LINK;

  // Extract file ID and build embed preview URL
  const fileId = googleDriveLink.match(/\/d\/(.+?)\//)?.[1];
  const embedLink = fileId
    ? `https://drive.google.com/file/d/${fileId}/preview?usp=sharing&embedded=true&rm=minimal`
    : googleDriveLink;

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="resume-container">
      <h2 className="resume-title">My Resume</h2>
      {isLoading ? (
        <div className="resume-loading">
          <div className="loading-spinner"></div>
          <p>Loading resume...</p>
        </div>
      ) : (
        <div className="resume-embed">
          <iframe
            src={embedLink}
            title="Resume"
            style={{
              width: '100vw',
              height: 'calc(100vh - 3rem)',
              border: 'none',
              position: 'fixed',
              top: '3rem',
              left: 0,
              margin: 0,
              padding: 0
            }}
            allow="autoplay"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default ResumeViewer;
