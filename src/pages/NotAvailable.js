import React from "react";

const NotAvailable = () => {
  return (
    <section className="bg-white px-[40px] font-mono">
      <div className="container">
        <div className="text-center">
          <div className="four_zero_four_bg bg-no-repeat">
            <h1 className="text-center text-[80px]">404</h1>
          </div>
          <div className=" top-[-50px]">
            <h3 className="h2 text-[80px]">Look like you're lost</h3>
            <p>the page you are looking for not avaible!</p>
            <a
              href="/"
              className="my-20 mx-0 inline-block rounded-full bg-primary-cyan px-20 py-2 text-white"
            >
              Go to Home
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotAvailable;
