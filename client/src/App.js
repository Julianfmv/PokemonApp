import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import "./App.css";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Detail/:id" element={<Detail />} />
      <Route path="/Form" element={<Form />} />
    </Routes>
  );
}

export default App;
