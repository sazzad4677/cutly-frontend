import React from "react";
import {
  GrFacebook,
  GrInstagram,
  GrPinterest,
  GrTwitter,
} from "react-icons/gr";
const Footer = () => {
  return (
    <footer className="bg-neutral-dark-violet">
      <div className="container mx-auto flex flex-col flex-wrap items-center justify-between py-16 font-mono md:flex-row md:items-center md:px-16 lg:items-start">
        <div className="mx-auto mb-10 text-center md:mx-0 md:text-left">
          <a
            href="/"
            className="flex items-center justify-center text-4xl font-bold text-white md:justify-start"
            aria-label="logo"
          >
            Shortly
          </a>
        </div>
        <div className="flex flex-col flex-wrap gap-x-24 gap-y-16 whitespace-nowrap text-center sm:flex-row sm:text-left lg:flex-nowrap">
          {/* First Column */}
          <div className="flex flex-col gap-y-2">
            <h2 className="mb-4 font-bold tracking-tight text-white">
              Features
            </h2>
            <a href="/" className="text-neutral-gray hover:text-primary-cyan" aria-label="Link shorting">
              Link Shorting
            </a>
            <a href="/" className="text-neutral-gray hover:text-primary-cyan" aria-label="brand Link">
              Brand Links
            </a>
            <a href="/" className="text-neutral-gray hover:text-primary-cyan" aria-label="Analytics">
              Analytics
            </a>
          </div>
          {/* Second Column */}
          <div className="flex flex-col gap-y-2">
            <h2 className="mb-4 font-bold tracking-tight text-white">
              Resources
            </h2>
            <a href="/" className="text-neutral-gray  hover:text-primary-cyan" aria-label="Blog">
              Blog
            </a>
            <a href="/" className="text-neutral-gray  hover:text-primary-cyan" aria-label="Developers">
              Developers
            </a>
            <a href="/" className="text-neutral-gray  hover:text-primary-cyan" aria-label="Support">
              Support
            </a>
          </div>
          <div className="flex flex-col gap-y-2">
            <h2 className="mb-4 font-bold tracking-tight text-white">
              Company
            </h2>
            <a href="/" className="text-neutral-gray  hover:text-primary-cyan" aria-label="About">
              About
            </a>
            <a href="/" className="text-neutral-gray  hover:text-primary-cyan" aria-label="Our Team">
              Our Team
            </a>
            <a href="/" className="text-neutral-gray  hover:text-primary-cyan" aria-label="Careers">
              Careers
            </a>
            <a href="/" className="text-neutral-gray  hover:text-primary-cyan" aria-label="Contact" >
              Contact
            </a>
          </div>
        </div>
        <div className="mt-16 flex h-fit gap-x-5 md:mt-0">
          <a href="/" aria-label="Facebook">
            <GrFacebook className="h-6 w-6 text-white hover:text-primary-cyan" />
          </a>
          <a href="/" aria-label="Instagram">
            <GrInstagram className="h-6 w-6 text-white  hover:text-primary-cyan" />
          </a>
          <a href="/" aria-label="Twitter">
            <GrTwitter className="h-6 w-6 text-white  hover:text-primary-cyan" />
          </a>
          <a href="/" aria-label="Pinterest">
            <GrPinterest className="h-6 w-6 text-white hover:text-primary-cyan" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
