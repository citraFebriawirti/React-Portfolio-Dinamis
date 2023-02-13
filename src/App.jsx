import { useState } from 'react'
import './App.css'
import About from './Component/About'
import Education from './Component/Education'
import Footer from './Component/Footer'
import Home from './Component/Home'
import Navbar from './Component/Navbar'
import Project from './Component/Project'
import Skill from './Component/Skill'


function App() {
  return (
    <div className="App">
     <Navbar/>
      <Home id={1} />
      <About id={2} />
      <Education id={3} />
      <Skill id={4} />
      <Project id={5} />
      <Footer/>
    </div>
  )
}

export default App
