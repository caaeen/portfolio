import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Header from './util/header.jsx';
import ProjectsCard from './util/projectsCard.jsx';
import { useParams } from 'react-router-dom';

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
      <div className="sm:h-[85px] h-[65px] w-full">
        <Header type={type} />
      </div>
      <div className="w-full h-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-5 gap-4">
          <ProjectsCard github={"#"} link={"#"} icons={["fa-brands fa-react"]} tools={["React", "la"]} body={"Lorem"} title={"Phytosense: Crop Disease Diagnostic Platform"} ref={(el) => (cardRefs.current[0] = el)} />
          <ProjectsCard github={""} link={""} icons={["fa-brands fa-react", "fa-brands fa-react"]} tools={["PHP", "React"]} body={"Lorem"} title={"Phytosense: Crop Disease Diagnostic Platform"} ref={(el) => (cardRefs.current[1] = el)} />
          <ProjectsCard github={""} link={""} icons={["fa-brands fa-react", "fa-brands fa-react"]} tools={["PHP", "React"]} body={"Lorem"} title={"Phytosense: Crop Disease Diagnostic Platform"} ref={(el) => (cardRefs.current[2] = el)} />
          <ProjectsCard github={""} link={""} icons={["fa-brands fa-react", "fa-brands fa-react"]} tools={["PHP", "React"]} body={"Lorem"} title={"Phytosense: Crop Disease Diagnostic Platform"} ref={(el) => (cardRefs.current[3] = el)} />
          <ProjectsCard github={""} link={""} icons={["fa-brands fa-react", "fa-brands fa-react"]} tools={["PHP", "React"]} body={"Lorem"} title={"Phytosense: Crop Disease Diagnostic Platform"} ref={(el) => (cardRefs.current[4] = el)} />
          <ProjectsCard github={""} link={""} icons={["fa-brands fa-react", "fa-brands fa-react"]} tools={["PHP", "React"]} body={"Lorem"} title={"Phytosense: Crop Disease Diagnostic Platform"} ref={(el) => (cardRefs.current[5] = el)} />
          <ProjectsCard github={""} link={""} icons={["fa-brands fa-react", "fa-brands fa-react"]} tools={["PHP", "React"]} body={"Lorem"} title={"Phytosense: Crop Disease Diagnostic Platform"} ref={(el) => (cardRefs.current[6] = el)} />
          <ProjectsCard github={""} link={""} icons={["fa-brands fa-react", "fa-brands fa-react"]} tools={["PHP", "React"]} body={"Lorem"} title={"Phytosense: Crop Disease Diagnostic Platform"} ref={(el) => (cardRefs.current[7] = el)} />
      
      </div>
    </div>
  );
};

export default Projects;
