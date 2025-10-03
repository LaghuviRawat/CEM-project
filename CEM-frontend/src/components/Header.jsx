// --- CEM-frontend/src/components/Header.jsx ---

import React from 'react';
// CRITICAL: Path is correct since Header.css is in the same folder
import './Header.css'; 

const Header = () => {
  return (
    <header className="app-navbar">
      <div className="navbar-brand">
        <a href="/" className="brand-link">Happenly!</a> 
      </div>
      
      <nav className="navbar-nav">
        <a href="/" className="nav-item">Home</a>
        <a href="/events" className="nav-item">Events</a>
        <a href="/ai" className="nav-item">AI</a>
      </nav>
    </header>
  );
};

export default Header;