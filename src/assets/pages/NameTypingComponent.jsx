import React from 'react';
import Typewriter from 'react-typewriter-effect';

const NameTypingComponent = () => {

  return (
    <h1 className="meu-nome">
      <Typewriter
        options={{
          strings: ['Juliana','Valenti'],
          autoStart: true,
          loop: false,
        }}
      />
    </h1>
  );
};

export default NameTypingComponent;

