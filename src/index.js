import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../src/App";
import About from "../src/pages/AboutUs";
import Tournament from "../src/pages/Tournament";
import Pages from "../src/pages/Pages";
import PagesShop from "../src/pages/PagesShop";
import News from "../src/pages/News";
import NewsBlog from "../src/pages/NewsBlog";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/Tournament" element={<Tournament />} />
        <Route path="/Pages" element={<Pages />} />
        <Route path="/PagesShop" element={<PagesShop />} />
        <Route path="/News" element={<News />} />
        <Route path="/NewsBlog" element={<NewsBlog />} />
      </Routes>
    </Router>
  </React.StrictMode>
);