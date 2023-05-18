import React from 'react'
import "./ProjectTable.css"
function ProjectTable(props) {
    var th=["Name","Built With","Github Link","Live Link"]
  return (
    <div>
        <table>
            <caption className="caption">{props.type}</caption>
            <thead>
                {
                    th.map((i)=><th>{i}</th>)
                }
            </thead>
            <tbody>
                {   props.projects.map((project)=>(
                    <tr>
                        <td className='title'>{project.name}</td>

                        <td className='built'>
                            {
                                project.technologiesUsed.map((i)=>
                                <p className='built_with'>{i}</p>)
                            }
                        </td>

                        <td  onClick={()=>window.open(project.githubLink,"_black")}><p className='underline'>{project.githubLink}</p></td>

                        <td  onClick={()=>window.open(project.liveLink,"_blank")}><p className='underline'>{project.liveLink}</p></td>
                    </tr>
                ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default ProjectTable