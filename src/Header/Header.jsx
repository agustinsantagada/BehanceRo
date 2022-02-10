import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Behance from "../images/behance.svg";
import Linkedin from "../images/linkedin.svg";
import "./Header-Style.css";

function Header() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (!open) {
      document.getElementById("close-button").click();
    }
  }, [open]);

  return (
    <header className="header-nav">
      <input id="desplegar" type="checkbox" className="custom-checkbox" />
      <label
        onClick={() => setOpen(true)}
        id="close-button"
        for="desplegar"
        className="label-burger"
      >
        <div className="logo">ROCÍO ABAD</div>
        <div className="mostrar-menu">
          <div className="linea linea-top"></div>
          <div className="linea linea-med"></div>
          <div className="linea linea-low"></div>
        </div>
      </label>
      <div class="menu-desplazable">
        <ul className="nav-menu">
          <li>
            <Link
              onClick={() => setOpen(false)}
              className="lista-ul-botton"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setOpen(false)}
              className="lista-ul-botton"
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setOpen(false)}
              className="lista-ul-botton"
              to="/projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setOpen(false)}
              className="lista-ul-botton"
              to="/contact"
            >
              Contact
            </Link>
          </li>
          <div class="underbar"></div>
          {/* <div className="lista-ul-social">
            <li>
              <a
                href="https://www.linkedin.com/rocioabad"
                className="lista-ul-botton"
              >
                <img src={Linkedin} alt="linkedin" />
              </a>
            </li>
            <li>
              <a
                href="https://www.behance.net/rocioabad"
                className="lista-ul-botton"
              >
                <img src={Behance} alt="behance" />
              </a>
            </li>
          </div> */}
        </ul>
      </div>
    </header>
  );
}

export default Header;
