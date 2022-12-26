import React from "react";
import Navbar from "../component/Navbar/Navbar";
import OfferBanner from "../component/OfferBanner/OfferBanner";
import BestSeller from "../component/Images/BestSeller/BestSeller";
const Landing = () => {
  return (
    <div>
      <Navbar />
      <OfferBanner />
      <BestSeller />
    </div>
  );
};

export default Landing;
