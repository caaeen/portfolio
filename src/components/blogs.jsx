import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Header from './util/header.jsx';
import BlogsCard from './util/blogsCard.jsx';
import ScrollTop from './util/scrollTop.jsx'
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
      < ScrollTop/>
        <div className="sm:h-[85px] h-[65px] w-full">
            <Header type={type} />
        </div>
        <div className='py-4 w-full h-full text-center flex flex-col items-center'>
            <b className="fades text-white sm:text-2xl text-[18px] border-b-[2px] border-accent pb-3">Read My Blog Post</b>
            <div className=' h-full relative w-full gap-7 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 p-8 py-10 overflow-hidden'>
                <BlogsCard ref={(el) => (cardRefs.current[0] = el)} title={"Expecting Nothing to Something"} link={"https://medium.com/@phytosense98/expecting-nothing-to-something-b139b33e970a"} body={"This experience taught us that sometimes, just showing up is enough to change everything. We’re incredibly grateful—to our adviser, to the faculty, to our teammates, and even to our own anxious selves—for pushing through. From expecting nothing… to walking away with something truly unforgettable."}/>
                
                <BlogsCard ref={(el) => (cardRefs.current[2] = el)} title={"Progress Behind the Screens UGAAI"} link={"https://medium.com/@canadatofer/defending-phytosense-the-project-that-taught-us-more-than-code-d3c52e453afa"} body={"As part of our On-the-Job Training (OJT) at WMSU United General Alumni Association, Inc. (UGAAI), we’ve been diving deep into development work that’s not only challenging us technically, but also showing us how our skills can support actual institutional needs."}/>
                <BlogsCard ref={(el) => (cardRefs.current[3] = el)} title={"UGAAI Progress Reports"} link={"https://medium.com/@phytosense98/first-second-ugaai-report-84aac2d84096"} body={"Over the last two weeks, my team and I have been fully immersed in bringing a real-world system to life at the WMSU United General Alumni Association, Inc. (UGAAI) as part of our OJT. It’s been a rewarding grind — transforming designs into responsive interfaces, implementing core functionalities, and refining user experiences from both frontend and backend perspectives."}/>
                <BlogsCard ref={(el) => (cardRefs.current[1] = el)} title={"Phytosense: The Project That Taught Us More Than Code"} link={"https://medium.com/@phytosense98/defending-phytosense-the-project-that-taught-us-more-than-code-72ff522433fd"} body={"After months of sleepless nights, debugging marathons, design tweaks, and countless team huddles — the day finally came: Defense Day. We stood in front of our panel, ready to present the result of all our hard work — Phytosense, our intelligent crop disease detection and management platform."}/>
                <BlogsCard ref={(el) => (cardRefs.current[4] = el)} title={"My First OJT Experience: Building a CMS for a Real Organization"} link={"https://medium.com/@canadatofer/my-first-ojt-experience-building-a-cms-for-a-real-organization-9c11d1419596"} body={"Starting my first On-the-Job Training (OJT) was both exciting and intimidating. "}/>
                <BlogsCard ref={(el) => (cardRefs.current[5] = el)} title={"Knowing When to Pause: Why It’s Okay to Let a Project Go (For Now)"} link={"https://medium.com/@canadatofer/knowing-when-to-pause-why-its-okay-to-let-a-project-go-for-now-e9046c5c497b"} body={"In a perfect world, every commission ends in a smooth handoff, a happy client, and a shiny addition to your portfolio. But the truth? Sometimes, despite your best efforts, you just can’t finish the project."}/>
                <BlogsCard ref={(el) => (cardRefs.current[6] = el)} title={"My Journey in IT"} link={"https://medium.com/@canadatofer/my-journey-in-it-3413ed5680b7"} body={"Technology evolves every day — new tools, new frameworks, smarter systems — and I love the challenge of keeping up. It keeps me on my toes and constantly learning, which means I’m always growing both personally and professionally.Why did I choose Information Technology"}/>

            </div>
        </div>
    </div>
  )
}

export default Blogs