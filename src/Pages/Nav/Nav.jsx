import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png"

import "./Nav.css";

function Nav() {
  return (
    <nav>
      <div className="logo-container">
        <img className="logo" alt="imagen del logo de Hexa" src={logo} />
        <p className="name">erman</p>
      </div>


      <ul className="menu">
        <Link className="link" to='/main-app/'>
          <li className="home-menu">Home</li>
        </Link>
        <Link className="link" to='/main-app/about'>
          <li className="about">About me</li>
        </Link>
        <Link className="link" to='/main-app/portfolio'>
          <li className="portafolio">Portfolio</li>
        </Link>
        {/* <Link className="link" to='/main-app/contact'>
          <li className="contact">Contact</li>
        </Link> */}
      </ul>
    </nav>
  );
}

export default Nav;