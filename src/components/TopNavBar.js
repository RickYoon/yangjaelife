import React from "react";
import { Link } from "react-router-dom";

const TopNavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container">
          <Link className="navbar-brand" to="/">
            죽동생활수첩
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
                <Link className="nav-link" to="/food">
                  음식점
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cafe">
                  카페/빵
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  운동
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/education">
                  학원
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/hospital">
                  병원
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/estate">
                  부동산
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/trip">
                  근교정보
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
