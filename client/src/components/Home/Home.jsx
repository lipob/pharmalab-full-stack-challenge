import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

function Home() {
  return (
    <div className="components-wrapper text-center home">
      <h1>Pharmaceutical Lab <br />Full Stack Challenge</h1>
      <p className="text-leading mb-15">This application allows the user to view a list of products and filter the results, by search term and type of product. The user can create new products and types of product. Also, the user can delete and restore type of produtcs.</p>
      <h3>Tech stack</h3>
      <p className="text-leading mb-15">
        Back-end: Node.js, Express, PostgreSQL, Sequelize. <br />
        Front-end: React.js, Redux, HTML, CSS, JavaScript. </p>
      <Link to ="products">
        <button>Ir a medicamentos</button>
      </Link>
    </div>
  );
}

export default Home;