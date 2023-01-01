import React from "react";
import Bag1 from "./Images/bag1.svg";
import Bag2 from "./Images/bag2.svg";
import { Rating } from "@mui/material";

const Array = [1, 1, 1, 1, 1, 1, 1, 1];
const ItemsGrid = () => {
  return (
    <div className="flex flex-col items-center justify-center">
 <div className="flex flex-wrap w-screen pt-6 pb-6 gap-8 items-center justify-center">
      {
      Array.map((obj)=>(
      <div>
        <div className=" text-poppins flex flex-col items-center w-[301px] h-[388px] gap-y-2 border-[3px] border-gray-100">
          <img className="hover:" src={Bag2}></img>
          <p className="text-[#223263] font-bold text-[18px]">
            Nike Air Max 270 React
          </p>
          <p>
            <Rating value="4" size="small"></Rating>
          </p>
          <div className="flex gap-x-2">
            <p className="text-[#40BFFF] font-bold text-[18px]">$299,43</p>
            <p className="line-through text-[#9098B1]">$534,33</p>
            <p className="text-[#FB7181] font-bold ">24% Off</p>
          </div>
        </div>
      </div>
      ))
}

    </div>
    <div>
      <a className="font-medium text-[20px] text-[#33A0FF] underline pb-6" href="#">Load more</a>
    </div>
    </div>
   
  );
};

export default ItemsGrid;
