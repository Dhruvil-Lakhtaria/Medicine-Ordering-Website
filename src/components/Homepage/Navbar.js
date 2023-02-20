import React from "react";
import logo from "../../img/cardiogram.png";
import $ from "jquery";

const handleClick = () => {
  $(".nav").toggleClass("mobile-nav");
  $(".menu-toggle").toggleClass("is-active");
};
const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="grad-bar"></div>
      <div className="navbar">
        <div className="header">
          <a href="/Medicine-Ordering-Website" className="main-icon"><img alt="logo" src={logo} className="nav-logo"></img></a>
          <h1>MediSafe</h1>
        </div>
        <div className="menu-toggle" id="mobile-menu" onClick={handleClick}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className="nav">
          <li className="nav-item nav-h">
            <a href="/Medicine-Ordering-Website">Home</a>
          </li>
          <li className="nav-item nav-a">
            <a href="/Medicine-Ordering-Website/appointment">Appointments</a>
          </li>
          <li className="nav-item nav-m">
            <a href="/Medicine-Ordering-Website/mymeds">MyMeds</a>
          </li>
          <li className="nav-item nav-s">
            <a href="/Medicine-Ordering-Website/snooze">Snooze</a>
          </li>
          <li className="nav-item nav-r">
            <a href="/Medicine-Ordering-Website/auth">Register</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
