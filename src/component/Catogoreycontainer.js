import React from "react";

const Catogoreycontainer = () => {
  return (
    <div>
      <div className="flex justify-between gap-x-16 mt-10  text-[#262626] font-medium text-xl items-center">
        <a
          href="#"
          className="hover:text-[#33A0FF] hover:underline  duration-500"
        >
          All
        </a>
        <a
          href="#"
          className="hover:text-[#33A0FF] hover:underline  duration-500"
        >
          Bags
        </a>
        <a
          href="#"
          className="hover:text-[#33A0FF] hover:underline  duration-500"
        >
          Sneaker
        </a>
        <a
          href="#"
          className="hover:text-[#33A0FF] hover:underline  duration-500"
        >
          Belt
        </a>
        <a
          href="#"
          className="hover:text-[#33A0FF] hover:underline  duration-500"
        >
          Sunglasses{" "}
        </a>
      </div>
    </div>
  );
};

export default Catogoreycontainer;
