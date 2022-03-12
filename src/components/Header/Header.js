import React, { useState } from "react";
import Logo from "../../images/logo.svg";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <>
      <header className="container px-6 lg:px-0 w-full h-24 flex items-center justify-between font-mono">
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
