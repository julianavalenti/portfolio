import React from 'react';

const Welcome = () => {
  return (
    <section id="inicio">
      <div className="altura-ajuste">
        <div className="inicio centralizador">
          <div className="ajustador organizador">
            <div className="apresentacao">
              <p className="descricao">
                Hello, I am  <br />
                <span className="meu-nome">Juliana Valenti.</span>
                <br />
                Software Engineer
              </p>
              <br />
              <div className="linkedin">
                <a
                  href="https://www.linkedin.com/in/juliana-valenti/"
                  target="_blank"
                  className="link"
                >
                  Linkedin
                </a>
              </div>
            </div>
            <div className="avatar">
              <img
                className="avatar2"
                src="/avatar.JPG" 
                alt="Juliana Valenti photo" width="200px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
