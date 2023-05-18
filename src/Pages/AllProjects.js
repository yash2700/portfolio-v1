import React from 'react'
import "./AllProjects.css"
import left_arrow from "../assets/left_arrow.png"
import { Link } from 'react-router-dom'
import data from "../data/data.json"
import ProjectTable from '../components/ProjectTable'
function AllProjects() {
  console.log(Object.keys(data.all[0])[0]);
  return (
    <div className='APcontainer'>
        <Link to="/"><img src={left_arrow} alt="" />  Yaswanth Reddy</Link>
        <h1>All Projects</h1>
        {
          data.all.map((i)=>(
            <ProjectTable type={Object.keys(i)[0]} projects={i[Object.keys(i)[0]]}/>
          ))
        }
    </div>
  )
}

export default AllProjects