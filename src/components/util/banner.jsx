import React from 'react';
import sheldon from '../../assets/gif/sheldon.gif';

const Banner = ({ type }) => {
  let banner;

  switch (type) {
    case 'visitor':
      banner = sheldon;
      break;
    case 'recruiter':
      banner = 'https://giffiles.alphacoders.com/221/221794.gif';
      break;
    case 'seeker':
      banner = "https://i.pinimg.com/originals/6a/2b/26/6a2b261728dc6d7a3f46b690eb1955b9.gif";
      break;
    case 'developer':
      banner = 'https://giffiles.alphacoders.com/223/223039.gif';
      break;
    default:
      banner = 'https://collinreviews.wordpress.com/wp-content/uploads/2016/09/giphy-41.gif?w=750';
      break;
  }

  return (
    <img
      src={banner}
      className="scale-x-[-1] object-cover w-full h-full absolute"
      alt="Banner"
    />
  );
};

export default Banner;
