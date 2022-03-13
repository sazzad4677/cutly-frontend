import React from "react";
import Illustration from "../../images/illustration-working.svg";

const Hero = () => {
  return (
    <div className="px-16 container">
      <div className="flex flex-col-reverse items-center lg:flex-row pb-36 px-6 bg-white md:pt-12 xl:px-0">
        <div className="w-full flex flex-col items-center px-2 mt-12 lg:mt-0 lg:px-0 lg:items-start">
          <h1 className="text-4xl font-mono font-bold text-neutral-dark-blue md:leading-[1.15] text-center md:text-7xl lg:text-left">
            More than just shorter links
          </h1>
          <p className="text-base text-neutral-grayish-violet text-center mt-4 px-2 md:px-0 md:w-4/5 md:text-xl md:leading-relaxed lg:w-11/12 lg:text-left lg:mt-0 font-mono">
            Build your brand’s recognition and get detailed <br /> insights on
            how your links are performing
          </p>
          <button className="bg-primary-cyan my-6 px-9 py-3 rounded-full text-white font-bold hover:bg-opacity-70 transition duration-500 ease-in-out">
            Get Started
          </button>
        </div>
        <div className="sm:w-full h-full overflow-hidden md:self-end">
          <img
            src={Illustration}
            alt="illustration"
            className="relative w-screen -right-28 sm:-right-56 lg:-right-8 lg:h-auto overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
