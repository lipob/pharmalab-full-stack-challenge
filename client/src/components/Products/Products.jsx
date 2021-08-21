import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../store/actions';

function Products() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  });

  return (
    <div>I am Products</div>
  );
}

export default Products;