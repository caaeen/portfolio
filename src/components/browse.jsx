import {React, useState, useRef } from 'react';
import splash from '../assets/icon/caen.png';
import red from '../assets/icon/red.jpg';
import yellow from '../assets/icon/yellow.jpg';
import blue from '../assets/icon/blue.jpg';
import green from '../assets/icon/green.jpg';

import sf from '../assets/sf/netflix.mp3';
import { useNavigate, Link } from 'react-router-dom';

const Browse = () => {
 
  return (
    <div className='w-full h-svh bg-primary flex flex-col sm:gap-5 gap-3 justify-center items-center'>
        <p className='fades text-white sm:text-5xl text-2xl'>Who's Wacthing</p>
        <div className='md:w-[60%] w-[90%] grid place-items-center gap-3 sm:grid-cols-4 grid-cols-2  p-5'>

          <Link to="/profile/visitor" className="fades flex flex-col justify-center items-center gap-3 cursor-pointer ">
            <img src={red} className="sm:w-[170px] w-[130px] rounded-[5px] hover:border-[2px] ease-in duration-50" alt="" />
            <p className="text-white sm:text-[20px] text-[16px]">Visitor</p>
          </Link>

          <Link to="/profile/recruiter" className="fades flex flex-col justify-center items-center gap-3 cursor-pointer ">
            <img src={yellow} className="sm:w-[170px] w-[130px] rounded-[5px] hover:border-[2px] ease-in duration-50" alt="" />
            <p className="text-white sm:text-[20px] text-[16px]">Recruiter</p>
          </Link>


          <Link to="/profile/seeker" className="fades flex flex-col justify-center items-center gap-3 cursor-pointer ">
            <img src={blue} className="sm:w-[170px] w-[130px] rounded-[5px] hover:border-[2px] ease-in duration-50" alt="" />
            <p className="text-white sm:text-[20px] text-[16px]">Seeker</p>
          </Link>


          <Link to="/profile/developer" className="fades flex flex-col justify-center items-center gap-3 cursor-pointer ">
            <img src={green} className="sm:w-[170px] w-[130px] rounded-[5px] hover:border-[2px] ease-in duration-50" alt="" />
            <p className="text-white sm:text-[20px] text-[16px]">Developer</p>
          </Link>

          

        </div>
    </div>
  )
}

export default Browse