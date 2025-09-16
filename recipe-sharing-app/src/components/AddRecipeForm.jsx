/* src/components/AddRecipeForm.jsx */
import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

export default function AddRecipeForm() {
  const addRecipe = useRecipeStore(s => s.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const submit = e => {
    e.preventDefault();
    if (!title || !description) return;
    addRecipe({ id: Date.now(), title, description });
    setTitle(''); setDescription('');
  };

  return (
    <form onSubmit={submit} style={formStyles}>
      <input
        value={title} onChange={e => setTitle(e.target.value)}
        placeholder="Recipe Title"
        style={inputStyles}
      />
      <textarea
        value={description} onChange={e => setDescription(e.target.value)}
        placeholder="Recipe Description"
        style={textareaStyles}
      />
      <button type="submit" style={buttonStyles}>Add Recipe</button>
    </form>
  );
}

const formStyles = {
  display: 'flex',
  gap: 10,
  marginBottom: 20,
};

const inputStyles = {
  flex: 1,
  padding: 8,
  borderRadius: 4,
  border: '1px solid #ccc',
};

const textareaStyles = {
  flex: 2,
  padding: 8,
  borderRadius: 4,
  border: '1px solid #ccc',
  resize: 'vertical',
};

const buttonStyles = {
  padding: '8px 16px',
  background: '#5a2d82',
  color: '#fff',
  border: 'none',
  borderRadius: 4,
  cursor: 'pointer',
};
