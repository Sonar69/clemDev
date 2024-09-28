import React from 'react';

/**
 *
 * @param project
 * @returns {Element}
 * @constructor
 */
const ProjectCard = ({project}) => {
    return (
        <div className="project-card">
            <img style={{width: '8em'}} src={`${process.env.PUBLIC_URL}/images/projects/${project.image}`}
                 alt={project.title}/>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
        </div>
    );
};

export default ProjectCard;
