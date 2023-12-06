import React from 'react';
import comic from '/comic.png';

function SectionComic() {
  return (
    <section className="Comic text-center text-white py-4" id="Comic">
      <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={comic} alt="" className="img-fluid comicDos"/>

                </div>
                <div id="cmcc" className="col-md-6">
                    <h1>Sinopsis</h1>
                    <p>El cómic interactivo (ASCLEPIO) cuenta la historia de una joven y hermosa chica que nace con discapacidad auditiva, aún así sus padres deciden que debe de tener una buena educación como los demás niños, Mariana deberá enfrentar muchas cosas y también aprender para poder cumplir sus sueños.</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default SectionComic;
