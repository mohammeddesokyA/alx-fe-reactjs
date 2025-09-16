import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const AddRecipeForm = () => {
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
        }}
      />
      <textarea
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
          minHeight: '40px',
          resize: 'vertical',
        }}
      />
      <button
        type="submit"
        style={{
          background: 'linear-gradient(90deg, #a996fc 30%, #fa72fa 90%)',
          color: '#fff',
          fontWeight: 700,
          fontSize: '1.1rem',
          border: 'none',
          borderRadius: '8px',
          padding: '0 1.5rem',
          boxShadow: '0 2px 10px #e1d4ff5a',
          cursor: 'pointer',
        }}
      >
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
