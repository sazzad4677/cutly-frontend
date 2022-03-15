import "./App.css";
import MainPage from "./pages/MainPage";
import { Routes, Route, Link } from "react-router-dom";
import HandleRedirect from "./pages/HandleRedirect";
import NotAvailable from "./pages/NotAvailable";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:shortURL" element={<HandleRedirect />} />
        <Route path="*" element={<NotAvailable />} />
      </Routes>
    </div>
  );
}

export default App;
