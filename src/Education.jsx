import React from 'react';
import './styles/Education.css';

const educationData = [
  {
    id: 1,
    institution: 'St. Joseph Engineering College, Mangalore',
    stream: 'Bachelor of Engineering in Computer Science',
    period: '2022 - 2026'
  },
  {
    id: 2,
    institution: 'St Aloysius Pre-University College, Mangalore',
    stream: 'PCMB',
    period: '2020 - 2022'
  },
  {
    id: 3,
    institution: 'Rosario High School, Mangalore',
    stream: 'General',
    period: '2017 - 2020'
  }
];

function Education() {
  return (
    <div className="education">
      {educationData.map((item) => (
        <div key={item.id} className="education-item">
          <h3>{item.institution}</h3>
          <p>{item.stream}</p>
          <p>{item.period}</p>
        </div>
      ))}
    </div>
  );
}

export default Education;