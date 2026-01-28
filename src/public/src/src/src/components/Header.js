import React from 'react';
import './Header.css';

function Header({ onMenuClick }) {
  return (
    <header className="header">
      <button className="menu-btn" onClick={onMenuClick}>
        ☰
      </button>
      <div className="logo">
        <h1>🎮 Glitch Guild</h1>
        <p className="tagline">Where gamers connect</p>
      </div>
      <div className="user-actions">
        <button className="action-btn">🔔</button>
        <button className="action-btn">💬</button>
        <button className="user-avatar">👤</button>
      </div>
    </header>
  );
}

export default Header;
