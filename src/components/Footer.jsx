// components/Footer.jsx
import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer>
    <div className="footer-content">
      <div className="footer-logo">
        <span className="footer-title">Ronk</span>
        <span className="footer-subtitle">랭킹 서비스</span>
      </div>
      <div className="footer-info">
        <p>© 2023 Ronk. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
