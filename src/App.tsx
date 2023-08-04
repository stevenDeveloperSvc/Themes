import { useState } from 'react'
import { Route, Router } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Content from './Components/Content'
import Header from './Components/Header'
import Projects from './Components/Projects'
import Footer from './Components/Footer'

function App() {

  return (
    <>
    <Header/>
    <Navbar/>
    <Hero/>
    <Content/>
     <Projects/> 
    <Footer/>
    </>
  )
}

export default App
