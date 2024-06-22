import React from "react";
import linkedinLogo from '../../logo/linkedin.png';
import whatsapp from '../../logo/whatsapp.png';
import instalogo from '../../logo/instagram.png';
import github from '../../logo/github.png';
import './SocialLinks.css'

const SocialLinks = () => {
    return (
        <div className='links'>
            <a href="https://www.linkedin.com/in/lay-balar-688719281/" target="_blank" rel="noopener noreferrer">
                <div className="social-logo-wrapper1">
                    <img src={linkedinLogo} alt="LinkedIn" className="social-logo" />
                </div>
            </a>
            
            <a href="https://www.instagram.com/_.lay._189/" target="_blank" rel="noopener noreferrer">
                <div className="social-logo-wrapper2">
                    <img src={instalogo} alt="Instagram" className="social-logo" />
                </div>
            </a>
            
            <a href="https://wa.me/919106007498/" target="_blank" rel="noopener noreferrer">
                <div className="social-logo-wrapper3">
                    <img src={whatsapp} alt="WhatsApp" className="social-logo" />
                </div>
            </a>

            <a href="https://github.com/LayBalar2311/" target="_blank" rel="noopener noreferrer">
                <div className="social-logo-wrapper4">
                    <img src={github} alt="Github" className="social-logo"/>
                </div>
            </a>
            
        </div>
    )
}

export default SocialLinks;
