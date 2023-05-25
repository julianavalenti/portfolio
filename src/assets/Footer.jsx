import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-conteiner">
        <div className="contato-creditos">
          E-mail: add email
          <br />
          developed by Juliana Valenti <br />
          Imagem do south park: sp-studio.de <br />
        </div>
        <div className="icons">
          <div className="links links1">
            <a href="https://github.com/julianavalenti" target="_blank" rel="noopener noreferrer">
              <img
                className="transparente"
                src={'/assets/img/githubff.svg'}
                alt="github-icon"
              />
            </a>
          </div>
          <div className="links links2">
            <a href="https://www.linkedin.com/in/juliana-valenti/" target="_blank" rel="noopener noreferrer">
              <img
                className="transparente"
                src={ '/assets/img/linkedinff.svg'}
                alt="linkedin-icon"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
