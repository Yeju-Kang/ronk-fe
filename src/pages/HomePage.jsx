import React from "react";
import Header from "../components/Header";
import TopicArea from "../components/TopicArea";
import VotingSection from "../components/VotingSection";
import ChatSection from "../components/ChatSection";
import AdSection from "../components/AdSection";
import RankingSection from "../components/RankingSection";
import ThemeSection from "../components/ThemeSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="homepage dark-mode">
      <Header />
      <main>
        <TopicArea />
        <VotingSection />
        <ChatSection />
        <AdSection />
        <RankingSection />
        <ThemeSection title="이번주 인기 Top5" />
        <AdSection wide />
        <ThemeSection title="올해 여름을 시원하게 할 제품 Top5" />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
