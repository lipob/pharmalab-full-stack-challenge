import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProducts } from '../../store/actions';
import ProductCard from '../ProductCard/ProductCard';

function Products() {
  const [products, setProducts] = useState([])

  const dispatch = useDispatch();

  const storeProducts = useSelector(state => state.products);

  if (!products.length) {
    setProducts(storeProducts);
  }

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="componentsWrapper">
      <div>
        <h2>Listado de productos</h2>
        <Link to="create-product">
          <button>Crear producto</button>
        </Link>
      </div>
      <div>
        <div>
          <div className="searchInput">
            <input name="search" placeholder="Buscar productos" />
          </div>
          <div className="selectFilter">
            <select></select>
          </div>
        </div>
        <div>
          {products && products.map(product => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;