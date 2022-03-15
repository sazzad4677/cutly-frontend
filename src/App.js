import { Route, Routes } from "react-router-dom";
import "./App.css";
import HandleRedirect from "./pages/HandleRedirect";
import MainPage from "./pages/MainPage";
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
