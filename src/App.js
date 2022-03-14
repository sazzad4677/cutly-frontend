import "./App.css";
import MainPage from "./pages/MainPage";
import { Routes, Route, Link } from "react-router-dom";
import HandleRedirect from "./pages/HandleRedirect";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:shortURL" element={<HandleRedirect />} />
      </Routes>
    </div>
  );
}

export default App;
