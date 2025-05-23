import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import NumberCounter from 'number-counter'
import {motion} from 'framer-motion'
import { useRef } from "react";

const Hero = () => {
    const transition = {type: 'spring', duration: 3}
    const programsRef = useRef(null);
    // const mobile = window.innerWidth<=768 ? true : false
    return (
        <div className="hero" id='home'>
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />
                {/* The best ad
                <div className="the-best-ad">
                    <motion.div 
                        initial= {{left: mobile ? "150px" : "238px"}}
                        whileInView={{left: '8px'}}
                        transition={{...transition, type: 'tween'}}
                    ></motion.div>
                    <span>Train Like a Champion, Become Your Best Self</span>
                </div> */}
                {/* Hero Heading */}
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
                        I’m Robert Frățilă, a bodybuilding champion, certified personal trainer, and nutrition coach. 
                        With years of experience in strength training and meal planning, I help people achieve their dream physique through expert coaching and customized nutrition.
                        </span>
                    </div>
                </div>
                {/* figures */}
                <div className="figures">
                    <div>
                        <span>
                            <NumberCounter end={37} start={0} delay='4' preFix="+"/>
                        </span>
                        <span>Championship Titles</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={186} start={100} delay='4' preFix="+"/>
                        </span>
                        <span>Personalized Fitness Plans</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={40} start={0} delay='4' preFix="+"/>
                        </span>
                        <span>Personalized Diet Plans</span>
                    </div>
                </div>
                {/* Motivational text
                <div className='motivational-text'>
                    <span>
                        Achieving your fitness goals isn’t just about working out—it’s about training smart and eating right.
                    </span>
                </div> */}
                {/* hero buttons */}
                <div className="hero-buttons">
                    <button
                        className="btn"
                        onClick={() => window.open('https://calendar.app.google/gBhEtyTZx1VnoVe37', '_blank')}
                    >
                        Book Your Free Consultation
                    </button>
                    {/* <div> */}
                        <button className="btn" onClick={() => programsRef.current?.scrollIntoView({ behavior: "smooth" })}>
                            Learn More
                        </button>

                        <section ref={programsRef} id="programs">
                        </section>
                    {/* </div> */}
                </div>
            </div>
            <div className="right-h">
                {/* hero img */}  
                <img src={hero_image} alt="" className='hero-image' />
                <motion.img
                    initial={{right: '20rem'}}
                    whileInView={{right: '36rem'}}
                    transition={transition}
                    src={hero_image_back} alt="" className='hero-image-back'>
                </motion.img>
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
            </div>
        </div>
    )
}

export default Hero
