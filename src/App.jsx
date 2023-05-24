import { useState } from 'react'
import Welcome from './assets/pages/Welcome'
import AboutMe from './assets/pages/AboutMe'
import Projects from './assets/pages/Projects'
import Skills from './assets/pages/Skills'
import Nav from './assets/Nav'
import Footer from './assets/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Nav/>
        <Welcome/>
        <AboutMe/>
        <Projects/>
        <Skills/>
        <Footer/>
      </div>
    
    </>
  )
}

export default App
