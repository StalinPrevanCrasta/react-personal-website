import React from 'react';
import '../styles/Projects.css';

function Projects() {
    const projectList = [
        { id: 1, title: 'VaruNetra - Maritime Situational Awareness System', description: 'VaruNetra is a cutting-edge Maritime Situational Awareness System developed for the Indian Navy Hackathon Swavlamban 2024. It features a React.js frontend and Flask backend, leveraging EasyOCR for identification and Leaflet.js for interactive maritime mapping. The system provides  interactive visualizations, OCR-based vessel identification, secure communication protocols, and an automated alert system.' },
        { id: 2, title: 'DConnect: A Seamless Ride-Booking Platform', description: 'DConnect is an innovative web app developed during a hackathon to streamline ride-sharing. Using Flask, it integrates Maps API for real-time navigation and Razorpay for secure payments. Key features include ride search, booking, a user-friendly dashboard, feedback collection, and secure payment processing, ensuring a smooth and safe experience for both riders and drivers.' },
        { id: 3, title: 'Department Management System', description: 'The Department Management System is a web application built with Django to manage departments within an organization. Key features include secure user authentication for admins, department heads, and employees, the ability to create, update, and delete department details, managing employee details with department associations. The system uses Django for the backend, HTML5 and CSS3 for the frontend, and SQLite database. Authentication is handled through Django\'s built-in system.' },
      ];
  return (
    <div className="projects">
      <ul>
        {projectList.map(project => (
            <li key={project.id} className="projectCard">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Projects