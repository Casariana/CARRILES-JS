import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Organismos from "./components/Organismos";
import DashBoard from "./components/Dashboard";
import Login from "./components/Login";
import ErrorPage from "./components/ErrorPage";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/organismos" element={<Organismos />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
