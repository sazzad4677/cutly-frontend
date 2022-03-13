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
            <a href="#" className="text-neutral-gray hover:text-primary-cyan">
              Link Shorting
            </a>
            <a href="#" className="text-neutral-gray hover:text-primary-cyan">
              Brand Links
            </a>
            <a href="#" className="text-neutral-gray hover:text-primary-cyan">
              Analytics
            </a>
          </div>
          {/* Second Column */}
          <div className="flex flex-col gap-y-2">
            <h2 className="mb-4 font-bold tracking-tight text-white">
              Resources
            </h2>
            <a href="#" className="text-neutral-gray  hover:text-primary-cyan">
              Blog
            </a>
            <a href="#" className="text-neutral-gray  hover:text-primary-cyan">
              Developers
            </a>
            <a href="#" className="text-neutral-gray  hover:text-primary-cyan">
              Support
            </a>
          </div>
          <section className="flex flex-col gap-y-2">
            <h2 className="mb-4 font-bold tracking-tight text-white">
              Company
            </h2>
            <a href="#" className="text-neutral-gray  hover:text-primary-cyan">
              About
            </a>
            <a href="#" className="text-neutral-gray  hover:text-primary-cyan">
              Our Team
            </a>
            <a href="#" className="text-neutral-gray  hover:text-primary-cyan">
              Careers
            </a>
            <a href="#" className="text-neutral-gray  hover:text-primary-cyan">
              Contact
            </a>
          </section>
        </div>
        <div className="mt-16 flex h-fit gap-x-5 md:mt-0">
          <a href="/">
            <GrFacebook className="h-6 w-6 text-white hover:text-primary-cyan" />
          </a>
          <a href="/">
            <GrInstagram className="h-6 w-6 text-white  hover:text-primary-cyan" />
          </a>
          <a href="/">
            <GrTwitter className="h-6 w-6 text-white  hover:text-primary-cyan" />
          </a>
          <a href="/">
            <GrPinterest className="h-6 w-6 text-white hover:text-primary-cyan" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
