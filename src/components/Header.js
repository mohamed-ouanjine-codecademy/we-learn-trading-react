import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className='bg-white shadow-sm text-dark sticky-top  p-3'>
        <ul className="nav nav-underline d-flex justify-content-around">
          <li className="nav-item">
            <NavLink className={`nav-link ${({ isActive }) => isActive && 'active'}`} aria-current="page" to="./">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={`nav-link ${({ isActive }) => isActive && 'active'}`} aria-current="page" to="./roadmap">Roadmap</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={`nav-link ${({ isActive }) => isActive && 'active'}`} to="./resources">Resources</NavLink>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;