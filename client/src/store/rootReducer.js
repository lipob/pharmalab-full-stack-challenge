import { GET_PRODUCTS, GET_PRODUCT_TYPES } from './actions';

const initialState = {
  products: [],
  productTypes: []
}

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case GET_PRODUCT_TYPES:
      return {
        ...state,
        productTypes: action.payload
      };
    default: return state;
  }
}

export default rootReducer;