import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

import "./Navigation.css";

function Navigation(props) {
  return (
    <nav className={`navbar nav__${props.mode}`}>
      <div className="nav__content">
        <div className="nav__brand">
          <h3>Where in the world?</h3>
        </div>
        <div className="style__mode">
          {props.mode === "light" ? (
            <FontAwesomeIcon icon={faMoon} fill />
          ) : (
            <FontAwesomeIcon icon={faSun} spin/>
          )}
        <p onClick={props.toggleMode}>
          {props.mode === "light" ? "Dark Mode" : "Light Mode"}
        </p>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
