import React from "react";
import Illustration from "../../images/illustration-working.svg";

const Hero = () => {
  return (
    <div className="md:container md:px-0 lg:px-16">
      <div className="flex flex-col-reverse items-center bg-white pb-36 md:px-6 md:pt-12 lg:flex-row xl:px-0">
        <div className="mt-12 flex w-full flex-col items-center px-2 lg:mt-0 lg:items-start lg:px-0">
          <h1 className="text-center font-mono text-4xl font-bold text-neutral-dark-blue md:text-7xl md:leading-[1.15] lg:text-left">
            More than just shorter links
          </h1>
          <p className="mt-4 px-2 text-center font-mono text-base text-neutral-grayish-violet md:w-4/5 md:px-0 md:text-xl md:leading-relaxed lg:mt-0 lg:w-11/12 lg:text-left">
            Build your brand’s recognition and get detailed insights on how your
            links are performing
          </p>
          <button className="getStartedButton">
            Get Started
          </button>
        </div>
        <div className="h-full overflow-hidden sm:w-full md:self-end">
          <img
            src={Illustration}
            alt="illustration"
            className="relative -right-28 w-screen overflow-hidden sm:-right-56 lg:-right-8 lg:h-auto md:-right-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
