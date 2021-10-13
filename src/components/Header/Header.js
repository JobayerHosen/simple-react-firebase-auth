import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/home">
            Firebase Auth
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {!user ? (
                <>
                  <li className="nav-item ms-2">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item ms-2">
                    <NavLink
                      className="nav-link btn btn-success text-white"
                      to="/signup"
                      tabIndex="-1"
                    >
                      Sign Up
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item ms-2">
                    <button onClick={logOut} className="btn btn-outline-danger" type="submit">
                      Log Out
                    </button>
                  </li>
                  <li className="nav-item ms-2">
                    <img
                      className="rounded-circle"
                      src={user.photoURL}
                      alt=""
                      title={user.displayName}
                      width="40px"
                      height="40px"
                    />
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
