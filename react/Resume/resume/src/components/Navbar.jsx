import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "../App.css";

function Navbar() {
  return (
    <nav>
      <div className='logo'><h1>Atul Ranjan</h1></div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li> {/* Link to Home route */}
          <li><Link to="/About">About</Link></li>
          <li><Link to="/projects">Projects</Link></li> {/* Link to Projects route */}
          <li><Link to="/blogs">Blogs</Link></li> {/* Link to Blogs route */}
          <li><Link to="/resume">Resume</Link></li> {/* Link to Resume route */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
