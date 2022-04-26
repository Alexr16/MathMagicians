import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Navbar = () => (
  <div>
    <nav
      style={{
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <h1>Math Magicians</h1>
      <ul style={{ display: 'flex', alignItems: 'center' }}>
        <li
          className="li-navbar"
          key={1}
        >
          <NavLink
            style={({ isActive }) => ({
              display: 'block',
              textDecoration: 'none',
              color: isActive ? 'blue' : 'black',
            })}
            to="/"
            exact
          >
            Home
          </NavLink>
        </li>
        <li
          className="li-navbar li-mid"
          key={2}
        >
          <NavLink
            style={({ isActive }) => ({
              display: 'block',
              textDecoration: 'none',
              color: isActive ? 'blue' : 'black',
            })}
            to="/calculator"
            exact
          >
            Calculator
          </NavLink>
        </li>
        <li
          className="li-navbar"
          key={3}
        >
          <NavLink
            style={({ isActive }) => ({
              display: 'block',
              textDecoration: 'none',
              color: isActive ? 'blue' : 'black',
            })}
            to="/quote"
            exact
          >
            Quote
          </NavLink>
        </li>
      </ul>
    </nav>
    <Outlet />
  </div>
);

export default Navbar;
