import React from 'react'
import {Link} from 'react-router-dom'
const Sidebar = ({sideBar, setSidebar, type}) => {
  return (
    <>
        {sideBar && 
            <div onClick={()=>setSidebar(false)} className='bg-primary/40 w-full fixed z-60 h-svh'>
                <div onClick={(e) => e.stopPropagation()} className='sidebar w-[200px] fixed z-60 h-full text-white bg-black right-0 px-3 py-5'>
                    <i onClick={()=>setSidebar(false)} className="fa-solid fa-xmark cursor-pointer hover:text-accent ease duration-200"></i>
                    <div className='flex flex-col gap-3'><br />
                        <Link to="/browse" className='flex items-center gap-4 hover:bg-gray-500/30  cursor-pointer p-2 rounded'><i className="fa-solid fa-house"></i> Home</Link>
                        <Link to={`/profile/skills/${type}`} className='flex items-center gap-4 hover:bg-gray-500/30  cursor-pointer p-2 rounded'><i className="fa-solid fa-screwdriver-wrench"></i> Skills</Link>
                        <Link to={`/profile/projects/${type}`} className='flex items-center gap-4 hover:bg-gray-500/30  cursor-pointer p-2 rounded'><i className="fa-solid fa-list-check"></i> Projects</Link>
                        <Link to={`/profile/contacts/${type}`} className='flex items-center gap-4 hover:bg-gray-500/30  cursor-pointer p-2 rounded'><i className="fa-solid fa-phone"></i> Contacts</Link>
                    </div>
                </div>
            </div>
        }
    </>
  )
}

export default Sidebar