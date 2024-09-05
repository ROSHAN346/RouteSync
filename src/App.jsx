
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import About from './components/about/About'
import User from './components/User'
import Updates from './components/Update/Updates'
import Pass from './components/service/Pass'
import Contact from './components/contact/Contact'


// import 'aos/dist/aos.css';


import { createBrowserRouter, RouterProvider } from 'react-router-dom'



function App() {
  const router = createBrowserRouter([
    {
      path :"/",
      element: <><Navbar/><Home/></>
    },
    {
      path: "/login",
      element: <><Navbar/><Login/></>
    },
    {
      path: "/about",
      element: <><Navbar/><About/></>
    },
    {
      path: "/user/:username",
      element: <><Navbar/><User/></>
    },
    {
      path: "/update",
      element: <><Navbar/><Updates/></>
    },
    {
      path: "/service",
      element: <><Navbar/><Pass/></>
    },
    {
      path: "/contact",
      element: <><Navbar/><Contact/></>
    }
  ])
  

  return (
    <>
      
      <RouterProvider router = {router} />
    </>
  )
}

export default App
