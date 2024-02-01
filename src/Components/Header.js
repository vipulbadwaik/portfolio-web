import React, { useState } from "react";

const Header = () => {
 

  return (
    <div className=" flex justify-center">
      <div className="h-10 w-1/3 rounded-full bg-slate-600 flex text-white items-center justify-evenly fixed mt-5">
        <h4 className="cursor-pointer">About</h4> |
        <h4 className="cursor-pointer">Experience</h4> |
        <h4 className="cursor-pointer">Projects</h4> |
        <h4 className="cursor-pointer">Contact</h4>
      </div>
    </div>
  );
};

export default Header;
