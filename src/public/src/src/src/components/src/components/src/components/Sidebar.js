import React from 'react';
import './Sidebar.css';

function Sidebar({ open }) {
  if (!open) return null;

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <button className="nav-btn active">🏠 Home</button>
        <button className="nav-btn">🔥 Popular</button>
        <button className="nav-btn">🎮 Games</button>
        <button className="nav-btn">👥 Community</button>
        <button className="nav-btn">⭐ Favorites</button>
        <button className="nav-btn">⚙️ Settings</button>
      </nav>
      
      <div className="sidebar-stats">
        <h4>Quick Stats</h4>
        <div className="stat-item">
          <span>Online Users</span>
          <span className="stat-value">1,234</span>
        </div>
        <div className="stat-item">
          <span>Active Posts</span>
          <span className="stat-value">567</span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
