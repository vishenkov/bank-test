import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ isLoggedIn, logout }) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link to="/" className="navbar-brand">Bank</Link>

    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link to="/" className="nav-link">Home</Link>
      </li>
      {isLoggedIn && <li className="nav-item">
        <Link to="/add" className="nav-link">Add Transaction</Link>
      </li>}
      {!isLoggedIn && <li className="nav-item">
        <Link to="/login" className="nav-link">Login</Link>
      </li>}
    </ul>
    {isLoggedIn && <button onClick={logout}>Logout</button>}
  </nav>
);

export default NavBar;
