import React from "react";
import Banner from "../Images/banner.svg";
import Bag from "../Images/bag.svg";
import Nike1 from "../Images/nike.svg";
import Nike2 from "../Images/nike2.svg";
const OfferBanner = () => {
  return (
    <div className=" relative h-[700px]  flex flex-col items-center justify-center">
      <div
        style={{ backgroundImage: `url(${Banner})` }}
        className="flex items-center h-[658px] w-screen bg-cover bg-no-repeat"
      >
        <p className="w-[680px] pl-[8%] font-bold text-white text-[64px]">
          Super Flash Sale 50% Off
        </p>
      </div>
      <div className=" flex  absolute bottom-[-200px] w-[80%] h-[300px] bg-gradient-to-r from-gray-300 to-white">
        <div
          style={{ backgroundImage: `url(${Bag})` }}
          className="w-[418px] hover:scale-110 duration-500 border-gray-200 border-[0.5px]  bg-no-repeat bg-cover"
        >
          <p className="w-[202px] font-bold text-xl text-[#223263] mt-[5.5%] ml-[15%]">
            FS - QUILTED MAXI CROSS BAG
          </p>
          <div className="flex ml-[65%]  gap-x-3 mt-[-10%]">
            <p className="line-through text-[#9098B1]">$534,33</p>
            <p className="text-[#FB7181] font-bold ">24% Off</p>
          </div>
          <div className="mt-[53%] pl-6 text-[#40BFFF] font-bold text-[18px]">
            {" "}
            <p>$299,43</p>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${Nike1})` }}
          className="w-[418px] hover:scale-110 duration-500 border-gray-200 border-[0.5px] bg-no-repeat bg-cover"
        >
          <p className="w-[202px] font-bold text-xl text-[#223263] mt-[5.5%] ml-[15%]">
            FS - Nike Air Max 270 React...
          </p>
          <div className="flex ml-[65%]  gap-x-3 mt-[-10%]">
            <p className="line-through text-[#9098B1]">$534,33</p>
            <p className="text-[#FB7181] font-bold ">24% Off</p>
          </div>
          <div className="mt-[53%] pl-6 text-[#40BFFF] font-bold text-[18px]">
            {" "}
            <p>$299,43</p>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${Nike2})` }}
          className="w-[418px] hover:scale-110 duration-500 border-gray-200 border-[0.5px]   bg-no-repeat bg-cover"
        >
          <p className="w-[202px] font-bold text-xl text-[#223263] mt-[5.5%] ml-[15%]">
            FS - QUILTED MAXI CROSS BAG
          </p>
          <div className="flex ml-[65%]  gap-x-3 mt-[-10%]">
            <p className="line-through text-[#9098B1]">$534,33</p>
            <p className="text-[#FB7181] font-bold ">24% Off</p>
          </div>
          <div className="mt-[53%] pl-6 text-[#40BFFF] font-bold text-[18px]">
            {" "}
            <p>$299,43</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferBanner;
