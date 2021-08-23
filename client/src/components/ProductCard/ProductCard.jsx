import React from 'react';

function ProductCard({ product }) {
  return (
    <div>
      <span>{product.code}</span>
      <span>{product.name}</span>
      <span>{product.drug}</span>
      <span>{product.productType && product.productType.name}</span>      
    </div>
  );
}

export default ProductCard;