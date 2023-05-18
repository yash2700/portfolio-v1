import React from 'react'
import "./Skills.css"
function Skills() {
  return (
   <><div className='skills_container'>
    <h3>SKILLS</h3>
    
    <div className='skills_flex'>
        <h3>LANGUAGES</h3>
        <ul className='skills_list'>
        <li>Java</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>SQL</li>
        <li>Python</li>
    </ul>
    </div>
    <div className='skills_flex'>
        <h3>FRAMEWORKS</h3>
        <ul className='skills_list'>
        <li>Spring Boot</li>
        <li>Tailwind</li>
        <li>React</li>
        </ul>
    </div>
    <div className='skills_flex'>
        <h3>TOOLS</h3>
        <ul className='skills_list'>
            <li>GitHub</li>
            <li>Postman</li>
            <li>MongoDB</li>
            <li>IntelliJ</li>
            <li>Jupyter Notebook</li>
        </ul>
    </div>
    <div className='skills_flex'></div>
    </div></>
  )
}

export default Skills