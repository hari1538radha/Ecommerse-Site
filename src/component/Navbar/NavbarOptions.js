import React from "react";
import DownArrow from "../Images/arrowdown.svg";
import Profile from "../Images/profile.svg";
import Cart from "../Images/Cart.svg";
import Search from "../Images/search.svg";

const NavbarOptions = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="h-16 items-center  flex gap-x-3 pl-[104px] font-normal text-[20px]">
        <p className="flex items-center gap-x-1">
          EN
          <img src={DownArrow}></img>
        </p>
        <p className="flex items-center gap-x-1">
          USD
          <img src={DownArrow}></img>
        </p>
      </div>
      <div className="flex text-[20px] font-normal gap-x-4 pr-44 ">
        <p className="flex gap-x-2 ">
          <img src={Profile}></img>
          Profile
        </p>
        <p className="flex gap-x-5">
        <img src={Cart}></img>
Items
        </p>
<p className=" flex gap-x-3 text-gray-300">
$0.00
<img src={Search}></img>
</p>

        
      </div>
    </div>
  );
};

export default NavbarOptions;
