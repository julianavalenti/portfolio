import React, { useState } from 'react';
import Welcome from './assets/pages/Welcome';
import AboutMe from './assets/pages/AboutMe';
import Projects from './assets/pages/Projects';
import Skills from './assets/pages/Skills';
import Nav from './assets/Nav';
import Footer from './assets/Footer';

import './assets/css/footer.css';
import './assets/css/skills.css';
import './assets/css/nav.css';
import './assets/css/projects.css';
import './assets/css/aboutme.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Nav />
        <Welcome name="Juliana Valenti"/>
        <AboutMe />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </>
  );
}

export default App;
