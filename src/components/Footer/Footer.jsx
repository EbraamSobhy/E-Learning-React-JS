import React from "react";
import './footer.css';
import { FaFacebookF, FaWhatsapp , FaInstagram } from 'react-icons/fa';
import { RiLiveLine } from "react-icons/ri";

function Footer() {
    return (
        <div>
            <footer className="footer">
                <p className="name">Passion.Tech</p>
                <div className="social-media-icons">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp  />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                    <RiLiveLine />
                    </a>
                </div>
                <p className="copyright">&copy;2024 Passion.Tech All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Footer;
