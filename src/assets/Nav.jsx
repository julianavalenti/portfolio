import React from 'react'

const Nav = () => {
  return (
  
      <div>
        {/* menu */}
        <input
          id="close-menu"
          className="close-menu"
          type="checkbox"
          aria-label="close-menu"
          role="button"
        />
        <label
          className="close-menu-label"
          htmlFor="close-menu"
          title="close menu"
        ></label>
        <div className="barra">
          <div className="menu-centro">
            <div className="barra-conteiner centralizador">
              
              <nav className="direita">
                <ul>
                  <li>
                    <a href="#inicio">Home</a>
                  </li>
                  <li>
                    <a href="#sobre-mim">About Me</a>
                  </li>
                  <li>
                    <a href="#projetos">Projects</a>
                  </li>
                  <li>
                    <a href="#habilidades">Skills</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  };
  


export default Nav