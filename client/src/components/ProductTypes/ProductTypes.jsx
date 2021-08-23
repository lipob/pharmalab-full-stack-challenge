import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProductType, getProductTypes, removeProductType } from '../../store/actions';
import ProductTypeCard from '../ProductTypeCard/ProductTypeCard';


function ProductTypes() {
  const [productTypes, setProductTypes] = useState([]);
  const [newProductTypeBody, setNewProductTypeBody] = useState({
    name: ''
  });

  const dispatch = useDispatch();

  const storeProductTypes = useSelector(state => state.productTypes);
  const storeNewProductType = useSelector(state => state.newProductType);
  const storeRemovedProductType = useSelector(state => state.removedProductType);

  useEffect(() => {
    dispatch(getProductTypes());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProductTypes());
  }, [storeNewProductType, storeRemovedProductType])

  useEffect(() => {
    setProductTypes(storeProductTypes);
  }, [storeProductTypes])

  function handleChange(event) {
    setNewProductTypeBody({
      ...newProductTypeBody,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(createProductType(newProductTypeBody));
    setNewProductTypeBody({
      name: ''
    });
  }

  function handleRemove(typeId) {
    dispatch(removeProductType(typeId));
    setNewProductTypeBody({
      name: ''
    });
  }

  return (
    <div className="components-wrapper">
      <div className="component-header">
        <h2>Tipos de medicamentos</h2>        
      </div>
      <div className="list-container">
        <div>
          <h5>Crear nuevo tipo</h5>
          <form onSubmit={handleSubmit}>
            <div>
              <span>Tipo / Formato</span>
              <input type="text" name="name" value={newProductTypeBody.name} onChange={handleChange} />
            </div>
            <button type="submit">Crear</button>
          </form>
        </div>
        <div>
          <h5>Tipos en existencia</h5>
          <div className="list-heading flex">
            <span className="w-20">ID</span>
            <span className="w-40">Tipo</span>
          </div>
          {productTypes && productTypes.map(type => (
            <ProductTypeCard 
              type={type} 
              key={type.id} 
              handleRemove={handleRemove} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductTypes;