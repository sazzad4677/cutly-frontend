import "./App.css";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="App">
      <MainPage />
      {/* Attribution */}
      <div className="attribution bg-neutral-bg p-3 text-center font-mono text-neutral-dark-violet">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          className="text-primary-cyan underline"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://github.com/sazzad4677/"
          target="_blank"
          className="text-primary-cyan underline"
          rel="noreferrer"
        >
          Sazzad
        </a>
        .
      </div>
    </div>
  );
}

export default App;
