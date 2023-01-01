import React from "react";
import Navbar from "../component/Navbar/Navbar";
import OfferBanner from "../component/OfferBanner/OfferBanner";
import BestSeller from "../component/Images/BestSeller/BestSeller";
import ItemsGrid from "../component/ItemsGrid";
const Landing = () => {
  return (
    <div>
      <Navbar />
      <OfferBanner />
      <BestSeller />
      <ItemsGrid />
    </div>
  );
};

export default Landing;
