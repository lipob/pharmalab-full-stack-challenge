import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="card-list-item flex">
      <span className="w-20">{product.code}</span>
      <span className="w-40"><strong>{product.name}</strong></span>
      <span className="w-20">{product.drug}</span>
      <span className="w-20">{product.productType && product.productType.name}</span>      
    </div>
  );
}

export default ProductCard;