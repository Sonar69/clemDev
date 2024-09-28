import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


/**
 *
 * @returns {Element}
 * @constructor
 */
const Contact = () => {
    return (
        <div>
            <Header/>
            <main>
                <h1>Contact</h1>
                <p>Vous pouvez me contacter à l'adresse suivante: 123 Rue du Paradis, 75000 Paris</p>
                <p>ou par téléphone au 01 23 45 67 89</p>
                <p>ou par mail à mon adresse: eric@example.com</p>
                <p>ou via ce formulaire</p>
                <form>
                    <input type="text" placeholder="Nom" required/>
                    <input type="email" placeholder="Email" required/>
                    <textarea placeholder="Votre message" required/>
                    <button type="submit">Envoyer</button>
                </form>
                <p>N'hésitez pas à me contacter pour plus d'informations.</p>

            </main>
            <Footer/>
        </div>
    );
};

export default Contact;