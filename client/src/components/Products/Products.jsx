import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProducts, getProductTypes } from '../../store/actions';
import ProductCard from '../ProductCard/ProductCard';
import ProductFilters from '../ProductFilters/ProductFilters';
import './Products.css'

function Products() {
  const [products, setProducts] = useState([]);
  const [productTypes, setProductTypes] = useState([]);
  const [filters, setFilters] = useState({
    searchTerm: '',
    typeOption: ''
  });

  const dispatch = useDispatch();

  const storeProducts = useSelector(state => state.products);
  const storeProductTypes = useSelector(state => state.productTypes);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getProductTypes());
  }, [dispatch]);

  useEffect(() => {
    setProducts(storeProducts);
  }, [storeProducts]);

  useEffect(() => {
    setProductTypes(storeProductTypes)
  }, [storeProductTypes]);

  useEffect(() => {
    if(filters.searchTerm === '' && filters.typeOption === '') {
      setProducts(storeProducts);
    }
    // filter by type and term
    if(filters.searchTerm.length || filters.typeOption.length) {
      if(filters.typeOption.length) {
        const type = filters.typeOption
        const currentProductsByType = storeProducts.filter(product => product.productType.name === type)
        if (filters.searchTerm.length) {
          const term = filters.searchTerm
          const currentProducts = currentProductsByType.filter(product => filterBySearchTerm(term, product.name) === true)
          setProducts(currentProducts);
        } else {
          setProducts(currentProductsByType);
        }
      } else if (!filters.typeOption.length && filters.searchTerm.length) {
        const term = filters.searchTerm
        const currentProducts = storeProducts.filter(product => filterBySearchTerm(term, product.name) === true)
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
    <div className="components-wrapper products-list">
      <div className="component-header flex">
        <h2>Listado de medicamentos</h2>
        <Link to="create-product">
          <button>Nuevo medicamento</button>
        </Link>
      </div>
      <div className="message-area text-center">
        <h4>Tipo: {filters.typeOption.length ? filters.typeOption : 'Todos'}</h4>
      </div>
      <div className="list-container">
        <ProductFilters 
          filters={filters}
          productTypes={productTypes} 
          handleChange={handleChange} 
          clearFilters={clearFilters}
        />
        <div className="list-heading flex">
          <span className="w-20">Código</span>
          <span className="w-40">Nombre comercial</span>
          <span className="w-20">Droga</span>
          <span className="w-20">Tipo</span>
        </div>
        {products && products.map(product => (
          <ProductCard product={product} key={product.code} />
        ))}
        {!products.length && (filters.searchTerm.length || filters.typeOption.length) 
          ? <span>No hay resultados</span> 
          : null}
      </div>
    </div>
  );
}

export default Products;