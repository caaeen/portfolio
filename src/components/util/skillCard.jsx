import {React, useEffect} from 'react'
import gsap from 'gsap'
import SplitType from 'split-type'

import { useRef } from 'react'
const SkillCard = ({logo, name, subtitle}) => {
  const skillCard = useRef(null);
  useEffect(() => {
    const title = skillCard.current;
    const split = new SplitType(title, { types: 'words, chars' });
  
    
    gsap.fromTo(
      title.querySelectorAll('.char'),
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        delay: 0.1,
        duration: 0.4,
        ease: 'power2.out',
      }
    );
  
 
    return () => split.revert();
  }, []);
  
  //logo = "fa-brands fa-react";
  return (
    <div ref={skillCard} className='items-center hover:scale-105 ease duration-300 intro cursor-pointer shadow-md rounded-[5px] grow-1 min-w-[100px] max-w-[180px] min-h-[150px] sm:text-comp text-mb p-2 pt-5 flex flex-col gap-4 bg-secondary pb-4'>
        <i className={` text-accent text-[30px] fades ${logo}`}></i>
        <b className=' text-comp'>{name}</b>
        <p  className='skill-title text-gray-300/80 fades'>{subtitle}</p>
    </div>
  )
}

export default SkillCard