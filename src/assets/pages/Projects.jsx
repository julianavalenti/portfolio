import React from 'react';

const Projects = () => {
  return (
    <section id="projetos">
      <div className="centralizador projetos">
        <h2 className="project">Projects</h2>
        
        <div className="projetos-itens">
          
        <a href="https://julianavalenti.github.io/project_1/" target="_blank" rel="noopener noreferrer">
        <img src={'/bugbusters.gif'} alt="Bug Busters" width='200px'/>
      </a>
      <a href="https://github.com/julianavalenti/hostcities" target="_blank" rel="noopener noreferrer">
        <img src={'/worldcup.gif'} alt="World Cup" width='200px'/>
      </a>
      <a href="https://gorgeous-fox-950b17.netlify.app/" target="_blank" rel="noopener noreferrer">
        <img src={'/networking.gif'} alt="Networking" width='200px'/>
      </a>
          

          {/* <div className="pro">
            <div className="breve"><p>EM BREVE</p></div>
          </div>
          <div className="pro">
            <div className="breve"><p>EM BREVE</p></div>
          </div>
          <div className="pro escondido">
            <div className="breve"><p>EM BREVE</p></div>
          </div>
          <div className="pro escondido">
            <div className="breve"><p>EM BREVE</p></div>
          </div>
          <div className="pro escondido">
            <div className="breve"><p>EM BREVE</p></div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
