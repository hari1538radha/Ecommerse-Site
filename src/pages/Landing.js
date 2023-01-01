import React from "react";
import Navbar from "../component/Navbar/Navbar";
import OfferBanner from "../component/OfferBanner/OfferBanner";
import BestSeller from "../component/Images/BestSeller/BestSeller";
import ItemsGrid from "../component/ItemsGrid";
import Add from "../component/Addcomponent/Add";
const Landing = () => {
  return (
    <div>
      <Navbar />
      <OfferBanner />
      <BestSeller />
      <ItemsGrid />
      <Add />
    </div>
  );
};

export default Landing;
