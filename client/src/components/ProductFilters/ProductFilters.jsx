import React from 'react';

function ProductFilters({ filters, productTypes, handleChange, clearFilters }) {
  return (
    <div className="filters-container flex mb-15">
      <input 
        type="text" 
        name="searchTerm" 
        value={filters.searchTerm} 
        onChange={handleChange} 
        placeholder="Buscar productos"
        className="w-50 mr-20"
        />
      <select 
        value={filters.typeOption} 
        onChange={handleChange} 
        name="typeOption"
        className="w-25 mr-20"
      >
        <option value="" disabled>
          Seleccionar...
        </option>
        {productTypes && productTypes.map((type) => (
          <option value={type.name} key={type.id}>{type.name}</option>
        ))}
      </select>
      <button onClick={clearFilters} className="w-25 btn-secondary">Limpiar filtros</button>
    </div>
  );
}

export default ProductFilters;