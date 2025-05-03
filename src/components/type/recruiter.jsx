import React from 'react'
import Header from '../util/header.jsx'
import Banner from '../util/banner.jsx'
import { Link } from 'react-router-dom'
import Card from '../util/card.jsx'

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
            Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus itaque iusto corporis ex porro, fuga officiis corrupti expedita rem laboriosam, velit dolore quaerat ad cumque architecto nostrum delectus odio rerum? ipsum dolor sit, amet consectetur adipisicing elit. Corrupti ea obcaecati impedit tempora sunt eveniet vel enim quos assumenda voluptas sint, incidunt eum veritatis debitis quisquam fugit. In, omnis rem?
          </p>
        </div>

        <div className='z-30 w-full px-5 flex gap-5 pb-10'>
          <Link
            to=""
            className='hover:bg-gray-400/70 active:bg-gray-400/70 ease duration-200 bg-white text-primary border-white py-2 sm:px-5 px-3 sm:text-[17px] text-[15px] font-bold rounded'
          >
            <i className="fa-solid fa-play mr-2"></i> Resume
          </Link>

          <a
            target="blank"
            href='https://www.linkedin.com/in/christopher-canada-638492272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            className='hover:bg-gray-400/50 active:bg-gray-400/50 ease duration-200 bg-[rgba(128,128,128,0.5)] text-white border-white py-2 sm:px-5 px-3 sm:text-[17px] text-[15px] font-bold rounded'
          >
            <i className="fa-solid fa-circle-info mr-2"></i> LinkedIn
          </a>
        </div>
      </div>

      <div className='w-full h-full px-5 text-white pt-15'>
        <div>
          <b className='text-2xl'>Today's Top Picks For Recruiter</b><br />
          <div className='relative text-white max-w-vw flex grow-0 shrink-0 gap-5 overflow-x-auto scrollbar-hide py-4 pb-10'>
            <Card
              title={"Projects"}
              img_url={"https://images.pexels.com/photos/1809644/pexels-photo-1809644.jpeg?cs=srgb&dl=pexels-cmonphotography-1809644.jpg&fm=jpg"}
            />
            <Card
              title={"Skills"}
              img_url={"https://plus.unsplash.com/premium_photo-1701069017776-1d6363816001?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGFyayUyMGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D"}
            />
            <Card
              title={"Blogs"}
              img_url={"https://images.unsplash.com/photo-1535587566541-97121a128dc5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3VpdGFyfGVufDB8fDB8fHww"}
            />
          </div>
        </div>
      </div>

      <div className='w-full h-full px-5 text-white pt-15'>
        <div>
          <b className='text-2xl'>Continue Watching For Recruiter</b><br />
          <div className='relative text-white max-w-vw flex grow-0 shrink-0 gap-5 overflow-x-auto py-4 pb-10'>
            <Card title={"Projects"} img_url={""} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recruiter
