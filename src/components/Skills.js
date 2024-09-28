import React from 'react';
import '../assets/styles/components/Skills.css'

const skills = [
    {name: 'Node.js', icon: 'node-logo.png'},
    {name: 'React', icon: 'react-logo.png'},
    {name: 'JavaScript', icon: 'js-logo.png'},
    {name: 'GitHub', icon: 'github-logo.png'},
    {name: 'Figma', icon: 'figma-logo.png'},
    {name: 'PHP', icon: 'php-logo.png'},
    {name: 'Symfony', icon: 'symfony-logo.png'},
    {name: 'MySQL', icon: 'mysql-logo.png'},
    {name: 'Postgres', icon: 'postgres-logo.png'},
    {name: 'Jira', icon: 'jira-logo.png'},
];

const Skills = () => {
    return (
        <footer className="skills-container">
            <h2 className="skills-title">Mes données téléchargés</h2>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                        <img src={`${process.env.PUBLIC_URL}/images/Skills/${skill.icon}`}
                             alt={`${skill.name} logo`}
                             className="skill-icon"/>
                        <h3 className="skill-name">{skill.name}</h3>
                    </div>

                ))}
                <div className="skill-card waiting-card">
                    <div className="waiting-text">En attente de transfère de données...</div>
                </div>
            </div>
        </footer>
    );
};

export default Skills;
