import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipe, onFinish }) => {
  const updateRecipe = useRecipeStore(state => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault();  // منع إعادة تحميل الصفحة عند الإرسال
    if (!title.trim() || !description.trim()) return;
    updateRecipe({ ...recipe, title, description });
    onFinish();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Save</button>
      <button type="button" onClick={onFinish}>Cancel</button>
    </form>
  );
};

export default EditRecipeForm;
