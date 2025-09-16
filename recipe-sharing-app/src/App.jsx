/* src/App.jsx */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import { useParams } from 'react-router-dom';

const DetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={Number(id)} />;
};

export default function App() {
  return (
    <Router>
      <div style={styles.container}>
        <h1 style={styles.title}>Recipe Sharing Application</h1>
        <Routes>
          <Route path="/" element={
            <>
              <AddRecipeForm />
              <SearchBar />
              <RecipeList />
            </>
          }/>
          <Route path="/recipes/:id" element={<DetailsWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

const styles = {
  container: {
    maxWidth: 600,
    margin: '40px auto',
    padding: 20,
    background: '#fff',
    borderRadius: 8,
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    textAlign: 'center',
    color: '#5a2d82',
    marginBottom: 20,
  },
};
