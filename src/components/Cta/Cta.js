import React from "react";
import BgBoost from "../../images/bg-boost-desktop.svg";

const GetURLBoost = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${BgBoost})`,
      }}
      className="bg-primary-violet bg-cover bg-center py-16 text-center font-mono"
    >
      <p className="text-3xl font-bold text-white md:text-4xl">
        Boost Your Links Today
      </p>
      <button className="getStartedButton" title="Get Started">
        Get Started
      </button>
    </section>
  );
};

export default GetURLBoost;
