import React from "react";
import DownArrow from "../Images/arrowdown.svg";
import Profile from "../Images/profile.svg";
import Cart from "../Images/Cart.svg";
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
      <div>
        <p className="flex ">
          <img src={Profile}></img>
          Profile
        </p>
        <p>
        <img src={Cart}></img>
Items
        </p>
      </div>
    </div>
  );
};

export default NavbarOptions;
