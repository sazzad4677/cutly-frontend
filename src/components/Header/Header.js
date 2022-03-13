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
          <img src={Logo} className="h-8 flex-grow-0" alt="Logo" />
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
