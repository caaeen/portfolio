import React, { forwardRef } from 'react';

const BlogsCard = forwardRef(({ title, body, link }, ref) => {
  return (
    <div
      ref={ref}
      className="bg-secondary rounded-md shadow-md min-h-[100px] relative p-3 hover:animate-bounceScale active:animate-bounceScale"
    >
      <div className="absolute -top-3 -right-2">
        <a href={link} target="_blank" rel="noopener noreferrer" aria-label="Medium">
          <i className="absolute opacity-20 animate-ping fa-brands fa-medium bg-white text-accent rounded-full px-2 py-2.5"></i>
          <i className="fa-brands fa-medium bg-accent text-white rounded-full px-2 py-2.5"></i>
        </a>
      </div>

      <div className="text-white pr-5 text-left flex flex-col gap-2 items-start">
        <b className="text-base sm:text-lg">{title}</b>
        <p className="text-gray-100/40 sm:text-comp text-mb">{body}</p>
        <br />
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-2 sm:text-comp text-lp border-b border-accent"
        >
          Medium
        </a>
      </div>
    </div>
  );
});

export default BlogsCard;
