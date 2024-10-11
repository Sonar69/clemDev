import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import Header from '../components/Header';
import Skills from "../components/Skills";
import '../assets/styles/pages/contact.css';
import ReCAPTCHA from "react-google-recaptcha";

/**
 * Formulaire de contact avec protection reCAPTCHA
 * @returns {JSX.Element}
 */
const Contact = () => {
    // Clé du site reCAPTCHA
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSent, setIsSent] = useState(false);
    const [captchaValue, setCaptchaValue] = useState(null);

    /**
     * Gère le changement des champs de formulaire
     * @param {Object} e - Événement de changement
     */
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    /**
     * Gère la soumission du formulaire
     * @param {Object} e - Événement de soumission
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        // Validation des champs
        if (formData.name.trim() === '') {
            alert('Veuillez entrer votre nom');
            return;
        }
        if (formData.email.trim() === '') {
            alert('Veuillez entrer votre adresse email');
            return;
        }
        if (formData.message.trim() === '') {
            alert('Veuillez entrer votre message');
            return;
        }
        if (!captchaValue) {
            alert('Please complete the CAPTCHA.');
            return;
        }
        // Regex de vérification d'email
        const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
        if (!emailRegex.test(formData.email)) {
            alert('Veuillez entrer une adresse email valide');
            return;
        }
        // Envoi de l'email via email.js
        emailjs.send(
            'service_dpy1t0o',
            'send_mail',
            formData,
            'pAnUWXipLXbkRqZKW'
        ).then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setIsSent(true);
            setFormData({name: '', email: '', message: ''});
        }).catch((err) => {
            console.error('FAILED...', err);
        });
    };

    return (
        <div className='container'>
            <Header/>
            <div className='main-contact'>
                <div className='head-contact'>
                    <h1>Contact</h1>
                    <div>
                        Vous pouvez me contacter :
                        <a href='mailto:clembonnet.dev@gmail.com'>
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                        <a href='https://github.com/Sonar69'>
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href='https://linkedin.com/in/clément-bonnet-31abb9296'>
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </div>
                    <p>Ou via ce formulaire</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder='Nom'
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        placeholder='Email'
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        placeholder='Votre message'
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    <ReCAPTCHA
                        sitekey='your_secret_key'
                        onChange={(value) => setCaptchaValue(value)}
                    />
                    <button type="submit">Envoyer</button>
                </form>
                {isSent && <p>Message envoyé avec succès!</p>}
            </div>
            <Skills/>
        </div>
    );
};

export default Contact;
