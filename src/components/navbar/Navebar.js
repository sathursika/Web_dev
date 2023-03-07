import React from 'react';
import "./index.css";
import logo from "../assets/image2.jpg"

function Navebar() {
  return (
    <nav className="navbar has-background-danger-light is-fixed-top" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="https://bulma.io">
        <img src={logo} width={30} height={30} /><h2 className="is-4">ATHU</h2>
      </a>
      <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>
    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <a className="navbar-item" href="#intro">
          <span className="icon">
            <i className="fas fa-info" />
          </span>
          ABOUT Me
        </a>
        <a className="navbar-item" href="#skills">
          <span className="icon">
            <i className="fas fa-chart-pie" />
          </span>
          <span>SKILLS</span>
        </a>
        <a className="navbar-item" href="#edu">
          <span className="icon">
            <i className="fas fa-book" />
          </span>
          EDUCATION
        </a>
        <a className="navbar-item" href="#contact">
          <span className="icon">
            <i className="fas fa-envelope" />
          </span>
          <span>CONTACT</span>
        </a>
      </div>
    </div>
    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button has-background-danger-light">
            <strong>Sign up</strong>
          </a>
          <a className="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </nav>
  );
}

export default Navebar