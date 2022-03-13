import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import InputField from "./components/InputSection/InputField";
import Statistics from "./components/Statistics/Statistics";
import BgBoost from "./images/bg-boost-desktop.svg";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <InputField />
      <Statistics />
      <section
        style={{
          backgroundImage: `url(${BgBoost})`,
        }}
        className="bg-primary-violet bg-cover bg-center py-16 text-center font-mono"
      >
        <h1 className="text-3xl font-bold text-white md:text-4xl">
          Boost Your Links Today
        </h1>
        <button className="getStartedButton">Get Started</button>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
