import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  const linkStyle = {
    fontSize: '40px'  // Adjust the font size as needed
  };

  return (
    <nav style={{ overflowY: 'auto', maxHeight: '100vh' }}> {/* Container with scrolling */}
      <ul className="navigation-links">
        <li style={linkStyle}>
          <Link to="/">Home</Link>
        </li>
        <li style={linkStyle}>
          <Link to="/aboutme">Aboutme</Link>
        </li>
        <li style={linkStyle}>
          <Link to="/skills">Skills</Link>
        </li>
        <li style={linkStyle}>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
