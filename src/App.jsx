import { Routes, Route } from "react-router-dom";

import Home from "./components/main/Home";
import Organismos from "./components/organismos/Organismos";
import Control from "./components/control/Control";
import Login from "./components/login/Login";
import ErrorPage from "./components/ErrorPage";
import "./App.css";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/organismos" element={<Organismos />} />
        <Route path="/control" element={<Control />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
