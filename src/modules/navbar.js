import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
 
  return (
    <nav
      className={`navbar navbar-expand-lg  bg-${props.mode} navbar-${props.mode}` }
     
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        </ul> */}
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input
            onClick={props.Toggler}
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Enable DarkMode
          </label>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = { title: PropTypes.string, drop1: PropTypes.string };
Navbar.defaultProps = {
  title: "title",
  drop1: "drop1",
};
