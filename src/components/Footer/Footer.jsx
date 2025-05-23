import React from "react";
import './Footer.css';
import TikTok from "../../assets/tiktok.png";
import Instagram from "../../assets/instagram.png";
import Play from "../../assets/play.png";
import Logo from "../../assets/logo.jpg";

const Footer = () => {
    return (
        <div className="Footer-container">
            <hr />
            <div className="footer">
                <div className="social-links">
                    <a href="https://www.tiktok.com/@robertfratila_?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer">
                        <img src={TikTok} alt="TikTok" />
                    </a>
                    <a href="https://www.instagram.com/robertfratila_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                        <img src={Instagram} alt="Instagram" />
                    </a>
                    <a href="https://bento.me/robertfratila?fbclid=PAZXh0bgNhZW0CMTEAAaYMwovHoF58FaIQboXX7b_6V-Ylc0SsQ2cJyIxTJPMudXZwvK6RRSm8B7Q_aem_SfB9GysQLtBsrVBRr3sbsw" target="_blank" rel="noopener noreferrer">
                        <img src={Play} alt="Play Store" />
                    </a>
                </div>             
                <div className="logo-f">
                    <img src={Logo} alt=""/>
                </div>
            </div>
            <div className="blur blur-f-1"></div>
            <div className="blur blur-f-2"></div>
        </div>
    )
}

export default Footer;