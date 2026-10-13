
import React, { useContext } from 'react';
import { postData } from '../Context.jsx/theme';
import './Nav2.css';

const Nav2 = () => {
  const data = useContext(postData);
  return (
    <nav className="navbar">
      <h2 className="logo">{data}</h2>

      <div className="nav-links">
        <a href="/">{data}</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>

      <button className="nav-btn">Get Started</button>
    </nav>
  );
};

export default Nav2;
