import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/schogo.png";

export default function Navbar() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg pt-4 navbar-dark" id="menu">
        <NavLink to="/">
          <img
            src={Logo}
            className="navbar-brand align-self-start"
            alt="scho.pro"
            width="60"
            height="60"
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav flex-column">
            <NavLink to="/" className="nav-link g1">
              <li className="nav-item">Home</li>
            </NavLink>
            <li className="nav-item project-nav">
              <div className="accordion">
                <div className="accordion-item">
                  <p className="accordion-header align-items-end nav-link">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Projects
                    </button>
                  </p>
                  <div
                    id="collapseTwo"
                    className="proj-nav-collapse collapse"
                    data-bs-parent="#proj-navExample"
                  >
                    <div className="proj-nav-body">
                      <ul>
                        <NavLink
                          className="nav-link g1"
                          to="/work/beyondbitesize"
                        >
                          <li className="sub-link">Beyond Bitesize</li>
                        </NavLink>
                        <NavLink className="nav-link g2" to="/work/scho">
                          <li className="sub-link">
                            Personal Identity (scho.)
                          </li>
                        </NavLink>
                        <NavLink className="nav-link g3" to="/work/growbuddy">
                          <li className="sub-link">Grow Buddy</li>
                        </NavLink>
                        <li className="sub-link">
                          <NavLink
                            className="nav-link g4"
                            to="/work/theodddystrict"
                          >
                            The Odd Dystrict
                          </NavLink>
                        </li>
                        <NavLink className="nav-link g1" to="/work/juno">
                          <li className="sub-link">Juno Bakeshop</li>
                        </NavLink>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <NavLink className="nav-link g3" to="/about">
              <li className="nav-item">About</li>
            </NavLink>
            <NavLink className="nav-link g4" to="/contact">
              <li className="nav-item">Contact</li>
            </NavLink>
            {/* <li className="nav-item d-flex flex-row justify-content-end">
              <a className="nav-link g1"><i className="fa-brands fa-square-instagram"></i></a>
              <a className="nav-link g2"><i className="fa-brands fa-square-behance"></i></a>
            </li>  */}
          </ul>
        </div>
      </nav>
    </div>
  );
}
