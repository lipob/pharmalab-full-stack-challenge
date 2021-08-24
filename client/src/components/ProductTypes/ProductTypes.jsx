import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  createProductType, 
  getProductTypes, 
  removeProductType, 
  restoreRemovedType,
  resetTempState
  } from '../../store/actions';
import ProductTypeCard from '../ProductTypeCard/ProductTypeCard';


function ProductTypes() {
  const [productTypes, setProductTypes] = useState([]);
  const [newProductTypeBody, setNewProductTypeBody] = useState({
    name: ''
  });
  const [productTypeCreated, setProductTypeCreated] = useState({});
  const [removedType, setRemovedType] = useState('');

  const dispatch = useDispatch();

  const storeProductTypes = useSelector(state => state.productTypes);
  const storeNewProductType = useSelector(state => state.newProductType);
  const storeRemovedProductType = useSelector(state => state.removedProductType);

  useEffect(() => {
    dispatch(resetTempState());
    setNewProductTypeBody({
      name: ''
    });
    setRemovedType('');
  }, [])
  
  useEffect(() => {
    dispatch(getProductTypes());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProductTypes());
  }, [storeNewProductType, storeRemovedProductType]);

  useEffect(() => {
    setProductTypeCreated(storeNewProductType);
  }, [storeNewProductType]);

  useEffect(() => {
    setProductTypes(storeProductTypes);
  }, [storeProductTypes]);

  useEffect(() => {
    if (storeRemovedProductType > 0) {
      setRemovedType(storeRemovedProductType);
      dispatch(resetTempState());
    }
  }, [storeRemovedProductType]);

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
    setRemovedType('');
  }

  function handleRemove(typeId) {
    dispatch(removeProductType(typeId));
    setNewProductTypeBody({
      name: ''
    });
    setProductTypeCreated({});
  }

  function handleRestoreType(id) {
    dispatch(restoreRemovedType(id));
    dispatch(resetTempState());
    setRemovedType('');
  }

  return (
    <div className="components-wrapper">
      <div className="component-header text-center">
        <h2>Tipos de medicamentos</h2>
        {productTypeCreated.name 
          ? <h4 className="my-15 success">Tipo creado con éxito! {productTypeCreated.name}</h4> 
          : null}
        {removedType > 0
          ? <h4 className="my-15">
              Tipo borrado ID: {removedType} | 
              <span onClick={() => handleRestoreType(removedType)} className="undo-link"> Deshacer</span>
            </h4> 
          : null}
        
      </div>
      <div className="list-container">
        <div className="mb-15">
          <h5 className="mb-05">Crear nuevo tipo</h5>
          <form onSubmit={handleSubmit}>
            <div className="form-groupx">
              <label>Tipo / Formato</label>
              <div>
                <input 
                  type="text" 
                  name="name" 
                  value={newProductTypeBody.name} 
                  onChange={handleChange}
                  placeholder="Ingrese un tipo o formato"
                  className="mr-20"
                />
                <button type="submit">Crear</button>
              </div>
            </div>
          </form>
        </div>
        <div>
          <h5 className="mb-05">Tipos en existencia</h5>
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