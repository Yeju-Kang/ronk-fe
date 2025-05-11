import React from "react";
import "./TopicArea.css"; // 스타일을 별도로 관리하는 회사 스타일

const TopicArea = () => {
  // 추후 props 또는 redux로 동적 주제를 바꿀 수 있도록 설계
  const topic = "여름에 가장 잘 어울리는 옷은?";

  return (
    <section className="topic-area">
      <h2 className="topic-title">주제 : {topic}</h2>
    </section>
  );
};

export default TopicArea;
