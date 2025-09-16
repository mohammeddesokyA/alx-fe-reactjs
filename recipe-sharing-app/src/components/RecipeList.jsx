/* src/components/RecipeList.jsx */
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

export default function RecipeList() {
  const recipes = useRecipeStore(s => s.recipes);
  const term = useRecipeStore(s => s.searchTerm).toLowerCase();
  const list = term
    ? recipes.filter(r =>
        r.title.toLowerCase().includes(term) ||
        r.description.toLowerCase().includes(term)
      )
    : recipes;

  if (!list.length) {
    return <p style={{ textAlign: 'center', color: '#777' }}>No recipes found</p>;
  }

  return (
    <div style={{ display: 'grid', gap: 12 }}>
      {list.map(r => (
        <Link key={r.id} to={`/recipes/${r.id}`} style={cardStyles}>
          <h3 style={{ margin: '0 0 4px', color: '#5a2d82' }}>{r.title}</h3>
          <p style={{ margin: 0, color: '#555' }}>{r.description}</p>
        </Link>
      ))}
    </div>
  );
}

const cardStyles = {
  padding: 12,
  background: '#f9f9f9',
  borderRadius: 4,
  textDecoration: 'none',
  boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
};
