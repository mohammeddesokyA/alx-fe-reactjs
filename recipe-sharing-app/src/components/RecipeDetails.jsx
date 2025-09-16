// RecipeDetails.jsx - محدث
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import FavoriteButton from './FavoriteButton';
import { useState } from 'react';

export default function RecipeDetails({ recipeId }) {
  const recipe = useRecipeStore(s =>
    s.recipes.find(r => r.id === recipeId)
  );
  const [edit, setEdit] = useState(false);
  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div>
      {edit ? (
        <EditRecipeForm recipe={recipe} onFinish={() => setEdit(false)} />
      ) : (
        <>
          <h2 style={{ color: '#5a2d82' }}>{recipe.title}</h2>
          <p style={{ color: '#333' }}>{recipe.description}</p>
          <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
            <button onClick={() => setEdit(true)} style={smallBtn}>Edit</button>
            <FavoriteButton recipeId={recipeId} />
            <DeleteRecipeButton recipeId={recipeId} />
          </div>
        </>
      )}
    </div>
  );
}

const smallBtn = {
  padding: '6px 12px',
  border: '1px solid #5a2d82',
  background: '#fff',
  color: '#5a2d82',
  borderRadius: 4,
  cursor: 'pointer',
};