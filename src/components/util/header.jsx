import React from 'react'
import { useState, useRef, useEffect } from 'react';
import splash from '../../assets/icon/caen.png';
import sf from '../../assets/sf/netflix.mp3';
import { useNavigate, Link } from 'react-router-dom';
import Sidebar from './sidebar.jsx'
import red from '../../assets/icon/red.jpg';
import yellow from '../../assets/icon/yellow.jpg';
import blue from '../../assets/icon/blue.jpg';
import green from '../../assets/icon/green.jpg';

const Header = ({type}) => {
    const [sidebar, setSidebar] = useState(false);
    const headerRef = useRef(null);
    let profile;
    switch (type){
        case "visitor":
            profile = red;
            break;
        case "recruiter":
            profile = yellow;
            break;
        case "seeker":
            profile = blue;
            break;
        case "developer":
            profile = green;
            break;
        default:
            profile = red;
            break;
    }

    useEffect(() => {
        let lastScroll = 0;
    
        const scrolls = () => {
          const header = headerRef.current;
          const currentScroll = window.pageYOffset;
    
          if (!header) return;
    
          if (currentScroll <= 0) {
            header.classList.remove("scroll-down");
          }
    
          if (currentScroll > lastScroll && !header.classList.contains("scroll-down")) {
            header.classList.add("scroll-down");
          } 
          if (currentScroll < lastScroll && header.classList.contains("scroll-down")) {
            header.classList.add("scroll-up");
          }
    
          lastScroll = currentScroll;
        };
    
        window.addEventListener("scroll", scrolls);
    
        return () => {
          window.removeEventListener("scroll", scrolls);
        };
      }, []);


  return (
    <div className='w-full z-50'>
        <header ref={headerRef} className="w-full z-40 fixed scroll-up sm:h-[85px] h-[65px] flex items-center ease-in duration-300  ">
           {/* <div className="w-full  z-20 fixed h-[85px] mask-b-from-0% mask-b-to-60% bg-black ..."></div> */}
            <img onClick={(e)=>window.location.href='/'} src={splash} className='cursor-pointer sm:w-[290px] w-[180px] ml-4'  alt="" />
            <div className='sm:flex hidden z-30 w-full px-7  gap-4 '>
                <Link to="/browse" className='hover:text-accent ease duration-200 text-white'>Home</Link>
                <Link to={`/profile/skills/${type}`} className='hover:text-accent ease duration-200 text-white'>Skills</Link>
                <Link to="" className='hover:text-accent ease duration-200 text-white'>Projects</Link>
                <Link to="" className='hover:text-accent ease duration-200 text-white'>Contacts</Link>
            </div>
            <div  className='mr-4 flex gap-3 items-center sm:pr-5 pr-1 w-full justify-end'>
                <Link to='/browse'><img src={profile} className="sm:w-[40px] w-[30px] border border-white rounded-[50px]" alt="" /></Link>
                <i onClick={()=>setSidebar(true)} className="fa-solid text-white fa-bars cursor-pointer hover:text-accent ease duration-200"></i>
            </div>
        </header>
        <Sidebar sideBar={sidebar} setSidebar={setSidebar}/>
    </div>
  )
}

export default Header