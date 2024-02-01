import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Intro = () => {
  return (
    <div className="h-screen bg-slate-950 flex justify-between items-center ">
      <div className="flex flex-col ml-16">
        <section>
        <h1 className="text-white lg:text-2xl text-xl ">
          Hi 🙋‍♂️, I am 
        </h1>
        <h1 className="text-white lg:text-7xl text-2xl ">
        Vipul Badwaik{" "}
        </h1>
        </section>
        <section className="mt-3">

        <h1 className="text-white lg:text-2xl text-xl">
          {" "}
          I'm
        </h1>
          <h1 className="text-green-500 lg:text-7xl text-2xl">
            <Typewriter
              words={[
                "Fronted Developer",
                "Software Engineer",
                "Tech Enthusiast",
                "Coder",
              ]}
              loop="false"
              cursor
              cursorStyle="."
            />
          </h1>
        </section>
      </div>
      <div className=" mr-40">
        <img
          className="h-96 w-96 drop-shadow-3xl  "
          src="https://i.ibb.co/j6JM8SK/IMG-20231113-224346-057-removebg-preview.png"
        />
      </div>
      
    </div>
  );
};

export default Intro;
