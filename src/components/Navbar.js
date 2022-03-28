import React from "react";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";

function Navbar() {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light shadow">
        <div className="container">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link
              className="btn btn-outline-primary ms-auto px-4 rounded-pill"
              to="/"
            >
              Homepage
            </Link>
          </ul>
          <Link className="navbar-brand fw-bolder fs-4 mx-auto " to="/">
            FINN MART
          </Link>

          <>
            <Link
              to="/myorders"
              className="btn btn-outline-primary ms-auto px-4 rounded-pill "
            >
              <i className="bi bi-bag"></i> My Orders
            </Link>
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
              <Badge badgeContent={quantity} color="primary">
                <i className="bi bi-cart3"></i>
              </Badge>
            </Link>
          </>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
