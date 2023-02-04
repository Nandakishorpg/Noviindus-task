import React from "react";
import "./navbar.css";


export default function Navbar() {
  return (
    <div className="nav">
      <div className="container">
        <div className="navBar">
          {/* navbar-logo */}
          <div className="logo">
            <img
              src="https://i.ibb.co/7vs6FSt/logo.png"
              alt="logo"
              border="0"
            />
            <br />
            <br />
          </div>
          {/* navbar-links */}
          <div className="links">
            <span className="first">Home</span>
            <span className="second">About us</span>
            <span className="third">Saphire</span>
            <span className="fourth">Contact us</span>
          </div>

          {/* button */}

          <div className="button">
            <button className="letstalk" variant="contained">
              Lets Talk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
