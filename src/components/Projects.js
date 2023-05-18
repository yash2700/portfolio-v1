import React from 'react'
import "./Projects.css"
import data from "../data/data.json"
import ProjectCard from './ProjectCard'
import arrow from "../assets/arrow.png"
import { Link } from 'react-router-dom'

function Projects() {
  return (
    <>
    <div className="Pcontainer">
      <h3>Projects</h3>
      <div className="right">
        {
          data.featured.map((i)=>(
            <ProjectCard project={i}/>
          ))
        }
        <Link to="/allProjects" className='allProjects'>View all Projects <img className='arrow' src={arrow} alt="" /></Link>
      </div>
    </div>
    </>
  )
}

export default Projects