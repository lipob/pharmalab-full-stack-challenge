import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProducts, getProductTypes } from '../../store/actions';
import ProductCard from '../ProductCard/ProductCard';
import ProductFilters from '../ProductFilters/ProductFilters';

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
        <Link to="create-product">
          <button>Crear producto</button>
        </Link>
        <h4>Tipo: {filters.typeOption.length ? filters.typeOption : 'Todos'}</h4>        
      </div>
      <div>
        <ProductFilters 
          filters={filters}
          productTypes={productTypes} 
          handleChange={handleChange} 
          clearFilters={clearFilters}
        />
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