import React from 'react';

function ProductFilters({ filters, productTypes, handleChange, clearFilters }) {
  return (
    <div>
      <div className="searchBar">
        <input 
          type="text" 
          name="searchTerm" 
          value={filters.searchTerm} 
          onChange={handleChange} 
          placeholder="Buscar productos" />
      </div>
      <div className="selectForm">
        <select value={filters.typeOption} onChange={handleChange} name="typeOption">
          <option value="" disabled>
            Seleccionar...
          </option>
          {productTypes && productTypes.map((type) => (
            <option value={type.name} key={type.id}>{type.name}</option>
          ))}
        </select>
      </div>
      <div>
        <button onClick={clearFilters}>Limpiar filtros</button>
      </div>
    </div>
  );
}

export default ProductFilters;