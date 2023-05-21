import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Auction from "./components/Auction";
import Catalogue from "./components/Catalogue";
import HerdDetail from "./components/HerdDetail";
import Terms from "./components/Terms";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/remate" element={<Auction />} />
        <Route path="/catalogo" element={<Catalogue />} />
        <Route path="/catalogo/:id" element={<HerdDetail />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </div>
  );
}
