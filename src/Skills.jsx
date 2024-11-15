import React from 'react';
import './styles/Skills.css';
import reactLogo from './assets/react.svg';
import flaskLogo from './assets/flask.svg';
import djangoLogo from './assets/django.svg';
import jsLogo from './assets/js.svg';
import pythonLogo from './assets/python.svg';
import htmlLogo from './assets/html5.svg';
import cssLogo from './assets/css3.svg';
import javaLogo from './assets/java.svg';
import seleniumLogo from './assets/selenium.svg';
import nodejsLogo from './assets/nodejs.svg';
import mongodbLogo from './assets/mongodb.svg';
import sqliteLogo from './assets/sqlite.svg';
import mysqlLogo from './assets/mysql.svg';
import cLogo from './assets/c.svg';
import linuxLogo from './assets/linux.svg';
import gitLogo from './assets/git.svg';
import bootstrapLogo from './assets/bootstrap.svg';
import jqueryLogo from './assets/jquery.svg';

function Skills() {
  const skillList = [
    { id: 1, name: 'React', logo: reactLogo },
    { id: 2, name: 'Flask', logo: flaskLogo },
    { id: 3, name: 'Django', logo: djangoLogo },
    { id: 4, name: 'JavaScript', logo: jsLogo },
    { id: 5, name: 'Python', logo: pythonLogo },
    { id: 6, name: 'HTML', logo: htmlLogo },
    { id: 7, name: 'CSS', logo: cssLogo },
    { id: 8, name: 'Java', logo: javaLogo },
    { id: 9, name: 'Selenium', logo: seleniumLogo },
    { id: 10, name: 'NodeJs', logo: nodejsLogo },
    { id: 11, name: 'MongoDB', logo: mongodbLogo },
    { id: 12, name: 'SqLite3', logo: sqliteLogo },
    { id: 13, name: 'MySql', logo: mysqlLogo },
    { id: 14, name: 'C', logo: cLogo },
    { id: 15, name: 'Linux', logo: linuxLogo },
    { id: 16, name: 'Git', logo: gitLogo },
    { id: 17, name: 'BootStrap', logo: bootstrapLogo },
    { id: 18, name: 'JQuery', logo: jqueryLogo },
  ];
  return (
    <div className="skills">
      <ul>
      {skillList.map(skill => (
          <li>
            <img src={skill.logo} alt={skill.name} className="skill-logo" />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Skills