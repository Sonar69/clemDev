import React from 'react';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';

const projects = [
    {
        title: 'API Meteo',
        description: 'API Meteo réaliser en Javascript, géolocalisation et recherche de ville en france.',
        image: 'weatherApp.png'
    },
    {
        title: 'Pokedex v1',
        description: 'Pokedex réaliser en react native , recuperation des données par API',
        image: 'pokedex-v1.png'
    },
    {
        title: 'Le Resto parfait',
        description: 'Site vitrine restaurant avec prise de rendez-vous, site realiser avec Symfony',
        image: 'le-resto.png'
    },
];

/**
 *
 * @returns {Element}
 * @constructor
 */
const Projects = () => {
    return (
        <div>
            <Header/>
            <main>
                <h1>Mes Projets</h1>
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project}/>
                ))}
            </main>
        </div>
    );
};

export default Projects;
