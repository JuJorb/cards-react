import React from 'react';
import ins from '/ins.png';
import ws from '/ws.png';
import gm from '/gm.png';
import logo from '/Logo.png';

function Footer() {
  return (
    <section id="footer" className="footer text-white text-center">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <img src={logo} alt="" id="logo" className="img-fluid lg" />
          </div>
          <div className="col-6"></div>
          <div className="col-3">
            <img src={ins} alt="" id="icono" className="rd" />
            <img src={ws} alt="" id="icono" className="rd" />
            <img src={gm} alt="" id="icono" className="rd" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
