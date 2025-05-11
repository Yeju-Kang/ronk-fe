// components/AdSection.jsx
import React from "react";
import "./AdSection.css";

const AdSection = ({ wide }) => (
  <section className={`ad-section ${wide ? "wide" : ""}`}>
    <div className="ad-content">광고 영역입니다</div>
  </section>
);

export default AdSection;
