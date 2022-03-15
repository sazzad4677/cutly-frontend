import React from "react";
import Brand from "../../images/icon-brand-recognition.svg";
import Records from "../../images/icon-detailed-records.svg";
import Customize from "../../images/icon-fully-customizable.svg";

const Statistics = () => {
  return (
    <div className="bg-neutral-bg ">
      <div className="pb-20 md:container md:px-16 md:pb-10">
        <div className="text-center font-mono md:px-6 md:pt-12 xl:px-0">
          <h2 className="mb-3 text-3xl font-bold tracking-normal md:text-4xl">
            Advanced Statistic
          </h2>
          <p className="mx-auto px-6 leading-relaxed text-neutral-grayish-violet sm:w-11/12 md:w-7/12 lg:w-1/3 lg:px-0">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="relative mt-0 flex flex-col gap-x-10 px-8 text-center md:flex-row md:px-0 md:text-left">
          <div className="absolute top-[35rem] left-1/2 z-10 mx-auto h-[45rem] w-3 -translate-x-1/2 -translate-y-1/2 bg-primary-cyan sm:top-[28rem] md:top-56 md:h-3 md:w-full" />
          <div className="relative z-20 my-10 flex max-w-md flex-col items-center rounded-lg bg-white p-6 pt-0 md:my-20 md:items-start">
            <div className="relative -top-10 w-fit rounded-full bg-primary-violet p-6">
              <img src={Brand} alt="Brand Logo" />
            </div>
            <div>
              <h2 className="font-mono text-xl font-bold text-neutral-dark-violet">
                Brand Recognition
              </h2>
              <p className="mt-2 font-mono leading-relaxed  text-neutral-gray">
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
          </div>
          {/* Detailed Records */}
          <div className="relative top-10 z-20 my-10 flex max-w-md flex-col items-center rounded-lg bg-white p-6 pt-0 md:my-20 md:items-start">
            <div className="relative -top-10 w-fit rounded-full bg-primary-violet p-6">
              <img src={Records} alt="Records Logo" />
            </div>
            <div>
              <h2 className="font-mono text-xl font-bold text-neutral-dark-violet">
                Detailed Records
              </h2>
              <p className="mt-2 font-mono leading-relaxed  text-neutral-gray">
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
          </div>
          {/* Fully Customizable */}
          <div className="relative top-20 z-20 my-10 flex max-w-md flex-col items-center rounded-lg bg-white p-6 pt-0 md:my-20 md:items-start">
            <div className="relative -top-10 w-fit rounded-full bg-primary-violet p-6">
              <img src={Customize} alt="Customize Logo" />
            </div>
            <div>
              <h2 className="font-mono text-xl font-bold text-neutral-dark-violet">
                Fully Customizable
              </h2>
              <p className="mt-2 font-mono leading-relaxed  text-neutral-gray">
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
