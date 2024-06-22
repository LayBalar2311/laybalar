import React, { useEffect, useRef } from "react";
import './Projects.css';
import videoFile from './Wbsite.mp4';
import videoFile2 from './diaryapp.mp4';
import videoFile3 from './login.mp4';
import github from '../../logo/github.png';


const Projects = () => {
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useEffect(() => {
        const project1 = project1Ref.current;
        const project2 = project2Ref.current;
        const project3 = project3Ref.current;

        if (project1) {
            project1.classList.add('animate');
        }

        if (project2) {
            project2.classList.add('animate');
        }

        if (project3) {
            project3.classList.add('animate');
        }
    }, []);

    return (
        <div className="Projects">
            <p className="headingProject">Projects</p>
            <div className="contentProject">
                <div className="project" ref={project1Ref}>
                    <div className="video-container">
                        <video controls width="100%" className="noControllers" autoPlay muted loop>
                            <source src={videoFile} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <p className="hovertext">A E-Commerce website with admin panel.<br/> Technology used: PHP, MYSQL Database</p>
                    </div>
                </div>
                <div className="project" ref={project2Ref}>
                    <div className="video-container">
                        <video controls width="100%" className="noControllers" autoPlay muted loop>
                            <source src={videoFile2} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <p className="hovertext">Diary and Reminder Application. <br/>Technology used: Flutter, Dart, SQLite Database</p>
                    </div>
                </div>
                <div className="project" ref={project3Ref}>
                    <div className="video-container">
                        <video controls width="100%" className="noControllers" autoPlay muted loop>
                            <source src={videoFile3} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <p className="hovertext">Login OTP Authentication Application. <br/>Technology used: Flutter, Dart, Firestore Database</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
