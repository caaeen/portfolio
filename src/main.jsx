import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Visitor from './components/type/visitor.jsx'
import Skills from './components/skills.jsx'
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
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
