import React from 'react';
import { useRecipeStore } from './recipeStore';

const FilterOptions = () => {
  // بدل ما تجمعهم في object واحد، استدعيهم بشكل منفصل
  const recipes = useRecipeStore(state => state.recipes);
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);

  const clearFilters = () => {
    setSearchTerm('');
  };

  return (
    <div style={{ 
      display: 'flex', 
      gap: '0.5rem', 
      marginBottom: '1rem',
      justifyContent: 'center' 
    }}>
      <button 
        onClick={clearFilters}
        style={{
          padding: '0.5rem 1rem',
          background: '#f0f0f0',
          border: '1px solid #ddd',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Clear Filters
      </button>
      <span style={{ color: '#666', alignSelf: 'center' }}>
        Total: {recipes.length} recipes
      </span>
    </div>
  );
};

export default FilterOptions;