import React from 'react';

const SkillsIndex = () => {
  const sobreSkill = [
    '<p>HTML</p> <br> <p>É uma linguagem de marcação utilizada na construção de páginas na Web.</p> <br>',
    '<p>CSS</p> <br> <p>É um mecanismo para adicionar estilo a um documento web.</p> <br>',
    '<p>JavaScript</p> <br> <p>É uma linguagem de programação. Juntamente com HTML e CSS, é uma das três principais tecnologias da web.</p> <br>',
    '<p>ReactJS</p> <br> <p>O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.</p> <br>',
    '<p>Styled Components</p> <br> <p>É uma biblioteca (lib) que utiliza o conceito de CSS-in-JS, ou seja, que nos permite escrever códigos CSS dentro do Javascript.</p> <br>',
    '<p>Sass</p> <br> <p>É uma linguagem de folhas de estilo. Basicamente o Sass potencializa o CSS.</p> <br>',
    '<p>Git</p> <br> <p>É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software.</p> <br>',
    '<p>Github</p> <br> <p>É uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. </p> <br>',
  ];

  const dataInicio = [
    new Date(2021, 10, 1).getTime(),
    new Date(2021, 10, 1).getTime(),
    new Date(2022, 0, 1).getTime(),
    new Date(2022, 3, 1).getTime(),
    new Date(2022, 3, 1).getTime(),
    new Date(2022, 1, 1).getTime(),
    new Date(2021, 11, 1).getTime(),
    new Date(2021, 11, 1).getTime(),
  ];

  const dataHoje = new Date().getTime();

  const handleMouseOver = (index) => {
    let tempo = 'mês';
    let tempoDeExperiencia = Math.round(
      (dataHoje - dataInicio[index]) / (1000 * 60 * 60 * 24 * 30)
    );
    if (tempoDeExperiencia > 1) tempo = 'meses';
    const descricao = document.querySelector('.texto-descricao');
    descricao.innerHTML = `<p>${sobreSkill[index]} </p>`;
  };

  const handleMouseOut = () => {
    const descricao = document.querySelector('.texto-descricao');
    descricao.innerHTML =
      '/* Passe o mouse por cima de alguma habilidade para ler a descrição */';
  };

  return (
    <section id="habilidades">
      <div className="centralizador">
        <div className="habilidades-pd">
          <h2 className="project">Habilidades</h2>
          <div className="skills-descricao">
            <div className="conteiner-skills">
              <div
                className="html"
                onMouseOver={() => handleMouseOver(0)}
                onMouseOut={handleMouseOut}
              >
                <p className="nome-skill">HTML</p>
              </div>
              <div
                className="css"
                onMouseOver={() => handleMouseOver(1)}
                onMouseOut={handleMouseOut}
              >
                <p className="nome-skill">CSS</p>
              </div>
              <div
                className="javascript"
                onMouseOver={() => handleMouseOver(2)}
                onMouseOut={handleMouseOut}
              >
                <p className="nome-skill">JavaScript</p>
              </div>
              <div
                className="react"
                onMouseOver={() => handleMouseOver(3)}
                onMouseOut={handleMouseOut}
              >
                <p className="nome-skill">ReactJS</p>
              </div>
              <div
                className="styled"
                onMouseOver={() => handleMouseOver(4)}
                onMouseOut={handleMouseOut}
              >
                <p className="nome-skill">Styled Components</p>
              </div>
              <div
                className="sass"
                onMouseOver={() => handleMouseOver(5)}
                onMouseOut={handleMouseOut}
              >
                <p className="nome-skill">Sass</p>
              </div>
              <div
                className="git"
                onMouseOver={() => handleMouseOver(6)}
                onMouseOut={handleMouseOut}
              >
                <p className="nome-skill">Git</p>
              </div>
              <div
                className="github"
                onMouseOver={() => handleMouseOver(7)}
                onMouseOut={handleMouseOut}
              >
                <p className="nome-skill">Github</p>
              </div>
            </div>
            <div className="conteiner-descricao">
              <p className="texto-descricao">

              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsIndex;
