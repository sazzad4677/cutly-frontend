import React from "react";
import Footer from "../components/Footer/Footer";
import Cta from "../components/Cta/Cta";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import InputField from "../components/InputSection/InputField";
import LinkList from "../components/LinkList/LinkList";
import Statistics from "../components/Statistics/Statistics";
import { useLocalStorage } from "../hooks/useLocalStorage";

const MainPage = () => {
  const [link, setLink] = useLocalStorage("ShortLinks", []);
  return (
    <div>
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
      <Footer />
    </div>
  );
};

export default MainPage;
