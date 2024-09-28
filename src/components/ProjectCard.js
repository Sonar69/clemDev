import React from 'react';
import '../assets/styles/components/project-card.css'

/**
 *
 * @param project
 * @returns {Element}
 * @constructor
 */
const ProjectCard = ({project}) => {

    const handleProject = () => {
        if (project.link === '/projects') {
            alert('Projet en cour soyer indulgent');
        }
        window.location.href = project.link;
    }
    return (
        <div className="project-card">
            <img className='project-image'
                 onClick={handleProject}
                 src={`${process.env.PUBLIC_URL}/images/projects/${project.image}`}
                 alt={project.title}/>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <img className='tech-icon'
                 src={`${process.env.PUBLIC_URL}/images/Skills/${project.tech}`}
                 alt={project.tech}/>
        </div>
    );
};

export default ProjectCard;
