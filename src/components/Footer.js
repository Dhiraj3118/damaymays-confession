import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            Made with <span className="heart">❤</span> by
            <div className="me">
                <span className="name">Dhiraj</span>
                <a className="my-icons insta" href="https://www.instagram.com/narsinghanidhiraj/"><FaInstagram /></a>
                <a className="my-icons linkedin" href="https://www.linkedin.com/in/dhiraj-narsinghani-9172a21b4/"><FaLinkedin /></a>
                <a className="my-icons github" href="https://github.com/Dhiraj3118"><FaGithub /></a>
            </div>
        </footer>
    )
}
export default Footer;