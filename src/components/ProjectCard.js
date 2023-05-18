import React from 'react';
import "./ProjectCard.css";
import arrow from "../assets/arrow.png";

function ProjectCard({ project }) {

  const openGithubLink = () => {
    window.open(project.githubLink, '_blank');
  };

  return (
    <>
      <div className="PCcontainer">
        <h4 onClick={openGithubLink} className='titleflex'>
          {project.name} &nbsp;&nbsp; <img className='arrow' src={arrow} alt="" />
        </h4>
        <p>{project.description}</p>
        {project.liveLink !== "" ? (
          <p> Live Link : <a href={project.liveLink}>{project.liveLink}</a></p>
        ) : null}

        <div className="technologies">
          {project.technologiesUsed.map((i, index) => (
            <p className='skill' key={index}>{i}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
