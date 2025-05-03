import React from 'react'
import c1 from '../../assets/img/c1.jpg'
import { Link } from 'react-router-dom'

const Card = ({ title, img_url }) => {
  if (img_url === "") {
    img_url = c1;
  }

  return (
    <div className='intro rounded-[5px] overflow-hidden relative flex items-center justify-center text-white min-w-[290px] max-w-[290px] min-h-[190px]'>
      <img
        src={img_url}
        className="hover:scale-130 active:scale-125 duration-300 transition-transform rounded absolute cursor-pointer object-cover"
        alt=""
      />
      <Link
        to=""
        className='z-10 font-bold hover:underline active:text-gray-300 transition-colors duration-200'
      >
        {title}
      </Link>
    </div>
  )
}

export default Card
