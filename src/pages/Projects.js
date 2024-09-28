import React from 'react';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import Skills from "../components/Skills";
import '../assets/styles/pages/project.css'

const projects = [
    {
        title: 'API Meteo',
        description: 'API Meteo réaliser en Javascript, géolocalisation et recherche de ville en france.',
        image: 'weatherApp.png',
        link: 'https://weatherapp.clemdev.fr/index.html',
        tech: 'js-logo.png'
    },
    {
        title: 'Pokedex v1',
        description: 'Pokedex réaliser en react native , recuperation des données par API',
        image: 'pokedex-v1.png',
        link: '/projects',
        tech: 'react-logo.png'
    },
    {
        title: 'Le Resto parfait',
        description: 'Site vitrine restaurant avec prise de rendez-vous, site realiser avec Symfony',
        image: 'le-resto.png',
        link: 'http://s1013066084.onlinehome.fr/',
        tech: 'symfony-logo.png'
    },
];

/**
 *
 * @returns {Element}
 * @constructor
 */
const Projects = () => {
    return (
        <div className='container'>
            <Header/>
            <div className='main-project'>
                <h1>Mes Projets</h1>
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project}/>
                ))}
            </div>
            <Skills/>
        </div>
    );
};

export default Projects;
