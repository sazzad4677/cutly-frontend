import React from "react";

const MobileNav = ({ mobileNavOpen }) => {
    return (
        <>
            {mobileNavOpen && (
                <div className="absolute inset-x-0 mx-0 h-auto flex justify-center lg:hidden z-20 ">
                    <nav className="w-10/12 sm:6/12 pb-4 h-auto bg-neutral-dark-violet rounded-lg transition-all">
                        <ul className="text-center font-mono text-white font-semibold text-lg tracking-wide">
                            {["Features", "Pricing", "Resources"].map((values, key) => (
                                <li className="my-6 " key={key}>
                                    <a href="/">{values}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="w-10/12 bg-white border-t-[0.5px] mx-auto opacity-25"></div>
                        <div className="flex flex-col px-4 font-semibold text-lg font-mono">
                            <button className="rounded-full my-2 block h-11 w-auto mx-4 text-white font-semibold">
                                Login
                            </button>
                            <button className="rounded-full my-2 block h-11 w-auto mx-4 bg-primary-cyan text-white font-semibold hover:bg-opacity-20 transition duration-500 ease-in-out">
                                Sign Up
                            </button>
                        </div>
                    </nav>
                </div>
            )}
        </>
    );
};