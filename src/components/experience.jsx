import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../assets/style/experience.css'
import ScrollTop from './util/scrollTop.jsx'
import Header from './util/header.jsx';
import ExperienceCard from './util/experienceCard.jsx';
import { useParams } from 'react-router-dom';
import me from '../assets/gif/moving-me.gif'
const Experience = () => {
    const {type} = useParams()
  return (
    <div className='bg-primary w-full min-h-svh relative'>
      < ScrollTop/>
        <div className="sm:h-[85px] h-[65px] w-full">
            <Header type={type} />
        </div>
        <div className='text-white text-center py-5'>
          <b className="intro sm:text-2xl text-[18px] border-b-[2px] border-accent pb-3">Work Experience</b>
        </div>
        <div className='px-5 timeline fades relative w-full min-h-svh flex flex-col gap-y-15 text-white  mt-5 pb-55'>
          {/* I will fix this later making the component reusable */}
          <ExperienceCard/>
        </div>
    </div>
  )
}

export default Experience