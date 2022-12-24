import React from "react";
import Banner from "../Images/banner.svg";
const OfferBanner = () => {
  return (
    <div className=" relative h-[700px] flex flex-col items-center justify-center">
      <div
        style={{ backgroundImage: `url(${Banner})` }}
        className="flex items-center h-[658px] w-screen bg-cover bg-no-repeat"
      >
        <p className="w-[680px] pl-[8%] font-bold text-white text-[64px]">
          Super Flash Sale 50% Off
        </p>
      </div>
      <div className=" flex  absolute bottom-[-200px] w-[80%] h-[300px] bg-red-600">
        <div className="w-[418px] bg-green-800">hi</div>
        <div className="w-[418px] bg-green-200">vgbn</div>
        <div>cfvbn</div>
      </div>
    </div>
  );
};

export default OfferBanner;
