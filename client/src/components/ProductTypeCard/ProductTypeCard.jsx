import React from 'react';
import { Trash2 } from 'react-feather';

function ProductTypeCard({ type, handleRemove }) {
  return (
    <div className="flex">
      <span className="w-20">{type.id}</span>
      <span className="w-40">{type.name}</span>
      <Trash2 
        size={16} 
        className="w-20 ml-auto" 
        onClick={() => handleRemove(type.id)} />
    </div>
  );
}

export default ProductTypeCard;