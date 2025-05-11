// components/ThemeSection.jsx
import React from "react";
import "./ThemeSection.css";

const ThemeSection = ({ title }) => (
  <section className="theme-section">
    <h2 className="theme-title">{title}</h2>
    <div className="product-grid">
      {[1, 2, 3, 4, 5].map((num) => (
        <div key={num} className="theme-product-card">
          <div className="theme-product-badge">Top {num}</div>
          <div className="theme-product-info">
            <h3 className="theme-product-name">제품 {num}</h3>
            <p className="theme-product-price">119,000원</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ThemeSection;
