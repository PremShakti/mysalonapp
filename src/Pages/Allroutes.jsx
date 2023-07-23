import React from 'react'
import { Route, Routes } from 'react-router-dom'

import About from './About'
import Contact from './Contact'
import Gallery from './Gallery'
import Services from './Services'
import Hero from './Hero'

const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Hero/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/gallery' element={<Gallery/>} />
            <Route path='/services' element={<Services/>} />
        </Routes>
      
    </div>
  )
}

export default Allroutes
