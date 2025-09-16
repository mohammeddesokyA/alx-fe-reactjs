import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);

  if (recipes.length === 0) return <p>No recipes added yet.</p>;

  return (
    <div>
      {recipes.map(recipe => (
        <div key={recipe.id} style={{ marginBottom: '1rem', padding: '1rem', background: '#f1f0fc', borderRadius: '10px' }}>
          <h3>
            <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: 'none', color: '#4542b8' }}>
              {recipe.title}
            </Link>
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
