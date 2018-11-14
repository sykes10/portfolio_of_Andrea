import React from 'react';
import { Link } from 'react-router-dom';

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header style={{backgroundColor: '#FFADC2'}}>
    <nav>
        {/* <Link className="logo" to='/'>Andrea D.N.</Link> */}
        <Link to='/About'>About</Link>
        <Link to='/'>Works</Link>
    </nav>
  </header>
)

export default Header
