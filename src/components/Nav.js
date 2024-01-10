import React from "react";
import { Link, withRouter } from "react-router-dom";
const Nav = () => {
    const navstyle = {
        color: "white", 
        textDecoration: 'none'
    }
  return (
    <div>
      <nav>
      <Link to="/" style ={navstyle}>
      <h1>Logo</h1>
            </Link>
          
          <ul className="nav-links">
            <Link to="/" style ={navstyle}>
              <li>Home</li>
            </Link>
            <Link to="/search" style ={navstyle}>
              <li>Search</li>
            </Link>
            <Link to="/mylist" style ={navstyle}>
              <li>Mylist</li>
            </Link>
          </ul>
      </nav>
    </div>
  );
};

export default Nav;
