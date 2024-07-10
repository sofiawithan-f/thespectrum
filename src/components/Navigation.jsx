import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import logo from "../logoplaceholder.jpg"
import instagram from "../instagramicon.png"
import youtube from "../youtubeicon.png"
import facebook from "../facebookicon.png"

function Navigation() {
  return (
    <header className = "header">
      <nav className="navbar">

       <div
         className={"nav__menu"}
         id="nav-menu"
       >
            <ul className="nav-list">
              <li className="nav-logo">
              <NavLink to="/" className="nav__logo">
              <img className="logo" src = {logo} alt=""/>
             </NavLink>
              </li>
            
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only"></span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/epk">
                  EPK
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className = "nav-socials"><a href = "https://www.instagram.com/sofia_and_the_spectrum"><img className = "social" src = {instagram} alt =""/></a></li>
              <li className = "nav-socials"><a href = "https://www.youtube.com/@SofiaandtheSpectrum"><img className = "social" src = {youtube} alt =""/></a></li>
              <li className = "nav-socials"><a href = "https://www.facebook.com/profile.php?id=61561658813969"><img className = "social" src = {facebook} alt =""/></a></li>
            </ul>
      </div>
      </nav>
    </header>
  );
}

export default Navigation;
