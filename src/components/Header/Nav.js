import React from "react";

const Nav = ({ setMobileNavOpen }) => {
  return (
    <nav className="flex h-full flex-grow items-center justify-end lg:justify-between">
      <ul className="ml-10 hidden lg:flex">
        {["Features", "Pricing", "Resources"].map((values, key) => (
          <li key={key}>
            <a
              href="/"
              className="mx-3 font-semibold text-neutral-grayish-violet hover:text-neutral-dark-violet"
            >
              {values}
            </a>
          </li>
        ))}
      </ul>
      <div className="hidden lg:inline-block">
        <button
          className="mx-4 h-10 w-20 rounded-full  font-semibold text-neutral-grayish-violet hover:text-neutral-dark-violet"
          title="Login"
        >
          Login
        </button>
        <button
          className="mx-4 h-11 w-28 rounded-full bg-primary-cyan text-white transition duration-500 ease-in-out hover:bg-opacity-40"
          title="Register"
        >
          Sign Up
        </button>
      </div>
      <button
        className="lg:hidden"
        onClick={() => setMobileNavOpen((prev) => !prev)}
        title="navigation"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-neutral-dark-blue"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {}
    </nav>
  );
};

export default Nav;
