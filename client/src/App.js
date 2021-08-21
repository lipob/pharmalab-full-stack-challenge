import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import CreateProduct from './components/CreateProduct/CreateProduct';
import './App.css';

function App() {
  return (
    <div className="appWrapper">
      <Route path="/" component={Header} />
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/create-product" component={CreateProduct} />
    </div>
  );
}

export default App;
