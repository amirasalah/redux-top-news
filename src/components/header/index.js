import { NavLink } from 'react-router-dom';
import React from 'react'
import { HeaderWrapper, Link } from './header.styles';

const Header = () => {
  return ( 
    <HeaderWrapper>
      <nav>
        <ul>
          <Link to="/">All sources</Link>
        </ul>
      </nav>
    </HeaderWrapper>
  )
}

export default Header;

