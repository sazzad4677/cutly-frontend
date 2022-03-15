import React from "react";

const Loader = () => {
  let circleCommonClasses = "h-2.5 w-2.5 bg-primary-cyan rounded-full";
  return (
    <section className="fixed top-0 left-0 right-0 bottom-0 z-50 flex h-screen w-full items-center justify-center overflow-hidden">
      <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
      <div className={`${circleCommonClasses} mr-1 animate-bounce200`}></div>
      <div className={`${circleCommonClasses} animate-bounce400`}></div>
    </section>
  );
};

export default Loader;
