import React, { useEffect } from 'react';
import logo from './logo.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';


import Navbar from './components/navbar/navbar';
import Experience from './components/experience/experience';
import Contact from './components/contact/contact';
import About from './components/about/about';
import Qualification from './components/qualification/qualification';
import Projects from './components/projects/projects';
import Thankyou from './components/thankyou/thankyou';
import Skills from './components/skills/skills';
import PreLoad from './components/preoreder';
import SocialLinks from './components/SocialLinks/socialLinks';
import BackToTopButton from './components/BackToTopButton';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });

    // Set the title when the component mounts
    document.title = "Lay Balar's Portfolio";

    // Optionally, you can reset the title when the component unmounts
    return () => {
      document.title = "Lay Balar";
    };
  }, []);

      // Set the title when the component mounts
    

  return (
    <div className="App">
      <PreLoad/>
          
          <Navbar />
          <About data-aos="fade-right" />
          <Qualification data-aos="fade-left" />
          <Experience data-aos="fade-right" />
          <Projects data-aos="fade-left" />
          <Skills data-aos="fade-right"/>
          <Contact data-aos="fade-left" />
          <SocialLinks data-aos="fade-right"/>
          <Thankyou  data-aos="fade-left"/>
          <BackToTopButton/>
    </div>
  );
}

export default App;
