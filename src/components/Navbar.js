import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light shadow">
        <div className="container">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="btn btn-outline-primary ms-auto px-4 rounded-pill"
                to="/"
              >
                Homepage
              </Link>
            </li>
          </ul>
          <Link className="navbar-brand fw-bolder fs-4 mx-auto " to="/">
            FINN MART
          </Link>

          <>
            <Link
              to="/login"
              className="btn btn-outline-primary ms-auto px-4 rounded-pill "
            >
              <i className="bi bi-box-arrow-in-right"></i> Login
            </Link>
            <Link
              to="/register"
              className="btn btn-outline-primary ms-2 px-4 rounded-pill "
            >
              <i className="bi bi-person-plus"></i>Register
            </Link>
            <Link
              to="/orders"
              className="btn btn-outline-primary ms-2 px-4 rounded-pill "
            >
              <i className="bi bi-cart3"></i>
            </Link>
          </>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
