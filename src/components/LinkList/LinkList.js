import React, { useState } from "react";

const LinkList = ({ link }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async (linkToCopy) => {
    try {
      const siteLink = `https://cutly.netlify.app/${linkToCopy}`;
      await navigator.clipboard.writeText(siteLink);
      setCopied(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="relative mt-3 flex w-full flex-col items-center gap-y-4 gap-x-6 rounded-md bg-white py-6 px-6 font-mono text-base md:flex-row">
        <p className="after:content w-full truncate break-words after:absolute after:left-0 after:block after:h-2 after:w-full after:border-b md:after:hidden">
          {link.data?.url?.fullUrl}
        </p>
        <div className="flex w-full flex-col items-center justify-end gap-x-6 gap-y-4 md:flex-row md:items-center">
          <a
            href={`/`}
            className="block w-full break-words text-primary-cyan hover:underline md:w-auto"
          >
            {link.data?.url?.shortUrl}
          </a>
          <button
            onClick={() => handleCopyLink(link.data?.url?.shortUrl)}
            className={`h-full w-full whitespace-nowrap rounded-lg  px-10 py-3 text-base font-bold text-white transition duration-500 ease-in-out hover:brightness-110 sm:w-auto md:mt-6 lg:mt-0 ${
              !copied ? "bg-primary-cyan" : "bg-primary-violet"
            }`}
            title="Copy URL to clipboard"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      </div>
    </>
  );
};

export default LinkList;
