import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId);
      navigate('/');  // إعادة التوجيه إلى الصفحة الرئيسية بعد الحذف
    }
  };

  return (
    <button onClick={handleDelete} style={{ color: 'red', cursor: 'pointer' }}>
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
