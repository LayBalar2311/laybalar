import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-scroll';
import './navbar.css';
import AOS from 'aos'; // Import AOS here
import lay from '../../img.png';
import MessageBox from '../Messagebox/msg.js';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [messageBoxOpen, setMessageBoxOpen] = useState(false);
    const [typedText, setTypedText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    const textsToType = ["Flutter Developer ", "App Developer  ", ];
    const typingSpeed = 200;
    const erasingSpeed = 100;
    const newTextDelay = 3000;

    useEffect(() => {
        const type = () => {
            if (charIndex < textsToType[textIndex].length) {
                setTypedText(prev => prev + textsToType[textIndex].charAt(charIndex));
                setCharIndex(prev => prev + 1);
            } else {
                setIsTyping(false);
                setTimeout(() => setIsTyping(true), newTextDelay);
            }
        };

        const erase = () => {
            if (charIndex > 0) {
                setTypedText(prev => prev.substring(0, prev.length - 1));
                setCharIndex(prev => prev - 1);
            } else {
                setTextIndex(prev => (prev + 1) % textsToType.length);
                setIsTyping(true);
            }
        };

        if (isTyping) {
            const typingTimeout = setTimeout(type, typingSpeed);
            return () => clearTimeout(typingTimeout);
        } else {
            const erasingTimeout = setTimeout(erase, erasingSpeed);
            return () => clearTimeout(erasingTimeout);
        }
    }, [charIndex, isTyping, textIndex, textsToType]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = useCallback(() => {
        setMenuOpen(false);
    }, [setMenuOpen]);

    const openMessageBox = () => {
        setMessageBoxOpen(true);
    };

    const closeMessageBox = () => {
        setMessageBoxOpen(false);
    };

    return (
        <div className="navbar">
            <div className="items-container">
                <div className={`items ${menuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><Link to="About" smooth={true} duration={1000} onClick={closeMenu}>About</Link></li>
                        <li><Link to="experience" smooth={true} duration={1000} onClick={closeMenu}>Experience</Link></li>
                        <li><Link to="Projects" smooth={true} duration={1000} onClick={closeMenu}>Projects</Link></li>
                        <li><Link to="skills" smooth={true} duration={1000} onClick={closeMenu}>Skills</Link></li>
                        <li><Link to="contact" smooth={true} duration={1000} onClick={closeMenu}>Contact</Link></li>
                    </ul>
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                    ☰
                </div>
            </div>
            <div className='overlay' onClick={closeMenu} style={{ display: menuOpen ? 'block' : 'none' }}></div>
            <div className='withbtn'>
                <div className="lay">
                    <img src={lay} alt="Profile" />
                </div>
                <div className="name-container">
                    <p className="name">I'm <span className="break">Lay Balar</span></p>
                    <div className="typing-animation">
                        <h1 className="effect-wrapper"><span id="typed">{typedText}</span><span className="cursor">&nbsp;</span></h1>
                    </div>
                    <button className='contact-btn' onClick={openMessageBox}>Contact Me</button>
                </div>
            </div>
            {messageBoxOpen && <MessageBox closeMessageBox={closeMessageBox} />}
        </div>
    );
};

export default Navbar;
