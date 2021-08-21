import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="componentsWrapper">
      <h1>Pharmaceutical Lab Full Stack Challenge</h1>
      <Link to ="products">
        <button>Nuestros productos</button>
      </Link>
    </div>
  );
}

export default Home;