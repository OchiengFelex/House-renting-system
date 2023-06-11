import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import HouseListing from './pages/HouseListing'
import Notfound from './pages/Notfound'
import SignUp from './pages/SignUp'
import AboutUS from './pages/AboutUS'

function App() {
  

  return (
    <>
     <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path ="/aboutus" element={<AboutUS/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/houselisting' element={<HouseListing/>}/>
            <Route path='*' element={<Notfound/>}/>
        </Routes>
        <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
