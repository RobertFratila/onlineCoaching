import React, { useEffect, useState } from "react";
import './Reasons.css';
import image1 from "../../assets/image1.jpeg";
import image2 from "../../assets/image2.jpeg";
import image3 from "../../assets/image3.jpeg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";

const Reasons = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false); // Reset when leaving the section
                }
            });
        }, {
            threshold: 0.1, // Trigger when 20% of the section is visible
        });

        const section = document.getElementById("reasons");
        if (section) {
            observer.observe(section);
        }

        return () => {
            if (section) {
                observer.unobserve(section);
            }
        };
    }, [])

    return (
        <div className="reasons" id='reasons'>
            <div className={`left-r ${isVisible ? "visible" : ""}`}>
                <div className="image-grid">
                    <img src={image1} alt="" className="img-large"/>
                    <div className="img-column">
                        <img src={image2} alt="" className="img-medium"/>
                        <img src={image3} alt="" className="img-small"/>
                    </div>
                    <div className="img-column">
                        <img src={image5} alt="" className="img-small"/>
                        <img src={image4} alt="" className="img-medium"/>  
                    </div>
                </div>
            </div>

            <div className={`right-r ${isVisible ? 'visible' : ''}`}>
                <span>About me</span>
                <div>
                    <span className="stroke-text">Who</span>
                    <span> am I?</span>
                </div>

                <div className="details-r">
                    <div>
                        <span>My journey into fitness started during the COVID-19 pandemic. Before that, I was deeply involved in performance football, but when the world shut down, so did my sport. Instead of giving up, I adapted. I started training at home, following a structured workout and diet plan, and pushing my limits in a new way.</span>
                    </div>
                    <div>
                        <span>That’s when I met a trainer—a woman who saw potential in me and encouraged me to take this passion to the next level: bodybuilding. From that moment, everything changed. I committed to the gym every single morning at 6 AM, before heading to high school. The discipline, the grind, the feeling of constant progress—it all fueled me.</span>
                    </div>
                    <div>
                        <span>Then came my first competition. The adrenaline, the challenge, and ultimately, the thrill of winning made me realize this was where I truly belonged. From there, my career skyrocketed. I earned multiple medals, became a World Champion, and was selected for Romania’s national bodybuilding team. For the past three years, I’ve been named Junior of the Year, a testament to my dedication and results.</span>
                    </div>
                    <div>
                        <span>But my journey isn’t just about competing—it’s about helping others achieve their best selves. That’s why I became a certified fitness trainer and nutritionist. I don’t just teach theory—I’ve lived it. I know exactly what it takes to gain muscle, lose fat, and build unshakable discipline because I’ve done it myself.</span>
                    </div>
                    <div>
                        <span>Now, I want to share that knowledge with you. Whether you're just starting or looking to take your fitness to the next level, I’m here to guide you.</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reasons;
