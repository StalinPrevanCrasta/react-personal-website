import React from 'react';
import '../styles/Projects.css';

function Projects() {
    const projectList = [
        { id: 1, title: 'VaruNetra - Maritime Situational Awareness System', description: 'VaruNetra is a cutting-edge Maritime Situational Awareness System developed for the Indian Navy Hackathon Swavlamban 2024. It features a React.js frontend and Flask backend, leveraging EasyOCR for identification and Leaflet.js for interactive maritime mapping. The system provides  interactive visualizations, OCR-based vessel identification, secure communication protocols, and an automated alert system.' },
        { id: 2, title: 'DConnect: A Seamless Ride-Booking Platform', description: 'DConnect is an innovative web app developed during a hackathon to streamline ride-sharing. Using Flask, it integrates Maps API for real-time navigation and Razorpay for secure payments. Key features include ride search, booking, a user-friendly dashboard, feedback collection, and secure payment processing, ensuring a smooth and safe experience for both riders and drivers.' },        {
          id: 3,
          title: 'RAG API Agent - GPU-Accelerated Document Processing',
          description: `A modular Retrieval-Augmented Generation API that ingests documents (PDF/HTML/JSON) from URLs and answers questions using GPU-accelerated Llama 3.3-70B-Instruct via vLLM. Features: universal URL processing, multilingual QA, FAISS vector caching, vLLM integration, ROCm/AMD GPU support, Docker deployment, and parallel processing for high throughput.`
        },
        {
          id: 4,
          title: 'LedgerLynx BCOC — Blockchain Chain of Custody',
          description: `Overview: Blockchain-based chain of custody system built on Hyperledger Fabric for secure evidence management across law enforcement organizations. Ensures data integrity, transparency, and regulatory compliance from collection to courtroom. Tech Stack: Hyperledger Fabric, Go, Docker, WSL2, Bash scripting, Git. Key Features: Immutable evidence records, multi-organization access control, custody tracking, tamper-proof ledger, TLS-secured multi-org network, automated deployment scripts, and an evidence management CLI.`
        },
        {
          id: 5,
          title: 'Agriscrow — Decentralized Agricultural Marketplace',
          description: `Overview: Blockchain-powered platform on TON connecting farmers, buyers, and equipment owners. Supports direct trading, equipment rental, and secure payments via smart contracts with multi-user roles and community features. Tech Stack: React 18 (TypeScript), Vite, Tailwind CSS, TON Connect, Lucide React, Flask, SQLite, Flask-CORS, Tact (TON smart contracts). Key Features: Smart-contract escrow with TON crypto payments, FCFS order processing, equipment rental, real-time market data, community forums, dispute resolution, multi-signature & timelock security, responsive mobile-first UI.`
        },
        {
          id: 6,
          title: 'DevDuo — Hackathon Discovery App',
          description: `Overview: Mobile app aggregating hackathon listings from multiple platforms by consuming their APIs, extracting common fields, and serving them through a custom unified API. Includes filters, wishlist, and user submissions. Tech Stack: React Native, Appwrite, Expo, React Navigation. Key Features: Cross-platform API integration, event aggregation with filters, custom API for standardized data, event wishlist, user-submitted hackathons, profile customization, password management, and light/dark theme.`
        },
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