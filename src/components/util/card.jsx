import React from 'react'
import c1 from '../../assets/img/c1.jpg'
import { Link } from 'react-router-dom'

const Card = ({ title, img_url, urls}) => {
  if (img_url === "") {
    img_url = c1;
  }

  return (
    <Link to={urls} className='intro rounded-[5px] overflow-hidden relative flex items-center justify-center text-white min-w-[290px] max-w-[290px] min-h-[190px]'>
      <img
        src={img_url}
        className=" hover:scale-130 active:scale-125 hover:blur-[1px] duration-300 transition-transform rounded absolute cursor-pointer object-cover"
        alt=""
      />
      <div
        className='pointer-events-none z-10 font-bold hover:underline active:text-gray-300 transition-colors duration-200'
      >
        {title}
      </div>
    </Link>
  )
}

export default Card
