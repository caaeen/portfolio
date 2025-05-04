import React from 'react'
import Header from '../util/header.jsx'
import Banner from '../util/banner.jsx'
import { Link } from 'react-router-dom'
import Card from '../util/card.jsx'
import Resume from '../../assets/pdf/christopher_canada.pdf'
const Recruiter = () => {
  return (
    <div className='w-full min-h-svh bg-primary'>
      <Header type={"developer"} />
      <div className='relative w-full min-h-[75vh] overflow-hidden flex flex-col justify-end'>
        <Banner type={"developer"} />
        <div className='z-30 text-white w-full max-h-[40vh] px-5 pb-5'>
          <b className='sm:text-4xl text-2xl '>Christopher Canada - Web Developer</b><br />
          <div className='mb-3 w-full'></div>
          <p className='sm:w-[70%] sm:text-lp text-mb font-bold'>
          Hi, I'm Christopher Canda, an undergraduate of Bachelor's of Science in Information Technology.
          Throughout my education, I have focused on developing myself to be a work-oriented leader.
          My proficiency and experience in building projects such as machine learning and information
          management systems have given me the opportunity to strengthen my 
          analytical and problem-solving skills, as well as effective collaboration skills with my team.
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
          <b className='text-2xl'>Today's Top Picks For Developer</b><br />
          <div className='relative text-white max-w-vw flex grow-0 shrink-0 gap-5 overflow-x-auto scrollbar-hide py-4 pb-10'>
            <Card urls={'/profile/projects/developer'} title={"Projects"} img_url={"https://images.unsplash.com/photo-1536599018102-9f803c140fc1?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
            <Card urls={'/profile/blogs/developer'} title={"Blogs"} img_url={"https://images.unsplash.com/photo-1502209524164-acea936639a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
            <Card urls={'/profile/skills/developer'} title={"Skills"} img_url={"https://images.unsplash.com/photo-1505832018823-50331d70d237?q=80&w=2108&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
           
            <Card urls={'/profile/contacts/developer'} title={"Contacts"} img_url={"https://images.unsplash.com/photo-1474552226712-ac0f0961a954?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
          </div>
        </div>
      </div>

      <div className='w-full h-full px-5 text-white pt-15'>
        <div>
          <b className='text-2xl'>Continue Watching For Developer</b><br />
          <div className='relative text-white max-w-vw flex grow-0 shrink-0 gap-5 overflow-x-auto py-4 pb-10'>
          <Card urls={'/profile/experience/developer'} title={"Experience"} img_url={"https://images.unsplash.com/photo-1465232377925-cce9a9d87843?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recruiter
