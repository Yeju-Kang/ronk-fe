// components/RankingSection.jsx
import React from "react";
import "./RankingSection.css";

const RankingSection = () => (
  <section className="ranking-section">
    <h2 className="ranking-header">Ranking</h2>
    <div className="ranking-list">
      <div className="ranking-item">1위 제품</div>
      <div className="ranking-item">2위 제품</div>
      <div className="ranking-item">3위 제품</div>
    </div>
  </section>
);

export default RankingSection;
