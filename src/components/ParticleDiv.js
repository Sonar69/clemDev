import React, {useEffect, useRef} from 'react';
import '../assets/styles/components/ParticleDiv.css';

const ParticleDiv = ({time}) => {
    // Utilise un ref pour accéder directement au conteneur des particules
    const particleContainerRef = useRef(null);

    // Utilise un hook d'effet pour ajouter et nettoyer les écouteurs d'événements
    useEffect(() => {
        // Récupère l'élément conteneur via le ref
        const container = particleContainerRef.current;

        // Fonction pour créer et animer une particule à la position donnée (x, y)
        const createParticle = (x, y) => {
            // Crée un élément div pour la particule
            const particle = document.createElement('div');
            // Ajoute la classe CSS 'particle' pour le style
            particle.className = 'particle';
            // Positionne la particule selon les coordonnées de la souris
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            // Ajoute la particule au conteneur
            container.appendChild(particle);

            // Supprime la particule après 1 seconde pour éviter l'accumulation dans le DOM
            setTimeout(() => {
                particle.remove();
            }, time);
        };

        // Gestionnaire de mouvement de la souris à l'intérieur du conteneur
        const handleMouseMove = (e) => {
            // Récupère les coordonnées du conteneur
            const rect = container.getBoundingClientRect();
            // Calcule la position de la souris relative au conteneur
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            // Crée une particule à la position de la souris
            createParticle(x, y);
        };

        // Ajoute un écouteur d'événements de mouvement de la souris au conteneur
        container.addEventListener('mousemove', handleMouseMove);

        // Nettoie l'écouteur d'événements lors du démontage du composant
        return () => {
            container.removeEventListener('mousemove', handleMouseMove);
        };
    }, [time]); // Le tableau vide signifie que cet effet est exécuté une seule fois après le montage du composant

    // Rend un div qui servira de conteneur pour les particules
    return <div ref={particleContainerRef} className="particle-container"></div>;
};

export default ParticleDiv;
