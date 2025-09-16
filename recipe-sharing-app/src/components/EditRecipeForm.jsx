/* src/components/EditRecipeForm.jsx */
import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

export default function EditRecipeForm({ recipe, onFinish }) {
  const update = useRecipeStore(s => s.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const submit = e => {
    e.preventDefault();
    update({ ...recipe, title, description });
    onFinish();
  };

  return (
    <form onSubmit={submit} style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
      <input
        value={title} onChange={e => setTitle(e.target.value)}
        style={{ flex: 1, padding: 6, borderRadius: 4, border: '1px solid #ccc' }}
      />
      <textarea
        value={description} onChange={e => setDescription(e.target.value)}
        style={{ flex: 2, padding: 6, borderRadius: 4, border: '1px solid #ccc' }}
      />
      <button type="submit" style={smallBtn}>Save</button>
      <button type="button" onClick={onFinish} style={smallBtn}>Cancel</button>
    </form>
  );
}

const smallBtn = {
  padding: '6px 12px',
  border: 'none',
  background: '#5a2d82',
  color: '#fff',
  borderRadius: 4,
  cursor: 'pointer',
};
