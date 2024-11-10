import React from 'react';
import './styles/Projects.css';

function Projects() {
    const projectList = [
        { id: 1, title: 'DConnect', description: 'Description for project one.' },
        { id: 2, title: 'Nitk_textExtraction', description: 'Description for project two.' },
        { id: 3, title: 'Project Three', description: 'Description for project three.' },
        { id: 4, title: 'Project Four', description: 'Description for project four.' },
        { id: 5, title: 'Project Five', description: 'Description for project five.' },
        { id: 6, title: 'Project Six', description: 'Description for project six.' },
      ];
  return (
    <div className="projects">
      <h2>Projects</h2>
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