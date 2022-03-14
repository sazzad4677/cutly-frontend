import React from "react";

const LinkList = () => {
  return (
    <div className="bg-neutral-bg">
      <div className="container relative -top-12 mx-auto px-10  md:container md:px-16">
        <div className="relative flex w-full flex-col items-center gap-y-4 gap-x-6 rounded-md bg-white py-6 px-4 font-mono text-lg md:flex-row">
          <p className="after:content w-full break-words after:absolute after:left-0 after:block after:h-2 after:w-full after:border-b md:after:hidden">
            https://github.com/
          </p>
          <div className="flex w-full flex-col items-center justify-end gap-x-6 gap-y-4 md:flex-row md:items-center">
            <a
              href="/url"
              className="block w-full break-words text-primary-cyan hover:underline md:w-auto"
            >
              https://github.com/
            </a>
            <button className="h-full w-full whitespace-nowrap rounded-lg bg-primary-cyan px-10 py-3 text-base font-bold text-white transition duration-500 ease-in-out hover:brightness-110 sm:w-auto md:mt-6 lg:mt-0">
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkList;
