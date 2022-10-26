import React from 'react';
import logo from "../img/logo.png"

function HeroSection(props) {
    return (
        <section id="hero">

        <div className="container flex flex-col-reverse md:flex-row items-center 
        px-6 mx-auto mt-10 space-y-0 md:space-y-0">
           
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">

          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left ">
           Hardwork and persistency can do it all!
          </h1>

          <p className="max-w-md text-center text-darkGrayishBlue md:text-left">
           Building high quality and complex projcts since 2 years , complete full stack software solutions at your reach. 
          </p>

          <div className="flex justify-center md:justify-start">
          <button className=" bg-brightRed p-3 px-5 pt-2 text-white
               rounded-full  hover:bg-red-400">Get Started </button>
          </div>
          
        </div>

         <div style={{height:"150px" , width: "150px"}} ></div>
         <img src={logo} alt="" />
        </div>

       </section>
    );
}

export default HeroSection;