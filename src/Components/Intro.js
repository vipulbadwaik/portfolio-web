import React from "react";
import { Typewriter } from "react-simple-typewriter";



const Intro = () => {
  return (
    <div className="h-full bg-slate-950 flex justify-between items-center">
      <div className="flex flex-col ml-16">
        <h1 className="text-white text-7xl">Hi 👋, I am </h1>
        <h1 className="text-green-500 text-7xl">
          <Typewriter
            words={[
              "Fronted Developer",
              "Software Engineer",
              "Tech Enthusiast",
              "Coder",
            ]}
            loop="false"
            cursor
            cursorStyle="_"
          />
        </h1>
      </div>
      <div className=" mr-40">
        <img className="h-96 w-96 " src="https://i.ibb.co/j6JM8SK/IMG-20231113-224346-057-removebg-preview.png"/>
      </div>
    </div>
  );
};

export default Intro;
