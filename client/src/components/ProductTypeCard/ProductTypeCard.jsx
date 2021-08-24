import React from 'react';
import { Trash2 } from 'react-feather';
import './ProductTypeCard.css';

function ProductTypeCard({ type, handleRemove }) {
  return (
    <div className="card-list-item flex">
      <span className="w-20">{type.id}</span>
      <span className="w-40"><strong>{type.name}</strong></span>
      <div className="w-20 ml-auto text-right" >
        <Trash2 
          size={16} 
          onClick={() => handleRemove(type.id)}
          className="trash-bin"
        />
      </div>
    </div>
  );
}

export default ProductTypeCard;