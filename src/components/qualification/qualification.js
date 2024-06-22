import React from "react";
import './Qualification.css';

const Qualification = () => {
    return (
        <div className="Qualification">
            <p className="headingQualification">Qualification</p>
            <div className="contantQalification">
                <div className="clg">
                    <div className="year">
                        <p className="saal">2022-2026<br/>[B.Tech CSE]</p>
                        <p className="grade">CGPA: 8.78</p> {/* Choose the correct CGPA */}
                    </div>
                    <div className="details">
                        <a href="https://utu.ac.in/AMTICS/" target="_blank" rel="noopener noreferrer">
                            <p className="clgname">Asha M. Tarsadia Institute of Computer Science and Technology</p>
                        </a>
                        <a href="https://utu.ac.in/" target="_blank" rel="noopener noreferrer">
                            <p className="uniname">UKA TARASADIA UNIVERSITY, GUJARAT</p>
                        </a>
                    </div>
                </div>
                <div className="school">
                    <div className="year">
                        <p className="saal">2022</p>
                        <p className="grade">HSC<br/>[GSEB]</p>
                    </div>
                    <div className="details">
                        <p className="clgname">P. P. SAVANI VIDHYABHAVAN, SURAT, GUJARAT</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Qualification;
