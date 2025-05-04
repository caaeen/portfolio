import React from 'react'
import {gsap} from 'gsap'
import Header from './util/header.jsx'
import SkillCard from './util/skillCard.jsx'
import { useParams } from 'react-router-dom';
import ScrollTop from './util/scrollTop.jsx'
const Skills = () => {
const { type } = useParams();


  return (
    <div className='w-full relative min-h-svh bg-primary'> 
        < ScrollTop/>
        <div className='sm:h-[85px] h-[65px] w-full'>
            <Header type={type}/>
        </div>
        <div className=' w-full h-full sm:p-5 py-5 px-2 flex flex-col items-center justify-center gap-8'>
            
            

            <div className='relative sm:w-[80%] w-full p-2 text-white text-center'>
                <b className="intro sm:text-2xl text-[18px] border-b-[2px] border-accent pb-3">Front-End Development</b>
                <div className='mt-10 flex flex-wrap gap-5 justify-center'>
                    <SkillCard logo={"fa-brands fa-react"} name={"React"} subtitle={"Front-end Framework"}/>
                    <SkillCard logo={"fa-brands fa-html5"} name={"HTML 5"} subtitle={"Structure Builder"}/>
                    <SkillCard logo={"fa-brands fa-css3-alt"} name={"CSS"} subtitle={"Structure Designer"}/>
                    <SkillCard logo={"fa-brands fa-css3"} name={"Tailwind CSS"} subtitle={"CSS Framework"}/>
                   
                </div>
            </div>

            <div className='relative sm:w-[80%] w-full p-2 text-white text-center'>
                <b className="intro sm:text-2xl text-[18px] border-b-[2px] border-accent pb-3">Back-End Development</b>
                <div className='mt-10 flex flex-wrap gap-5 justify-center'>
                    <SkillCard logo={"fa-brands fa-php"} name={"PHP"} subtitle={"Server-Side Scripting Language"}/>
                    <SkillCard logo={"fa-brands fa-node-js"} name={"Node JS"} subtitle={"JavaScript Runtime Environment"}/>
                    <SkillCard logo={"fa-brands fa-python"} name={"DJango"} subtitle={"Python Framework"}/>
                    <SkillCard logo={"fa-brands fa-laravel"} name={"Laravel"} subtitle={"PHP Framework"}/>
                </div>
            </div>

            <div className='relative sm:w-[80%] w-full p-2 text-white text-center'>
                <b className="intro sm:text-2xl text-[18px] border-b-[2px] border-accent pb-3">Designer's Tool</b>
                <div className='mt-10 flex flex-wrap gap-5 justify-center'>
                    <SkillCard logo={"fa-solid fa-cannabis"} name={"Canva"} subtitle={"Design Prototyping"}/>
                    <SkillCard logo={"fa-solid fa-p"} name={"Photoshop"} subtitle={"Photo Manipulation and Graphic Design"}/>
                    <SkillCard logo={"fa-solid fa-film"} name={"Filmora"} subtitle={"Video Editing Tool"}/>
                    <SkillCard logo={"fa-brands fa-figma"} name={"Figma"} subtitle={"Website Design Prototyping"}/>
                    <SkillCard logo={"fa-brands fa-mdb"} name={"DB Diagram"} subtitle={"Database Designer | Visuals"}/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Skills