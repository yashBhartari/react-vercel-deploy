import React from 'react'
import NavBar from './components/NavBar'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Contact from  './pages/Contact'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
      <NavBar/>
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/>

    </>
  )
}

export default App

