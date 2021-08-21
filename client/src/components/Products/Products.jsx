import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProducts } from '../../store/actions';
import ProductCard from '../ProductCard/ProductCard';

function Products() {
  const [products, setProducts] = useState([])
  const [filters, setFilters] = useState({
    searchTerm: '',
    typeOption: ''
  })

  const dispatch = useDispatch();

  const storeProducts = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    setProducts(storeProducts);
  }, [storeProducts])

  useEffect(() => {
    if(filters.searchTerm === '' && filters.typeOption === '') {
      setProducts(storeProducts);
    }
    if(filters.searchTerm.length || filters.typeOption.length) {
      if(filters.typeOption.length && filters.typeOption) {
        const type = filters.typeOption
        const currentProducts = storeProducts.filter(product => product.productType.name === type)
        setProducts(currentProducts);
      }
      if(filters.searchTerm.length) {
        const term = filters.searchTerm
        const currentProducts = products.filter(product => filterBySearchTerm(term, product.name) === true)
        setProducts(currentProducts);
      }
    } 
  }, [filters])

  // reset search input when selected product type change
  useEffect(() => {
    setFilters({
      ...filters,
      searchTerm: ''
    })
  }, [filters.typeOption])

  function handleChange(event) {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value
    })
  }

  function filterBySearchTerm(term, productName) {
    const regExTerm = new RegExp(`^${term}`, 'i');
    return regExTerm.test(productName);
  }

  function clearFilters() {
    setFilters({
      searchTerm: '',
      typeOption: ''
    })
  }

  return (
    <div className="componentsWrapper">
      <div>
        <h2>Listado de productos</h2>
        <h4>Tipo: {filters.typeOption.length ? filters.typeOption : 'Todos'}</h4>
        
        <Link to="create-product">
          <button>Crear producto</button>
        </Link>
      </div>
      <div>
        <div>
          <div className="searchBar">
            <input 
              type="text" 
              name="searchTerm" 
              value={filters.searchTerm} 
              onChange={handleChange} 
              placeholder="Buscar productos" />
          </div>
          <div className="selectForm">
            <select value={filters.typeOption} onChange={handleChange} name="typeOption">
              <option value="" disabled>
                Seleccionar...
              </option>
              <option value="Aerosol">Aerosol</option>
              <option value="Jarabe">Jarabe</option>
            </select>
          </div>
          <div>
            <button onClick={clearFilters}>Limpiar filtros</button>
          </div>
        </div>
        <div>
          {products && products.map(product => (
            <ProductCard product={product} key={product.code} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;