import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

const Contact = () => {
    const gmailComposeLink = "https://mail.google.com/mail/?view=cm&fs=1&to=lay.balar05@gmail.com&su=&body=";

    return (
        <div className="contact">
            <p className="headingContact">Contact</p>
            <div className="contantContact">
                <div className="contact-item">
                    <FontAwesomeIcon icon={faPhone} className="icon" />
                    <p>+91-9106007498</p>
                </div>
                <div className="contact-item">
                    <FontAwesomeIcon icon={faEnvelope} className="icon" />
                    <a href={gmailComposeLink} target="_blank" rel="noopener noreferrer" className="email-link">
                  <p>lay.balar05@gmail.com</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
