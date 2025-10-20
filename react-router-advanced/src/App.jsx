import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./components/Profile";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  const handleLoginToggle = () => {
    const current = localStorage.getItem("isAuthenticated") === "true";
    localStorage.setItem("isAuthenticated", !current);
    window.location.reload(); 
  };

  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  return (
    <Router>
      <div>
        <Navbar />
        <button onClick={handleLoginToggle}>
          {isAuthenticated ? "Logout" : "Login"}
        </button>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
  path="/profile/*"
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
/>
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  );
}
