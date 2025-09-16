/* src/components/DeleteRecipeButton.jsx */
import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

export default function DeleteRecipeButton({ recipeId }) {
  const del = useRecipeStore(s => s.deleteRecipe);
  const nav = useNavigate();

  const remove = () => {
    if (window.confirm('Delete this recipe?')) {
      del(recipeId);
      nav('/');
    }
  };

  return (
    <button onClick={remove} style={{
      padding: '6px 12px',
      border: 'none',
      background: '#d32f2f',
      color: '#fff',
      borderRadius: 4,
      cursor: 'pointer'
    }}>
      Delete
    </button>
  );
}
