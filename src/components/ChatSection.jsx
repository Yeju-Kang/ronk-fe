// components/ChatSection.jsx
import React from "react";
import "./ChatSection.css";

const ChatSection = () => (
  <section className="chat-section">
    <h2 className="chat-header">실시간 채팅</h2>
    <div className="chat-messages"></div>
    <input
      type="text"
      className="chat-input"
      placeholder="메시지를 입력하세요"
    />
    <button className="send-button">전송</button>
  </section>
);

export default ChatSection;
