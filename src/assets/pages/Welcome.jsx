import React from 'react';
import NameTypingComponent from './NameTypingComponent';

const Welcome = () => {
  return (
    <section id="inicio">
      <div className="altura-ajuste">
        <div className="inicio centralizador">
          <div className="ajustador organizador">
            <div className="apresentacao">
              <p className="descricao">
                Hello, I am <br />
                <NameTypingComponent /> {/* Render NameTypingComponent here */}
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
            <div className="hover-rotate">
              <img
                className="hover-rotate"
                src="/me.png"
                alt="Juliana Valenti photo"
                width="200px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
