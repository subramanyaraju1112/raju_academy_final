import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { BsCartPlusFill } from "react-icons/bs";

export default function NavBar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse nav_b"
            id="navbarSupportedContent"
          >
            <div className="me-auto"></div>
            <form className="d-flex search-section" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </form>
            <i className="btn" type="submit">
              <BsCartPlusFill />
            </i>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/login"
                >
                  {props.login}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/sign-up">
                  {props.signUp}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
