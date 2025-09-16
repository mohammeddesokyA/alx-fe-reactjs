// FavoriteButton.jsx - مكون جديد
import { useRecipeStore } from './recipeStore';

export default function FavoriteButton({ recipeId }) {
  const { favorites, toggleFavorite } = useRecipeStore();
  const isFavorite = favorites.includes(recipeId);

  const handleClick = () => {
    toggleFavorite(recipeId);
  };

  return (
    <button 
      onClick={handleClick}
      style={{
        padding: '6px 12px',
        border: 'none',
        background: isFavorite ? '#ffd700' : '#f0f0f0',
        color: isFavorite ? '#333' : '#666',
        borderRadius: 4,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: 4
      }}
    >
      {isFavorite ? '★' : '☆'} 
      {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
    </button>
  );
}