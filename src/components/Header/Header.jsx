import React, { useState, useEffect } from 'react';
import './Header.css';
import Bars from '../../assets/bars.png';
import { Link } from "react-scroll";

const Header = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [menuOpened, setMenuOpened] = useState(false);

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 768;
            setIsMobile(mobile);
            
            // Close menu when switching to desktop
            if (!mobile && menuOpened) {
                setMenuOpened(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [menuOpened]);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuOpened && !event.target.closest('.header-menu') && !event.target.closest('.mobile-menu-toggle')) {
                setMenuOpened(false);
            }
        };

        if (menuOpened) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpened]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMobile && menuOpened) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobile, menuOpened]);

    const handleMenuToggle = () => {
        setMenuOpened(!menuOpened);
    };

    const handleLinkClick = () => {
        setMenuOpened(false);
    };

    return (
        <>
            <div className="header">
                {/* Logo */}
                <h1 className="header-logo">
                    
                </h1>

                {/* Mobile Menu Toggle */}
                {isMobile && (
                    <button 
                        className="mobile-menu-toggle"
                        onClick={handleMenuToggle}
                        aria-label="Toggle menu"
                        aria-expanded={menuOpened}
                    >
                        <img src={Bars} alt="Menu" />
                    </button>
                )}

                {/* Navigation Menu */}
                {(!isMobile || menuOpened) && (
                    <ul className={`header-menu ${menuOpened ? 'open' : ''}`}>
                        <li>
                            <Link
                                onClick={handleLinkClick}
                                activeClass='active'
                                to='home'
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={handleLinkClick}
                                to='programs'
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                Programs
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={handleLinkClick}
                                to='reasons'
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                About me
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={handleLinkClick}
                                to='plans'
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                Plans
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={handleLinkClick}
                                to='testimonials'
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                Testimonials
                            </Link>
                        </li>
                    </ul>
                )}
            </div>

            {/* Overlay for mobile menu */}
            {isMobile && (
                <div 
                    className={`menu-overlay ${menuOpened ? 'open' : ''}`}
                    onClick={() => setMenuOpened(false)}
                />
            )}
        </>
    );
};

export default Header;