import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

function Home() {
  return (
    <div className="components-wrapper text-center home">
      <h1>Pharmaceutical Lab <br />Full Stack Challenge</h1>
      <Link to ="products">
        <button>Nuestros medicamentos</button>
      </Link>
    </div>
  );
}

export default Home;