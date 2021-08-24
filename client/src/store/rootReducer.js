import { 
  CREATE_PRODUCT, 
  CREATE_PRODUCT_TYPE, 
  GET_PRODUCTS, 
  GET_PRODUCT_TYPES, 
  REMOVE_PRODUCT_TYPE, 
  RESTORE_PRODUCT_TYPE ,
  RESET_TEMP_STATE
} from './actions';

const initialState = {
  products: [],
  productTypes: [],
  newProduct: {},
  newProductType: {},
  removedProductType: 0,
  restoredProductType: {}
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
    case CREATE_PRODUCT:
      return {
        ...state,
        newProduct: action.payload
      }
    case CREATE_PRODUCT_TYPE:
      return {
        ...state,
        newProductType: action.payload
      }
    case REMOVE_PRODUCT_TYPE:
      return {
        ...state,
        removedProductType: action.payload
      }
    case RESTORE_PRODUCT_TYPE:
      return {
        ...state,
        restoredProductType: action.payload
      }
    case RESET_TEMP_STATE:
      return {
        ...state,
        newProductType: {},
        removedProductType: 0,
        restoredProductType: {}
      }
    default: return state;
  }
}

export default rootReducer;