import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../src/App";
import About from "../src/pages/AboutUs";
import Tournament from "../src/pages/Tournament";


const root = ReactDOM.createRoot(document.getElementById("root")); 
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/Tournament" element={<Tournament />} />
      </Routes>
    </Router>
  </React.StrictMode>
);