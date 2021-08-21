import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="headerWrapper">
      <div>
        <h1 className="headerLogo">{`<MBSoft/>`}</h1>
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/products">Productos</Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;