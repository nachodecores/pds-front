import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Auction from "./components/Auction";
import Catalogue from "./components/Catalogue";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/remate" element={<Auction />} />
        <Route path="/catalogo" element={<Catalogue />} />
      </Routes>
    </div>
  );
}
