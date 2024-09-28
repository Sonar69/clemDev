import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/header.css'
/**
 *
 * @returns {Element}
 * @constructor
 */
const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
