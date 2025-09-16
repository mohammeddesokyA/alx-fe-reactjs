// FavoritesList.jsx - مكون جديد
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

export default function FavoritesList() {
  const { favorites, recipes } = useRecipeStore();
  
  const favoriteRecipes = recipes.filter(recipe => 
    favorites.includes(recipe.id)
  );

  if (favoriteRecipes.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '20px', color: '#777' }}>
        <h2>My Favorites</h2>
        <p>You haven't added any recipes to your favorites yet.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 style={{ color: '#5a2d82', marginBottom: '16px' }}>My Favorites</h2>
      <div style={{ display: 'grid', gap: 12 }}>
        {favoriteRecipes.map(recipe => (
          <Link 
            key={recipe.id} 
            to={`/recipes/${recipe.id}`} 
            style={{
              padding: 12,
              background: '#fff9e6',
              borderRadius: 4,
              textDecoration: 'none',
              boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
              border: '1px solid #ffd700'
            }}
          >
            <h3 style={{ margin: '0 0 4px', color: '#5a2d82' }}>{recipe.title}</h3>
            <p style={{ margin: 0, color: '#555' }}>{recipe.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}