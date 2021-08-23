import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="components-wrapper">
      <h1>Pharmaceutical Lab Full Stack Challenge</h1>
      <Link to ="products">
        <button>Nuestros medicamentos</button>
      </Link>
    </div>
  );
}

export default Home;