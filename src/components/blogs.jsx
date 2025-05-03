import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Header from './util/header.jsx';
import BlogsCard from './util/blogsCard.jsx';
import { useParams } from 'react-router-dom';
import me from '../assets/gif/moving-me.gif'
const Blogs = () => {
    const {type} = useParams()
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
    <div className='bg-primary w-full min-h-svh relative'>
        <div className="sm:h-[85px] h-[65px] w-full">
            <Header type={type} />
        </div>
        <div className='py-4 w-full h-full text-center flex flex-col items-center'>
            <b className="fades text-white sm:text-2xl text-[18px] border-b-[2px] border-accent pb-3">Read My Blog Post</b>
            <div className=' h-full relative w-full gap-7 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 p-8 py-10 overflow-hidden'>
                
                <BlogsCard ref={(el) => (cardRefs.current[0] = el)} title={"First Database Management Project"} link={""} body={"Second year as an Information Technology Student"}/>
                <BlogsCard ref={(el) => (cardRefs.current[1] = el)} title={""} link={""} body={""}/>
                <BlogsCard ref={(el) => (cardRefs.current[2] = el)} title={""} link={""} body={""}/>
                <BlogsCard ref={(el) => (cardRefs.current[3] = el)} title={""} link={""} body={""}/>
                <BlogsCard ref={(el) => (cardRefs.current[4] = el)} title={""} link={""} body={""}/>
                <BlogsCard ref={(el) => (cardRefs.current[5] = el)} title={""} link={""} body={""}/>
                <BlogsCard ref={(el) => (cardRefs.current[6] = el)} title={"My Journey in IT"} link={"https://medium.com/@canadatofer/my-journey-in-it-3413ed5680b7"} body={"Why did I choose Information Technology"}/>

            </div>
        </div>
    </div>
  )
}

export default Blogs