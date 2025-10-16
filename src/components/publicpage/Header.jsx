import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header id="header-section">
      <div className="overlay">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container">
            <a className="navbar-brand" href="index.html">
              <img
                src="assets/uploads/logo/logo.png"
                alt="edge trader TIP"
              />
            </a>

            {/* Toggle Button */}
            <button
              className="navbar-toggler p-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars" />
            </button>

            {/* Nav Links */}
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
  <li className="nav-item">
    <NavLink
      to="/"
      end
      className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
    >
      Home
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink
      to="/about"
      className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
    >
      About Us
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink
      to="/plan"
      className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
    >
      Plan
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink
      to="/blog"
      className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
    >
      Blogs
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink
      to="/faq"
      className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
    >
      FAQ
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink
      to="/contact"
      className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
    >
      Contact
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink
      to="/login"
      className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
    >
      LOGIN
    </NavLink>
  </li>
</ul>

            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
