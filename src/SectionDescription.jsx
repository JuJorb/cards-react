import React from 'react';
import ilust from '/ilust.1.png'

function SectionDescription(props) {
  return (
    <>
    <section className="descripcion text-center py-2" style={{background: props.background}}>
      <div className="container">
            <div className="row">
                <div id="dsc" className="col-md-6">
                    <h1>Descripción del proyecto</h1>
                    <p>Asclepio es un proyecto que se fundamenta en un cómic interactivo diseñado para brindar a las personas interesadas en el tema una forma más sencilla y entretenida de adquirir información.</p>
                    <h1>Objetivo</h1>
                    <p>El objetivo del proyecto Asclepio es dar información a los jóvenes de cómo tratar a las personas con esta discapacidad auditiva.</p>
                </div>
                <div className="col-md-6">
                    <img src={ilust} alt="" className="img-fluid ilustracionUno"/>
                </div>
            </div>
        </div>
    </section>
    </>
    
  );
}

export default SectionDescription;
