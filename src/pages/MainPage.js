import React from "react";
import Cta from "../components/Cta/Cta";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import InputField from "../components/InputSection/InputField";
import LinkList from "../components/LinkList/LinkList";
import Statistics from "../components/Statistics/Statistics";
import { useLocalStorage } from "../hooks/useLocalStorage";

const MainPage = () => {
  const [link, setLink] = useLocalStorage("ShortLinks", []);
  return (
    <>
      <main>
        <Header />
        <Hero />
        <div className="bg-neutral-bg">
          <InputField link={link} setLink={setLink} />
          {link.length && (
            <div className="container relative -top-12 mx-auto px-10 md:container md:px-16">
              {link?.map((value, key) => (
                <LinkList link={value} key={key} />
              ))}
            </div>
          )}
        </div>
        <Statistics />
        <Cta />
      </main>
      <Footer />
      {/* Attribution */}
      <div
        role="contentinfo"
        className="attribution bg-neutral-bg p-3 text-center font-mono text-neutral-dark-violet"
      >
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          className="text-primary-cyan underline"
          rel="noreferrer"
          title="Logo"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://github.com/sazzad4677/"
          target="_blank"
          className="text-primary-cyan underline"
          rel="noreferrer"
          title="Logo"
        >
          Sazzad
        </a>
        .
      </div>
    </>
  );
};

export default MainPage;
