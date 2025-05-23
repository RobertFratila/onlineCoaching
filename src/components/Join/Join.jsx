// import React, {useRef} from "react";
import './Join.css';
// import emailjs from '@emailjs/browser'

const Join = () => {
    // const form= useRef()

    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs.sendForm('service_06z8z5o', 'template_24w53gj', form.current, 'cHauahn-fP-dkksDr')
    //         .then((result) => {
    //             console.log(result.text);
    //         }, (error) => {
    //             console.log(error.text);
    //         }
    //     );
    // }
    return (
        <div className="Join" id="join-us">
            <div className="left-j">
                <hr />
                <div>
                    <span className="stroke-text">READY TO</span>
                    <span> LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY</span>
                    <span className="stroke-text"> WITH ME?</span>
                </div>
            </div>
            <div className="right-j">
                <button
                    className="btn btn-j"
                    onClick={() =>
                        window.open(
                            'https://calendar.app.google/gBhEtyTZx1VnoVe37',
                            '_blank'
                        )
                    }
                >
                    Book Your Free Consultation Now
                </button>
            </div>
        </div>
    )
}

export default Join