import { useEffect, useState } from 'react';
import '../styles/Resume.css';

const ResumeViewer = () => {
  const [isLoading, setIsLoading] = useState(true);
  // Resume URL: prefer env var for flexibility, fallback to the provided Vercel storage URL
  const resumeUrl = 'https://oqppgbity5gb8c4k.public.blob.vercel-storage.com/Stalin_Prevan_Crasta_Resume.pdf';

  // Use the direct URL for embedding (works for PDF files served with correct headers)
  const embedLink = resumeUrl;

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
