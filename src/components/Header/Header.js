import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Proyecto B2C</div>
      <nav>
        <ul>
          <li><a href="#overview">Visión General</a></li>
          <li><a href="#timeline">Cronograma</a></li>
          <li><a href="#features">Características</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;