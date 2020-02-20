import React from 'react';

const Navbar = () => {
    return (
      <nav>
        <div class="nav-wrapper">
          <a href="/" class="brand-logo">
            Home
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <a href="/directory">Directory</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Navbar;