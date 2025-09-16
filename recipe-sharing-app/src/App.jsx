// src/App.jsx
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';

const animatedBg = {
  background: 'linear-gradient(135deg, #E9F1FE 0%, #C6A1FF 100%)',
  minHeight: '100vh',
  fontFamily: 'Inter, Arial, sans-serif',
  animation: 'bgMove 12s infinite linear alternate',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh',
  margin: 0,
};

// CSS متحرك للخلفية:
const globalStyles = `
@keyframes bgMove {
  0% { background-position: 0% 50%;}
  100% { background-position: 100% 50%;}
}
`;

export default function App() {
  return (
    <>
      <style>{globalStyles}</style>
      <div style={animatedBg}>
        <div
          style={{
            maxWidth: '520px',
            width: '95%',
            background: '#fff',
            borderRadius: '32px',
            boxShadow: '0 8px 32px 0 rgba(80,40,120,0.09)',
            padding: '2.5rem 2.5rem 2rem',
            textAlign: 'center',
          }}>
          <h1
            style={{
              fontWeight: '900',
              fontSize: '2.5rem',
              color: '#44297c',
              marginBottom: '2rem',
              letterSpacing: '1px',
              textShadow: '0 2px 14px #d7cfff'
            }}>
            Recipe Sharing Application
          </h1>
          <AddRecipeForm />
          <RecipeList />
        </div>
      </div>
    </>
  );
}
