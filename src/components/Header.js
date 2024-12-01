import React, {useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/components/header.css';
import '../assets/styles/components/ParticleDiv.css';

/**
 *
 * @returns {Element}
 * @constructor
 */
const Header = () => {

    const particleContainerRef = useRef(null);

    useEffect(() => {
        const container = particleContainerRef.current;

        const createGlow = (x, y) => {
            const glow = document.createElement('div');
            glow.className = 'glow';
            glow.style.left = `${x}px`;
            glow.style.top = `${y}px`;
            container.appendChild(glow);

            setTimeout(() => {
                glow.remove();
            }, 1000);
        };

        const handleMouseMove = (e) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            createGlow(x, y);
        };

        container.addEventListener('mousemove', handleMouseMove);

        return () => {
            container.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <header ref={particleContainerRef}>
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/projects">Projets</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
