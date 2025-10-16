import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="overlay">
        <div className="container">
          <div className="row gy-5 gy-lg-0">
            {/* Company Info */}
            <div className="col-lg-3 col-md-6 pe-lg-5">
              <div className="footer-box">
                <a className="navbar-brand" href="index.html">
                  <img
                    src="assets/uploads/logo/logo.png"
                    alt="edge trader TIP"
                  />
                </a>
                <p className="company-bio">
                  edge trader Tips is here to provide you with its
                  user-friendly platform, secure infrastructure, and
                  game-changing applications.
                </p>
              </div>
            </div>

            {/* Useful Links */}
            <div className="col-lg-3 col-md-6 ps-lg-5">
              <div className="footer-box">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <NavLink to="/" end>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/plan">Plan</NavLink>
                  </li>
                  <li>
                    <NavLink to="/blog">Blog</NavLink>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-lg-3 col-md-6 ps-lg-5">
              <div className="footer-box">
                <h4>Contact Us</h4>
                <ul>
                  <li>
                    Address:{" "}
                    <span>
                      200 S Civic Center Dr Suite 700, Columbus, OH 43215,
                      United States of America.
                    </span>
                  </li>
                  <li>
                    Email: <span>admin@optimizetradingtips.com</span>
                  </li>
                  <li>
                    Phone: <span>+1(760) 530-8986</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Social Links */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-box">
                <h4>Follow us on</h4>
                <div className="social-links">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="facebook"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="facebook"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="https://bd.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="facebook"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="facebook"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="d-flex copyright justify-content-between">
            <div>
              <span>
                Copyright © 2025 Edge Trader TIP All Rights Reserved
              </span>
            </div>
            <div className="text-md-end">
              <NavLink to="/" className="language" end>
                English
              </NavLink>
              <NavLink to="/" className="language">
                Hindi
              </NavLink>
              <NavLink to="/" className="language">
                Spanish
              </NavLink>
            </div>
          </div>

          {/* 3CX Call Widget */}
          <call-us-selector
            phonesystem-url="https://1661.3cx.cloud"
            party="edgetradertips"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
