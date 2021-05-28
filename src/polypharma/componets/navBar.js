import React, { Component } from 'react';
import { Link,NavLink,Router } from "react-router-dom";
import POLYPHARMA from "./POLYPHARMA LOGO.png";

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <Link to="/" style={{}} class="navbar-brand">
      <img src={POLYPHARMA}
       style={{}} width="300" className="d-inline-block align-text-top"/>
    </Link>
    <div className="collapse navbar-collapse" id="navbarNavDropdown" style={{marginLeft:'550px'}}>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link style={{fontSize:'20px'}} className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link style={{fontSize:'20px'}} className="nav-link" to="/About">About</Link>
        </li>
        <li className="nav-item">
          <Link style={{fontSize:'20px'}} className="nav-link" to="/product">Product</Link>
        </li>
        <li className="nav-item">
          <Link style={{fontSize:'20px'}} className="nav-link" to="/Availibity">Availibility</Link>
          
        </li>
        
        <li style={{}} className="nav-item">
          <Link style={{fontSize:'20px'}} class="nav-link" to="/Contact">Contact Us</Link>
          
        </li>
     
      </ul>
    </div>
    
  </div>
</nav>
            </div>
         );
    }
}
 
export default NavBar;