import React from "react";
import { Link } from 'react-router-dom';
import logo from '../images/plants.png'; 

export default function Navbar() {
  return (
    <>
      <div className='navbox'>
        <div className='leftside'>
          <img src={logo} alt="" />
        </div>
        <div className='rightside'>
          <Link to='signin' className='navlinks'>Sign in</Link>
          <Link to='login' className='navlinks'>Login</Link>
        </div>
      </div>
      <h1> Green house </h1>
      <nav>
        <ul>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/shop/">SHOP</a>
          </li>
          <li>
            <a href="/about">ABOUT</a>
          </li>
          <li>
            <a href="/contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
