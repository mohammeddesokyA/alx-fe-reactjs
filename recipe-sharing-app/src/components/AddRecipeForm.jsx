// src/components/AddRecipeForm.jsx
import { useState } from 'react';
import { useRecipeStore } from '../recipeStore';

const btnAnim = {
  transition: 'all 0.3s cubic-bezier(.56,2,.45,.78)',
  background: 'linear-gradient(90deg, #a996fc 30%, #fa72fa 90%)',
  color: '#fff',
  fontWeight: 700,
  fontSize: '1.1rem',
  border: 'none',
  borderRadius: '8px',
  padding: '0 1.5rem',
  boxShadow: '0 2px 10px #e1d4ff5a',
  cursor: 'pointer',
};

export default function AddRecipeForm() {
  const addRecipe = useRecipeStore(state => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim() || !description.trim()) return;
    addRecipe({ id: Date.now(), title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        gap: '1rem',
        marginBottom: '1.7rem',
        justifyContent: 'center',
      }}
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        style={{
          flex: 1,
          padding: '.85rem 1.1rem',
          fontSize: '1rem',
          borderRadius: '10px',
          border: '1.5px solid #dfdcef',
          background: '#252d3b15',
          color: '#323049',
          outline: 'none',
          transition: 'border 0.25s',
        }}
        onFocus={e => e.target.style.border = '2px solid #9f8dfd'}
        onBlur={e => e.target.style.border = '1.5px solid #dfdcef'}
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        style={{
          flex: 2,
          padding: '.85rem 1.1rem',
          fontSize: '1rem',
          borderRadius: '10px',
          border: '1.5px solid #dfdcef',
          background: '#252d3b15',
          color: '#323049',
          outline: 'none',
          transition: 'border 0.25s',
        }}
        onFocus={e => e.target.style.border = '2px solid #fa72fa'}
        onBlur={e => e.target.style.border = '1.5px solid #dfdcef'}
      />
      <button type="submit" style={btnAnim}>
        Add Recipe
      </button>
    </form>
  );
}
