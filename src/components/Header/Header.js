import React, { useState } from "react";
import Logo from "../../images/logo.svg";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <>
      <header className="container flex h-24 w-full items-center justify-between px-6 font-mono lg:px-16">
        <div className="logo">
        <a
            href="/"
            className="flex items-center justify-center text-[2.60rem] font-bold text-neutral-dark-violet md:justify-start"
            title="Site logo"
          >
            Cutly
          </a>
        </div>
        <Nav
          mobileNavOpen={mobileNavOpen}
          setMobileNavOpen={setMobileNavOpen}
        />
      </header>
      {mobileNavOpen && <MobileNav />}
    </>
  );
};

export default Header;
