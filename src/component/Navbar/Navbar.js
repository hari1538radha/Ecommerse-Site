import React from "react";
//Image import
import Logo from "../Images/FOOTER.svg";

const Navbar = () => {
  return (
    <div className="flex h-[100px] font-poppins items-center justify-between">
      <div className="pl-[104px]">
        <img src={Logo} alt="logo"></img>
      </div>
      <div className="flex gap-x-24 pr-44 text-2xl font-medium">
        <a className="hover:text-[#40BFFF]" href="#">
          Home
        </a>
        <a className="hover:text-[#40BFFF]" href="#">
          Sneaker
        </a>
        <a className="hover:text-[#40BFFF]" href="#">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
