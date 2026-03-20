import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('username');
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">Food Recipes</div>
      <div className="nav-links">
        <Link to="/about" className="nav-item">About</Link>
        {isAuthenticated ? (
          <>
            <Link to="/dashboard" className="nav-item">Dashboard</Link>
            <button onClick={handleLogout} className="nav-btn logout-btn">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-item">Login</Link>
            <Link to="/signup" className="nav-btn signup-btn">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
