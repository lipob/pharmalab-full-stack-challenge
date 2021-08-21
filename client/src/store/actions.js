import axios from 'axios';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCT_TYPES = 'GET_PRODUCT_TYPES';
export const CREATE_PRODUCT_TYPE = 'CREATE_PRODUCT_TYPE';
export const REMOVE_PRODUCT_TYPE = 'REMOVE_PRODUCT_TYPE';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';

const apiUrl = 'http://localhost:3001/'

export const getProducts = () => async (dispatch) => {
  try {
    console.log('request')
    const { data } = await axios.get(`${apiUrl}products`);
    dispatch({
      type: GET_PRODUCTS,
      payload: data
    })
  }
  catch(error) {
    console.error(error);
  }
}