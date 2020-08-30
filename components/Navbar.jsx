import React, { useState } from "react";

export default function Navbar() {
  const [burgerActive, setBurgerActive] = useState(false);

  return (
    <nav
      className="navbar is-fixed-top"
      style={{ backgroundColor: "rgba(30, 39, 46,0.5)" }}
    >
      <div className="navbar-brand">
        <a className="navbar-item is-size-6" href="#home">
          StrandbergLegal
        </a>

        <a
          role="button"
          className={`navbar-burger burger has-text-white ${
            burgerActive && "is-active"
          }`}
          aria-label="menu"
          aria-expanded="false"
          data-target="StranbergLegalNavbar"
          onClick={() => setBurgerActive(!burgerActive)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div
        id="StranbergLegalNavbar"
        className={`navbar-menu ${burgerActive && "is-active"}`}
      >
        <a
          className="navbar-item is-size-6"
          href="#about"
          onClick={() => setBurgerActive(!burgerActive)}
        >
          About
        </a>
        <a
          className="navbar-item is-size-6"
          href="#areas"
          onClick={() => setBurgerActive(!burgerActive)}
        >
          Practice areas
        </a>
        <a
          className="navbar-item is-size-6"
          href="#bulletin"
          onClick={() => setBurgerActive(!burgerActive)}
        >
          Bulletin
        </a>
        <a
          className="navbar-item is-size-6"
          href="#artciles"
          onClick={() => setBurgerActive(!burgerActive)}
        >
          Articles
        </a>
        <a
          className="navbar-item is-size-6"
          href="#contact"
          onClick={() => setBurgerActive(!burgerActive)}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
