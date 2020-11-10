import React from "react";
import Header from "../components/Header";
import BannerText from "../components/BannerText";
import Navbar from "../components/Navbar";
import TopHeader from "../components/TopHeader";
export default function Home() {
  return (
    <div>
      <Header>
        <TopHeader />
        <Navbar />
        <BannerText />
      </Header>
    </div>
  );
}
