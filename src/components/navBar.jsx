import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <FaAlignJustify className="nav-icon" />
            </span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/projects" className="nav-link">
                  Projects
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/blogs" className="nav-link">
                  Blogs
                </Link>
              </li>
              {/* <div className="dropdown">
                <span className="dropbtn">Projects</span>
                <div className="dropdown-content">
                  <a href="https://eazsme.netlify.app/">
                    eazSME
                  </a>
                  <a href="https://agroconnects.herokuapp.com">
                    AgroConnect
                  </a>
                </div>
              </div> */}
              {/* <div className="dropdown">
                <span className="dropbtn">Blogs</span>
                <div className="dropdown-content">
                  <a href="https://victoryohanna.medium.com/introduction-to-test-driven-development-9dda03d544bc">
                    Introductio to Test-driven Development
                  </a>
                  <a href="https://victoryohanna.medium.com/dont-give-up-5eb1bafd8e88">
                    Be Inspired
                  </a>
                  <a href="https://victoryohanna.medium.com/how-to-perform-test-driven-development-37d6a081d1fa">
                    How to perform Test-driven Develoment
                  </a>
                </div>
              </div> */}
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
