/* src/components/SearchBar.jsx */
import { useRecipeStore } from './recipeStore';

export default function SearchBar() {
  const term = useRecipeStore(s => s.searchTerm);
  const setTerm = useRecipeStore(s => s.setSearchTerm);

  return (
    <input
      value={term}
      onChange={e => setTerm(e.target.value)}
      placeholder="Search recipes..."
      style={{
        width: '100%',
        padding: 8,
        borderRadius: 4,
        border: '1px solid #ccc',
        marginBottom: 20,
        boxSizing: 'border-box',
      }}
    />
  );
}
