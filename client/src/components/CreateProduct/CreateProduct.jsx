import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductTypes, createProdcut, getProducts } from '../../store/actions';

function CreateProduct() {
  const [newProductBody, setNewProduct] = useState({
    code: '',
    productTypeId: '',
    name: '',
    drug: ''
  });
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
    setNewProduct({
      ...newProductBody,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(createProdcut(newProductBody));
    setNewProduct({
      code: '',
      productTypeId: '',
      name: '',
      drug: ''
    });
  }


  return (
    <div className="components-wrapper">
      <div className="component-header">
        <h2>Crear nuevo medicamento</h2>
        {productCreated.name ? <h4 className="product-created">¡Producto creado con éxito! {productCreated.name}</h4> : null}
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <span>Código</span>
            <input type="text" name="code" value={newProductBody.code} onChange={handleChange} />
          </div>
          <div>
            <span>Tipo de medicamento</span>
            <span>Gestionar tipos</span>
            <select vale={newProductBody.type} name="productTypeId" onChange={handleChange}>
              <option value="">
                Seleccionar...
              </option>
              {productTypes && productTypes.map(type => (
                <option value={type.id} key={type.id}>{type.name}</option>
              ))}
            </select>
          </div>
          <div>
            <span>Nombre comercial</span>
            <input type="text" name="name" value={newProductBody.name} onChange={handleChange} />
          </div>
          <div>
            <span>Droga</span>
            <input type="text" name="drug" value={newProductBody.drug} onChange={handleChange} />
          </div>
          <button type="submit">Guardar</button>
        </form>
      </div>
    </div>
  );
}

export default CreateProduct;