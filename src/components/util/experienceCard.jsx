import React from 'react'

const ExperienceCard = () => {
  return (
    <>
    <div className='blocks sm:w-1/2 min-h-[200px] flex justify-end '>

        <div className='hover:animate-bounceOnce relative md:w-[70%] w-full p-2 rounded-md bg-secondary shadow-md flex flex-col'>
            <b>1st year College</b>
            <i className="ic z-20 absolute sm:-right-5 sm:left-auto -left-4 hidden top-[40%] fa-solid fa-school bg-white text-white sm:py-2.5 sm:px-2 py-1.5 px-1 rounded-[50%]"></i>
        </div>
    </div>


    <div className='blocks sm:w-1/2 min-h-[200px] sm:ml-[50%] flex'>
        <div className='hover:animate-bounceOnce relative md:w-[70%] w-full p-2 rounded-md bg-secondary shadow-md sm:text-end'>
            <b>1st year College</b>
            <i className="ic z-30 absolute sm:-left-4  sm:right-auto -left-4 hidden top-[40%] fa-solid fa-school bg-white text-white sm:py-2.5 sm:px-2 py-1.5 px-1 rounded-[50%]"></i>
        </div>
    </div>

    
    

    </>
  )
}

export default ExperienceCard