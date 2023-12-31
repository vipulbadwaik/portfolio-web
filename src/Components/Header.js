import React, { useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);

  const changeHeader = () => {

    console.log(window.scrollY);

    if (window.scrollY >= 80) {
      setShow(true);
     
    } else if(window.screenY <80) {
      setShow(false);
    }
  };

  window.addEventListener('scroll', changeHeader);

  return show ? (<div >
    <div className="h-20 flex justify-center">
    <div className="h-10 w-1/3 rounded-full bg-slate-600 flex text-white items-center justify-evenly fixed mt-5">
   <h4 className="cursor-pointer">About</h4> |
   <h4 className="cursor-pointer">Experience</h4> |
   <h4 className="cursor-pointer">Projects</h4> |
   <h4 className="cursor-pointer">Contact</h4>
  </div>
    </div>
  

</div>) : (
    
    <div className="bg-slate-950 text-white flex h-20 justify-between  items-center ">
      <div className="ml-14 text-5xl font-bold italic">VB</div>
      <div className="flex ">
        <h4 className="m-4 p-2 hover:rounded-full hover:text-slate-950 hover:bg-red-300 hover:transition-all ease-in-out delay-100 cursor-pointer">
          About
        </h4>
        <h4 className="m-4 p-2 hover:rounded-full hover:text-slate-950 hover:bg-red-300 hover:transition-all ease-in-out delay-100 cursor-pointer">
          Project
        </h4>
        <h4 className="m-4 p-2 hover:rounded-full hover:text-slate-950 hover:bg-red-300 hover:transition-all ease-in-out delay-100 cursor-pointer">
          Contact
        </h4>
      </div>
    </div>
   
 
  )
};

export default Header;
