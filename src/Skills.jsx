import React from 'react';
import './Skills.css';

function Skills() {
  const skillList = [
    { id: 1, name: 'React' },
    { id: 2, name: 'Flask' },
    { id: 3, name: 'Django' },
    { id: 4, name: 'JavaScript' },
    { id: 5, name: 'Python' },
    { id: 6, name: 'HTML' },
    { id: 7, name: 'CSS' },
    { id: 8, name: 'Java' },
    { id: 9, name: 'Selenium' },
    { id: 10, name: 'NodeJs' },
    { id: 11, name: 'MongoDB' },
    { id: 12, name: 'SqLite3' },
    { id: 13, name: 'MySql' },
    { id: 14, name: 'C' },
    { id: 15, name: 'Linux' },
    { id: 16, name: 'Git' },
    { id: 17, name: 'BootStrap' },
    { id: 18, name: 'JQuery' },
    { id: 19, name: 'AJAX' },
    { id: 20, name: 'Ubuntu' },
  ];
  return (
    <div className="skills">
      <h2>Skills</h2>
      <ul>
      {skillList.map(skill => (
          <li key={skill.id} className="skillCard">
            <p>{skill.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Skills