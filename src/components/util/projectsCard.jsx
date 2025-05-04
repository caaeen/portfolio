import React, { forwardRef, useState, useEffect } from 'react';

const ProjectsCard = forwardRef(({ github, link, icons, tools, title, body, pic }, ref) => {
  const [linkLock, setLinkLock] = useState(false);
  const [gitLock, setGitLock] = useState(false);

  useEffect(() => {
    if (link !== "" && github !== "") {
      setLinkLock(true);
      setGitLock(true);
    } else if (link === "" && github !== "") {
      setLinkLock(false);
      setGitLock(true);
    } else if (link !== "" && github === "") {
      setLinkLock(true);
      setGitLock(false);
    } else {
      setLinkLock(false);
      setGitLock(false);
    }
  }, [link, github]);

  return (
    <div
      ref={ref}
      className="focus:animate-bounceOnce hover:animate-bounceOnce active:animate-bounceOnce transform opacity-0 translate-y-14 overflow-hidden shadow-md rounded-[5px] bg-secondary text-white pb-7"
    >
      <div className="h-[150px] relative flex gap-4 justify-center text-[23px] items-center">
        <div className="w-full flex hover:text-white active:text-white hover:backdrop-blur-sm active:backdrop-blur-sm hover:bg-black/30 active:bg-black/30 ease duration-300 text-transparent z-20 h-[150px] relative gap-4 justify-center text-[23px] items-center">
          {gitLock && (
            <a href={github} target='blank'>
              <i className="p-link animate-pulse hover:scale-110 active:scale-110 ease duration-100 cursor-pointer fa-brands fa-github"></i>
            </a>
          )}
          {linkLock && (
            <a href={link} target='blank'>
              <i className="p-link animate-pulse hover:scale-110 active:scale-110 ease duration-100 cursor-pointer fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          )}
        </div>
        <img
          src={pic}
          className="absolute cursor-pointer sm:hover:scale-108 hover:scale-103 active:scale-103 ease duration-300 max-h-[150px] min-h-[150px] w-full object-cover"
          alt=""
        />
      </div>
      <div className="p-4 flex flex-col gap-4 pt-4">
        <b>{title}</b>
        <p className="sm:text-lp text-mb">{body}</p>
        <div className="flex flex-wrap gap-3">
          {tools.map((tool, i) => (
            <p
              key={i}
              className="hover:scale-110 active:scale-110 hover:text-accent active:text-accent ease duration-150 px-3 py-1 rounded-[80px] bg-tertiary cursor-default shadow-md"
            >
              {icons[i] && <i className={icons[i]}></i>}
              {" " + tool}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
});

export default ProjectsCard;
