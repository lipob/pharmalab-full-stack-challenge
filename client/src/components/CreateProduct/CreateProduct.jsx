import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductTypes, createProdcut, getProducts } from '../../store/actions';
import { Link } from 'react-router-dom';
import './CreateProduct.css'

function CreateProduct() {
  const [newProductBody, setNewProduct] = useState({
    code: '',
    productTypeId: '',
    name: '',
    drug: ''
  });
  const [inputErrorMessage, setInputErrorMessage] = useState('')
  const [productTypes, setProductTypes] = useState([]);
  const [productCreated, setProductCreated] = useState({});

  const dispatch = useDispatch();
  const storeProductTypes = useSelector(state => state.productTypes);
  const storeNewProduct = useSelector(state => state.newProduct);

  useEffect(() => {
    dispatch(getProductTypes());
  }, [dispatch]);

  useEffect(() => {
    setProductTypes(storeProductTypes);
  }, [storeProductTypes]);

  useEffect(() => {
    dispatch(getProducts());
    setProductCreated(storeNewProduct);
  }, [storeNewProduct]);

  function handleChange(event) {
    // validate form input
    if (event.target.name === 'code')  {
      if (validateForm(event.target.name, event.target.value) === false) {
        setInputErrorMessage('El dódigo solo puede contener números');
      } else {
        setInputErrorMessage('');
      }
    }
    setNewProduct({
      ...newProductBody,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!inputErrorMessage.length) {
      dispatch(createProdcut(newProductBody));
      setNewProduct({
        code: '',
        productTypeId: '',
        name: '',
        drug: ''
      });
    }
  }

  function validateForm(input, data) {
    if (input === 'code') {
      if (data.length && (isNaN(data) || data < 1)) {
        return false;
      } else {
        return true
      }
    }
  }


  return (
    <div className="components-wrapper">
      <div className="component-header text-center">
        <h2>Crear nuevo medicamento</h2>
        {productCreated.name ? <h4 className="product-created my-15 success">¡Producto creado con éxito! {productCreated.name}</h4> : null}
      </div>
      <div className="product-create-form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-05">
            <label>Código</label>
            <input 
              type="text" 
              name="code" 
              value={newProductBody.code} 
              onChange={handleChange}
              placeholder="Ej. 12345"
            />
            {inputErrorMessage.length ? <span className="warning text-small mb-05">{inputErrorMessage}</span> : null}
          </div>
          <div className="form-group mb-05">
            <div className="form-group-type">
              <label>Tipo de medicamento</label>
              <Link to="/product-types">
                <span>Gestionar tipos</span>
              </Link>
            </div>
            <select vale={newProductBody.type} name="productTypeId" onChange={handleChange}>
              <option value="">
                Seleccionar...
              </option>
              {productTypes && productTypes.map(type => (
                <option value={type.id} key={type.id}>{type.name}</option>
              ))}
            </select>
          </div>
          <div className="form-group mb-05">
            <label>Nombre comercial</label>
            <input type="text" name="name" value={newProductBody.name} onChange={handleChange} />
          </div>
          <div className="form-group mb-15">
            <label>Droga</label>
            <input type="text" name="drug" value={newProductBody.drug} onChange={handleChange} />
          </div>
          <button type="submit">Guardar</button>
        </form>
      </div>
    </div>
  );
}

export default CreateProduct;