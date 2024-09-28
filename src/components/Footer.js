import React from 'react';
import '../assets/styles/components/footer.css'

/**
 *
 * @returns {Element}
 * @constructor
 */
const Footer = () => {
    return (
        <footer>
            <div className="footer-left">
                <h3>SKILLS</h3>
                <ul>
                    <li>PHP</li>
                    <li>JavaScript</li>
                    <li>Frameworks</li>
                </ul>
            </div>
            <div className="footer-right">
                <img src={`${process.env.PUBLIC_URL}/images/php-logo.png`} alt="PHP Logo"/>
                <img src={`${process.env.PUBLIC_URL}/images/js-logo.png`} alt="JavaScript Logo"/>
                <img src={`${process.env.PUBLIC_URL}/images/symfony-logo.png`} alt="Symfony Logo"/>
                <img src={`${process.env.PUBLIC_URL}/images/react-logo.png`} alt="React Logo"/>
            </div>
        </footer>
    );
};

export default Footer;
