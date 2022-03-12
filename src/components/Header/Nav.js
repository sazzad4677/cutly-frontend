import React from "react";

const Nav = ({ setMobileNavOpen }) => {
  return (
    <nav className="flex h-full items-center justify-end lg:justify-between flex-grow">
      <ul className="ml-10 hidden lg:flex">
        {["Features", "Pricing", "Resources"].map((values, key) => (
          <li key={key}>
            <a
              href="/"
              className="text-neutral-grayish-violet font-semibold mx-3 hover:text-neutral-dark-violet"
            >
              {values}
            </a>
          </li>
        ))}
      </ul>
      <div className="hidden lg:inline-block">
        <button className="rounded-full h-10 w-20 mx-4  font-semibold text-neutral-grayish-violet hover:text-neutral-dark-violet">
          Login
        </button>
        <button className="rounded-full h-11 w-28 mx-4 bg-primary-cyan text-white hover:bg-opacity-40 transition duration-500 ease-in-out">
          Sign Up
        </button>
      </div>
      <button
        className="lg:hidden"
        onClick={() => setMobileNavOpen((prev) => !prev)}
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
