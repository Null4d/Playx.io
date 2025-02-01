import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../src/App";
import About from "../src/pages/AboutUs";
import Tournament from "../src/pages/Tournament";
import Pages from "../src/pages/Pages";
import News from "../src/pages/News";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/Tournament" element={<Tournament />} />
        <Route path="/Pages" element={<Pages />} />
        <Route path="/News" element={<News />} />
      </Routes>
    </Router>
  </React.StrictMode>
);