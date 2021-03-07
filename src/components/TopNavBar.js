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
                <Link className="nav-link" to="/living">
                  전체보기
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  운동정보
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Development">
                  교육정보
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Development">
                  식당정보
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Development">
                  카페정보
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  정보요청하기
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
