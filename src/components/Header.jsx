import React from "react";

const Header = (props) => {
  return (
    <div className="h-16 w-full drop-shadow-[#808080] text-lg text-lime-600 shadow-md">
      <div className="float-left pl-10 p-5 text-2xl">
        <span className="cursor-pointer capitalize">Corvo Coffee</span>
      </div>
      <div className="float-right pr-10 pt-5 capitalize">
        <span className="cursor-pointer txt-font-family">About us</span>
        <span className="pl-12 cursor-pointer txt-font-family">Find us</span>
      </div>
    </div>
  );
};

export default Header;
