import React from 'react';

function Navbar () {
  return (
    <div>
      <p>Logo</p>
      <ul>
        <li>
          <a href='/'>
            Home
          </a>
        </li>
        <li>
          <a href='/recipes'>
            Recipes
          </a>
        </li>
        <li>
          <a href='/login'>
            Login
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;