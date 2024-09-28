import React from 'react';
import Header from '../components/Header';
import '../assets/styles/pages/home.css'
import Skills from "../components/Skills";

/**
 *
 * @returns {Element}
 * @constructor
 */
const Home = () => {
    return (
        <div className='container'>
            <div className='main-home'>
                <Header/>
                <main>
                    <h1>Développeur Web</h1>
                    <h2>Passion et Curiosité</h2>
                    <p>
                        Après dix années d'expérience professionnelle en tant que mécanicien
                        industriel, j'ai entrepris une reconversion dans le développement web,
                        domaine qui me passionne. Autonome, patient, et motivé, je suis
                        déterminé à exceller dans cette nouvelle carrière.
                    </p>
                </main>

                <Skills/>
            </div>
        </div>
    );
};

export default Home;
