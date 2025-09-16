// src/components/RecipeList.jsx
import { useRecipeStore } from './recipeStore';
import { FaBowlFood } from 'react-icons/fa6'; // تحتاج تثبيت react-icons
    
export default function RecipeList() {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div style={{ marginTop: '1rem' }}>
      {recipes.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#aaa' }}>No recipes added yet.</p>
      ) : (
        recipes.map(recipe => (
          <div key={recipe.id}
               style={{
                borderRadius: '18px',
                background: 'rgba(195,180,255,0.14)',
                 marginBottom: '1rem',
                 padding: '1rem 1.1rem .7rem',
                 boxShadow: '0 1px 6px 0 rgba(110,60,190,0.06)',
                 textAlign: 'left',
                 display: 'flex',
                 alignItems: 'center',
                 gap: '1.1rem',
                 animation: 'fadeIn .8s',
               }}>
            <FaBowlFood size={34} color="#b172fd" style={{ flexShrink: 0 }} />
            <div>
              <h3 style={{ color: '#39257f', marginBottom: '.35rem', fontWeight: 700, fontSize: '1.17rem' }}>
                {recipe.title}
              </h3>
              <p style={{ color: '#342f50', margin: 0 }}>{recipe.description}</p>
            </div>
          </div>
        ))
      )}
      <style>
        {`@keyframes fadeIn {from { opacity: 0; transform: translateY(30px);} to {opacity:1; transform: translateY(0);} }`}
      </style>
    </div>
  );
}
