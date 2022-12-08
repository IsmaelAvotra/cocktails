import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'

import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'

function App() {
  Aos.init({
    duration: 2500,
    delay: 400,
  })

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='cocktail/:id' element={<SingleCocktail />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
