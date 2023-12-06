import React from 'react';
import './Header.css';
import logo from '/Logo.png'

function Header() {
  return (
    <header id="header" className="header navbar navbar-expand-lg navbar-dark">
     <div className="container">
            <a className="navbar-brand" href="#">
                <img src={logo} alt="" className="logo"/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Comic">Comic</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#equipo">Equipo de Trabajo</a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
  );
}

export default Header;
