import React, { useState, useEffect } from "react";
import './Testimonials.css';
import { testimonialsData } from "../../data/testimonialsData";
import leftArrrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import { motion } from 'framer-motion'

const Testimonials = () => {
    const [selected, setSelected] = useState(0);
    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
    
    const tLength = testimonialsData.length;

    // Handle screen resize
    useEffect(() => {
        const handleResize = () => {
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Determine device type
    const isMobile = screenSize.width <= 768;

    // Dynamic transition based on screen size
    const getTransition = () => {
        if (isMobile) {
            return { type: 'spring', duration: 2 };
        }
        return { type: 'spring', duration: 3 };
    };

    const transition = getTransition();

    // Handle navigation with keyboard
    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'ArrowLeft') {
                handlePrevious();
            } else if (event.key === 'ArrowRight') {
                handleNext();
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [selected]);

    const handlePrevious = () => {
        setSelected(selected === 0 ? tLength - 1 : selected - 1);
    };

    const handleNext = () => {
        setSelected(selected === tLength - 1 ? 0 : selected + 1);
    };

    // Auto-play functionality (optional)
    useEffect(() => {
        const autoPlay = setInterval(() => {
            handleNext();
        }, 9000); // Change testimonial every 8 seconds

        return () => clearInterval(autoPlay);
    }, [selected]);

    return (
        <div className="testimonials">
            <div className="left-t">
                <span>Testimonials</span>
                <span className="stroke-text">What they say</span>
                <motion.span 
                    className="stroke-text"
                    key={`plan-${selected}`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={transition}
                >
                    {testimonialsData[selected].planType}
                </motion.span>
                <motion.span
                    key={`review-${selected}`}
                    initial={{ opacity: 0, x: isMobile ? 0 : -100, y: isMobile ? 20 : 0 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0, x: isMobile ? 0 : 100, y: isMobile ? -20 : 0 }}
                    transition={transition}
                >
                    {testimonialsData[selected].review}
                </motion.span>
                <motion.span
                    key={`name-${selected}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ ...transition, delay: 0.2 }}
                >
                    <span style={{ color: 'var(--orange)' }}>
                        {testimonialsData[selected].name}
                    </span>{" "}
                    - {testimonialsData[selected].status}
                </motion.span>
            </div>
            
            <div className="right-t">
                {!isMobile && (
                    <>
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ ...transition, duration: 2 }}
                            whileInView={{ opacity: 1, x: 0 }}
                        />
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ ...transition, duration: 2 }}
                            whileInView={{ opacity: 1, x: 0 }}
                        />
                    </>
                )}
                
                <motion.img 
                    key={`image-${selected}`}
                    initial={{ 
                        opacity: 0, 
                        x: isMobile ? 0 : 100,
                        y: isMobile ? 50 : 0,
                        scale: isMobile ? 0.8 : 1
                    }}
                    animate={{ 
                        opacity: 1, 
                        x: 0, 
                        y: 0,
                        scale: 1
                    }}
                    exit={{ 
                        opacity: 0, 
                        x: isMobile ? 0 : -100,
                        y: isMobile ? -50 : 0,
                        scale: isMobile ? 0.8 : 1
                    }}
                    transition={transition}
                    src={testimonialsData[selected].image} 
                    alt={`${testimonialsData[selected].name} testimonial`}
                    loading="lazy"
                />
                
                <div className="arrows">
                    <img 
                        onClick={handlePrevious}
                        src={leftArrrow} 
                        alt="Previous testimonial"
                        style={{ 
                            cursor: 'pointer',
                            opacity: 0.8,
                            transition: 'opacity 0.2s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.opacity = 1}
                        onMouseLeave={(e) => e.target.style.opacity = 0.8}
                    />
                    <img 
                        onClick={handleNext}
                        src={rightArrow} 
                        alt="Next testimonial"
                        style={{ 
                            cursor: 'pointer',
                            opacity: 0.8,
                            transition: 'opacity 0.2s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.opacity = 1}
                        onMouseLeave={(e) => e.target.style.opacity = 0.8}
                    />
                </div>

                {/* Progress indicators for mobile */}
                {isMobile && (
                    <div style={{
                        display: 'flex',
                        gap: '0.5rem',
                        justifyContent: 'center',
                        marginTop: '1rem'
                    }}>
                        {testimonialsData.map((_, index) => (
                            <div
                                key={index}
                                onClick={() => setSelected(index)}
                                style={{
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    backgroundColor: selected === index ? 'var(--orange)' : '#666',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.3s ease'
                                }}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Testimonials;