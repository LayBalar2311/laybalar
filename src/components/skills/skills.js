import React from "react";
import './skills.css';


import clogo from '../../logo/c logo.png';
import androidStudio from '../../logo/icons8-android-studio-48.png';
import ios from '../../logo/icons8-apple-logo-48.png';
import bootstrap from '../../logo/icons8-bootstrap-logo-48.png';
import cssLogo from '../../logo/icons8-css-logo-48.png';
import cpp from '../../logo/icons8-c++-48.png';
import firestore from '../../logo/icons8-cloud-firestore-48.png';
import flutter from '../../logo/icons8-flutter-48.png';
import htmlLogo from '../../logo/icons8-html-logo-48.png';
import java from '../../logo/icons8-java-logo-48.png';
import jsLogo from '../../logo/icons8-javascript-48.png';
import mysql from '../../logo/icons8-mysql-logo-48.png';
import nodejs from '../../logo/icons8-node-js-48.png';
import python from '../../logo/icons8-python-48.png';
import php from '../../logo/icons8-php-logo-50.png';
import swift from '../../logo/icons8-swift-logo-48.png';
import ubuntu from '../../logo/icons8-ubuntu-26.png';
import vscode from '../../logo/icons8-visual-studio-code-2019-48.png';
import windows from '../../logo/Windows-Symbol.png';
import reactLogo from '../../logo/icons8-react-40.png';
import xcode from '../../logo/icons8-xcode-logo-48.png';

const Skills = () => {
    return (
        <div className="skills">
            <p className="skills-heading">Skills</p>
            <div className="contentskills">
                <div className="skill-section">
                    <h3>Front-end</h3>
                    <div className="skill-items">
                        <div className="skill-item">
                            <img src={htmlLogo} alt="HTML" />
                            <p>HTML</p>
                        </div>
                        <div className="skill-item">
                            <img src={cssLogo} alt="CSS" />
                            <p>CSS</p>
                        </div>
                        <div className="skill-item">
                            <img src={jsLogo} alt="JavaScript" />
                            <p>JavaScript</p>
                        </div>
                        <div className="skill-item">
                            <img src={reactLogo} alt="React" />
                            <p>React</p>
                        </div>
                        <div className="skill-item">
                            <img src={bootstrap} alt="Bootstrap" />
                            <p>Bootstrap</p>
                        </div>
                    </div>
                </div>

                <div className="skill-section">
                    <h3>Back-end</h3>
                    <div className="skill-items">
                        <div className="skill-item">
                            <img src={nodejs} alt="Node.js" />
                            <p>Node.js</p>
                        </div>
                        <div className="skill-item">
                            <img src={php} alt="PHP" />
                            <p>PHP</p>
                        </div>
                        
                        
                    </div>
                </div>

                <div className="skill-section">
                    <h3>Database</h3>
                    <div className="skill-items">
                        <div className="skill-item">
                            <img src={mysql} alt="MySQL" />
                            <p>MySQL</p>
                        </div>
                        <div className="skill-item">
                            <img src={firestore} alt="Firestore" />
                            <p>Firestore</p>
                        </div>
                    </div>
                </div>

                <div className="skill-section">
                    <h3>Programming Languages</h3>
                    <div className="skill-items">
                        <div className="skill-item">
                            <img src={clogo} alt="C" />
                            <p>C</p>
                        </div>
                        <div className="skill-item">
                            <img src={cpp} alt="C++" />
                            <p>C++</p>
                        </div>
                        <div className="skill-item">
                            <img src={python} alt="Python" />
                            <p>Python</p>
                        </div>
                        <div className="skill-item">
                            <img src={java} alt="Java" />
                            <p>Java</p>
                        </div>
                        
                    </div>
                </div>

                <div className="skill-section">
                    <h3>Mobile Application</h3>
                    <div className="skill-items">
                        <div className="skill-item">
                            <img src={androidStudio} alt="Android Studio" />
                            <p>Android Studio</p>
                        </div>
                        <div className="skill-item">
                            <img src={flutter} alt="Flutter" />
                            <p>Flutter</p>
                        </div>
                      
                        <div className="skill-item">
                            <img src={swift} alt="Swift" />
                            <p>Swift</p>
                        </div>
                        <div className="skill-item">
                            <img src={vscode} alt="VS Code" />
                            <p>VS Code</p>
                        </div>
                        <div className="skill-item">
                            <img src={xcode} alt="VS Code" />
                            <p>IOS xCode</p>
                        </div>
                    </div>
                </div>

                <div className="skill-section">
                    <h3>Operating System</h3>
                    <div className="skill-items">
                        <div className="skill-item">
                            <img src={windows} alt="Windows" />
                            <p>Windows</p>
                        </div>
                        <div className="skill-item">
                            <img src={ubuntu} alt="Ubuntu" />
                            <p>Ubuntu</p>
                        </div>
                        <div className="skill-item">
                            <img src={ios} alt="iOS" />
                            <p>iOS</p>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
