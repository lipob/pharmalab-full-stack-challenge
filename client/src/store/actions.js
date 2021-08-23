import axios from 'axios';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCT_TYPES = 'GET_PRODUCT_TYPES';
export const CREATE_PRODUCT_TYPE = 'CREATE_PRODUCT_TYPE';
export const REMOVE_PRODUCT_TYPE = 'REMOVE_PRODUCT_TYPE';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';

const apiUrl = 'http://localhost:3001/'

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${apiUrl}products`);
    
    // create generic product types in case of deleted product types (null)
    data.forEach(product => {
      if (product.productType === null) {
        product.productType = {
          id: 0,
          name: 'no especificado'
        }
      }
    })

    dispatch({
      type: GET_PRODUCTS,
      payload: data
    });
  }
  catch(error) {
    console.error(error);
  }
}

export const getProductTypes = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${apiUrl}product-types`);
    dispatch({
      type: GET_PRODUCT_TYPES,
      payload: data
    });
  }
  catch(error) {
    console.error(error);
  }
}

export const createProdcut = (newProduct) => async (dispatch) => {
  try {
    const {data } = await axios.post(`${apiUrl}products`, newProduct);
    dispatch({
      type: CREATE_PRODUCT,
      payload: data
    });
  }
  catch(error) {
    console.error(error);
  }
}

export const createProductType = (newProductType) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${apiUrl}product-types`, newProductType);
    dispatch({
      type: CREATE_PRODUCT_TYPE,
      payload: data
    });
  }
  catch(error) {
    console.error(error);
  }
}

export const removeProductType = (typeId) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`${apiUrl}product-types/${typeId}`);
    dispatch({
      type: REMOVE_PRODUCT_TYPE,
      payload: data
    });
  }
  catch(error) {
    console.error(error);
  }
}