import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="nav-bar">
          <li>
            <Link className="nav-item" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-item" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="nav-item" to="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className="nav-item" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <div>LinkedIn</div>
            <div>Behance</div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
