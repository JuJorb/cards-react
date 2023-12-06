import React from 'react';
import comicc from '/Comicc.png'

function SectionDos() {
  return (
    <section id="uno" className="introduccion text-white text-center py-3">
      <div id="bn" className="container">
      <p className="display-2 fs-2">Bienvenid@ a Asclepio</p>
            <p className="dos">Presiona para ver nuestro Comic!!!</p>
            <img src={comicc} href="#Comic" id="btn" className="btn" alt=""/>
      </div>
    </section>
  );
}

export default SectionDos;
