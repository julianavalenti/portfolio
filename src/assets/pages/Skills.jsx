import React from 'react';
import SkillsIndex from './SkillsIndex';
import ScrollRevealComponent from './ScrollRevealComponent'; 


const Skills = () => {
  return (
    <section id="habilidades">
      <div className="centralizador">
        <div className="habilidades-pd">
          <h2 className="project">Skills</h2>
          <div className="skills-descricao">
            <div className="conteiner-skills">
              {/* Skill boxes */}
            </div>
            <div className="conteiner-descricao">
              <p className="texto-descricao">
                {/* Skill description */}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <SkillsIndex />
      <ScrollRevealComponent />
    </section>
  );
};

export default Skills;
