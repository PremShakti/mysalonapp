import React from 'react'
import { Route, Routes } from 'react-router-dom'

import About from './About'
import Contact from './Contact'
import Gallery from './Gallery'
import Services from './Services'
import Hero from './Hero'
import Testimonialspage from './Testimonialspage'
import Admin from './Admin'
import Login from './Login'
import Privetrout from '../components/Privetrout'

const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Hero/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/gallery' element={<Gallery/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='/testimonial' element={<Testimonialspage/>} />
            <Route path='/admin' element={ <Privetrout>
              <Admin/>
            </Privetrout> } />
            <Route path='/login' element={<Login/>} />


        </Routes>
      
    </div>
  )
}

export default Allroutes
