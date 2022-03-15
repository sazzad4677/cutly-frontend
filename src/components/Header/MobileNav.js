import React from "react";

const MobileNav = () => {
  return (
    <div className="absolute inset-x-0 z-20 mx-0 flex h-auto justify-center lg:hidden ">
      <nav className="sm:6/12 h-auto w-10/12 rounded-lg bg-neutral-dark-violet pb-4 transition-all">
        <ul className="text-center font-mono text-lg font-semibold tracking-wide text-white">
          {["Features", "Pricing", "Resources"].map((values, key) => (
            <li className="my-6 " key={key}>
              <a href="/" title={values}>
                {values}
              </a>
            </li>
          ))}
        </ul>
        <div className="mx-auto w-10/12 border-t-[0.5px] bg-white opacity-25"></div>
        <div className="flex flex-col px-4 font-mono text-lg font-semibold">
          <button
            className="my-2 mx-4 block h-11 w-auto rounded-full font-semibold text-white"
            title="login"
          >
            Login
          </button>
          <button
            className="my-2 mx-4 block h-11 w-auto rounded-full bg-primary-cyan font-semibold text-white transition duration-500 ease-in-out hover:bg-opacity-20"
            title="register"
          >
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;
