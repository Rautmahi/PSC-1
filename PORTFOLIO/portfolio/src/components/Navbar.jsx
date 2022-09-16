import React from "react";
import "../styles/navbar.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="mainNav">
      <nav
        id="navDiv"
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "rgb(12, 20, 27)", height: "4rem" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img style={{"borderRadius":"5rem","height":"30px","width":"30px"}} className="myLogo" src={logo} alt="" />
          </a>
          <button 
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ham-memo me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="links" href="#profileDiv">
                  <p
                    id="listComponents"
                    style={{ color: "#339fec" }}
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </p>
                </a>
              </li>

              <li className="nav-item">
                <a className="links" href="#about">
                  <p
                    id="listComponents"
                    style={{ color: "#339fec" }}
                    className="nav-link"
                    href="#about"
                  >
                    About
                  </p>
                </a>
              </li>

              <li className="nav-item">
                <a className="links" href="#skills">
                  <p
                    id="listComponents"
                    style={{ color: "#339fec" }}
                    className="nav-link"
                    href="#skills"
                  >
                    Skills
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a className="links" href="#myProjects_main">
                  <p
                    id="listComponents"
                    style={{ color: "#339fec" }}
                    className="nav-link"
                    href="#" 
                  >
                    Projects
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a className="links" href="#footer">
                  <p
                    id="listComponents"
                    style={{ color: "#339fec" }}
                    className="nav-link"
                    href="#"
                  >
                    Contact
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
