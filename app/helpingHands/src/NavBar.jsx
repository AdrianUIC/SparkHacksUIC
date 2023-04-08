import React from "react";
import './App.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Helping Hand Home
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              WorkForce Centers
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              Pricing
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              Pricing
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              Pricing
            </a>
          </li>
          
        </ul>
      </div>
    </nav>

  );
};

export default Navbar;