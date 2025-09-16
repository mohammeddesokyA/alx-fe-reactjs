// Navigation.jsx - مكون جديد للتنقل
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav style={navStyles}>
      <Link to="/" style={linkStyle}>All Recipes</Link>
      <Link to="/favorites" style={linkStyle}>My Favorites</Link>
    </nav>
  );
}

const navStyles = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  marginBottom: '20px',
  padding: '10px',
  borderBottom: '1px solid #eee'
};

const linkStyle = {
  textDecoration: 'none',
  color: '#5a2d82',
  fontWeight: 'bold',
  padding: '8px 16px',
  borderRadius: '4px',
  transition: 'background-color 0.2s'
};