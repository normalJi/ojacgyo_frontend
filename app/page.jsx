'use client';
import React from "react";
import MainBanner from "./user/product/mainBanner";
import PremiumBanner from "./user/product/premiumBanner";
import NewStoreBanner from "./user/product/newStoreBanner";

const Home = () => {
  return (
    <div className="container px-5 py-5 mx-auto">
      <MainBanner />
      <PremiumBanner />
      <NewStoreBanner />
    </div>
  );
}

export default Home;