import React from 'react'
import Header from '../util/header.jsx'
import Banner from '../util/banner.jsx'
import { Link } from 'react-router-dom'
import Card from '../util/card.jsx'
import Resume from '../../assets/pdf/christopher_canada.pdf'
const Recruiter = () => {
  return (
    <div className='w-full min-h-svh bg-primary'>
      <Header type={"recruiter"} />
      <div className='relative w-full min-h-[75vh] overflow-hidden flex flex-col justify-end'>
        <Banner type={"recruiter"} />
        <div className='z-30 text-white w-full max-h-[40vh] px-5 pb-5'>
          <b className='sm:text-4xl text-2xl '>Christopher Canada - Web Developer</b><br />
          <div className='mb-3 w-full'></div>
          <p className='sm:w-[70%] sm:text-lp text-mb font-bold'>
          As an Information Technology graduate, I aim to contribute my technical expertise and administrative capabilities
—including planning, presenting, and organizing—to the growth of the company I become part of. I consistently
take initiative and have led projects from planning to completion through hard work and results. My leadership,
adaptability, work ethic, and eagerness for continuous professional growth have enabled me to achieve goals
without compromise.

          </p>
        </div>
        <div className='z-30 w-full px-5 flex gap-5 pb-10'>
          <button onClick={() => window.open(Resume, '_blank')} className='hover:bg-gray-400/70 active:bg-gray-500/70 ease duration-200 bg-white text-primary border-white py-2 sm:px-5 px-3 sm:text-[17px] text-[15px] font-bold rounded'>
            <i className="fa-solid fa-play mr-2"></i> Resume
          </button>

          <a
            target="blank"
            href='https://www.linkedin.com/in/christopher-canada-638492272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            className='hover:bg-gray-400/50 active:bg-gray-500/50 ease duration-200 bg-[rgba(128,128,128,0.5)] text-white border-white py-2 sm:px-5 px-3 sm:text-[17px] text-[15px] font-bold rounded'>
            <i className="fa-solid fa-circle-info mr-2"></i> LinkedIn
          </a>
        </div>
      </div>

      <div className='w-full h-full px-5 text-white pt-15'>
        <div>
          <b className='text-2xl'>Today's Top Picks For Recruiter</b><br />
          <div className='relative text-white max-w-vw flex grow-0 shrink-0 gap-5 overflow-x-auto scrollbar-hide py-4 pb-10'>
            <Card urls={'/profile/projects/recruiter'} title={"Projects"} img_url={"https://images.unsplash.com/photo-1505699261378-c372af38134c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
            <Card urls={'/profile/skills/recruiter'} title={"Skills"} img_url={"https://images.unsplash.com/photo-1461301214746-1e109215d6d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
            <Card urls={'/profile/experience/recruiter'} title={"Experience"} img_url={"https://images.unsplash.com/photo-1430876988766-1be68caef0e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
            <Card urls={'/profile/contacts/recruiter'} title={"Contacts"} img_url={"https://images.unsplash.com/photo-1491466424936-e304919aada7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
          </div>
        </div>
      </div>

      <div className='w-full h-full px-5 text-white pt-15'>
        <div>
          <b className='text-2xl'>Continue Watching For Recruiter</b><br />
          <div className='relative text-white max-w-vw flex grow-0 shrink-0 gap-5 overflow-x-auto py-4 pb-10'>
            <Card urls={'/profile/blogs/recruiter'} title={"Blogs"} img_url={"https://images.unsplash.com/photo-1451481086097-f6a15d5f8d18?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recruiter
