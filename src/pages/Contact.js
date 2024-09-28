import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import Header from '../components/Header';
import Skills from "../components/Skills";
import '../assets/styles/pages/contact.css'
import ReCAPTCHA from "react-google-recaptcha";


/**
 *
 * @returns {Element}
 * @constructor
 */
const Contact = () => {
    const keySite = '6Le29FEqAAAAAJURK6IdapS7MpZB_ogPwxyCtHVJ';
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSent, setIsSent] = useState(false);
    const [captchaValue, setCaptchaValue] = useState(null);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (e) => {
        if (!captchaValue) {
            alert('Please complete the CAPTCHA.');
            return;
        }
        // regex de verification d'email
        const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;

        if (!emailRegex.test(formData.email)) {
            alert('Veuillez entrer une adresse email valide');
            return;
        }
        e.preventDefault();

        emailjs.send(
            'service_dpy1t0o', // Remplace par ton Service ID
            'send_mail', // Remplace par ton Template ID
            formData,
            'pAnUWXipLXbkRqZKW' // Remplace par ton User ID
        ).then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            console.log(FormData);
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
                    <div>Vous pouvez me contacter :
                        <a href='mailto:clembonnet.dev@gmail.com'>
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                        <a href='https://github.com/Clembonnet'>
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href='https://www.linkedin.com/in/clembonnet-lucas-64399520a/'>
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
                        sitekey={keySite}
                        onChange={(value) => setCaptchaValue(value)}
                    />
                    <button type="submit">Envoyer</button>
                </form>
                {isSent && <p>Message sent successfully!</p>}
            </div>
            <Skills/>
        </div>
    );
};

export default Contact;