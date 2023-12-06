import React, { useState } from 'react';
import glossyck from '/glossyck.png'
import hawk from '/hawk.png'
import eldor from '/eldor.png'

function SectionGallery() {
  const [titulo, setTitulo] = useState('Glossyck');

  const cambiarTexto = (nombre) => {
    setTitulo(nombre);
  };

  return (
    <section className="gal container">
      <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-6">
            <h1 className="fs-1" style={{ marginLeft: '100px' }}>
              Personajes
            </h1>
            <h2 id="titulo" style={{ marginLeft: '140px' }}>{titulo}</h2>
          </div>
          <div id="img-container" className="d-flex justify-content-center mt-3">
            <img className="img-fluid miniatura mb-4" name="glossyck" src={glossyck} width="400px" onClick={() => cambiarTexto('Glossyck')} />
            <img className="img-fluid miniatura mb-4" name="hawk" src={hawk} width="350px" onClick={() => cambiarTexto('Hawk')} />
            <img className="img-fluid miniatura mb-4" name="eldor" src={eldor} width="200px" onClick={() => cambiarTexto('Eldor')} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionGallery;