import React from "react";
import { Link } from "react-router-dom";

const TopNavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container">
          <Link className="navbar-brand" to="/">
            구일생활수첩
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
                <Link className="nav-link" to="/">
                  개발정보
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Development">
                  생활정보
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  서비스안내
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TopNavBar;
