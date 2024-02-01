import React, { useState } from "react";

const Header = () => {
 

  return (
    <div className=" flex justify-center">
      <div className="h-10 w-1/3 rounded-full bg-slate-600 flex text-white items-center justify-evenly fixed mt-5">
        <h4 className="cursor-pointer hover:text-blue-500 ">About</h4> |
        <h4 className="cursor-pointer hover:text-blue-500">Experience</h4> |
        <h4 className="cursor-pointer hover:text-blue-500">Projects</h4> |
        <h4 className="cursor-pointer hover:text-blue-500">Contact</h4>
      </div>
    </div>
  );
};

export default Header;
