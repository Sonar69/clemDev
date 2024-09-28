import React, {useState} from 'react';
import Header from '../components/Header';
import '../assets/styles/pages/home.css'
import Skills from "../components/Skills";
import ParticleDiv from "../components/ParticleDiv";

/**
 *
 * @returns {Element}
 * @constructor
 */
const Home = () => {

    const [time, setTime] = useState(1000);

    const handleTime = (e) => {
        setTime(parseInt(e.target.value));
        console.log(time);
    }

    return (
        <div className='container'>
            <Header/>
            <div className='main-home'>
                <h1>Développeur Web</h1>
                <h2>Passion et Curiosité</h2>
                <div className='body'>
                    <div>
                        <p>
                            Après dix années d'expérience professionnelle en tant que mécanicien
                            industriel, j'ai entrepris une reconversion dans le développement web,
                            domaine qui me passionne. Autonome, patient, et motivé, je suis
                            déterminé à exceller dans cette nouvelle carrière.

                        </p>
                        <p>Vous pouvez <a href='/'>télécharger</a> mon CV.</p>
                        <div className='select-time'>
                            <p>Ou vous amuser avec l'écran en dessous, sélectionner le temp de l'animation</p>
                            <select
                                value={time}
                                onChange={handleTime}
                            >
                                <option value={10000}>1</option>
                                <option value={1000} selected>2</option>
                                <option value={100}>3</option>
                            </select>
                        </div>
                    </div>
                    <ParticleDiv time={time}/>
                </div>
            </div>

            <Skills/>
        </div>
    );
};

export default Home;
