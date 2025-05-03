import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Header from './util/header.jsx';
import ProjectsCard from './util/projectsCard.jsx';
import { useParams } from 'react-router-dom';
import me from '../assets/gif/moving-me.gif'

const Contact = () => {
  const {type} = useParams()
  return (
    <div className='bg-primary w-full min-h-svh relative'>
      <div className="sm:h-[85px] h-[65px] w-full">
        <Header type={type} />
      </div>
      <div className='flex w-full h-full sm:flex-row flex-col  justify-center  pb-20'>
        <div className='active:animate-bounceScale hover:animate-bounceScale relative opacity-70  lg:w-[60%] w-full  h-full md:pl-5  text-white'>
          <img src={me} className=' relative md:-top-20  w-full  fades object-cover' alt="" />
        </div>
        <div className='relative sm:w-1/2  h-full md:pl-5 sm:pt-10 p-5 w-full text-white fades '>
          <b className='text-[35px] border-b-[2px] border-accent pb-2'>Let's Talk</b><br /><br />
          <p>Need an expert? or Let's have a coffee? you are more than welcome to leave me a message on my socials and we will be in touch shortly.</p>
          <div className='flex flex-wrap gap-5 py-5 sm:text-[35px] text-[30px]'>
            <a href=""><i className="cursor-pointer z-20 hover:scale-115 active:scale-115 hover:text-accent ease duration-300 fa-brands fa-github"></i></a>
            <a href=""><i className="cursor-pointer z-20 hover:scale-115 active:scale-115 hover:text-accent ease duration-300 fa-brands fa-facebook"></i></a>
            <a href=""><i className="cursor-pointer z-20 hover:scale-115 active:scale-115 hover:text-accent ease duration-300 fa-brands fa-facebook-messenger"></i></a>
            <a href=""><i className="cursor-pointer z-20 hover:scale-115 active:scale-115 hover:text-accent ease duration-300 fa-brands fa-linkedin"></i></a>
          </div><br />
          <a target="blank" href="https://mail.google.com/mail/u/1/?fs=1&tf=cm&source=mailto&su=SUBJECT&to=canadatofer@gmail.com&body" className=' hover:bg-accent active:border:none hover:border-none active:bg-accent ease duration-300  border px-4 py-2 rounded-md'>Send me an Email</a>
        </div>
      </div>
    </div>
  )
}

export default Contact