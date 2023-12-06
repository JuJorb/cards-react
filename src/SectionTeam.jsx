import React from 'react';
import alexa from '/alexa.png'
import samuel from '/samuel.png'
import juan from '/Juan.png'


function SectionTeam() {
  return (
    <section className="equipo" id="equipo">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="">
              <img src={alexa} alt="" className="card-img-top" />
              <div className="body">
                <h5 className="title">Alexa Londoño</h5>
                <p className="text">Nombre: Alexa Londoño<br />Edad: 17 años<br />Descripción: Amable, Responsable, Respetuosa y Paciente<br />Cargo: Illustradora</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="">
              <img src={samuel} alt="" className="card-img-top" />
              <div className="body">
                <h5 className="title">Samuel Patiño</h5>
                <p className="text">Nombre: Samuel Patiño<br />Edad: 17 años<br />Descripción: Atento, Responsable, Respetuoso y Tranquilo<br />Cargo: Desarrollador</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="">
              <img src={juan} alt="" className="card-img-top" />
              <div className="body">
                <h5 className="title">Juan José Rodriguez</h5>
                <p className="text">Nombre: Juan José Rodriguez<br />Edad: 17 años<br />Descripción: Sociable, amigable, creativo, objetivo<br />Cargo: Investigador</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionTeam;
