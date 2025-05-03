import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Visitor from './components/type/visitor.jsx'
import Skills from './components/skills.jsx'
import Projects from './components/projects.jsx'
import Contacts from './components/contacts.jsx'
import Blogs from './components/blogs.jsx'
import Experience from './components/experience.jsx'
import Recruiter from './components/type/recruiter.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Browse from './components/browse.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    elementError: <div>Error 404</div>,
  },
  {
    path: "/browse",
    element: <Browse/>,
    elementError: <div>Error 404</div>,
  },
  {
    path: "/profile/visitor",
    element: <Visitor/>,
    elementError: <div>Error 404</div>,
  },
  {
    path: "/profile/recruiter",
    element: <Recruiter/>,
    elementError: <div>Error 404</div>,
  },
  {
    path: "/profile/skills/:type",
    element: <Skills/>,
    elementError: <div>Error 404</div>,
  },
  {
    path: "/profile/projects/:type",
    element: <Projects/>,
    elementError: <div>Error 404</div>,
  },
  {
    path: "/profile/contacts/:type",
    element: <Contacts/>,
    elementError: <div>Error 404</div>,
  },
  {
    path: "/profile/blogs/:type",
    element: <Blogs/>,
    elementError: <div>Error 404</div>,
  },
  {
    path: "/profile/experience/:type",
    element: <Experience/>,
    elementError: <div>Error 404</div>,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
