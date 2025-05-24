import React, { useState, useEffect, useRef } from 'react';
import Header from '../Header/Header';
import './Hero.css';
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import NumberCounter from 'number-counter';
import { motion } from 'framer-motion';

const Hero = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isTablet, setIsTablet] = useState(window.innerWidth <= 1024 && window.innerWidth > 768);
    const programsRef = useRef(null);

    // Handle responsive state
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setIsMobile(width <= 768);
            setIsTablet(width <= 1024 && width > 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Dynamic transition based on screen size
    const getTransition = () => {
        if (isMobile) {
            return { type: 'spring', duration: 2, damping: 20 };
        } else if (isTablet) {
            return { type: 'spring', duration: 2.5, damping: 15 };
        }
        return { type: 'spring', duration: 3, damping: 10 };
    };

    // Dynamic animation values based on screen size
    const getAnimationValues = () => {
        if (isMobile) {
            return {
                initial: { right: '8rem' },
                whileInView: { right: '18rem' }
            };
        } else if (isTablet) {
            return {
                initial: { right: '15rem' },
                whileInView: { right: '25rem' }
            };
        }
        return {
            initial: { right: '20rem' },
            whileInView: { right: '36rem' }
        };
    };

    const handleScrollToPrograms = () => {
        if (programsRef.current) {
            programsRef.current.scrollIntoView({ 
                behavior: "smooth",
                block: "start"
            });
        }
    };

    const handleBookConsultation = () => {
        window.open('https://calendar.app.google/gBhEtyTZx1VnoVe37', '_blank');
    };

    const animationValues = getAnimationValues();

    return (
        <div className="hero" id='home'>
            <div className="blur hero-blur"></div>
            
            <div className="left-h">
                <Header />
                
                {/* Hero Text */}
                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Achieve </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Best </span>
                        <span className='stroke-text'>Shape </span>
                        <span>with</span>
                    </div>
                    <div>
                        <span>Expert </span>
                        <span className='stroke-text'>Coaching</span>
                    </div>
                    <div>
                        <span>
                            I'm Robert Frățilă, a bodybuilding champion, certified personal trainer, and nutrition coach. 
                            With years of experience in strength training and meal planning, I help people achieve their dream physique through expert coaching and customized nutrition.
                        </span>
                    </div>
                </div>

                {/* Statistics */}
                <div className="figures">
                    <div>
                        <span>
                            <NumberCounter 
                                end={37} 
                                start={0} 
                                delay='4' 
                                preFix="+"
                            />
                        </span>
                        <span>Championship Titles</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter 
                                end={186} 
                                start={100} 
                                delay='4' 
                                preFix="+"
                            />
                        </span>
                        <span>Personalized Fitness Plans</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter 
                                end={40} 
                                start={0} 
                                delay='4' 
                                preFix="+"
                            />
                        </span>
                        <span>Personalized Diet Plans</span>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="hero-buttons">
                    <button
                        className="btn"
                        onClick={handleBookConsultation}
                        aria-label="Book your free consultation"
                    >
                        Book Your Free Consultation
                    </button>
                    <button 
                        className="btn" 
                        onClick={handleScrollToPrograms}
                        aria-label="Learn more about our programs"
                    >
                        Learn More
                    </button>
                </div>

                {/* Hidden anchor for smooth scrolling */}
                <section ref={programsRef} id="programs" style={{ height: 0, overflow: 'hidden' }}>
                </section>
            </div>

            <div className="right-h">
                {/* Hero Images */}
                <img 
                    src={hero_image} 
                    alt="Robert Frățilă - Personal Trainer and Bodybuilding Champion" 
                    className='hero-image'
                    loading="eager"
                />
                
                <motion.img
                    initial={animationValues.initial}
                    whileInView={animationValues.whileInView}
                    transition={getTransition()}
                    src={hero_image_back} 
                    alt="Background design element" 
                    className='hero-image-back'
                    loading="lazy"
                />

                {/* Right Side Text */}
                {!isMobile && (
                    <div className='hero-text-right'>
                        <div>
                            <span className='stroke-text'>Get </span>
                            <span>Stronger</span>
                        </div>
                        <div className='box2'>
                            <span className='stroke-text'>Move </span>
                            <span>Better</span>
                        </div>
                        <div>
                            <span className='stroke-text'>Feel </span>
                            <span>Amazing</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Hero;