import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Header from './util/header.jsx';
import ScrollTop from './util/scrollTop.jsx'
import ProjectsCard from './util/projectsCard.jsx';
import { useParams } from 'react-router-dom';
import pokemon from '../assets/projects/pokemon.jpg'
import todo from '../assets/projects/todo.png'
import ecovariety from '../assets/projects/EcoVariety.png'
import cerms from '../assets/projects/cerms.png'
import inventease from '../assets/projects/inventease.png'
import phytosense from '../assets/projects/phytosense.png'
import blink from '../assets/projects/blink.png'
import cssinventory from '../assets/projects/cssinventory.png'
const Projects = () => {
  const { type } = useParams();
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardRefs.current,
      {
        y: 50,
        opacity: 0,
        scale: 0.95,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.1, 
      }
    );
  }, []);

  return (
    <div className="bg-primary w-full min-h-svh">
      < ScrollTop/>
      <div className="sm:h-[85px] h-[65px] w-full">
        <Header type={type} />
      </div>
      <div className="w-full h-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-5 gap-4">
          <ProjectsCard pic={"https://adespresso.com/wp-content/uploads/2022/08/facebook-business-page.jpg"} github={""} link={"https://pacebooks.netlify.app/"} icons={["fa-brands fa-react", "fa-brands fa-css3"]} tools={[ "React", "Tailwind CSS"]} body={"Static Facebook Page"} title={"Facebook"} ref={(el) => (cardRefs.current[0] = el)} />
          <ProjectsCard pic={pokemon} github={"https://github.com/caaeen/pokemon"} link={"https://pocaenmon.netlify.app/"} icons={["fa-brands fa-react", "fa-brands fa-css3", "fa-brands fa-html5"]} tools={["React", "Tailwind CSS", "HTML"]} body={"My second project using react js. Allows for multiplayer battle. (JSON Server not yet hosted)"} title={"Pokedex + Multiplayer Battle"} ref={(el) => (cardRefs.current[1] = el)} />
          <ProjectsCard pic={todo} github={"https://github.com/caaeen/Todo"} link={"https://todo-abc.netlify.app/"} icons={["fa-brands fa-react", "fa-brands fa-css3", "fa-brands fa-html5"]} tools={["React", "Tailwind CSS", "HTML"]} body={"My first project using react js. Datas are being saved locally."} title={"To-Do List"} ref={(el) => (cardRefs.current[2] = el)} />
          <ProjectsCard pic={phytosense} github={""} link={"https://phytosense.site"} icons={["fa-brands fa-php","fa-solid fa-database", "fa-brands fa-html5", "fa-brands fa-css3-alt","fa-brands fa-node-js","fa-brands fa-square-js", ]} tools={["PHP", "Mysql", "HTML", "CSS", "Tensorflow JS", "Javascript"]} body={"Machine learning project that identifies crop disease in real-time. "} title={"Phytosense: Crop Disease Diagnostic Platform"} ref={(el) => (cardRefs.current[3] = el)} />
          <ProjectsCard pic={cerms} github={"#"} link={""} icons={["fa-brands fa-php", "fa-solid fa-database", "fa-brands fa-html5", "fa-brands fa-css3-alt","fa-brands fa-square-js"]} tools={["PHP", "Mysql", "HTML", "CSS", "JS"]} body={"MIS-Software Engineering project. Tracks borrowed tools and tools in general. "} title={"College of Engineering Resource Management System"} ref={(el) => (cardRefs.current[4] = el)} />
          <ProjectsCard pic={ecovariety} github={""} link={""} icons={["fa-brands fa-php", "fa-solid fa-database", "fa-brands fa-html5", "fa-brands fa-css3-alt","fa-brands fa-square-js"]} tools={["PHP", "Mysql", "HTML", "CSS", "JS"]} body={"EcoVariety is an e-com platform for selling plants. Paypal integrated."} title={"EcoVariety - E-commerce "} ref={(el) => (cardRefs.current[5] = el)} />
          <ProjectsCard pic={inventease} github={""} link={""} icons={["fa-brands fa-php", "fa-solid fa-database", "fa-brands fa-html5", "fa-brands fa-css3-alt","fa-brands fa-square-js", "fa-brands fa-python"]} tools={["PHP", "Mysql", "HTML", "CSS", "JS", "DJango"]} body={"An inventory management system. 3rd year project for advance database management system 1. Developed in PHP and DJango"} title={"Inventease"} ref={(el) => (cardRefs.current[6] = el)} />
          <ProjectsCard pic={blink} github={""} link={""} icons={["fa-brands fa-php", "fa-solid fa-database", "fa-brands fa-html5", "fa-brands fa-css3-alt","fa-brands fa-square-js"]} tools={["PHP", "Mysql", "HTML", "CSS", "JS"]} body={"Blood Bank Management System - 2nd yr project. Tracks donor and blood supplies."} title={"Blood Link - BLink"} ref={(el) => (cardRefs.current[7] = el)} />
          <ProjectsCard pic={cssinventory} github={""} link={""} icons={[]} tools={["C++", "MS Access"]} body={"First project for database management - IMS to tracks the departments supply"} title={"CCS - Supply Monitoring System"} ref={(el) => (cardRefs.current[8] = el)} />
      
      </div>
    </div>
  );
};

export default Projects;
