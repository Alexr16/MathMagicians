import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Navbar = () => {
  const links = [{
    id: 1,
    path: '/',
    text: 'Home',
  },
  {
    id: 2,
    path: '/calculator',
    text: 'Calculator',
  },
  {
    id: 3,
    path: '/quote',
    text: 'Quote',
  }];

  return (
    <div>
      <nav
        style={{
          padding: '1rem',
        }}
      >
        <h1>Math Magicians</h1>
        <ul style={{ display: 'flex', flexDirection: 'row' }}>
          {links.map((link) => (
            <li
              key={link.id}
              style={{
                padding: '1rem',
                listStyle: 'none',
              }}
            >
              <NavLink
                style={({ isActive }) => ({
                  display: 'block',
                  textDecoration: 'none',
                  margin: '1rem 0',
                  color: isActive ? 'red' : '',
                })}
                to={link.path}
                exact
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};
export default Navbar;
