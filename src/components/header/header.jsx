import React from "react";
import "./header.css";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <a href="#top" className="nav-link">
            <li>Home </li>
          </a>
          <a href="#about" className="nav-link">
            <li>About</li>
          </a>

          <a href="#contact-form" className="nav-link">
            <li>Let's Talk </li>
          </a>
        </ul>
      </nav>
    </header>
  );
};
