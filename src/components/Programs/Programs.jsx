import React from "react";
import './Programs.css';
import { programsData } from '../../data/programsData.js';
import RightArrow from '../../assets/rightArrow.png';
import {Link} from "react-scroll";

const Programs = () => {
    return (
        <div className="Programs" id="programs">
            <div className="programs-header">
                <span className='stroke-text'>Explore our</span>
                <span>Programs</span>
                <span className='stroke-text'>to shape you</span>
            </div>

            <div className="program-categories">
                {programsData.map((program, index) => (
                    <div className="category" key={index}>
                        <div className="img-heading">
                            {program.image && <img src={program.image} alt={program.heading} />}
                            <span>{program.heading}</span>
                        </div>
                        <span>{program.details}</span>
                        <div className="join-now">
                            <Link 
                                to="plans" 
                                smooth={true} 
                                duration={500} 
                                className="join-now-link"
                            >
                                <span>Join Now</span>
                                <img src={RightArrow} alt="Right Arrow" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Programs;
