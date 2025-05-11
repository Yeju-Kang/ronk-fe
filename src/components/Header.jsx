// 예시: components/Header.jsx
import React from "react";
import "./Header.css";

const Header = () => (
  <header>
    <div className="header-content">
      <h1 className="logo-text">
        <span className="main-title">Ronk</span>
        <span className="sub-title">Ranking or Not Korea</span>
      </h1>
      <div className="theme-toggle">
        <span>Dark</span>
      </div>
    </div>
  </header>
);

export default Header;
